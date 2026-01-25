import { BrowserQRCodeReader } from '@zxing/browser';
import React, { useState, useEffect, useRef } from 'react';

const QrCodeScanner = () => {
    const codeReader = useRef(new BrowserQRCodeReader());
    const videoRef = useRef(null);
    const [result, setResult] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [selectedDevice, setSelectedDevice] = useState('');
    const [devices, setDevices] = useState([]);
    const [uploadedImage, setUploadedImage] = useState(null);
    const streamRef = useRef(null);

    // Camera device handling
    useEffect(() => {
        const getDevices = async () => {
            try {
                const videoInputDevices = await BrowserQRCodeReader.listVideoInputDevices();
                if (videoInputDevices.length === 0) {
                    setError('No camera devices found');
                    setIsLoading(false);
                    return;
                }
                setDevices(videoInputDevices);
                setSelectedDevice(videoInputDevices[0].deviceId);
            } catch (err) {
                handleCameraError(err);
            }

            const handleCameraError = (error) => {
                console.error('Camera error:', error);
                setError(`Camera access denied. Please:
        1. Allow camera permissions
        2. Ensure site is loaded via HTTPS
        3. Check camera availability`);
                setIsLoading(false);
            };

            if (navigator.mediaDevices) {
                navigator.mediaDevices.getUserMedia({ video: true })
                    .then((stream) => {
                        streamRef.current = stream; // Store the stream for cleanup
                        getDevices();
                    })
                    .catch(handleCameraError);
            } else {
                setError('Camera API not supported in this browser');
                setIsLoading(false);
            }
        };

        getDevices();
        return () => {
            if (streamRef.current) {
                streamRef.current.getTracks().forEach(track => track.stop());
                streamRef.current = null;
            }
        };
    }, []);

    // Camera scanning
    useEffect(() => {
        if (!selectedDevice || !videoRef.current) return;

        const startScanning = async () => {
            try {
                setIsLoading(true);
                setError('');
                await codeReader.current.decodeFromVideoDevice(
                    selectedDevice,
                    videoRef.current,
                    (result, error) => {
                        if (result) setResult(result.getText());
                        if (error && error.name !== 'NotFoundException') {
                            console.error('Scan error:', error);
                        }
                    }
                );
                setIsLoading(false);
            } catch (err) {
                setError(`Failed to start video stream: ${err.message}`);
                setIsLoading(false);
            }
        };

        startScanning();

        // Cleanup function
        return () => {
            if (streamRef.current) {
                streamRef.current.getTracks().forEach(track => track.stop());
                streamRef.current = null;
            }
            codeReader.current = new BrowserQRCodeReader();
        };
    }, [selectedDevice]);

    // Image handling
    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setError('');
        setResult('');
        setUploadedImage(null);

        try {
            // Validate file
            if (!file.type.startsWith('image/')) {
                throw new Error('Invalid file format');
            }

            // Create a URL for the uploaded image
            const imgUrl = URL.createObjectURL(file);
            setUploadedImage(imgUrl);

            // Load the image into an <img> element
            const img = new Image();
            img.src = imgUrl;

            // Wait for the image to load
            await new Promise((resolve, reject) => {
                img.onload = resolve;
                img.onerror = () => reject(new Error('Failed to load image'));
            });

            // Validate image dimensions
            if (img.width < 100 || img.height < 100) {
                throw new Error('Image too small (min 100x100px)');
            }

            // Decode the QR code from the image element
            const result = await codeReader.current.decodeFromImageElement(img);
            if (result) {
                setResult(result.getText());
            } else {
                throw new Error('No QR code found in the image');
            }
        } catch (err) {
            console.error('Scan error:', err);
            handleScanError(err);
        }
    };

    const handleScanError = (error) => {
        let message = 'QR Code detection failed: ';
        switch (error.message) {
            case 'Invalid file format':
                message += 'Supported formats: PNG, JPG, JPEG, WEBP';
                break;
            case 'Image too small (min 100x100px)':
                message += 'Image dimensions too small (minimum 100x100 pixels)';
                break;
            default:
                message += 'No readable QR code found';
        }

        setError(message);
    };

    const restartScanner = () => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
        }
        setResult('');
        setError('');
        setIsLoading(true);
    };

    return (
        <div className="min-h-screen p-5">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-4xl font-bold my-14 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    QR Code Scanner
                </h2>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-gray-700">
                    <div className="space-y-4">
                        {devices.length > 0 && (
                            <select
                                value={selectedDevice}
                                onChange={(e) => setSelectedDevice(e.target.value)}
                                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white mb-4"
                            >
                                {devices.map((device) => (
                                    <option key={device.deviceId} value={device.deviceId}>
                                        {device.label || `Camera ${device.deviceId.slice(0, 5)}`}
                                    </option>
                                ))}
                            </select>
                        )}

                        <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                            {isLoading && !error && (
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                    <span className="animate-pulse">Initializing camera...</span>
                                </div>
                            )}
                            <video
                                ref={videoRef}
                                className="w-full h-full object-cover"
                                muted
                                playsInline
                            />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <label className="flex-1 bg-gray-700/50 hover:bg-gray-600/80 border border-gray-600 px-4 py-2 rounded-lg cursor-pointer text-center transition-colors">
                                📁 Upload Image (PNG/JPG/WEBP)
                                <input
                                    type="file"
                                    accept=".png,.jpg,.jpeg,.webp"
                                    onChange={handleFileUpload}
                                    className="hidden"
                                />
                            </label>
                            <button
                                onClick={restartScanner}
                                className="flex-1 bg-blue-600/80 hover:bg-blue-500/90 px-4 py-2 rounded-lg text-white transition-colors"
                            >
                                🔄 Restart Scanner
                            </button>
                        </div>

                        {uploadedImage && (
                            <div className="mt-4 text-center">
                                <h3 className="text-gray-300 mb-2">Upload Preview</h3>
                                <img
                                    src={uploadedImage}
                                    alt="Uploaded QR Code"
                                    className="mx-auto max-w-full h-48 object-contain rounded-lg border border-gray-600"
                                />
                                <p className="text-sm text-gray-400 mt-2">
                                    Ensure QR code is clear and fills 30-70% of the image
                                </p>
                            </div>
                        )}

                        {error && (
                            <div className="bg-red-900/50 border border-red-800 rounded-xl p-4 text-red-200 space-y-2">
                                <h3 className="font-semibold">Scanning Error</h3>
                                <p>{error}</p>
                                <ul className="mt-2 text-sm list-disc pl-4">
                                    <li>Use high-contrast colors (black/white recommended)</li>
                                    <li>Ensure QR code is not blurry or distorted</li>
                                    <li>Check minimum size requirements</li>
                                    <li>Avoid complex backgrounds</li>
                                </ul>
                                <button
                                    onClick={() => document.querySelector('input[type="file"]').click()}
                                    className="mt-4 bg-blue-600/80 hover:bg-blue-500/90 px-4 py-2 rounded-lg text-white w-full transition-colors"
                                >
                                    Try Different Image
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {result && (
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 mb-8">
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-gray-200">Scan Result:</h3>
                            <div className="break-words p-4 bg-gray-700 rounded-lg text-gray-100 font-mono">
                                {result}
                            </div>
                            <button
                                onClick={() => navigator.clipboard.writeText(result)}
                                className="bg-green-600/80 hover:bg-green-500/90 px-4 py-2 rounded-lg text-white w-full transition-colors"
                            >
                                📋 Copy to Clipboard
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default QrCodeScanner; 
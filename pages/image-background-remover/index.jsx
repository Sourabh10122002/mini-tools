import React, { useState } from 'react';

const ImageBackgroundRemover = () => {
    const [image, setImage] = useState(null);
    const [processedImage, setProcessedImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [fileName, setFileName] = useState('No file chosen');
    const [error, setError] = useState('');

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Validate file type
            if (!file.type.startsWith('image/')) {
                setError('Please upload a valid image file (e.g., JPEG, PNG).');
                setFileName('No file chosen');
                setImage(null);
                return;
            }

            // Validate file size (e.g., 5MB limit)
            const maxSize = 5 * 1024 * 1024; // 5MB
            if (file.size > maxSize) {
                setError('File size must be less than 5MB.');
                setFileName('No file chosen');
                setImage(null);
                return;
            }

            // Clear any previous errors
            setError('');

            // Update the file name
            setFileName(file.name);

            // Read the file and set the image
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const removeBackground = async () => {
        if (!image) return;

        setLoading(true);

        // Example: Using a third-party API like Remove.bg
        const formData = new FormData();
        formData.append('image_file', dataURItoBlob(image));

        try {
            const response = await fetch('https://api.remove.bg/v1.0/removebg', {
                method: 'POST',
                headers: {
                    'X-Api-Key': process.env.REACT_APP_IMAGE_BG_REMOVER_API_KEY, // Replace with your actual API key
                },
                body: formData,
            });

            if (response.ok) {
                const blob = await response.blob();
                const url = URL.createObjectURL(blob);
                setProcessedImage(url);
            } else {
                console.error('Failed to remove background');
                setError('Failed to remove background. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const dataURItoBlob = (dataURI) => {
        const byteString = atob(dataURI.split(',')[1]);
        const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], { type: mimeString });
    };

    const handleDownload = () => {
        if (!processedImage) return;

        // Create a temporary anchor element to trigger the download
        const link = document.createElement('a');
        link.href = processedImage;
        link.download = 'processed-image.png'; // Default filename for the downloaded image
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-white">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold my-14 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Image Background Remover</h1>
                <div className="flex flex-col items-center mb-8">
                    <div className="relative w-full max-w-md">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            id="file-upload"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <label
                            htmlFor="file-upload"
                            className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md cursor-pointer"
                        >
                            <span className="text-gray-600 truncate mr-2">
                                {fileName}
                            </span>
                            <span className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                                Choose File
                            </span>
                        </label>
                    </div>
                    {/* Error Message */}
                    {error && (
                        <p className="text-red-500 text-sm mt-2">{error}</p>
                    )}
                    <button
                        onClick={removeBackground}
                        disabled={!image || loading}
                        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Processing...' : 'Remove Background'}
                    </button>
                </div>
                {image && (
                    <div className="flex flex-col md:flex-row gap-8 mb-8">
                        <div className="flex-1">
                            <h2 className="text-xl font-semibold mb-4 text-center">Original Image</h2>
                            <img
                                src={image}
                                alt="Original"
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>
                        {processedImage && (
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold mb-4 text-center">Processed Image</h2>
                                <img
                                    src={processedImage}
                                    alt="Processed"
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                                <div className="flex justify-center mt-4">
                                    <button
                                        onClick={handleDownload}
                                        className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
                                    >
                                        Download Processed Image
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImageBackgroundRemover;
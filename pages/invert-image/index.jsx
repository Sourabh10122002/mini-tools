import React, { useState, useEffect } from 'react';

const InvertImage = () => {
    const [image, setImage] = useState(null);
    const [editedImageUrl, setEditedImageUrl] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [flipHorizontal, setFlipHorizontal] = useState(false);
    const [flipVertical, setFlipVertical] = useState(false);
    const [filter, setFilter] = useState('none');
    const [brightness, setBrightness] = useState(100);
    const [contrast, setContrast] = useState(100);
    const [saturation, setSaturation] = useState(100);
    const [blur, setBlur] = useState(0);
    const [sharpen, setSharpen] = useState(0);
    const [rotate, setRotate] = useState(0);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Validate file type
            if (!file.type.startsWith('image/')) {
                setError('Please upload a valid image file (e.g., JPEG, PNG).');
                return;
            }

            // Clear any previous errors
            setError('');

            // Read the file and set the image
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const applyFilters = (ctx, canvas) => {
        // Apply brightness, contrast, and saturation
        ctx.filter = `
            brightness(${brightness}%)
            contrast(${contrast}%)
            saturate(${saturation}%)
            blur(${blur}px)
            ${sharpen > 0 ? `contrast(${100 + sharpen}%)` : ''}
        `;

        // Apply flip transformations
        ctx.translate(flipHorizontal ? canvas.width : 0, flipVertical ? canvas.height : 0);
        ctx.scale(flipHorizontal ? -1 : 1, flipVertical ? -1 : 1);

        // Apply rotation
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate((rotate * Math.PI) / 180);
        ctx.translate(-canvas.width / 2, -canvas.height / 2);
    };

    useEffect(() => {
        if (!image) return;

        setLoading(true);

        // Create an image element
        const img = new Image();
        img.src = image;

        img.onload = () => {
            // Create a canvas element
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            // Set canvas dimensions to match the image
            canvas.width = img.width;
            canvas.height = img.height;

            // Apply filters and transformations
            applyFilters(ctx, canvas);

            // Draw the image on the canvas
            ctx.drawImage(img, 0, 0);

            // Get the image data
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;

            // Apply additional filters
            switch (filter) {
                case 'invert':
                    // Invert colors
                    for (let i = 0; i < data.length; i += 4) {
                        data[i] = 255 - data[i]; // Red
                        data[i + 1] = 255 - data[i + 1]; // Green
                        data[i + 2] = 255 - data[i + 2]; // Blue
                    }
                    break;
                case 'grayscale':
                    // Convert to grayscale
                    for (let i = 0; i < data.length; i += 4) {
                        const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
                        data[i] = avg; // Red
                        data[i + 1] = avg; // Green
                        data[i + 2] = avg; // Blue
                    }
                    break;
                case 'sepia':
                    // Apply sepia filter
                    for (let i = 0; i < data.length; i += 4) {
                        const r = data[i];
                        const g = data[i + 1];
                        const b = data[i + 2];
                        data[i] = Math.min(255, (r * 0.393) + (g * 0.769) + (b * 0.189));
                        data[i + 1] = Math.min(255, (r * 0.349) + (g * 0.686) + (b * 0.168));
                        data[i + 2] = Math.min(255, (r * 0.272) + (g * 0.534) + (b * 0.131));
                    }
                    break;
                default:
                    // No filter
                    break;
            }

            // Put the edited image data back on the canvas
            ctx.putImageData(imageData, 0, 0);

            // Convert the canvas to a data URL
            const editedImage = canvas.toDataURL('image/png');
            setEditedImageUrl(editedImage);
            setLoading(false);
        };

        img.onerror = () => {
            setError('Failed to process the image. Please try again.');
            setLoading(false);
        };
    }, [image, flipHorizontal, flipVertical, filter, brightness, contrast, saturation, blur, sharpen, rotate]);

    const handleDownload = () => {
        if (!editedImageUrl) return;

        // Create a temporary anchor element to trigger the download
        const link = document.createElement('a');
        link.href = editedImageUrl;
        link.download = 'edited-image.png'; // Default filename for the edited image
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const resetTransformations = () => {
        setFlipHorizontal(false);
        setFlipVertical(false);
        setFilter('none');
        setBrightness(100);
        setContrast(100);
        setSaturation(100);
        setBlur(0);
        setSharpen(0);
        setRotate(0);
    };

    return (
        <div className="text-white min-h-screen p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold my-14 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Image Invert</h1>
                <div className="flex flex-col items-center mb-8">
                    {/* Custom File Input */}
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
                                {image ? 'Image uploaded' : 'No file chosen'}
                            </span>
                            <span className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                                Choose Image
                            </span>
                        </label>
                    </div>
                    {/* Error Message */}
                    {error && (
                        <p className="text-red-500 text-sm mt-2">{error}</p>
                    )}
                    {/* Transformation Options */}
                    <div className="mt-4 w-full max-w-md">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <label className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={flipHorizontal}
                                        onChange={() => setFlipHorizontal(!flipHorizontal)}
                                        className="form-checkbox h-5 w-5 text-blue-600"
                                    />
                                    <span>Flip Horizontal</span>
                                </label>
                                <label className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={flipVertical}
                                        onChange={() => setFlipVertical(!flipVertical)}
                                        className="form-checkbox h-5 w-5 text-blue-600"
                                    />
                                    <span>Flip Vertical</span>
                                </label>
                            </div>
                            <div className="flex items-center gap-4">
                                <label className="flex items-center gap-2">
                                    <span>Filter:</span>
                                    <select
                                        value={filter}
                                        onChange={(e) => setFilter(e.target.value)}
                                        className="p-2 bg-white text-gray-900 rounded-lg"
                                    >
                                        <option value="none">None</option>
                                        <option value="invert">Invert Colors</option>
                                        <option value="grayscale">Grayscale</option>
                                        <option value="sepia">Sepia</option>
                                    </select>
                                </label>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="flex items-center gap-2">
                                    <span>Brightness:</span>
                                    <input
                                        type="range"
                                        min="0"
                                        max="200"
                                        value={brightness}
                                        onChange={(e) => setBrightness(e.target.value)}
                                        className="w-full"
                                    />
                                    <span>{brightness}%</span>
                                </label>
                                <label className="flex items-center gap-2">
                                    <span>Contrast:</span>
                                    <input
                                        type="range"
                                        min="0"
                                        max="200"
                                        value={contrast}
                                        onChange={(e) => setContrast(e.target.value)}
                                        className="w-full"
                                    />
                                    <span>{contrast}%</span>
                                </label>
                                <label className="flex items-center gap-2">
                                    <span>Saturation:</span>
                                    <input
                                        type="range"
                                        min="0"
                                        max="200"
                                        value={saturation}
                                        onChange={(e) => setSaturation(e.target.value)}
                                        className="w-full"
                                    />
                                    <span>{saturation}%</span>
                                </label>
                                <label className="flex items-center gap-2">
                                    <span>Blur:</span>
                                    <input
                                        type="range"
                                        min="0"
                                        max="20"
                                        value={blur}
                                        onChange={(e) => setBlur(e.target.value)}
                                        className="w-full"
                                    />
                                    <span>{blur}px</span>
                                </label>
                                <label className="flex items-center gap-2">
                                    <span>Sharpen:</span>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={sharpen}
                                        onChange={(e) => setSharpen(e.target.value)}
                                        className="w-full"
                                    />
                                    <span>{sharpen}%</span>
                                </label>
                                <label className="flex items-center gap-2">
                                    <span>Rotate:</span>
                                    <select
                                        value={rotate}
                                        onChange={(e) => setRotate(Number(e.target.value))}
                                        className="p-2 bg-white text-gray-900 rounded-lg"
                                    >
                                        <option value="0">0°</option>
                                        <option value="90">90°</option>
                                        <option value="180">180°</option>
                                        <option value="270">270°</option>
                                    </select>
                                </label>
                            </div>
                            <button
                                onClick={resetTransformations}
                                className="mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
                            >
                                Reset Transformations
                            </button>
                        </div>
                    </div>
                </div>
                {(image || editedImageUrl) && (
                    <div className="flex flex-col md:flex-row gap-8 mb-8">
                        {image && (
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold mb-4 text-center">Original Image</h2>
                                <img
                                    src={image}
                                    alt="Original"
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                            </div>
                        )}
                        {editedImageUrl && (
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold mb-4 text-center">Edited Image</h2>
                                <img
                                    src={editedImageUrl}
                                    alt="Edited"
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                                <div className="flex justify-center mt-4">
                                    <button
                                        onClick={handleDownload}
                                        className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
                                    >
                                        Download Edited Image
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

export default InvertImage;
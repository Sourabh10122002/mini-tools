import React, { useState } from "react";

const ImageToFavicon = () => {
    const [faviconUrl, setFaviconUrl] = useState(null);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        setError("");
        setIsLoading(true);

        if (!file.type.startsWith("image/")) {
            setError("Please upload an image file");
            setIsLoading(false);
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.src = e.target.result;
            img.onload = () => {
                const canvas = document.createElement("canvas");
                canvas.width = 16;
                canvas.height = 16;
                const ctx = canvas.getContext("2d");

                try {
                    ctx.drawImage(img, 0, 0, 16, 16);
                    const faviconDataUrl = canvas.toDataURL("image/x-icon");
                    setFaviconUrl(faviconDataUrl);
                } catch (err) {
                    setError("Error processing image. Please try again.");
                } finally {
                    setIsLoading(false);
                }
            };
            img.onerror = () => {
                setError("Error loading image");
                setIsLoading(false);
            };
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <div className="max-w-md w-full p-6 bg-white rounded-xl shadow-md">
                <h1 className="text-3xl font-bold my-1 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Image to Favicon</h1>


                {/* File Upload Section */}
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-600">
                        Upload Image (PNG, JPG, SVG)
                    </label>
                    <div className="relative group">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                            id="favicon-upload"
                        />
                        <label
                            htmlFor="favicon-upload"
                            className="flex flex-col items-center justify-center h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer 
                                    hover:border-blue-500 transition-colors group-hover:shadow-md p-4 text-center"
                        >
                            <svg
                                className="w-12 h-12 text-gray-400 mb-3 group-hover:text-blue-500 transition-colors"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                            <p className="text-gray-500 text-sm">
                                Click to upload or drag and drop
                            </p>
                            <p className="text-gray-400 text-xs mt-1">
                                Recommended size: 16x16px (will be resized)
                            </p>
                        </label>
                    </div>
                </div>

                {/* Loading State */}
                {isLoading && (
                    <div className="flex items-center justify-center mb-4">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                        <span className="ml-2 text-gray-600">Processing...</span>
                    </div>
                )}

                {/* Error Message */}
                {error && (
                    <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
                        ⚠️ {error}
                    </div>
                )}

                {/* Preview Section */}
                {faviconUrl && !isLoading && (
                    <div className="mt-6 animate-fade-in">
                        <h3 className="text-lg font-semibold text-gray-700 mb-3">Preview</h3>
                        <div className="flex flex-col items-center space-y-4">
                            <div className="p-2 bg-gray-100 rounded-lg inline-block">
                                <img
                                    src={faviconUrl}
                                    alt="Favicon Preview"
                                    className="w-16 h-16 border-2 border-gray-200 rounded"
                                />
                            </div>
                            <a
                                href={faviconUrl}
                                download="favicon.ico"
                                className="w-full px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors
                                        flex items-center justify-center space-x-2"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                    />
                                </svg>
                                <span>Download Favicon</span>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImageToFavicon;
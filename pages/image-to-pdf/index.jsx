import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';

 const ImageToPdf = () => {
    const [images, setImages] = useState([]);

    // Cleanup object URLs on component unmount
    useEffect(() => {
        return () => {
            images.forEach(image => URL.revokeObjectURL(image.preview));
        };
    }, []);

    const handleFileSelect = (e) => {
        const files = Array.from(e.target.files);
        if (!files.length) return;

        const newImages = files.map(file => ({
            id: Date.now() + Math.random(),
            file,
            preview: URL.createObjectURL(file),
        }));

        setImages(prev => [...prev, ...newImages]);
    };

    const removeImage = (id) => {
        setImages(prev => {
            const newImages = prev.filter(image => image.id !== id);
            const removedImage = prev.find(image => image.id === id);
            if (removedImage) URL.revokeObjectURL(removedImage.preview);
            return newImages;
        });
    };

    const moveImage = (index, direction) => {
        const newImages = [...images];
        const newIndex = direction === 'up' ? index - 1 : index + 1;
        [newImages[index], newImages[newIndex]] = [newImages[newIndex], newImages[index]];
        setImages(newImages);
    };

    const convertToPdf = async () => {
        if (!images.length) {
            alert('Please select at least one image');
            return;
        }

        const pdf = new jsPDF('p', 'mm', 'a4');
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();

        for (let i = 0; i < images.length; i++) {
            const image = images[i];
            const imgData = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.onload = (e) => resolve(e.target.result);
                reader.readAsDataURL(image.file);
            });

            const img = new Image();
            img.src = imgData;
            await new Promise((resolve) => (img.onload = resolve));

            // Calculate image dimensions to fit the page
            const imgRatio = img.width / img.height;
            const pdfRatio = pageWidth / pageHeight;

            let width, height;
            if (imgRatio > pdfRatio) {
                width = pageWidth;
                height = pageWidth / imgRatio;
            } else {
                height = pageHeight;
                width = pageHeight * imgRatio;
            }

            // Add new page for subsequent images
            if (i > 0) pdf.addPage();

            // Center the image on the page
            const x = (pageWidth - width) / 2;
            const y = (pageHeight - height) / 2;

            pdf.addImage(imgData, 'JPEG', x, y, width, height);
        }

        pdf.save('converted-images.pdf');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 p-5">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold my-14 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    Image to PDF Converter
                </h2>

                <div className="mb-8 flex justify-center">
                    <label className="relative inline-block group">
                        <div className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-3 rounded-xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30">
                            📸 Select Images
                            <input
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={handleFileSelect}
                                className="hidden"
                            />
                        </div>
                        <span className="absolute -bottom-6 left-0 right-0 text-center text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
                            Click to choose images
                        </span>
                    </label>
                </div>

                {images.length > 0 && (
                    <>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                            {images.map((image, index) => (
                                <div
                                    key={image.id}
                                    className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-3 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                                >
                                    <div className="relative overflow-hidden rounded-lg">
                                        <img
                                            src={image.preview}
                                            alt="preview"
                                            className="w-full h-40 object-cover rounded-lg opacity-90 hover:opacity-100 transition-opacity"
                                        />
                                        <div className="absolute top-2 right-2">
                                            <span className="bg-gray-900/80 text-white text-sm px-2 py-1 rounded-full">
                                                {index + 1}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex gap-2 justify-center mt-3">
                                        <button
                                            onClick={() => moveImage(index, 'up')}
                                            disabled={index === 0}
                                            className="bg-gray-700/50 hover:bg-gray-600/80 border border-gray-600 px-3 py-1.5 rounded-lg text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-gray-700/50"
                                        >
                                            ▲
                                        </button>
                                        <button
                                            onClick={() => moveImage(index, 'down')}
                                            disabled={index === images.length - 1}
                                            className="bg-gray-700/50 hover:bg-gray-600/80 border border-gray-600 px-3 py-1.5 rounded-lg text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-gray-700/50"
                                        >
                                            ▼
                                        </button>
                                        <button
                                            onClick={() => removeImage(image.id)}
                                            className="bg-red-500/80 hover:bg-red-400/90 px-3 py-1.5 rounded-lg text-white transition-all transform hover:scale-105"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center">
                            <button
                                onClick={convertToPdf}
                                className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-10 py-4 rounded-xl text-lg font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20"
                            >
                                🚀 Convert to PDF
                            </button>
                        </div>
                    </>
                )}

                {images.length === 0 && (
                    <div className="text-center mt-12 animate-pulse">
                        <p className="text-gray-400 text-lg">
                            ⬆️ Select images to begin conversion
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
 };

 export default ImageToPdf;
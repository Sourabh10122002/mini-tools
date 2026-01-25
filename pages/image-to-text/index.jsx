import React, { useState } from "react";
import Tesseract from "tesseract.js";

const ImageToText = () => {
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState("");
    const [text, setText] = useState("");
    const [loading, setLoading] = useState(false);

    // Convert Base64 to Blob
    const base64ToBlob = (base64String) => {
        try {
            // Split the base64 string into metadata and data parts
            const [metaPart, dataPart] = base64String.split(';base64,');

            // Extract MIME type from metadata
            const mimeType = metaPart.split(':')[1];

            // Decode base64 data
            const byteCharacters = atob(dataPart);
            const byteArrays = [];

            // Process in chunks to handle large images
            const sliceSize = 512;
            for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
                const slice = byteCharacters.slice(offset, offset + sliceSize);
                const byteNumbers = new Array(slice.length).fill(0).map((_, i) => slice.charCodeAt(i));
                byteArrays.push(new Uint8Array(byteNumbers));
            }

            return new Blob(byteArrays, { type: mimeType });
        } catch (error) {
            console.error('Invalid base64 string:', error);
            return null;
        }
    };

    // Handle file uploads
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
            setImageUrl("");
        }
    };

    // Handle pasted image URLs or Base64 strings
    const handleUrlChange = (e) => {
        const input = e.target.value.trim();
        setImageUrl(input);

        if (input.startsWith("data:image")) {
            const blob = base64ToBlob(input);
            if (blob) {
                const objectUrl = URL.createObjectURL(blob);
                setImage(objectUrl);
            } else {
                setImage(null);
                alert('Invalid base64 image format!');
            }
        } else if (input) {
            // Validate URL format
            try {
                new URL(input);
                setImage(input);
            } catch (error) {
                setImage(null);
                alert('Invalid image URL!');
            }
        } else {
            setImage(null);
        }
    };

    // Extract text from image
    const extractText = async () => {
        if (!image) return;

        setLoading(true);
        setText("");

        try {
            const { data: { text } } = await Tesseract.recognize(image, "eng", {
                logger: (m) => console.log(m),
                tessedit_char_whitelist: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                psm: 6,
            });

            setText(text);
        } catch (error) {
            console.error("Error extracting text:", error);
            setText("Failed to extract text.");
        }

        setLoading(false);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6">
            <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-md">🖼️ Image to Text Converter</h1>

            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg w-full max-w-lg text-white border border-white/20">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="block w-full mb-4 p-3 border border-white/20 rounded-lg bg-white/20 text-white placeholder-gray-300 file:cursor-pointer file:bg-blue-600 file:text-white file:px-4 file:py-2 file:rounded-md file:border-none file:hover:bg-blue-700 transition"
                />

                <input
                    type="text"
                    placeholder="Paste image URL or base64 data..."
                    value={imageUrl}
                    onChange={handleUrlChange}
                    className="w-full p-3 border border-white/20 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />

                {image && (
                    <div className="mt-4 flex justify-center">
                        <img src={image} alt="Uploaded preview" className="w-72 rounded-lg shadow-lg" />
                    </div>
                )}

                <button
                    onClick={extractText}
                    disabled={!image || loading}
                    className={`mt-4 w-full py-3 rounded-lg text-white font-semibold text-lg transition ${loading
                        ? "bg-gray-500 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700 active:scale-95"
                        }`}
                >
                    {loading ? "Extracting..." : "Extract Text"}
                </button>
            </div>

            {text && (
                <div className="mt-6 bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg w-full max-w-lg text-white border border-white/20">
                    <h2 className="text-lg font-semibold mb-2">📝 Extracted Text:</h2>
                    <p className="text-gray-300 whitespace-pre-wrap">{text}</p>
                </div>
            )}
        </div>
    );
};

export default ImageToText;
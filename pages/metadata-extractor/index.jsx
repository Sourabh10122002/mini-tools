import React, { useState } from "react";
import exifr from "exifr";
import { PDFDocument } from "pdf-lib";
import mammoth from "mammoth";

const MetadataExtractor = () => {
    const [file, setFile] = useState(null);
    const [metadata, setMetadata] = useState(null);
    const [error, setError] = useState("");
    const [fileName, setFileName] = useState("");
    const [filePreview, setFilePreview] = useState("");

    const handleFileUpload = async (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            setFileName(selectedFile.name);
            setError("");
            setMetadata(null);

            // Generate file preview
            if (selectedFile.type.startsWith("image/")) {
                const reader = new FileReader();
                reader.onload = (e) => setFilePreview(e.target.result);
                reader.readAsDataURL(selectedFile);
            } else {
                setFilePreview(""); // Clear preview for non-image files
            }

            try {
                let metadata = null;

                // Check file type and extract metadata accordingly
                if (selectedFile.type.startsWith("image/")) {
                    // Extract metadata from images using exifr
                    metadata = await exifr.parse(selectedFile);
                } else if (selectedFile.type === "application/pdf") {
                    // Extract metadata from PDFs using pdf-lib
                    const pdfBytes = await selectedFile.arrayBuffer();
                    const pdfDoc = await PDFDocument.load(pdfBytes);
                    metadata = {
                        title: pdfDoc.getTitle(),
                        author: pdfDoc.getAuthor(),
                        subject: pdfDoc.getSubject(),
                        creationDate: pdfDoc.getCreationDate(),
                        modificationDate: pdfDoc.getModificationDate(),
                    };
                } else if (
                    selectedFile.type ===
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                ) {
                    // Extract metadata from DOCX files using mammoth
                    const result = await mammoth.extractRawText({ arrayBuffer: await selectedFile.arrayBuffer() });
                    metadata = {
                        text: result.value, // Extract text content (no built-in metadata in DOCX)
                    };
                } else {
                    throw new Error("Unsupported file type.");
                }

                setMetadata(metadata);
            } catch (error) {
                console.error("Error extracting metadata:", error);
                setError("Failed to extract metadata. The file type may not be supported.");
            }
        }
    };

    // Format metadata for display
    const formatMetadata = (metadata) => {
        if (!metadata) return null;

        return Object.entries(metadata).map(([key, value]) => (
            <div key={key} className="mb-4">
                <span className="font-semibold text-blue-400 capitalize">{key}:</span>
                <span className="ml-2 text-gray-300">
                    {typeof value === "object" ? JSON.stringify(value, null, 2) : value}
                </span>
            </div>
        ));
    };

    return (
        <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-white">
            <div className="bg-gray-800 bg-opacity-75 rounded-lg shadow-2xl p-8 max-w-2xl w-full">
                <h1 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Extract Metadata from Any File</h1>

                {/* Custom File Upload Input */}
                <div className="flex flex-col items-center space-y-4">
                    <label className="w-full flex flex-col items-center px-4 py-5 bg-gray-700 rounded-lg border-2 border-dashed border-gray-500 cursor-pointer hover:bg-gray-600 transition-colors">
                        <span className="text-lg font-semibold">Choose a file</span>
                        <span className="text-sm text-gray-400">or drag and drop it here</span>
                        <input
                            type="file"
                            onChange={handleFileUpload}
                            className="hidden"
                        />
                    </label>

                    {/* Display Selected File Name */}
                    {fileName && (
                        <p className="text-sm text-gray-300">
                            Selected file: <span className="font-semibold">{fileName}</span>
                        </p>
                    )}

                    {/* File Preview */}
                    {filePreview && (
                        <div className="mt-4">
                            <h2 className="text-lg font-semibold mb-2">File Preview:</h2>
                            <img
                                src={filePreview}
                                alt="File Preview"
                                className="max-w-full h-auto rounded-lg shadow-md"
                            />
                        </div>
                    )}

                    {/* Placeholder for Non-Image Files */}
                    {file && !filePreview && (
                        <div className="mt-4">
                            <h2 className="text-lg font-semibold mb-2">File Preview:</h2>
                            <div className="bg-gray-700 p-6 rounded-lg flex items-center justify-center">
                                <span className="text-gray-400">
                                    {file.type === "application/pdf"
                                        ? "PDF files cannot be previewed."
                                        : "File preview not available."}
                                </span>
                            </div>
                        </div>
                    )}
                </div>

                {error && (
                    <p className="mt-4 text-red-400 text-center">{error}</p>
                )}

                {metadata && (
                    <div className="mt-6">
                        <h2 className="text-2xl font-semibold mb-4">Extracted Metadata:</h2>
                        <div className="bg-gray-700 p-4 rounded-lg">
                            {formatMetadata(metadata)}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MetadataExtractor;
import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';

const MergePdf = () => {
    const [files, setFiles] = useState([]);
    const [mergedPdfUrl, setMergedPdfUrl] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleFileUpload = (event) => {
        const uploadedFiles = Array.from(event.target.files);
        if (uploadedFiles.length < 2) {
            setError('Please upload at least 2 PDF files to merge.');
            return;
        }

        // Validate file types
        const invalidFiles = uploadedFiles.filter((file) => file.type !== 'application/pdf');
        if (invalidFiles.length > 0) {
            setError('Please upload only PDF files.');
            return;
        }

        // Clear any previous errors
        setError('');
        setFiles(uploadedFiles);
    };

    const mergePdfs = async () => {
        if (files.length < 2) {
            setError('Please upload at least 2 PDF files to merge.');
            return;
        }

        setLoading(true);

        try {
            // Create a new PDF document
            const mergedPdf = await PDFDocument.create();

            // Loop through each file and merge its pages
            for (const file of files) {
                const arrayBuffer = await file.arrayBuffer();
                const pdfDoc = await PDFDocument.load(arrayBuffer);
                const pages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
                pages.forEach((page) => mergedPdf.addPage(page));
            }

            // Save the merged PDF
            const mergedPdfBytes = await mergedPdf.save();
            const blob = new Blob([mergedPdfBytes], { type: 'application/pdf' });
            const url = URL.createObjectURL(blob);
            setMergedPdfUrl(url);
        } catch (error) {
            console.error('Error merging PDFs:', error);
            setError('An error occurred while merging PDFs. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleDownload = () => {
        if (!mergedPdfUrl) return;

        // Create a temporary anchor element to trigger the download
        const link = document.createElement('a');
        link.href = mergedPdfUrl;
        link.download = 'merged.pdf'; // Default filename for the merged PDF
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const removeFile = (index) => {
        const updatedFiles = files.filter((_, i) => i !== index);
        setFiles(updatedFiles);
    };

    const moveFileUp = (index) => {
        if (index === 0) return; // Cannot move the first file up
        const updatedFiles = [...files];
        [updatedFiles[index], updatedFiles[index - 1]] = [updatedFiles[index - 1], updatedFiles[index]]; // Swap positions
        setFiles(updatedFiles);
    };

    const moveFileDown = (index) => {
        if (index === files.length - 1) return; // Cannot move the last file down
        const updatedFiles = [...files];
        [updatedFiles[index], updatedFiles[index + 1]] = [updatedFiles[index + 1], updatedFiles[index]]; // Swap positions
        setFiles(updatedFiles);
    };

    return (
        <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-white">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold my-14 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Merge PDF</h1>
                <div className="flex flex-col items-center mb-8">
                    {/* Custom File Input */}
                    <div className="relative w-full max-w-md">
                        <input
                            type="file"
                            accept="application/pdf"
                            onChange={handleFileUpload}
                            id="file-upload"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            multiple
                        />
                        <label
                            htmlFor="file-upload"
                            className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md cursor-pointer"
                        >
                            <span className="text-gray-600 truncate mr-2">
                                {files.length > 0 ? `${files.length} files selected` : 'No files chosen'}
                            </span>
                            <span className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                                Choose Files
                            </span>
                        </label>
                    </div>
                    {/* Error Message */}
                    {error && (
                        <p className="text-red-500 text-sm mt-2">{error}</p>
                    )}
                    {/* Uploaded Files List */}
                    {files.length > 0 && (
                        <div className="w-full max-w-md mt-4">
                            <h2 className="text-xl font-semibold mb-2">Uploaded Files</h2>
                            <ul className="bg-white rounded-lg shadow-md p-4">
                                {files.map((file, index) => (
                                    <li key={index} className="flex items-center justify-between text-gray-800 mb-2">
                                        <span className="truncate">{file.name}</span>
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => moveFileUp(index)}
                                                disabled={index === 0}
                                                className="text-blue-500 hover:text-blue-700 disabled:text-gray-400"
                                            >
                                                ↑
                                            </button>
                                            <button
                                                onClick={() => moveFileDown(index)}
                                                disabled={index === files.length - 1}
                                                className="text-blue-500 hover:text-blue-700 disabled:text-gray-400"
                                            >
                                                ↓
                                            </button>
                                            <button
                                                onClick={() => removeFile(index)}
                                                className="text-red-500 hover:text-red-700"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <button
                        onClick={mergePdfs}
                        disabled={files.length < 2 || loading}
                        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Merging...' : 'Merge PDFs'}
                    </button>
                </div>
                {mergedPdfUrl && (
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={handleDownload}
                            className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
                        >
                            Download Merged PDF
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MergePdf;
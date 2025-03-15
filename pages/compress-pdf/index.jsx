import { useState } from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";

 const CompressPdf = () => {
    const [compressedPdfs, setCompressedPdfs] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [compressionComplete, setCompressionComplete] = useState(false);

    const handlePDFUpload = async (event) => {
        const files = event.target.files;
        if (!files || files.length === 0) return;

        setError("");
        setIsLoading(true);
        setCompressionComplete(false);
        setCompressedPdfs([]);

        const compressedResults = [];
        for (const file of files) {
            if (file.type !== "application/pdf") {
                setError("Please upload only valid PDF files.");
                setIsLoading(false);
                return;
            }

            const originalSize = file.size;
            const formData = new FormData();
            formData.append("pdf", file);

            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/compress`, {
                    method: "POST",
                    body: formData,
                });

                if (!response.ok) throw new Error("Error compressing PDF");

                const blob = await response.blob();
                const compressedSize = blob.size;
                const downloadUrl = URL.createObjectURL(blob);

                const reductionPercentage = ((originalSize - compressedSize) / originalSize) * 100;

                compressedResults.push({
                    url: downloadUrl,
                    name: file.name.replace(".pdf", "-compressed.pdf"),
                    originalSize,
                    compressedSize,
                    reductionPercentage: reductionPercentage.toFixed(2),
                });
            } catch (error) {
                setError("Failed to compress some PDFs. Please try again.");
            }
        }

        setCompressedPdfs((prev) => [...prev, ...compressedResults]);
        setIsLoading(false);
        setCompressionComplete(true);
    };

    const handleDownloadAll = async () => {
        if (compressedPdfs.length === 0) return;

        const zip = new JSZip();
        for (const file of compressedPdfs) {
            const response = await fetch(file.url);
            const blob = await response.blob();
            zip.file(file.name, blob);
        }

        const zipBlob = await zip.generateAsync({ type: "blob" });
        saveAs(zipBlob, "compressed_pdfs.zip");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 p-5">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-4xl font-bold my-14 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    PDF Compressor
                </h2>

                {compressedPdfs.length > 0 && (
                    <button
                        onClick={handleDownloadAll}
                        className="w-full mb-4 bg-green-600/80 hover:bg-green-500/90 px-4 py-2 rounded-lg text-white transition-colors"
                    >
                        📥 Download All PDFs
                    </button>
                )}

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-gray-700">
                    <label className="flex flex-col items-center justify-center w-full h-32 bg-gray-700/50 hover:bg-gray-600/80 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer transition-colors">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            <p className="text-sm text-gray-400">
                                <span className="font-semibold">Click to upload</span> or drag and drop PDFs
                            </p>
                            <p className="text-xs text-gray-500">(Multiple files, Max 50MB each)</p>
                        </div>
                        <input
                            type="file"
                            accept="application/pdf"
                            multiple
                            onChange={handlePDFUpload}
                            className="hidden"
                        />
                    </label>

                    {isLoading && (
                        <div className="text-center p-4 mt-6 bg-gray-700/50 rounded-lg">
                            <span className="animate-pulse text-blue-400">Compressing PDFs...</span>
                        </div>
                    )}

                    {error && (
                        <div className="bg-red-900/50 border border-red-800 rounded-xl p-4 text-red-200 space-y-2">
                            <h3 className="font-semibold">Compression Error</h3>
                            <p>{error}</p>
                            <ul className="mt-2 text-sm list-disc pl-4">
                                <li>Ensure all files are valid PDFs</li>
                                <li>Check file size limits</li>
                                <li>Try different files</li>
                            </ul>
                        </div>
                    )}

                    {compressedPdfs.length > 0 && (
                        <div className="space-y-4 mt-6">
                            {compressedPdfs.map((file, index) => (
                                <div key={index} className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                                    <h3 className="text-lg font-semibold text-gray-200">{file.name}</h3>
                                    <p className="text-gray-100">
                                        Original: {(file.originalSize / 1024).toFixed(2)} KB →
                                        Compressed: {(file.compressedSize / 1024).toFixed(2)} KB
                                    </p>
                                    <p className="text-gray-100">🔻 Reduced by {file.reductionPercentage}%</p>
                                    <div className="flex gap-4 mt-2">
                                        <a
                                            href={file.url}
                                            download={file.name}
                                            className="flex-1 bg-gradient-to-r from-green-500 to-blue-500 px-4 py-2 rounded-lg text-white text-center transition-colors"
                                        >
                                            📥 Download
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {compressionComplete && (
                        <button
                            onClick={() => {
                                setCompressedPdfs([]);
                                setCompressionComplete(false);
                            }}
                            className="w-full mt-6 bg-blue-600/80 hover:bg-blue-500/90 px-4 py-2 rounded-lg text-white transition-colors"
                        >
                            ➕ New File
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
 };

 export default CompressPdf;
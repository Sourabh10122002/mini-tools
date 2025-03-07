import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import * as pdfjs from 'pdfjs-dist';
import JSZip from 'jszip';

// PDF.js worker configuration
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

 const PdfToImage = () => {
    const [convertedImages, setConvertedImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [uploadedFile, setUploadedFile] = useState(null);
    const [isDownloadingAll, setIsDownloadingAll] = useState(false);

    const convertPdfToImages = async (file) => {
        setIsLoading(true);
        setError('');
        try {
            const pdf = await pdfjs.getDocument(URL.createObjectURL(file)).promise;
            const images = [];

            for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
                const page = await pdf.getPage(pageNumber);
                const viewport = page.getViewport({ scale: 1.5 });

                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                await page.render({
                    canvasContext: context,
                    viewport: viewport
                }).promise;

                images.push(canvas.toDataURL('image/png'));
            }

            setConvertedImages(images);
        } catch (err) {
            setError('Error converting PDF. Please check the file format.');
        } finally {
            setIsLoading(false);
        }
    };

    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        if (file?.type === 'application/pdf') {
            setUploadedFile(file);
            convertPdfToImages(file);
        } else {
            setError('Please upload a valid PDF file');
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: 'application/pdf',
        multiple: false
    });

    const handleDownload = (imageUrl, pageNumber) => {
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = `page-${pageNumber + 1}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const dataURLToBlob = (dataURL) => {
        const arr = dataURL.split(',');
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
    };

    // Download all images as ZIP
    const handleDownloadAll = async () => {
        setIsDownloadingAll(true);
        try {
            const zip = new JSZip();
            const imgFolder = zip.folder("pdf-pages");

            convertedImages.forEach((img, index) => {
                const blob = dataURLToBlob(img);
                imgFolder.file(`page-${index + 1}.png`, blob);
            });

            const content = await zip.generateAsync({ type: "blob" });
            const url = URL.createObjectURL(content);

            const link = document.createElement('a');
            link.href = url;
            link.download = 'converted-pages.zip';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        } catch (error) {
            setError('Error creating ZIP file');
        } finally {
            setIsDownloadingAll(false);
        }
    };

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-blue-900 to-gray-900 text-white p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold my-14 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">PDF to Image Converter</h1>

                <div
                    {...getRootProps()}
                    className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
            ${isDragActive ? 'border-blue-400 bg-blue-900/20' : 'border-gray-300'}`}
                >
                    <input {...getInputProps()} />
                    {isDragActive ? (
                        <p className="text-blue-300">Drop the PDF here...</p>
                    ) : (
                        <p>Drag and drop a PDF file here, or click to select</p>
                    )}
                    {uploadedFile && (
                        <p className="mt-4 text-sm text-gray-300">
                            Uploaded file: {uploadedFile.name}
                        </p>
                    )}
                </div>

                {error && (
                    <div className="mt-4 p-4 bg-red-500/20 text-red-200 rounded-lg">
                        {error}
                    </div>
                )}

                {isLoading && (
                    <div className="mt-8 text-center">
                        <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-white border-t-transparent"></div>
                        <p className="mt-2">Converting PDF to images...</p>
                    </div>
                )}

                {convertedImages.length > 0 && (
                    <div className="mt-8">
                        <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold mb-4">Converted Pages:</h2>
                        <button
                            onClick={handleDownloadAll}
                            disabled={isDownloadingAll}
                                className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isDownloadingAll ? 'Creating ZIP...' : 'Download All as ZIP'}
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {convertedImages.map((imageUrl, index) => (
                                <div key={index} className="bg-gray-800/30 rounded-lg p-4">
                                    <img
                                        src={imageUrl}
                                        alt={`Page ${index + 1}`}
                                        className="mb-2 rounded-lg"
                                    />
                                    <button
                                        onClick={() => handleDownload(imageUrl, index)}
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors"
                                    >
                                        Download Page {index + 1}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
 };

 export default PdfToImage;
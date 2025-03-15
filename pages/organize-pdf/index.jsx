'use client';

import { useState, useRef,useEffect } from 'react';
import { PDFDocument,degrees } from 'pdf-lib';

const index = () => {
    const [pdfFile, setPdfFile] = useState(null);
    const [pdfData, setPdfData] = useState(null);
    const [pageImages, setPageImages] = useState([]);
    const [pageOrder, setPageOrder] = useState([]);
    const [pageRotations, setPageRotations] = useState({});
    const [isProcessing, setIsProcessing] = useState(false);
    const [isRendering, setIsRendering] = useState(false);
    const fileInputRef = useRef(null);
    const [title, setTitle] = useState("");
    const [firstWord, setFirstWord] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            const pathSegments = window.location.pathname.split("/").filter(Boolean);
            const lastSegment = pathSegments.pop();

            if (lastSegment) {
                const formattedTitle = lastSegment
                    .replace(/-/g, " ") // Replace hyphens with spaces
                    .replace(/^(\w)/, (match) => match.toUpperCase()); // Capitalize first letter

                setTitle(formattedTitle);

                // Extract the first word
                const firstWordExtracted = formattedTitle.split(" ")[0];
                setFirstWord(firstWordExtracted);
            }
        }
    }, []);

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        if (file && file.type === 'application/pdf') {
            setPdfFile(file);
            setIsRendering(true);

            try {
                // Read the file and create buffers
                const originalBuffer = await file.arrayBuffer();
                const bufferCopy = originalBuffer.slice(0);
                setPdfData(bufferCopy);

                // Load the PDF document for metadata
                const pdfDoc = await PDFDocument.load(bufferCopy);
                const pageCount = pdfDoc.getPageCount();

                // Initialize page order and rotations
                const initialOrder = Array.from({ length: pageCount }, (_, i) => i + 1);
                setPageOrder(initialOrder);

                const initialRotations = {};
                initialOrder.forEach(pageNum => {
                    initialRotations[pageNum] = 0;
                });
                setPageRotations(initialRotations);

                // Generate thumbnails using PDF.js with original buffer
                if (typeof window !== 'undefined') {
                    const pdfjsLib = await import('pdfjs-dist/webpack');  // Fixed quote here
                    pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.js`;

                    const loadingTask = pdfjsLib.getDocument(originalBuffer);
                    const pdf = await loadingTask.promise;

                    const newPageImages = [];

                    for (let i = 1; i <= pdf.numPages; i++) {
                        const page = await pdf.getPage(i);
                        const viewport = page.getViewport({ scale: 0.5 });

                        const canvas = document.createElement('canvas');  // Fixed quote here
                        const context = canvas.getContext('2d');
                        canvas.height = viewport.height;
                        canvas.width = viewport.width;

                        await page.render({
                            canvasContext: context,
                            viewport: viewport
                        }).promise;

                        newPageImages.push({
                            pageNumber: i,
                            dataUrl: canvas.toDataURL()
                        });
                    }

                    setPageImages(newPageImages);
                }
            } catch (error) {
                console.error('Error loading PDF:', error);
                alert('Error loading PDF. Please try another file.');
            } finally {
                setIsRendering(false);
            }
        }
    };

    // Move page left in the order
    const movePageLeft = (index) => {
        if (index === 0) return; // Can't move first page left

        const newOrder = [...pageOrder];
        const temp = newOrder[index];
        newOrder[index] = newOrder[index - 1];
        newOrder[index - 1] = temp;

        setPageOrder(newOrder);
    };

    // Move page right in the order
    const movePageRight = (index) => {
        if (index === pageOrder.length - 1) return; // Can't move last page right

        const newOrder = [...pageOrder];
        const temp = newOrder[index];
        newOrder[index] = newOrder[index + 1];
        newOrder[index + 1] = temp;

        setPageOrder(newOrder);
    };

    // Handle page rotation
    const rotatePage = (pageNum, direction) => {
        setPageRotations(prev => {
            const currentRotation = prev[pageNum] || 0;
            const newRotation = direction === 'clockwise'
                ? (currentRotation + 90) % 360
                : (currentRotation - 90 + 360) % 360;

            return { ...prev, [pageNum]: newRotation };
        });
    };

    // Process and save the reorganized PDF
    const processPDF = async () => {
        if (!pdfData) return;

        setIsProcessing(true);

        try {
            const pdfDoc = await PDFDocument.load(pdfData);
            const newPdfDoc = await PDFDocument.create();

            for (let i = 0; i < pageOrder.length; i++) {
                const originalPageIndex = pageOrder[i] - 1;
                const [copiedPage] = await newPdfDoc.copyPages(pdfDoc, [originalPageIndex]);

                const rotation = pageRotations[pageOrder[i]] || 0;
                const validRotation = rotation % 360;

                // Only apply rotation if it's non-zero
                if (validRotation !== 0 && [90, 180, 270].includes(validRotation)) {
                    copiedPage.setRotation(degrees(validRotation));
                }

                newPdfDoc.addPage(copiedPage);
            }

            const newPdfBytes = await newPdfDoc.save();
            const blob = new Blob([newPdfBytes], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `reorganized-${pdfFile.name}`;
            link.click();
        } catch (error) {
            console.error('Error processing PDF:', error);
            alert('Error processing PDF. Please try again.');
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 text-white flex flex-col items-center pt-20">
            <h1 className="text-4xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300  md:mt-0 mt-6">
                {title}
            </h1>
            {/* Upload Section */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mx-8 mb-8 shadow-sm">
                <h2 className="text-xl font-semibold mb-4 text-gray-700">Upload a PDF to { firstWord}</h2>
                <div className="flex items-center justify-center gap-4">
                    <button
                        onClick={() => fileInputRef.current?.click()}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg shadow transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        disabled={isProcessing || isRendering}
                    >
                        <span className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                            Select PDF File
                        </span>
                    </button>
                    <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        accept=".pdf"
                        onChange={handleFileUpload}
                    />
                    {pdfFile && (
                        <div className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                            </svg>
                            {pdfFile.name}
                        </div>
                    )}
                </div>
            </div>

            {/* Toolbar */}
            {pdfFile && !isRendering && (
                <div className="flex justify-between items-center mb-6 px-4 py-3 bg-gray-50 rounded-lg gap-4">
                    <div className="flex items-center gap-4">
                        <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                            {pageOrder.length} pages
                        </div>
                    </div>

                    <button
                        onClick={processPDF}
                        className="bg-gradient-to-r from-green-500 to-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg shadow transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 flex items-center gap-2"
                        disabled={isProcessing || isRendering}
                    >
                        {isProcessing ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing...
                            </>
                        ) : (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                                Save Reorganized PDF
                            </>
                        )}
                    </button>
                </div>
            )}

            {/* Loading indicator */}
            {isRendering && (
                <div className="text-center py-12">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mb-4"></div>
                    <p className="text-xl text-gray-600">Rendering PDF thumbnails...</p>
                </div>
            )}

            {/* PDF Pages Section - With arrow controls */}
            {pdfFile && !isRendering && pageImages.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
                    {pageOrder.map((pageNum, index) => {
                        const pageImage = pageImages.find(img => img.pageNumber === pageNum);
                        const rotation = pageRotations[pageNum] || 0;

                        return (
                            <div key={pageNum} className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden flex flex-col">
                                <div className="p-2 bg-gray-50 border-b flex justify-between items-center">
                                    <span className="font-medium text-gray-700">Page {pageNum}</span>
                                    <div className="flex gap-1">
                                        <button
                                            onClick={() => movePageLeft(index)}
                                            disabled={index === 0}
                                            className={`p-1 rounded ${index === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-100'}`}
                                            title="Move left"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={() => movePageRight(index)}
                                            disabled={index === pageOrder.length - 1}
                                            className={`p-1 rounded ${index === pageOrder.length - 1 ? 'text-gray-300 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-100'}`}
                                            title="Move right"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <div className="p-4 flex-grow flex items-center justify-center">
                                    <div
                                        style={{
                                            transform: `rotate(${rotation}deg)`,
                                            transformOrigin: 'center',
                                            transition: 'transform 0.3s ease',
                                            maxWidth: '100%',
                                        }}
                                        className="flex items-center justify-center"
                                    >
                                        {pageImage ? (
                                            <img
                                                src={pageImage.dataUrl}
                                                alt={`Page ${pageNum}`}
                                                className="object-contain max-w-full max-h-full border shadow-sm"
                                            />
                                        ) : (
                                            <div className="w-32 h-40 bg-gray-200 flex items-center justify-center">
                                                Page {pageNum}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="p-2 bg-gray-50 border-t flex justify-center">
                                    <div className="flex gap-3">
                                        <button
                                            onClick={() => rotatePage(pageNum, 'counterclockwise')}
                                            className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 text-gray-700 hover:text-blue-600 transition-colors"
                                            title="Rotate counterclockwise"
                                            disabled={isProcessing}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={() => rotatePage(pageNum, 'clockwise')}
                                            className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 text-gray-700 hover:text-blue-600 transition-colors"
                                            title="Rotate clockwise"
                                            disabled={isProcessing}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Instructions */}
            {!pdfFile && (
                <div className="text-center py-12 px-4 bg-blue-50 rounded-lg border border-blue-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-blue-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    </svg>
                    <p className="text-xl text-gray-700 mb-3">Upload a PDF to begin organizing its pages.</p>
                    <p className="text-gray-600">You'll be able to reorder pages using the arrow buttons and rotate them as needed.</p>
                </div>
            )}
        </div>
    );
};

export default index;
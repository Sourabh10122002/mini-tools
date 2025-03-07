import React, { useState } from 'react';

 const DocxToPdf = () => {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [pdfUrl, setPdfUrl] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            setError('Please select a file.');
            return;
        }

        setLoading(true);
        setError(null);
        setPdfUrl(null);

        const formData = new FormData();
        formData.append('file', file);

        try {
            // Send the file to the backend for conversion
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/convert`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Error converting file.');
            }

            // Convert the response to a Blob
            const blob = await response.blob();

            // Create a URL for the downloaded PDF
            const url = window.URL.createObjectURL(blob);
            setPdfUrl(url);
        } catch (err) {
            setError('Error converting file. Please try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-blue-900 to-gray-900 text-white p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold my-14 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    DOCX to PDF Converter
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col items-center">
                        <input
                            type="file"
                            accept=".docx"
                            onChange={handleFileChange}
                            disabled={loading}
                            className="hidden"
                            id="fileInput"
                        />
                        <label
                            htmlFor="fileInput"
                            className="w-full border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors hover:border-blue-400 hover:bg-blue-900/20"
                        >
                            {file ? (
                                <p className="text-gray-300">Selected file: {file.name}</p>
                            ) : (
                                <p>Click to select a DOCX file</p>
                            )}
                        </label>
                    </div>

                    <button
                        type="submit"
                        disabled={loading || !file}
                        className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Converting...' : 'Convert to PDF'}
                    </button>
                </form>

                {error && (
                    <div className="mt-4 p-4 bg-red-500/20 text-red-200 rounded-lg">
                        {error}
                    </div>
                )}

                {pdfUrl && (
                    <div className="mt-8 text-center">
                        <p className="text-lg mb-4">Conversion successful! Download your PDF:</p>
                        <a
                            href={pdfUrl}
                            download="converted.pdf"
                            className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-lg transition-colors hover:from-blue-700 hover:to-cyan-600"
                        >
                            Download PDF
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
 };

 export default DocxToPdf;
import React, { useState, useRef } from 'react';
import { Eye, EyeSlash } from '@phosphor-icons/react';

const index = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [downloadSuccess, setDownloadSuccess] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const fileInputRef = useRef(null);

    const handleFileSelect = (e) => {
        const file = e.target.files[0];

        if (!file) return alert('No file selected');
        if (!file.type.includes('pdf')) return alert('Please select a PDF file');
        if (file.size === 0) return alert('File is empty');

        setSelectedFile(file);
    };

    const unlockPDF = async () => {
        if (!selectedFile) return alert('Select a PDF file');
        if (password.length < 4) return alert('Password too short');

        try {
            setIsLoading(true);
            setDownloadSuccess(null);

            const formData = new FormData();
            formData.append('pdf', selectedFile);
            formData.append('password', password);
            console.log(process.env.NEXT_PUBLIC_SERVER_URL);
            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/unlock-pdf`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Server error');
            }

            const blob = await response.blob();
            const downloadUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = `unlocked_${selectedFile.name}`;
            document.body.appendChild(link);
            link.click();
            link.remove();
            URL.revokeObjectURL(downloadUrl);

            setDownloadSuccess('Download Successful! 🎉');
            resetForm();

        } catch (error) {
            setDownloadSuccess('Download Failed ❌');
            console.log(`Error: ${error.message}`);
            alert(`Error: ${error.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    const resetForm = () => {
        setSelectedFile(null);
        setPassword('');
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-white">
            <div className="w-full max-w-2xl px-4 space-y-8">
                <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 font-bold text-center mb-8">Unlock PDF</h1>

                <div className="space-y-6">
                    <div className="border-2 border-dashed border-blue-300 rounded-xl p-8 text-center">
                        <input
                            type="file"
                            accept="application/pdf"
                            onChange={handleFileSelect}
                            ref={fileInputRef}
                            className="hidden"
                            id="fileInput"
                            disabled={isLoading}
                        />
                        <label
                            htmlFor="fileInput"
                            className={`cursor-pointer ${isLoading ? 'bg-gray-600' : 'bg-blue-600 hover:bg-blue-700'
                                } text-white px-6 py-3 rounded-lg transition-colors`}
                        >
                            {isLoading ? 'Processing...' : 'Choose Locked PDF'}
                        </label>
                        {selectedFile && (
                            <p className="mt-4 text-blue-200">{selectedFile.name}</p>
                        )}
                    </div>

                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 bg-gray-800 border border-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            disabled={isLoading}
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-white"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <Eye size={24} /> : <EyeSlash size={24} />}
                        </button>
                    </div>

                    {!isLoading && (
                        <button
                            onClick={unlockPDF}
                            className="w-full py-4 rounded-lg font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-700 transition-all"
                        >
                            Unlock PDF
                        </button>
                    )}

                    {downloadSuccess && (
                        <p className={`text-center mt-4 font-semibold ${downloadSuccess.includes('Successful') ? 'text-green-400' : 'text-red-400'}`}>
                            {downloadSuccess}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default index;
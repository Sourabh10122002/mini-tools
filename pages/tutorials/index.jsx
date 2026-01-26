const Tutorials = () => {
    return (
        <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12">
                <div className="md:hidden mb-6 relative group">
                    <button className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-300 flex items-center justify-between hover:bg-slate-700/30 transition-colors">
                        <span>Select Guide</span>
                        <svg
                            className="w-5 h-5 transform transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>

                    {/* Dropdown Menu */}
                    <div className="absolute hidden group-focus-within:block w-full mt-2 bg-slate-800/90 backdrop-blur-lg rounded-lg border border-slate-700 shadow-xl z-10">
                        <div className="space-y-1 p-2 overflow-y-auto max-h-[calc(100vh-12rem)] scrollbar-thin">

                            <a
                                href="#text-from-image"
                                className="flex items-center gap-3 p-3 rounded-md hover:bg-slate-700/30 transition-colors"
                            >
                                <div className="w-8 h-8 rounded-md bg-blue-500/20 flex items-center justify-center text-blue-400">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h4M4 8h4V4H4v4z" />
                                    </svg>
                                </div>
                                <span className="text-slate-300">Text from Image</span>
                            </a>

                            <a
                                href="#pdf-to-docx"
                                className="flex items-center gap-3 p-3 rounded-md hover:bg-slate-700/30 transition-colors"
                            >
                                <div className="w-8 h-8 rounded-md bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <span className="text-slate-300">PDF To DOCX</span>
                            </a>

                            <a
                                href="#qr-generator"
                                className="flex items-center gap-3 p-3 rounded-md hover:bg-slate-700/30 transition-colors"
                            >
                                <div className="w-8 h-8 rounded-md bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <span className="text-slate-300">QR Generator</span>
                            </a>

                            <a
                                href="#docx-to-pdf"
                                className="flex items-center gap-3 p-3 rounded-md hover:bg-slate-700/30 transition-colors"
                            >
                                <div className="w-8 h-8 rounded-md bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <span className="text-slate-300">DOCX To PDF</span>
                            </a>

                            <a
                                href="#image-to-pdf"
                                className="flex items-center gap-3 p-3 rounded-md hover:bg-slate-700/30 transition-colors"
                            >
                                <div className="w-8 h-8 rounded-md bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <span className="text-slate-300">Image To PDF</span>
                            </a>

                            <a
                                href="#qr-scanner"
                                className="flex items-center gap-3 p-3 rounded-md hover:bg-slate-700/30 transition-colors"
                            >
                                <div className="w-8 h-8 rounded-md bg-blue-500/20 flex items-center justify-center text-blue-400">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h4M4 8h4V4H4v4z" />
                                    </svg>
                                </div>
                                <span className="text-slate-300">QR Scanner</span>
                            </a>

                            <a
                                href="#pdf-to-image"
                                className="flex items-center gap-3 p-3 rounded-md hover:bg-slate-700/30 transition-colors"
                            >
                                <div className="w-8 h-8 rounded-md bg-blue-500/20 flex items-center justify-center text-blue-400">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h4M4 8h4V4H4v4z" />
                                    </svg>
                                </div>
                                <span className="text-slate-300">PDF To Image</span>
                            </a>

                            <a
                                href="#image-background-remover"
                                className="flex items-center gap-3 p-3 rounded-md hover:bg-slate-700/30 transition-colors"
                            >
                                <div className="w-8 h-8 rounded-md bg-blue-500/20 flex items-center justify-center text-blue-400">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h4M4 8h4V4H4v4z" />
                                    </svg>
                                </div>
                                <span className="text-slate-300">Image Background Remover</span>
                            </a>

                            <a
                                href="#merge-pdf"
                                className="flex items-center gap-3 p-3 rounded-md hover:bg-slate-700/30 transition-colors"
                            >
                                <div className="w-8 h-8 rounded-md bg-blue-500/20 flex items-center justify-center text-blue-400">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h4M4 8h4V4H4v4z" />
                                    </svg>
                                </div>
                                <span className="text-slate-300">Merge PDF</span>
                            </a>

                            <a
                                href="#invert-image"
                                className="flex items-center gap-3 p-3 rounded-md hover:bg-slate-700/30 transition-colors"
                            >
                                <div className="w-8 h-8 rounded-md bg-blue-500/20 flex items-center justify-center text-blue-400">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h4M4 8h4V4H4v4z" />
                                    </svg>
                                </div>
                                <span className="text-slate-300">Invert Image</span>
                            </a>

                            <a
                                href="#image-to-favicon"
                                className="flex items-center gap-3 p-3 rounded-md hover:bg-slate-700/30 transition-colors"
                            >
                                <div className="w-8 h-8 rounded-md bg-blue-500/20 flex items-center justify-center text-blue-400">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h4M4 8h4V4H4v4z" />
                                    </svg>
                                </div>
                                <span className="text-slate-300">Image To Favicon</span>
                            </a>

                            <a
                                href="#pdf-compress"
                                className="flex items-center gap-3 p-3 rounded-md hover:bg-slate-700/30 transition-colors"
                            >
                                <div className="w-8 h-8 rounded-md bg-blue-500/20 flex items-center justify-center text-blue-400">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h4M4 8h4V4H4v4z" />
                                    </svg>
                                </div>
                                <span className="text-slate-300">PDF Compress</span>
                            </a>

                            <a
                                href="#metadata-extractor"
                                className="flex items-center gap-3 p-3 rounded-md hover:bg-slate-700/30 transition-colors"
                            >
                                <div className="w-8 h-8 rounded-md bg-blue-500/20 flex items-center justify-center text-blue-400">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h4M4 8h4V4H4v4z" />
                                    </svg>
                                </div>
                                <span className="text-slate-300">Metadata Extractor</span>
                            </a>

                            <a
                                href="#password-generator"
                                className="flex items-center gap-3 p-3 rounded-md hover:bg-slate-700/30 transition-colors"
                            >
                                <div className="w-8 h-8 rounded-md bg-blue-500/20 flex items-center justify-center text-blue-400">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h4M4 8h4V4H4v4z" />
                                    </svg>
                                </div>
                                <span className="text-slate-300">Password Generator</span>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Left Navigation - Desktop */}
                <div className="hidden md:block lg:w-72 xl:w-80 shrink-0 lg:sticky lg:top-20 h-fit lg:-mt-4">
                    <div className="bg-gradient-to-br from-slate-800/50 to-blue-900/20 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/80 shadow-xl">
                        <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
                            Quick Guides
                        </h2>
                        <nav className="space-y-3 overflow-y-auto max-h-[calc(100vh-12rem)] scrollbar-thin scrollbar-track-slate-800/20 scrollbar-thumb-slate-700/50 hover:scrollbar-thumb-slate-700/80 transition-colors [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                            <a href="#text-from-image" className="group flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-slate-700/30">
                                <div className="w-8 h-8 rounded-md bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/30 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-letter-text"><path d="M15 12h6" /><path d="M15 6h6" /><path d="m3 13 3.553-7.724a.5.5 0 0 1 .894 0L11 13" /><path d="M3 18h18" /><path d="M4 11h6" /></svg>
                                </div>
                                <span className="text-slate-300 group-hover:text-blue-400 transition-colors">Text from Image</span>
                            </a>
                            <a href="#pdf-to-docx" className="group flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-slate-700/30">
                                <div className="w-8 h-8 rounded-md bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/30 transition-colors">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h4M4 8h4V4H4v4z" />
                                    </svg>
                                </div>
                                <span className="text-slate-300 group-hover:text-blue-400 transition-colors">PDF to Docx</span>
                            </a>
                            <a href="#qr-generator" className="group flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-slate-700/30">
                                <div className="w-8 h-8 rounded-md bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/30 transition-colors">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <span className="text-slate-300 group-hover:text-cyan-400 transition-colors">QR Generator</span>
                            </a>
                            <a href="#docx-to-pdf" className="group flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-slate-700/30">
                                <div className="w-8 h-8 rounded-md bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/30 transition-colors">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <span className="text-slate-300 group-hover:text-cyan-400 transition-colors">Docx to PDF</span>
                            </a>
                            <a href="#image-to-pdf" className="group flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-slate-700/30">
                                <div className="w-8 h-8 rounded-md bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/30 transition-colors">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <span className="text-slate-300 group-hover:text-cyan-400 transition-colors">Image to PDF</span>
                            </a>


                            <a href="#qr-scanner" className="group flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-slate-700/30">
                                <div className="w-8 h-8 rounded-md bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/30 transition-colors">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h4M4 8h4V4H4v4z" />
                                    </svg>
                                </div>
                                <span className="text-slate-300 group-hover:text-blue-400 transition-colors">QR Scanner</span>
                            </a>
                            <a href="#pdf-to-image" className="group flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-slate-700/30">
                                <div className="w-8 h-8 rounded-md bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/30 transition-colors">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h4M4 8h4V4H4v4z" />
                                    </svg>
                                </div>
                                <span className="text-slate-300 group-hover:text-blue-400 transition-colors">PDF to Image</span>
                            </a>
                            <a href="#image-background-remover" className="group flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-slate-700/30">
                                <div className="w-8 h-8 rounded-md bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/30 transition-colors">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h4M4 8h4V4H4v4z" />
                                    </svg>
                                </div>
                                <span className="text-slate-300 group-hover:text-blue-400 transition-colors">Image Background Remover</span>
                            </a>
                            <a href="#merge-pdf" className="group flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-slate-700/30">
                                <div className="w-8 h-8 rounded-md bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/30 transition-colors">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h4M4 8h4V4H4v4z" />
                                    </svg>
                                </div>
                                <span className="text-slate-300 group-hover:text-blue-400 transition-colors">Merge PDF</span>
                            </a>
                            <a href="#invert-image" className="group flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-slate-700/30">
                                <div className="w-8 h-8 rounded-md bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/30 transition-colors">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h4M4 8h4V4H4v4z" />
                                    </svg>
                                </div>
                                <span className="text-slate-300 group-hover:text-blue-400 transition-colors">Invert Image</span>
                            </a>
                            <a href="#image-to-favicon" className="group flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-slate-700/30">
                                <div className="w-8 h-8 rounded-md bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/30 transition-colors">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h4M4 8h4V4H4v4z" />
                                    </svg>
                                </div>
                                <span className="text-slate-300 group-hover:text-blue-400 transition-colors">Image to Favicon</span>
                            </a>
                            <a href="#pdf-compress" className="group flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-slate-700/30">
                                <div className="w-8 h-8 rounded-md bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/30 transition-colors">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <span className="text-slate-300 group-hover:text-cyan-400 transition-colors">PDF Compress</span>
                            </a>
                            <a href="#metadata-extractor" className="group flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-slate-700/30">
                                <div className="w-8 h-8 rounded-md bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/30 transition-colors">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <span className="text-slate-300 group-hover:text-cyan-400 transition-colors">Metadata Extractor</span>
                            </a>
                            <a href="#password-generator" className="group flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-slate-700/30">
                                <div className="w-8 h-8 rounded-md bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/30 transition-colors">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <span className="text-slate-300 group-hover:text-cyan-400 transition-colors">Password Generator</span>
                            </a>
                        </nav>
                    </div>
                </div>

                {/* Header */}
                <div className="flex-1 space-y-12">
                    <div className="text-center animate-fade-in">
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-3">
                            Product Guides
                        </h1>
                        <p className="text-slate-300 text-base md:text-lg font-light">
                            Step-by-step tutorials & expert tips
                        </p>
                    </div>

                    {/* Text from Image */}
                    <div id="text-from-image" className="mt-12 max-w-4xl mx-auto p-8 bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700/80">
                        {/* Tutorial Header */}
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                                Text from Image
                            </h2>
                        </div>

                        {/* Step-by-Step Guide */}
                        <div className="space-y-8">
                            {/* Step 1 */}
                            <div className="flex gap-6 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-lg font-bold border border-cyan-400/30">
                                        1
                                    </div>
                                    <div className="w-0.5 h-full bg-gray-700/50 mt-4" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-100 mb-3">Image Input</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-cyan-400 font-medium">Supported Formats</p>
                                                    <p className="text-gray-400 text-sm">JPG, PNG, BMP, WEBP</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-blue-400 font-medium">Input Methods</p>
                                                    <p className="text-gray-400 text-sm">File upload or direct URL</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex gap-6 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-lg font-bold border border-blue-400/30">
                                        2
                                    </div>
                                    <div className="w-0.5 h-full bg-gray-700/50 mt-4" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-100 mb-3">Text Extraction</h3>
                                    <div className="space-y-4">
                                        <p className="text-gray-400">
                                            Our OCR system processes images using advanced pattern recognition:
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                                <p className="text-cyan-400 font-medium">Optimal Conditions</p>
                                                <ul className="text-gray-400 text-sm space-y-2 mt-2">
                                                    <li>• 300+ DPI resolution</li>
                                                    <li>• Clear contrast</li>
                                                    <li>• Horizontal text</li>
                                                </ul>
                                            </div>
                                            <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                                <p className="text-blue-400 font-medium">Features</p>
                                                <ul className="text-gray-400 text-sm space-y-2 mt-2">
                                                    <li>• Preserves whitespace</li>
                                                    <li>• Character whitelisting</li>
                                                    <li>• Multi-language support</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex gap-6 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-lg font-bold border border-purple-400/30">
                                        3
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-100 mb-3">Results & Output</h3>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-purple-400 font-medium">Text Handling</p>
                                                    <p className="text-gray-400 text-sm">Editable plain text output with preserved formatting</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-sm text-gray-400">
                                            Tip: Always verify extracted text against original image for accuracy
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Best Practices */}
                            <div className="mt-8 p-6 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-xl border border-cyan-400/20">
                                <h4 className="text-lg font-semibold text-cyan-400 mb-3">Optimization Tips</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-400 text-sm">Use high-quality images with minimal compression</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-400 text-sm">Crop to text region before conversion</p>
                                    </div>
                                </div>
                            </div>

                            {/* Limitations */}
                            <div className="mt-6 p-6 bg-red-900/20 rounded-xl border border-red-800/50">
                                <h4 className="text-lg font-semibold text-red-400 mb-3 flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                    Current Limitations
                                </h4>
                                <ul className="text-red-300 text-sm space-y-2">
                                    <li>• Handwritten text recognition accuracy varies</li>
                                    <li>• Complex layouts may mix text order</li>
                                    <li>• Low contrast images reduce accuracy</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* PDF to DOCX Tutorial */}
                    <div id="pdf-to-docx" className="mt-12 bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700/80">
                        {/* Tutorial Title Box */}
                        <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                            PDF to Docx
                        </h2>

                        <div className="space-y-8">
                            {/* Step 1 */}
                            <div className="flex gap-6 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-lg font-bold border border-cyan-400/30">
                                        1
                                    </div>
                                    <div className="w-0.5 h-full bg-gray-700/50 mt-4" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-100 mb-3">File Selection</h3>
                                    <ul className="text-gray-400 space-y-3">
                                        <li className="flex items-start gap-2">
                                            <span className="text-cyan-400 mt-1">▸</span>
                                            Click the upload area or drag PDF files
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-cyan-400 mt-1">▸</span>
                                            Supported formats: PDF (Max 50MB)
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-cyan-400 mt-1">▸</span>
                                            Encrypted files are not supported
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex gap-6 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-lg font-bold border border-blue-400/30">
                                        2
                                    </div>
                                    <div className="w-0.5 h-full bg-gray-700/50 mt-4" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-100 mb-3">Conversion Process</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                                    </svg>
                                                </div>
                                                <p className="text-gray-400 text-sm">Text content extraction</p>
                                            </div>
                                        </div>
                                        <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                    </svg>
                                                </div>
                                                <p className="text-gray-400 text-sm">Paragraph structure preservation</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex gap-6 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-lg font-bold border border-purple-400/30">
                                        3
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-100 mb-3">Download Results</h3>
                                    <div className="flex flex-wrap gap-3">
                                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                                            .docx format
                                        </span>
                                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                                            Original filename
                                        </span>
                                        <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                                            Text formatting
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Limitations */}
                            <div className="mt-6 p-6 bg-red-900/20 rounded-xl border border-red-800/50">
                                <h4 className="text-lg font-semibold text-red-400 mb-3 flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                    Important Notes
                                </h4>
                                <ul className="text-red-300 text-sm space-y-2">
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1">•</span>
                                        Complex layouts may not convert perfectly
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1">•</span>
                                        Images and tables are not preserved
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1">•</span>
                                        Font styles may vary in output
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* QR Generate Tutorial */}
                    <div id="qr-generator" className="mt-12 max-w-4xl mx-auto">
                        <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/80 space-y-8">
                            <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                                QR Code Generator
                            </h2>
                            {/* Step 1 */}
                            <div className="flex gap-6 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-lg font-bold border border-cyan-400/30">
                                        1
                                    </div>
                                    <div className="w-0.5 h-full bg-gray-700/50 mt-4" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-100 mb-3">Select QR Type</h3>
                                    <div className="space-y-4">
                                        <p className="text-gray-400">
                                            Choose from 6 different QR code formats optimized for specific use cases:
                                        </p>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                            {['URL', 'Text', 'Email', 'SMS', 'WiFi', 'vCard'].map((type) => (
                                                <div key={type} className="p-2 bg-gray-700/30 rounded-md border border-gray-600/50 text-center">
                                                    <span className="text-cyan-400 text-sm">{type}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex gap-6 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-lg font-bold border border-blue-400/30">
                                        2
                                    </div>
                                    <div className="w-0.5 h-full bg-gray-700/50 mt-4" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-100 mb-3">Input Details</h3>
                                    <div className="space-y-4">
                                        <p className="text-gray-400">
                                            Different QR types require specific information:
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                                <p className="text-cyan-400 font-medium">Contact Info</p>
                                                <p className="text-gray-400 text-sm">vCard requires name, phone, email, etc.</p>
                                            </div>
                                            <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                                <p className="text-blue-400 font-medium">WiFi Access</p>
                                                <p className="text-gray-400 text-sm">SSID, password, and encryption type</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex gap-6 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-lg font-bold border border-purple-400/30">
                                        3
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-100 mb-3">Customize & Download</h3>
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                                <p className="text-purple-400 font-medium">Design Options</p>
                                                <ul className="text-gray-400 text-sm space-y-2 mt-2">
                                                    <li>• Size: 100px - 500px</li>
                                                    <li>• Custom colors</li>
                                                    <li>• High error correction</li>
                                                </ul>
                                            </div>
                                            <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                                <p className="text-green-400 font-medium">Download Formats</p>
                                                <ul className="text-gray-400 text-sm space-y-2 mt-2">
                                                    <li>• PNG image</li>
                                                    <li>• Vector-quality output</li>
                                                    <li>• Transparent background</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Best Practices */}
                            <div className="mt-6 p-6 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-xl border border-cyan-400/20">
                                <h4 className="text-lg font-semibold text-cyan-400 mb-3">Best Practices</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-400 text-sm">Test QR codes with multiple scanners</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-400 text-sm">Use high contrast colors for better scanning</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* DOCX to PDF Tutorial */}
                    <div id="docx-to-pdf" className="mt-12 max-w-4xl mx-auto p-8 bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700/80">
                        {/* Tutorial Header */}
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-2">
                                DOCX to PDF
                            </h2>
                        </div>

                        {/* Step-by-Step Guide */}
                        <div className="space-y-8">
                            {/* Step 1 */}
                            <div className="flex gap-6 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-lg font-bold border border-cyan-400/30">
                                        1
                                    </div>
                                    <div className="w-0.5 h-full bg-gray-700/50 mt-4" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-100 mb-3">File Selection</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-cyan-400 font-medium">Supported Formats</p>
                                                    <p className="text-gray-400 text-sm">.docx (Microsoft Word)</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-blue-400 font-medium">Upload Limits</p>
                                                    <p className="text-gray-400 text-sm">Max file size: 50MB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex gap-6 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-lg font-bold border border-blue-400/30">
                                        2
                                    </div>
                                    <div className="w-0.5 h-full bg-gray-700/50 mt-4" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-100 mb-3">Conversion Process</h3>
                                    <div className="space-y-4">
                                        <p className="text-gray-400">
                                            Our conversion system maintains document integrity through:
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                                <p className="text-cyan-400 font-medium">Format Preservation</p>
                                                <ul className="text-gray-400 text-sm space-y-2 mt-2">
                                                    <li>• Font styles and sizes</li>
                                                    <li>• Paragraph spacing</li>
                                                    <li>• Page margins</li>
                                                </ul>
                                            </div>
                                            <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                                <p className="text-blue-400 font-medium">Security</p>
                                                <ul className="text-gray-400 text-sm space-y-2 mt-2">
                                                    <li>• SSL encryption</li>
                                                    <li>• Temporary file storage</li>
                                                    <li>• Automatic deletion</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex gap-6 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-lg font-bold border border-purple-400/30">
                                        3
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-100 mb-3">Download & Output</h3>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-purple-400 font-medium">PDF Features</p>
                                                    <p className="text-gray-400 text-sm">Searchable text, vector graphics, and print-ready formatting</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-sm text-gray-400">
                                            Files are available for download for 1 hour after conversion
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Best Practices */}
                            <div className="mt-8 p-6 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-xl border border-cyan-400/20">
                                <h4 className="text-lg font-semibold text-cyan-400 mb-3">Optimization Tips</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-400 text-sm">Use standard fonts for best compatibility</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-400 text-sm">Flatten complex elements before conversion</p>
                                    </div>
                                </div>
                            </div>

                            {/* Limitations */}
                            <div className="mt-6 p-6 bg-red-900/20 rounded-xl border border-red-800/50">
                                <h4 className="text-lg font-semibold text-red-400 mb-3 flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                    Current Limitations
                                </h4>
                                <ul className="text-red-300 text-sm space-y-2">
                                    <li>• Password-protected documents not supported</li>
                                    <li>• Embedded media may not convert perfectly</li>
                                    <li>• Complex tables might reflow</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Image To PDF Tutorial */}
                    <div id="image-to-pdf" className="mt-16 max-w-4xl mx-auto">
                        <div className="space-y-8 bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/80">
                            <h2 className="text-3xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                                PDF To Image Conversion
                            </h2>
                            {/* Step 1 */}
                            <div className="flex gap-6 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-lg font-bold border border-cyan-400/30">
                                        1
                                    </div>
                                    <div className="w-0.5 h-full bg-gray-700/50 mt-4" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-100 mb-3">Upload Your PDF</h3>
                                    <ul className="space-y-3 text-gray-400">
                                        <li className="flex items-start gap-2">
                                            <span className="text-cyan-400 mt-1">▸</span>
                                            Drag and drop or click to select files
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-cyan-400 mt-1">▸</span>
                                            Supported format: PDF (Max 50MB)
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-cyan-400 mt-1">▸</span>
                                            Encrypted/Password-protected files not supported
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex gap-6 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-lg font-bold border border-blue-400/30">
                                        2
                                    </div>
                                    <div className="w-0.5 h-full bg-gray-700/50 mt-4" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-100 mb-3">Conversion Process</h3>
                                    <div className="space-y-4">
                                        <p className="text-gray-400">
                                            Our system automatically converts each PDF page to high-quality PNG images.
                                            Conversion time depends on:
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                                <p className="text-cyan-400 font-medium">Document Complexity</p>
                                                <p className="text-gray-400 text-sm">Text-heavy documents convert faster</p>
                                            </div>
                                            <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                                <p className="text-blue-400 font-medium">Image-heavy PDFs</p>
                                                <p className="text-gray-400 text-sm">May take longer to process</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex gap-6 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-lg font-bold border border-purple-400/30">
                                        3
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-100 mb-3">Download Options</h3>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                            <div className="flex items-center justify-between gap-4">
                                                <div>
                                                    <p className="text-cyan-400 font-medium">Individual Pages</p>
                                                    <p className="text-gray-400 text-sm">Download specific pages as PNG</p>
                                                </div>
                                                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">Single</span>
                                            </div>
                                        </div>
                                        <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                            <div className="flex items-center justify-between gap-4">
                                                <div>
                                                    <p className="text-purple-400 font-medium">Complete Set</p>
                                                    <p className="text-gray-400 text-sm">Download all pages as ZIP archive</p>
                                                </div>
                                                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Bulk</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Pro Tips */}
                            <div className="mt-8 p-6 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-xl border border-cyan-400/20">
                                <h4 className="text-lg font-semibold text-cyan-400 mb-3">Pro Tips</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-400 text-sm">For best results, use PDFs with 300dpi resolution</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-400 text-sm">Large files may take up to 2 minutes to process</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* QR Scanner Tutorial */}
                    <div id="qr-scanner" className="group relative bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/80 hover:border-cyan-400/30 transition-all duration-300">
                        <h2 className="text-3xl font-semibold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                            QR Code Scanner
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="p-6 bg-slate-700/30 rounded-xl border border-slate-600/50">
                                    <h3 className="text-lg font-semibold text-slate-200 mb-3">Camera Setup</h3>
                                    <ul className="space-y-2 text-slate-400">
                                        <li className="flex items-center gap-2">
                                            <span className="text-green-400">✓</span>
                                            Allow camera access when prompted
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-green-400">✓</span>
                                            Ensure proper lighting
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-green-400">✓</span>
                                            Position code within frame
                                        </li>
                                    </ul>
                                </div>

                                <div className="p-6 bg-slate-700/30 rounded-xl border border-slate-600/50">
                                    <h3 className="text-lg font-semibold text-slate-200 mb-3">Best Practices</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                </svg>
                                            </div>
                                            <p className="text-slate-400 flex-1">Maintain 6-12 inch distance from camera</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                            </div>
                                            <p className="text-slate-400 flex-1">Avoid direct light reflections on code</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="p-6 bg-slate-700/30 rounded-xl border border-slate-600/50">
                                    <h3 className="text-lg font-semibold text-slate-200 mb-3">Troubleshooting</h3>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-red-900/20 rounded-lg border border-red-800/50">
                                            <p className="text-red-400 font-medium">No Camera Detected</p>
                                            <p className="text-slate-400 text-sm mt-1">Check browser permissions and connected devices</p>
                                        </div>
                                        <div className="p-4 bg-yellow-900/20 rounded-lg border border-yellow-800/50">
                                            <p className="text-yellow-400 font-medium">Blurry Detection</p>
                                            <p className="text-slate-400 text-sm mt-1">Clean camera lens and stabilize device</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 bg-slate-700/30 rounded-xl border border-slate-600/50">
                                    <h3 className="text-lg font-semibold text-slate-200 mb-3">File Upload Tips</h3>
                                    <div className="space-y-3 text-slate-400">
                                        <p className="flex items-center gap-2">
                                            <span className="text-blue-400">ⓘ</span>
                                            Optimal image size: 500-2000px
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <span className="text-blue-400">ⓘ</span>
                                            Supported formats: PNG, JPG, WEBP
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <span className="text-blue-400">ⓘ</span>
                                            File size limit: 5MB
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* PDF to Image Tutorial */}
                    <div id="pdf-to-image" className="mt-12 max-w-4xl mx-auto p-8 bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700/80">
                        {/* Tutorial Header */}
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-2">
                                PDF to Image
                            </h2>
                            <p className="text-gray-400 text-sm">
                                Transform PDF pages into high-quality images with perfect layout preservation
                            </p>
                        </div>

                        {/* Step-by-Step Guide */}
                        <div className="space-y-8">
                            {/* Step 1 */}
                            <div className="flex gap-6 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-lg font-bold border border-cyan-400/30">
                                        1
                                    </div>
                                    <div className="w-0.5 h-full bg-gray-700/50 mt-4" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-100 mb-3">PDF Upload</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-cyan-400 font-medium">Supported Formats</p>
                                                    <p className="text-gray-400 text-sm">PDF (Max 50MB)</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-blue-400 font-medium">Upload Methods</p>
                                                    <p className="text-gray-400 text-sm">Drag & drop or click to select</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex gap-6 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-lg font-bold border border-blue-400/30">
                                        2
                                    </div>
                                    <div className="w-0.5 h-full bg-gray-700/50 mt-4" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-100 mb-3">Conversion Process</h3>
                                    <div className="space-y-4">
                                        <p className="text-gray-400">
                                            Our system renders each page at 150% scale for optimal quality:
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                                <p className="text-cyan-400 font-medium">Resolution</p>
                                                <ul className="text-gray-400 text-sm space-y-2 mt-2">
                                                    <li>• 300 DPI output</li>
                                                    <li>• PNG format</li>
                                                    <li>• Lossless compression</li>
                                                </ul>
                                            </div>
                                            <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                                <p className="text-blue-400 font-medium">Processing Speed</p>
                                                <ul className="text-gray-400 text-sm space-y-2 mt-2">
                                                    <li>• ~2 seconds per page</li>
                                                    <li>• Multi-page support</li>
                                                    <li>• Background processing</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex gap-6 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-lg font-bold border border-purple-400/30">
                                        3
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-100 mb-3">Download Options</h3>
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p className="text-cyan-400 font-medium">Single Images</p>
                                                        <p className="text-gray-400 text-sm">Download individual pages as PNG</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p className="text-purple-400 font-medium">ZIP Archive</p>
                                                        <p className="text-gray-400 text-sm">Download all pages in a single ZIP file</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Best Practices */}
                            <div className="mt-8 p-6 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-xl border border-cyan-400/20">
                                <h4 className="text-lg font-semibold text-cyan-400 mb-3">Optimization Tips</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-400 text-sm">Use vector-based PDFs for best quality</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-400 text-sm">Avoid scanned documents when possible</p>
                                    </div>
                                </div>
                            </div>

                            {/* Limitations */}
                            <div className="mt-6 p-6 bg-red-900/20 rounded-xl border border-red-800/50">
                                <h4 className="text-lg font-semibold text-red-400 mb-3 flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                    Current Limitations
                                </h4>
                                <ul className="text-red-300 text-sm space-y-2">
                                    <li>• Password-protected PDFs not supported</li>
                                    <li>• 100+ page documents may take longer</li>
                                    <li>• 3D content not preserved</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Image Background Remover Tutorial */}
                    <div id="image-background-remover" className="mt-12 max-w-6xl mx-auto p-8 bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700/80">
                        {/* Tutorial Header */}
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-2">
                                Image Background Removal
                            </h2>
                            <p className="text-gray-400 text-sm">
                                Transform images with professional-grade background removal
                            </p>
                        </div>

                        {/* Step-by-Step Guide */}
                        <div className="space-y-8">
                            {/* Step 1 */}
                            <div className="flex gap-6 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-lg font-bold border border-cyan-400/30">
                                        1
                                    </div>
                                    <div className="w-0.5 h-full bg-gray-700/50 mt-4" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-100 mb-3">Image Upload</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-cyan-400 font-medium">Supported Formats</p>
                                                    <p className="text-gray-400 text-sm">JPG, PNG, WEBP (Max 5MB)</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-blue-400 font-medium">Requirements</p>
                                                    <p className="text-gray-400 text-sm">Clear subject-background contrast</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex gap-6 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-lg font-bold border border-blue-400/30">
                                        2
                                    </div>
                                    <div className="w-0.5 h-full bg-gray-700/50 mt-4" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-100 mb-3">AI Processing</h3>
                                    <div className="space-y-4">
                                        <p className="text-gray-400">
                                            Our AI-powered system detects and removes backgrounds with precision:
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                                <p className="text-cyan-400 font-medium">Advanced Detection</p>
                                                <ul className="text-gray-400 text-sm space-y-2 mt-2">
                                                    <li>• Edge recognition technology</li>
                                                    <li>• Hair and fine detail preservation</li>
                                                    <li>• Automatic subject detection</li>
                                                </ul>
                                            </div>
                                            <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                                <p className="text-blue-400 font-medium">Processing Features</p>
                                                <ul className="text-gray-400 text-sm space-y-2 mt-2">
                                                    <li>• 1024px max resolution</li>
                                                    <li>• Transparent PNG output</li>
                                                    <li>• Batch processing support</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex gap-6 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-lg font-bold border border-purple-400/30">
                                        3
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-100 mb-3">Download Results</h3>
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p className="text-cyan-400 font-medium">File Formats</p>
                                                        <p className="text-gray-400 text-sm">PNG with transparency</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p className="text-purple-400 font-medium">Quality Assurance</p>
                                                        <p className="text-gray-400 text-sm">Original resolution maintained</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Best Practices */}
                            <div className="mt-8 p-6 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-xl border border-cyan-400/20">
                                <h4 className="text-lg font-semibold text-cyan-400 mb-3">Optimization Tips</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-400 text-sm">Use high-contrast backgrounds for best results</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-400 text-sm">Avoid complex patterns in background</p>
                                    </div>
                                </div>
                            </div>

                            {/* Limitations */}
                            <div className="mt-6 p-6 bg-red-900/20 rounded-xl border border-red-800/50">
                                <h4 className="text-lg font-semibold text-red-400 mb-3 flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                    Current Limitations
                                </h4>
                                <ul className="text-red-300 text-sm space-y-2">
                                    <li>• Transparent areas in original images may not process correctly</li>
                                    <li>• Very fine hair details may require manual touch-up</li>
                                    <li>• Animal subjects may have reduced accuracy</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Merge PDF Tutorial */}
                    <div id="merge-pdf" className="mt-12 max-w-6xl mx-auto p-8 bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700/80">
                        {/* Tutorial Header */}
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-2">
                                PDF Merging
                            </h2>
                            <p className="text-gray-400 text-sm">
                                Combine multiple PDFs into a single organized document
                            </p>
                        </div>

                        {/* Step-by-Step Guide */}
                        <div className="space-y-8">
                            {/* Step 1 */}
                            <div className="flex gap-6 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-lg font-bold border border-cyan-400/30">
                                        1
                                    </div>
                                    <div className="w-0.5 h-full bg-gray-700/50 mt-4" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-100 mb-3">File Selection</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-cyan-400 font-medium">Supported Formats</p>
                                                    <p className="text-gray-400 text-sm">PDF only (Max 50MB each)</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-blue-400 font-medium">Quantity</p>
                                                    <p className="text-gray-400 text-sm">Minimum 2 files required</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex gap-6 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-lg font-bold border border-blue-400/30">
                                        2
                                    </div>
                                    <div className="w-0.5 h-full bg-gray-700/50 mt-4" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-100 mb-3">File Organization</h3>
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                                <p className="text-cyan-400 font-medium">Drag & Drop Reordering</p>
                                                <div className="mt-2 flex items-center gap-2 text-gray-400 text-sm">
                                                    <span className="px-2 py-1 bg-cyan-500/20 rounded">↑↓</span>
                                                    Adjust file order using up/down arrows
                                                </div>
                                            </div>
                                            <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                                <p className="text-blue-400 font-medium">File Management</p>
                                                <ul className="text-gray-400 text-sm space-y-2 mt-2">
                                                    <li>• Remove individual files</li>
                                                    <li>• Clear entire selection</li>
                                                    <li>• Real-time preview</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex gap-6 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-lg font-bold border border-purple-400/30">
                                        3
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-100 mb-3">Merge & Output</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-purple-400 font-medium">Merged File</p>
                                                    <p className="text-gray-400 text-sm">Preserves original quality</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-cyan-400 font-medium">Download Options</p>
                                                    <p className="text-gray-400 text-sm">Automatic download after merging</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Best Practices */}
                            <div className="mt-8 p-6 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-xl border border-cyan-400/20">
                                <h4 className="text-lg font-semibold text-cyan-400 mb-3">Optimization Tips</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-400 text-sm">Sort files before uploading for efficiency</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-400 text-sm">Check page order before final merge</p>
                                    </div>
                                </div>
                            </div>

                            {/* Limitations */}
                            <div className="mt-6 p-6 bg-red-900/20 rounded-xl border border-red-800/50">
                                <h4 className="text-lg font-semibold text-red-400 mb-3 flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                    Current Limitations
                                </h4>
                                <ul className="text-red-300 text-sm space-y-2">
                                    <li>• Password-protected PDFs cannot be merged</li>
                                    <li>• Maximum 20 files per merge operation</li>
                                    <li>• Total size limit of 100MB per merge</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Invert Image Tutorial */}
                    <div id="invert-image" className="mt-12 max-w-6xl mx-auto p-8 bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700/80">
                        {/* Tutorial Header */}
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-2">
                                Image Editing
                            </h2>
                            <p className="text-gray-400 text-sm">
                                Transform images with professional-grade editing tools
                            </p>
                        </div>

                        {/* Step-by-Step Guide */}
                        <div className="space-y-8">
                            {/* Step 1 */}
                            <div className="flex gap-6 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-lg font-bold border border-cyan-400/30">
                                        1
                                    </div>
                                    <div className="w-0.5 h-full bg-gray-700/50 mt-4" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-100 mb-3">Image Upload & Basics</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-cyan-400 font-medium">Supported Formats</p>
                                                    <p className="text-gray-400 text-sm">JPG, PNG, WEBP (Max 5MB)</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-blue-400 font-medium">Basic Adjustments</p>
                                                    <p className="text-gray-400 text-sm">Flip, rotate, and reset transformations</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex gap-6 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-lg font-bold border border-blue-400/30">
                                        2
                                    </div>
                                    <div className="w-0.5 h-full bg-gray-700/50 mt-4" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-100 mb-3">Advanced Adjustments</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                            <p className="text-cyan-400 font-medium">Color Controls</p>
                                            <ul className="text-gray-400 text-sm space-y-2 mt-2">
                                                <li>• Brightness (0-200%)</li>
                                                <li>• Contrast (0-200%)</li>
                                                <li>• Saturation (0-200%)</li>
                                            </ul>
                                        </div>
                                        <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                            <p className="text-blue-400 font-medium">Effects</p>
                                            <ul className="text-gray-400 text-sm space-y-2 mt-2">
                                                <li>• Blur (0-20px)</li>
                                                <li>• Sharpen (0-100%)</li>
                                                <li>• Real-time preview</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex gap-6 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-lg font-bold border border-purple-400/30">
                                        3
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-100 mb-3">Filters & Output</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-purple-400 font-medium">Creative Filters</p>
                                                    <p className="text-gray-400 text-sm">Invert, grayscale, and sepia effects</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-cyan-400 font-medium">Output Options</p>
                                                    <p className="text-gray-400 text-sm">High-quality PNG download</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Best Practices */}
                            <div className="mt-8 p-6 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-xl border border-cyan-400/20">
                                <h4 className="text-lg font-semibold text-cyan-400 mb-3">Editing Tips</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-400 text-sm">Use small increments for natural-looking adjustments</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-400 text-sm">Combine filters with adjustments for unique effects</p>
                                    </div>
                                </div>
                            </div>

                            {/* Limitations */}
                            <div className="mt-6 p-6 bg-red-900/20 rounded-xl border border-red-800/50">
                                <h4 className="text-lg font-semibold text-red-400 mb-3 flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                    Current Limitations
                                </h4>
                                <ul className="text-red-300 text-sm space-y-2">
                                    <li>• Limited to 8-bit color depth</li>
                                    <li>• No layer support</li>
                                    <li>• Maximum resolution 4096x4096px</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Image to Favicon Tutorial */}
                    <div id="image-to-favicon" className="mt-12 max-w-6xl mx-auto p-8 bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700/80">
                        {/* Tutorial Header */}
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-2">
                                Image to Favicon
                            </h2>
                            <p className="text-gray-400 text-sm">
                                Transform images into perfect website icons
                            </p>
                        </div>

                        {/* Step-by-Step Guide */}
                        <div className="space-y-8">
                            {/* Step 1 */}
                            <div className="flex gap-6 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-lg font-bold border border-cyan-400/30">
                                        1
                                    </div>
                                    <div className="w-0.5 h-full bg-gray-700/50 mt-4" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-100 mb-3">Image Upload</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-cyan-400 font-medium">Supported Formats</p>
                                                    <p className="text-gray-400 text-sm">PNG, JPG, SVG, WEBP</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-blue-400 font-medium">Image Requirements</p>
                                                    <p className="text-gray-400 text-sm">Min 64x64px recommended</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex gap-6 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-lg font-bold border border-blue-400/30">
                                        2
                                    </div>
                                    <div className="w-0.5 h-full bg-gray-700/50 mt-4" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-100 mb-3">Processing</h3>
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                                <p className="text-cyan-400 font-medium">Smart Resizing</p>
                                                <ul className="text-gray-400 text-sm space-y-2 mt-2">
                                                    <li>• Automatic scaling to 16x16px</li>
                                                    <li>• Aspect ratio preservation</li>
                                                    <li>• Anti-aliased edges</li>
                                                </ul>
                                            </div>
                                            <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                                <p className="text-blue-400 font-medium">Format Conversion</p>
                                                <ul className="text-gray-400 text-sm space-y-2 mt-2">
                                                    <li>• .ico format output</li>
                                                    <li>• Transparency support</li>
                                                    <li>• Lossless compression</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex gap-6 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-lg font-bold border border-purple-400/30">
                                        3
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-100 mb-3">Implementation</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-purple-400 font-medium">Web Integration</p>
                                                    <p className="text-gray-400 text-sm">Standard favicon.ico format</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-cyan-400 font-medium">Cross-Browser Support</p>
                                                    <p className="text-gray-400 text-sm">Works with all modern browsers</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Best Practices */}
                            <div className="mt-8 p-6 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-xl border border-cyan-400/20">
                                <h4 className="text-lg font-semibold text-cyan-400 mb-3">Optimization Tips</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-400 text-sm">Use simple designs for better clarity</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-400 text-sm">Maintain high contrast for visibility</p>
                                    </div>
                                </div>
                            </div>

                            {/* Limitations */}
                            <div className="mt-6 p-6 bg-red-900/20 rounded-xl border border-red-800/50">
                                <h4 className="text-lg font-semibold text-red-400 mb-3 flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                    Current Limitations
                                </h4>
                                <ul className="text-red-300 text-sm space-y-2">
                                    <li>• Animation not supported in .ico format</li>
                                    <li>• Maximum input size 1024x1024px</li>
                                    <li>• Limited to 256 colors in final output</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* PDF Compressor Tutorial */}
                    <div id="pdf-compress" className="group relative bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/80 hover:border-cyan-400/30 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <h2 className="text-3xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
                            PDF Compressor
                        </h2>

                        <div className="space-y-8">
                            {/* Step 1 */}
                            <div className="flex gap-6">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-lg font-bold border border-cyan-400/30">
                                        1
                                    </div>
                                    <div className="w-0.5 h-full bg-slate-700/50 mt-4" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-slate-200 mb-3">File Upload</h3>
                                    <ul className="space-y-3 text-slate-400">
                                        <li className="flex items-start gap-2">
                                            <span className="text-cyan-400 mt-1">▸</span>
                                            Click or drag PDF files into the upload zone
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-cyan-400 mt-1">▸</span>
                                            Maximum file size: 50MB
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-cyan-400 mt-1">▸</span>
                                            Supported formats: .pdf
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex gap-6">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-lg font-bold border border-blue-400/30">
                                        2
                                    </div>
                                    <div className="w-0.5 h-full bg-slate-700/50 mt-4" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-slate-200 mb-3">Compression Process</h3>
                                    <div className="space-y-4">
                                        <p className="text-slate-400">
                                            Our system uses advanced algorithms to optimize PDF files while maintaining quality.
                                            Typical processing times:
                                        </p>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="p-4 bg-slate-700/30 rounded-xl border border-slate-600/50">
                                                <p className="text-cyan-400 font-medium">Text Documents</p>
                                                <p className="text-slate-400 text-sm">60-70% size reduction</p>
                                            </div>
                                            <div className="p-4 bg-slate-700/30 rounded-xl border border-slate-600/50">
                                                <p className="text-blue-400 font-medium">Image-heavy PDFs</p>
                                                <p className="text-slate-400 text-sm">30-50% reduction</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex gap-6">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-lg font-bold border border-purple-400/30">
                                        3
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-slate-200 mb-3">Download Results</h3>
                                    <div className="space-y-4">
                                        <p className="text-slate-400">
                                            Once processing completes:
                                        </p>
                                        <div className="flex flex-col xs:flex-row items-start justify-between gap-1.5 xs:gap-3 p-1.5 xs:p-4 bg-slate-700/30 rounded-lg xs:rounded-xl border border-slate-600/50 w-full transition-all hover:border-purple-400/30 box-border text-xs sm:text-base max-[360px]:text-[0.65rem]">
                                            <div className="min-w-0 flex-1 space-y-0.5 pr-1 xs:pr-4 w-full">
                                                <p className="text-slate-200 truncate max-[360px]:text-[0.7rem] xs:text-sm sm:text-base">
                                                    Your compressed file is ready
                                                </p>
                                                <div className="text-slate-400 truncate max-[360px]:text-[0.65rem]">
                                                    Saved as:{" "}
                                                    <code className="text-purple-400 break-words xs:break-all ml-0.5 xs:ml-1.5 max-[360px]:text-[0.7rem] max-[360px]:ml-0">
                                                        [filename]_compressed.pdf
                                                    </code>
                                                </div>
                                            </div>
                                            <button className="shrink-0 w-full min-w-[4rem] max-[360px]:min-w-[3rem] max-[410px]:min-w-[3rem] px-1.5 xs:px-4 py-2 xs:py-2 bg-purple-600/30 hover:bg-purple-500/40 rounded-md xs:rounded-lg text-purple-300 border border-purple-500/30 transition-colors text-[0.7rem] xs:text-sm sm:text-base font-medium max-[360px]:text-[0.65rem] max-[360px]:px-1">
                                                Download Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Metadata Extractor Tutorial */}
                    <div id="metadata-extractor" className="mt-12 max-w-6xl mx-auto p-8 bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700/80">
                        {/* Tutorial Header */}
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-2">
                                Metadata Extraction
                            </h2>
                            <p className="text-gray-400 text-sm">
                                Uncover hidden information from digital files
                            </p>
                        </div>

                        {/* Step-by-Step Guide */}
                        <div className="space-y-8">
                            {/* Step 1 */}
                            <div className="flex gap-6 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-lg font-bold border border-cyan-400/30">
                                        1
                                    </div>
                                    <div className="w-0.5 h-full bg-gray-700/50 mt-4" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-100 mb-3">File Selection</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                                    📷
                                                </div>
                                                <div>
                                                    <p className="text-cyan-400 font-medium">Image Files</p>
                                                    <p className="text-gray-400 text-sm">JPEG, PNG, HEIC, RAW formats</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                                                    📄
                                                </div>
                                                <div>
                                                    <p className="text-blue-400 font-medium">Documents</p>
                                                    <p className="text-gray-400 text-sm">PDF, DOCX, PPTX formats</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex gap-6 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-lg font-bold border border-blue-400/30">
                                        2
                                    </div>
                                    <div className="w-0.5 h-full bg-gray-700/50 mt-4" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-100 mb-3">Metadata Extraction</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                            <p className="text-cyan-400 font-medium">Technical Data</p>
                                            <ul className="text-gray-400 text-sm space-y-2 mt-2">
                                                <li>• EXIF (GPS, Camera settings)</li>
                                                <li>• Creation/modification dates</li>
                                                <li>• File signatures</li>
                                            </ul>
                                        </div>
                                        <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                            <p className="text-blue-400 font-medium">Document Info</p>
                                            <ul className="text-gray-400 text-sm space-y-2 mt-2">
                                                <li>• Author information</li>
                                                <li>• Version history</li>
                                                <li>• Editing timeline</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex gap-6 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-lg font-bold border border-purple-400/30">
                                        3
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-100 mb-3">Data Presentation</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                                                    🔍
                                                </div>
                                                <div>
                                                    <p className="text-purple-400 font-medium">Structured View</p>
                                                    <p className="text-gray-400 text-sm">Key-value pairs with categorization</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                                    📋
                                                </div>
                                                <div>
                                                    <p className="text-cyan-400 font-medium">Raw Data</p>
                                                    <p className="text-gray-400 text-sm">Full JSON output available</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Best Practices */}
                            <div className="mt-8 p-6 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-xl border border-cyan-400/20">
                                <h4 className="text-lg font-semibold text-cyan-400 mb-3">Privacy Tips</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                            🛡️
                                        </div>
                                        <p className="text-gray-400 text-sm">Remove sensitive metadata before sharing files</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                                            🔒
                                        </div>
                                        <p className="text-gray-400 text-sm">Files processed locally - no server upload</p>
                                    </div>
                                </div>
                            </div>

                            {/* Limitations */}
                            <div className="mt-6 p-6 bg-red-900/20 rounded-xl border border-red-800/50">
                                <h4 className="text-lg font-semibold text-red-400 mb-3 flex items-center gap-2">
                                    ⚠️ Current Limitations
                                </h4>
                                <ul className="text-red-300 text-sm space-y-2">
                                    <li>• Encrypted files cannot be analyzed</li>
                                    <li>• Some proprietary formats may not show full data</li>
                                    <li>• Metadata removal not supported (view-only)</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Password Generator Tutorial */}
                    <div id="password-generator" className="mt-12 max-w-6xl mx-auto p-8 bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700/80">
                        {/* Tutorial Header */}
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-2">
                                Secure Password Creation
                            </h2>
                            <p className="text-gray-400 text-sm">
                                Generate strong passwords with customizable options
                            </p>
                        </div>

                        {/* Step-by-Step Guide */}
                        <div className="space-y-8">
                            {/* Step 1 - Configuration */}
                            <div className="flex gap-6 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-lg font-bold border border-cyan-400/30">
                                        1
                                    </div>
                                    <div className="w-0.5 h-full bg-gray-700/50 mt-4" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-100 mb-3">Password Configuration</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                                    ⚙️
                                                </div>
                                                <div>
                                                    <p className="text-cyan-400 font-medium">Length Adjustment</p>
                                                    <p className="text-gray-400 text-sm">Slide between 8-32 characters</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                                                    ✅
                                                </div>
                                                <div>
                                                    <p className="text-blue-400 font-medium">Complexity Options</p>
                                                    <p className="text-gray-400 text-sm">Numbers & Special Characters</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 2 - Generation */}
                            <div className="flex gap-6 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-lg font-bold border border-blue-400/30">
                                        2
                                    </div>
                                    <div className="w-0.5 h-full bg-gray-700/50 mt-4" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-100 mb-3">Password Generation</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                            <p className="text-cyan-400 font-medium">Character Composition</p>
                                            <ul className="text-gray-400 text-sm space-y-2 mt-2">
                                                <li>• Lowercase (a-z)</li>
                                                <li>• Uppercase (A-Z)</li>
                                                <li>• Numbers (0-9)</li>
                                                <li>• Special Characters</li>
                                            </ul>
                                        </div>
                                        <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                                                    🔠
                                                </div>
                                                <div>
                                                    <p className="text-blue-400 font-medium">Secure Randomness</p>
                                                    <p className="text-gray-400 text-sm">Browser-based crypto-secure generation</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 - Usage */}
                            <div className="flex gap-6 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-lg font-bold border border-purple-400/30">
                                        3
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-100 mb-3">Password Management</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                                                    🖨️
                                                </div>
                                                <div>
                                                    <p className="text-purple-400 font-medium">One-Click Generation</p>
                                                    <p className="text-gray-400 text-sm">Instant secure password creation</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/50">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                                    📋
                                                </div>
                                                <div>
                                                    <p className="text-cyan-400 font-medium">Secure Copy</p>
                                                    <p className="text-gray-400 text-sm">Clipboard integration with safety alert</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Best Practices */}
                            <div className="mt-8 p-6 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-xl border border-cyan-400/20">
                                <h4 className="text-lg font-semibold text-cyan-400 mb-3">Security Recommendations</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                            🛡️
                                        </div>
                                        <p className="text-gray-400 text-sm">Always use passwords longer than 12 characters</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                                            🔒
                                        </div>
                                        <p className="text-gray-400 text-sm">Combine with a password manager for best security</p>
                                    </div>
                                </div>
                            </div>

                            {/* Limitations */}
                            <div className="mt-6 p-6 bg-red-900/20 rounded-xl border border-red-800/50">
                                <h4 className="text-lg font-semibold text-red-400 mb-3 flex items-center gap-2">
                                    ⚠️ Important Notes
                                </h4>
                                <ul className="text-red-300 text-sm space-y-2">
                                    <li>• Client-side generation - no password storage</li>
                                    <li>• Randomness depends on browser implementation</li>
                                    <li>• Always audit generated passwords for complexity</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Tutorials;
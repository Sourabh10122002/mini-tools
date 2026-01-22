"use client";

import { useRouter } from "next/navigation";
import { FileImage, FileText, QrCode, FilePdf, ImageSquare, Barcode, Panorama, SelectionBackground, ArrowsMerge, FlipHorizontal, ReadCvLogo, FileArchive, TreeStructure, Password, Key, Files, DeviceRotate, Lock, LockKeyOpen, SmileySad } from "@phosphor-icons/react";
import { motion, useMotionTemplate, useMotionValue, useTransform } from "framer-motion";

const Data = [
    { id: 1, title: "Image to Text", icon: <Panorama size={48} weight="duotone" />, path: "/image-to-text", description: "Extract text from images using OCR technology." },
    { id: 2, title: "PDF to DOCX", icon: <FilePdf size={48} weight="duotone" />, path: "/pdf-to-docx", description: "Convert PDF documents to editable Word files." },
    { id: 3, title: "QR Generator", icon: <QrCode size={48} weight="duotone" />, path: "/qr-code-generator", description: "Create custom QR codes for links and text." },
    { id: 4, title: "DOCX to PDF", icon: <FileText size={48} weight="duotone" />, path: "/docx-to-pdf", description: "Convert Word documents to PDF format." },
    { id: 5, title: "Image to PDF", icon: <ImageSquare size={48} weight="duotone" />, path: "/image-to-pdf", description: "Convert images to a single PDF file." },
    { id: 6, title: "QR Scanner", icon: <Barcode size={48} weight="duotone" />, path: "/qr-code-scanner", description: "Scan and decode QR codes instantly." },
    { id: 7, title: "PDF to Image", icon: <FileImage size={48} weight="duotone" />, path: "/pdf-to-image", description: "Extract pages from PDF as images." },
    { id: 8, title: "Organize PDF", icon: <Files size={48} weight="duotone" />, path: "/organize-pdf", description: "Rearrange, delete, or rotate PDF pages." },
    { id: 9, title: "Remove BG", icon: <SelectionBackground size={48} weight="duotone" />, path: "/image-background-remover", description: "Remove image backgrounds automatically." },
    { id: 10, title: "Merge PDF", icon: <ArrowsMerge size={48} weight="duotone" />, path: "/merge-pdf", description: "Combine multiple PDFs into one file." },
    { id: 11, title: "Invert Image", icon: <FlipHorizontal size={48} weight="duotone" />, path: "/invert-image", description: "Invert the colors of your images." },
    { id: 12, title: "Rotate PDF", icon: <DeviceRotate size={48} weight="duotone" />, path: "/rotate-pdf", description: "Rotate PDF pages permanently." },
    { id: 13, title: "Lock PDF", icon: <Lock size={48} weight="duotone" />, path: "/lock-pdf", description: "Add password protection to PDFs." },
    { id: 14, title: "Unlock PDF", icon: <LockKeyOpen size={48} weight="duotone" />, path: "/unlock-pdf", description: "Remove passwords from PDFs." },
    { id: 15, title: "Img to Favicon", icon: <ReadCvLogo size={48} weight="duotone" />, path: "/image-to-favicon", description: "Generate favicons from images." },
    { id: 16, title: "Compress PDF", icon: <FileArchive size={48} weight="duotone" />, path: "/compress-pdf", description: "Reduce PDF file size without quality loss." },
    { id: 17, title: "Metadata", icon: <TreeStructure size={48} weight="duotone" />, path: "/metadata-extractor", description: "View and edit file metadata." },
    { id: 18, title: "Password Gen", icon: <Password size={48} weight="duotone" />, path: "/password-generator", description: "Generate strong, secure passwords." },
    { id: 19, title: "Authenticator", icon: <Key size={48} weight="duotone" />, path: "/google-authenticator", description: "Two-factor authentication codes." },
];

const Card = ({ searchQuery = "" }) => {
    const router = useRouter();

    const filteredData = Data.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleNavigation = (item) => {
        router.push(item.path);
        window.scrollTo(0, 0);
    };

    if (filteredData.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                <SmileySad size={64} weight="duotone" className="mb-4 opacity-50" />
                <p className="text-xl font-medium">No tools found matching "{searchQuery}"</p>
                <p className="text-sm mt-2 opacity-60">Try searching for something else</p>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center p-6 pb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-7xl">
                {filteredData.map((item) => (
                    <Card3D key={item.id} item={item} onClick={() => handleNavigation(item)} />
                ))}
            </div>
        </div>
    );
};

const Card3D = ({ item, onClick }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [7, -7]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-7, 7]);

    return (
        <motion.div
            onClick={onClick}
            className="group relative h-64 w-full cursor-pointer perspective-1000"
            onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                mouseX.set(x);
                mouseY.set(y);
            }}
            onMouseLeave={() => {
                mouseX.set(0);
                mouseY.set(0);
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="absolute inset-0 rounded-2xl bg-slate-800/50 backdrop-blur-md border border-slate-700/50 p-6 flex flex-col items-center justify-center gap-4 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/30 transition-all duration-300"
            >
                {/* Icon Container with Glow */}
                <div className="relative z-10 p-4 rounded-2xl bg-slate-900/50 border border-slate-700/50 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-colors duration-300">
                    <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                        {item.icon}
                    </div>
                </div>

                {/* Text Content */}
                <div className="text-center z-10 space-y-2">
                    <h3 className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors">{item.title}</h3>
                    <p className="text-sm text-slate-400 group-hover:text-slate-300 line-clamp-2 leading-relaxed px-2">
                        {item.description}
                    </p>
                </div>

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
        </motion.div>
    );
};

export default Card;
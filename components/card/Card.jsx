"use client";

import { useRouter } from "next/navigation";
import { FileImage, FileText, QrCode, FilePdf, ImageSquare, Barcode, Panorama, SelectionBackground, ArrowsMerge, FlipHorizontal, ReadCvLogo, FileArchive, TreeStructure, Password, Key, Files, DeviceRotate, Lock, LockKeyOpen } from "@phosphor-icons/react";
import { motion, useMotionTemplate, useMotionValue, useTransform } from "framer-motion";

const Data = [
    { id: 1, title: "Image to Text", icon: <Panorama size={60} weight="light" />, path: "/image-to-text" },
    { id: 2, title: "PDF to DOCX", icon: <FilePdf size={60} weight="light" />, path: "/pdf-to-docx" },
    { id: 3, title: "QR Code Generator", icon: <QrCode size={60} weight="light" />, path: "/qr-code-generator" },
    { id: 4, title: "DOCX to PDF", icon: <FileText size={60} weight="light" />, path: "/docx-to-pdf" },
    { id: 5, title: "Image to PDF", icon: <ImageSquare size={60} weight="light" />, path: "/image-to-pdf" },
    { id: 6, title: "QR Code Scanner", icon: <Barcode size={60} weight="light" />, path: "/qr-code-scanner" },
    { id: 7, title: "PDF to Image", icon: <FileImage size={60} weight="light" />, path: "/pdf-to-image" },
    { id: 8, title: "Organize PDF", icon: <Files size={60} weight="light" />, path: "/organize-pdf" },
    { id: 9, title: "Image Background Remover", icon: <SelectionBackground size={60} weight="light" />, path: "/image-background-remover" },
    { id: 10, title: "Merge PDF", icon: <ArrowsMerge size={60} weight="light" />, path: "/merge-pdf" },
    { id: 11, title: "Invert Image", icon: <FlipHorizontal size={60} weight="light" />, path: "/invert-image" },
    { id: 12, title: "Rotate PDF", icon: <DeviceRotate size={60} weight="light" />, path: "/rotate-pdf" },
    { id: 13, title: "Lock PDF", icon: <Lock size={60} weight="light" />, path: "/lock-pdf" },
    { id: 14, title: "Unlock PDF", icon: <LockKeyOpen size={60} weight="light" />, path: "/unlock-pdf" },
    { id: 15, title: "Image to Favicon", icon: <ReadCvLogo size={60} weight="light" />, path: "/image-to-favicon" },
    { id: 16, title: "Compress PDF", icon: <FileArchive size={60} weight="light" />, path: "/compress-pdf" },
    { id: 17, title: "Metadata Extractor", icon: <TreeStructure size={60} weight="light" />, path: "/metadata-extractor" },
    { id: 18, title: "Password Generator", icon: <Password size={60} weight="light" />, path: "/password-generator" },
    { id: 19, title: "Google Authenticator", icon: <Key size={60} weight="light" />, path: "/google-authenticator" },
];

const Card = () => {
    const router = useRouter();

    const handleNavigation = (item) => {
        router.push(item.path);
        window.scrollTo(0, 0);
    };

    return (
        <div className="flex items-center justify-center p-6 pb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center perspective-1000">
                {Data.map((item) => (
                    <Card3D key={item.id} item={item} onClick={() => handleNavigation(item)} />
                ))}
            </div>
        </div>
    );
};

const Card3D = ({ item, onClick }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useTransform(mouseY, [-1, 1], [15, -15]);
    const rotateY = useTransform(mouseX, [-1, 1], [-15, 15]);
    const spotlightX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
    const spotlightY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);
    const spotlightOpacity = useTransform(mouseX, [-1, 1], [0.2, 0.2]);

    const spotlightGradient = useMotionTemplate`
    radial-gradient(
      circle at ${spotlightX} ${spotlightY},
      rgb(77, 130, 255) 30%,
      transparent 100%
    )
  `;

    return (
        <motion.div
            onClick={onClick}
            className="w-full h-52 relative cursor-pointer rounded-xl bg-transparent shadow-lg"
            onPointerMove={(e) => {
                const bounds = e.currentTarget.getBoundingClientRect();
                mouseX.set((e.clientX - bounds.x) / bounds.width - 0.5);
                mouseY.set((e.clientY - bounds.y) / bounds.height - 0.5);
            }}
            onHoverStart={() => { }}
            onHoverEnd={() => {
                mouseX.set(0);
                mouseY.set(0);
            }}
            style={{ rotateX, rotateY, transformPerspective: 1000 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <motion.div
                className="absolute inset-0 rounded-xl pointer-events-none"
                style={{ background: spotlightGradient, opacity: spotlightOpacity }}
            />

            <motion.div
                className="w-full h-full flex shadow-md shadow-blue-500/50 flex-col items-center justify-center gap-4 border-[0.2px] border-gray-200 rounded-xl py-9 px-14"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
            >
                <div className="text-blue-500 z-10">{item.icon}</div>
                <p className="text-lg font-semibold text-gray-200 text-center z-10">{item.title}</p>
            </motion.div>
        </motion.div>
    );
};

export default Card;
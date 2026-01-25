'use client';
import {
    PhotoIcon,
    DocumentArrowUpIcon,
    QrCodeIcon,
    CommandLineIcon,
    LinkIcon,
    LockClosedIcon,
    ArrowsPointingInIcon,
    TrashIcon,
    ChartBarIcon,
    CpuChipIcon,
    ViewfinderCircleIcon
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

const ShowCase = () => {
    const router = useRouter();
    const handleNavigate = (path) => {
        console.log(path);
        router.push(path);
        window.scrollTo(0, 0);
    };

    return (
        <div className="min-h-screen text-gray-100 p-8 pt-20 py-12">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent inline-block pb-1 leading-tight">
                        Featured Tools
                    </h1>
                    <div className="h-1 w-32 bg-cyan-400 mx-auto mt-4 rounded-full animate-pulse" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tools.map((tool, index) => (
                        <div
                            key={index}
                            className="group p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-[1.02] relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-cyan-500/5 group-hover:bg-cyan-500/10 transition-colors duration-300" />
                            <div className="relative">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-cyan-500/20 rounded-lg">
                                        <tool.icon className="w-8 h-8 text-cyan-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-cyan-300">{tool.name}</h3>
                                </div>
                                <p className="text-gray-300 leading-relaxed">{tool.description}</p>
                                <div className="mt-6 flex items-center gap-2 text-cyan-300 cursor-pointer">
                                    <span className="text-sm">
                                        <p onClick={() => handleNavigate(tool.path)} className="group-hover:text-cyan-400">
                                            Explore Tool
                                        </p>
                                    </span>
                                    <span className="transition-transform group-hover:translate-x-1">→</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const tools = [
    {
        name: "Image to Text",
        icon: PhotoIcon,
        path: "/image-to-text",
        description: "Extract text from images with high accuracy OCR technology, supporting multiple languages and formats."
    },
    {
        name: "PDF to DOCX",
        icon: DocumentArrowUpIcon,
        path: "/pdf-to-docx",
        description: "Convert PDF documents to editable Word files while preserving formatting and layout."
    },
    {
        name: "QR Code Generator",
        icon: QrCodeIcon,
        path: "/qr-code-generator",
        description: "Create customizable QR codes for URLs, contact info, and more with dynamic color options."
    },
    {
        name: "DOCX to PDF",
        icon: DocumentArrowUpIcon,
        path: "/docx-to-pdf",
        description: "Transform Word documents into professional PDF files with perfect formatting consistency."
    },
    {
        name: "Image to PDF",
        icon: PhotoIcon,
        path: "/image-to-pdf",
        description: "Convert multiple image formats to PDF documents with adjustable page sizes and orientations."
    },
    {
        name: "QR Code Scanner",
        icon: ViewfinderCircleIcon,
        path: "/qr-code-scanner",
        description: "Scan QR codes directly from your device's camera or uploaded images with instant decoding."
    },
    {
        name: "PDF to Image",
        icon: PhotoIcon,
        path: "/pdf-to-image",
        description: "Convert PDF pages to high-quality images in JPG, PNG, or WEBP formats."
    },
    {
        name: "Background Remover",
        icon: TrashIcon,
        path: "/image-background-remover",
        description: "Automatically remove backgrounds from images with AI-powered precision."
    },
    {
        name: "Merge PDF",
        icon: ArrowsPointingInIcon,
        path: "/merge-pdf",
        description: "Combine multiple PDF files into a single document with drag-and-drop reorganization."
    },
    {
        name: "Invert Image",
        icon: CommandLineIcon,
        path: "/invert-image",
        description: "Create negative versions of images with color inversion while preserving quality."
    },
    {
        name: "Image to Favicon",
        icon: LinkIcon,
        path: "/image-to-favicon",
        description: "Generate website favicons from images with automatic resizing and format conversion."
    },
    {
        name: "Compress PDF",
        icon: ChartBarIcon,
        path: "/compress-pdf",
        description: "Reduce PDF file sizes without noticeable quality loss using smart compression algorithms."
    },
    {
        name: "Metadata Extractor",
        icon: CpuChipIcon,
        path: "/metadata-extractor",
        description: "View and analyze hidden metadata in files while maintaining privacy and security."
    },
    {
        name: "Password Generator",
        icon: LockClosedIcon,
        path: "/password-generator",
        description: "Create strong, secure passwords with customizable length and character sets."
    }
];

export default ShowCase;
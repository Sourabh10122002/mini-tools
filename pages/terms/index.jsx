import React from 'react';
import {
    DocumentArrowUpIcon,
    PhotoIcon,
    ExclamationCircleIcon,
    UserIcon,
    ShieldCheckIcon,
    TrashIcon,
    CloudArrowUpIcon,
    ClockIcon,
    InformationCircleIcon
} from '@heroicons/react/24/outline';

 const TermsOfService = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-800 to-gray-900 p-8 pt-20 py-12">
            <div className="max-w-4xl mx-auto animate-fade-in-up">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent inline-block pb-1 leading-tight">
                        Terms of Service
                    </h1>
                    <div className="h-1 w-32 bg-cyan-400 mx-auto mt-4 rounded-full animate-pulse" />
                </div>

                {/* Terms Sections */}
                <div className="space-y-12">
                    {termsSections.map((section, index) => (
                        <section
                            key={index}
                            className="group p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-cyan-400/50 
              transition-all duration-300 hover:scale-[1.005] relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-cyan-500/5 group-hover:bg-cyan-500/10 transition-colors duration-300" />
                            <div className="relative">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-cyan-500/20 rounded-lg">
                                        {section.icon}
                                    </div>
                                    <h2 className="text-2xl font-bold text-cyan-400">{section.title}</h2>
                                </div>
                                <p className="text-gray-300 leading-relaxed">{section.content}</p>
                                {section.points && (
                                    <ul className="mt-4 pl-6 space-y-2 text-cyan-100">
                                        {section.points.map((point, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <span className="text-cyan-400">▹</span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </section>
                    ))}
                </div>

                {/* Effective Date */}
                <div className="mt-16 text-center border-t border-white/10 pt-12">
                    <div className="flex justify-center items-center gap-3 mb-6">
                        <ClockIcon className="w-6 h-6 text-cyan-400" />
                        <h3 className="text-xl font-semibold text-white">Effective Date</h3>
                    </div>
                    <p className="text-sm text-cyan-300 flex items-center justify-center gap-2">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                        September 2023
                    </p>
                </div>
            </div>
        </div>
    );
};

const termsSections = [
    {
        title: "Acceptance of Terms",
        icon: <ShieldCheckIcon className="w-8 h-8 text-cyan-400" />,
        content: "By using our tools, you agree to these terms. Prohibited uses include:",
        points: [
            "Illegal or malicious activities",
            "Bulk automated processing",
            "Reverse engineering our services",
            "Commercial resale of outputs"
        ]
    },
    {
        title: "Service Usage",
        icon: <DocumentArrowUpIcon className="w-8 h-8 text-cyan-400" />,
        content: "Limitations and requirements:",
        points: [
            "Max 2GB file size for conversions",
            "100MB limit for image processing",
            "50 page limit for PDF tools",
            "Personal use only unless licensed"
        ]
    },
    {
        title: "User Responsibilities",
        icon: <UserIcon className="w-8 h-8 text-cyan-400" />,
        content: "You agree to:",
        points: [
            "Only upload content you own or have rights to",
            "Not upload malicious files",
            "Comply with all applicable laws",
            "Accept responsibility for your outputs"
        ]
    },
    {
        title: "Content Ownership",
        icon: <PhotoIcon className="w-8 h-8 text-cyan-400" />,
        content: "Regarding uploaded and processed content:",
        points: [
            "You retain ownership of original files",
            "We claim no rights to processed outputs",
            "Deletion requests honored within 24 hours",
            "No responsibility for lost or corrupted files"
        ]
    },
    {
        title: "Service Limitations",
        icon: <ExclamationCircleIcon className="w-8 h-8 text-cyan-400" />,
        content: "We cannot guarantee:",
        points: [
            "100% accuracy in conversions",
            "Perfect OCR text extraction",
            "Complete background removal",
            "Metadata-free outputs"
        ]
    },
    {
        title: "Prohibited Content",
        icon: <TrashIcon className="w-8 h-8 text-cyan-400" />,
        content: "You may not process:",
        points: [
            "Copyrighted material without permission",
            "Malware or harmful files",
            "Child exploitation material",
            "Content violating privacy rights"
        ]
    },
    {
        title: "Service Availability",
        icon: <CloudArrowUpIcon className="w-8 h-8 text-cyan-400" />,
        content: "We provide:",
        points: [
            "99.9% uptime target",
            "Scheduled maintenance windows",
            "No SLA for free tier users",
            "Best-effort support"
        ]
    },
    {
        title: "Termination",
        icon: <InformationCircleIcon className="w-8 h-8 text-cyan-400" />,
        content: "We may terminate access for:",
        points: [
            "Violation of these terms",
            "Abusive usage patterns",
            "Security threats",
            "Legal compliance requirements"
        ]
    }
];

export default TermsOfService;
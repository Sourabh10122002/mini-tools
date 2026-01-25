import React from 'react';
import {
    DocumentArrowUpIcon,
    QrCodeIcon,
    PhotoIcon,
    LockClosedIcon,
    EnvelopeIcon,
    ArrowRightIcon,
    CommandLineIcon,
    CpuChipIcon,
    TrashIcon,
    ChartBarIcon,
    ArrowsPointingInIcon,
    LinkIcon,
    UserGroupIcon,
    GlobeAltIcon,
    ShieldExclamationIcon,
    BellAlertIcon,
    ClipboardDocumentListIcon,
    CloudArrowUpIcon
} from '@heroicons/react/24/outline';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen text-gray-100 p-8 pt-20 py-12">
            <div className="max-w-4xl mx-auto animate-fade-in-up">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-1 bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent inline-block pb-1 leading-tight">
                        Privacy Policy
                    </h1>
                    <div className="h-1 w-32 bg-cyan-400 mx-auto mt-4 rounded-full animate-pulse" />
                </div>

                {/* Tools Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {[
                        { name: "Image to Text", icon: <PhotoIcon className="w-6 h-6" /> },
                        { name: "PDF to DOCX", icon: <DocumentArrowUpIcon className="w-6 h-6" /> },
                        { name: "QR Code Generator", icon: <QrCodeIcon className="w-6 h-6" /> },
                        { name: "DOCX to PDF", icon: <DocumentArrowUpIcon className="w-6 h-6" /> },
                        { name: "Image to PDF", icon: <PhotoIcon className="w-6 h-6" /> },
                        { name: "QR Code Scanner", icon: <QrCodeIcon className="w-6 h-6" /> },
                        { name: "PDF to Image", icon: <PhotoIcon className="w-6 h-6" /> },
                        { name: "Image Bg Remover", icon: <TrashIcon className="w-6 h-6" /> },
                        { name: "Merge PDF", icon: <ArrowsPointingInIcon className="w-6 h-6" /> },
                        { name: "Invert Image", icon: <CommandLineIcon className="w-6 h-6" /> },
                        { name: "Image to Favicon", icon: <LinkIcon className="w-6 h-6" /> },
                        { name: "Compress PDF", icon: <ChartBarIcon className="w-6 h-6" /> },
                        { name: "Metadata Extractor", icon: <CpuChipIcon className="w-6 h-6" /> },
                        { name: "Password Generator", icon: <LockClosedIcon className="w-6 h-6" /> },
                    ].map((tool, index) => (
                        <div
                            key={index}
                            className="p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-cyan-500/20 transition-all duration-300 
              hover:scale-105 cursor-pointer border border-white/10 hover:border-cyan-400 flex items-center gap-3"
                        >
                            <span className="text-cyan-400">{tool.icon}</span>
                            <span className="text-sm font-medium">{tool.name}</span>
                        </div>
                    ))}
                </div>

                {/* Expanded Policy Sections */}
                <div className="space-y-12">
                    {policySections.map((section, index) => (
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

                {/* Contact Section */}
                <div className="mt-16 text-center border-t border-white/10 pt-12">
                    <div className="flex justify-center items-center gap-3 mb-6">
                        <EnvelopeIcon className="w-6 h-6 text-cyan-400" />
                        <h3 className="text-xl font-semibold">Contact Us</h3>
                    </div>
                    <a
                        href="mailto:support@example.com"
                        className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-colors
            border-b border-dashed border-cyan-400 hover:border-solid"
                    >
                        support@example.com
                        <ArrowRightIcon className="w-4 h-4 animate-bounce" />
                    </a>
                    <p className="mt-8 text-sm text-cyan-300 flex items-center justify-center gap-2">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                        Last Updated: September 2023
                    </p>
                </div>
            </div>
        </div>
    );
};

const policySections = [
    {
        title: "Data Collection",
        icon: <ClipboardDocumentListIcon className="w-8 h-8 text-cyan-400" />,
        content: "We collect minimal data necessary for operations:",
        points: [
            "Uploaded files processed in temporary memory",
            "Session cookies for security validation",
            "Basic usage metrics (no personal identifiers)",
            "Error reports for service improvement"
        ]
    },
    {
        title: "Data Usage",
        icon: <ChartBarIcon className="w-8 h-8 text-cyan-400" />,
        content: "Collected data helps us:",
        points: [
            "Provide conversion services",
            "Improve tool performance",
            "Prevent abuse and security threats",
            "Generate anonymous usage statistics"
        ]
    },
    {
        title: "Cookies",
        icon: <LockClosedIcon className="w-8 h-8 text-cyan-400" />,
        content: "We use essential cookies for:",
        points: [
            "Session management during file processing",
            "CSRF protection for form submissions",
            "Load balancing across servers",
            "Never for tracking or advertising"
        ]
    },
    {
        title: "Children's Privacy",
        icon: <UserGroupIcon className="w-8 h-8 text-cyan-400" />,
        content: "Our services are not directed at children under 13. We do not knowingly collect personal information from minors. If we discover underage usage, we immediately delete all related data."
    },
    {
        title: "International Transfers",
        icon: <GlobeAltIcon className="w-8 h-8 text-cyan-400" />,
        content: "Data may be processed globally through our CDN partners. All transfers comply with GDPR adequacy decisions and EU-US Privacy Shield frameworks."
    },
    {
        title: "Compliance",
        icon: <ShieldExclamationIcon className="w-8 h-8 text-cyan-400" />,
        content: "We adhere to:",
        points: [
            "GDPR for European users",
            "CCPA for California residents",
            "PIPEDA for Canadian users",
            "Industry-standard security protocols"
        ]
    },
    {
        title: "Data Breach",
        icon: <BellAlertIcon className="w-8 h-8 text-cyan-400" />,
        content: "In the unlikely event of a breach:",
        points: [
            "72-hour notification protocol",
            "Full forensic investigation",
            "Clear communication to affected users",
            "Immediate security patches"
        ]
    },
    {
        title: "Policy Changes",
        icon: <ClipboardDocumentListIcon className="w-8 h-8 text-cyan-400" />,
        content: "Updates will be:",
        points: [
            "Posted 30 days before taking effect",
            "Highlighted on our homepage",
            "Archived with version history",
            "Applicable to future data only"
        ]
    },
    {
        title: "File Processing",
        icon: <DocumentArrowUpIcon className="w-8 h-8 text-cyan-400" />,
        content: "For conversion tools:",
        points: [
            "Image to Text: Uploaded images analyzed in-memory, deleted immediately after text extraction",
            "PDF/DOCX Conversion: Files temporarily stored during format conversion (max 1 hour)",
            "Merge PDF: Combined files exist only during active session",
            "Compress PDF: Original and compressed versions purged after download"
        ]
    },
    {
        title: "User Uploads",
        icon: <CloudArrowUpIcon className="w-8 h-8 text-cyan-400" />,
        content: "Handling of uploaded content:",
        points: [
            "Image Processing (BG Remover/Favicon/Invert): Pixel data never leaves our secure servers",
            "PDF to Image: Rasterization occurs in isolated containers",
            "Metadata Extractor: Analysis done without file storage",
            "All uploads: Maximum 2GB file size limit, encrypted in transit"
        ]
    },
    {
        title: "Generated Content",
        icon: <QrCodeIcon className="w-8 h-8 text-cyan-400" />,
        content: "Temporary storage of outputs:",
        points: [
            "QR Codes: Generated images deleted after 24 hours",
            "Password Generator: Never stores generated passwords",
            "Favicons: Converted .ico files removed after 1 hour",
            "Scanned QR Data: Results not logged or retained"
        ]
    },
    {
        title: "Security Protocols",
        icon: <LockClosedIcon className="w-8 h-8 text-cyan-400" />,
        content: "Tool-specific protections:",
        points: [
            "PDF Tools: Sandboxed conversion environments",
            "Image Processing: EXIF data stripping for privacy",
            "Password Generator: Client-side only entropy generation",
            "Metadata: Redaction options available before download"
        ]
    },
    {
        title: "Data Retention",
        icon: <TrashIcon className="w-8 h-8 text-cyan-400" />,
        content: "Automatic cleanup schedule:",
        points: [
            "Conversion files: 1 hour after processing",
            "Failed uploads: Immediate deletion",
            "Error logs: 7 days retention",
            "User sessions: Terminated after 15 minutes inactivity"
        ]
    }
];

export default PrivacyPolicy;
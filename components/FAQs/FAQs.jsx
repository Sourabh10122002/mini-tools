import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CaretDown } from '@phosphor-icons/react';

const FAQs = () => {
    const faqsData = [
        {
            question: 'What tools does this platform offer?',
            answer:
                'We offer a wide range of tools including Image to Text, PDF to DOCX, QR Code Generator, DOCX to PDF, Image to PDF, QR Code Scanner, PDF to Image, Image Background Remover, Merge PDF, Invert Image, Image to Favicon, Compress PDF, Metadata Extractor, and Password Generator.',
        },
        {
            question: 'How do I use the Image to Text tool?',
            answer:
                'Simply upload an image containing text, and our OCR technology will extract the text for you. You can then copy or download the extracted text.',
        },
        {
            question: 'Is there a limit to the file size I can upload?',
            answer:
                'Yes, there is a file size limit of 25MB for most tools. This ensures optimal performance and quick processing times.',
        },
        {
            question: 'Are my files safe and secure?',
            answer:
                'Absolutely! We prioritize your privacy and security. All uploaded files are processed securely and deleted automatically after 24 hours.',
        },
        {
            question: 'Do I need to create an account to use the tools?',
            answer:
                'No, you can use most of our tools without creating an account. However, signing up allows you to access additional features and track your usage history.',
        },
        {
            question: 'Can I use these tools on mobile devices?',
            answer:
                'Yes, our platform is fully responsive and works seamlessly on both desktop and mobile devices.',
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);
    const faqRefs = useRef([]);

    const toggleFAQ = (index) => {
        // When opening a new FAQ, scroll it into view if needed
        if (openIndex !== index) {
            setTimeout(() => {
                // Add a small delay to allow animation to start
                faqRefs.current[index]?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                });
            }, 50);
        }
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-800 to-gray-900 py-12 pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Original background effects */}
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-800/20 rounded-full mix-blend-screen filter blur-3xl z-0"></div>
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-gray-900/20 rounded-full mix-blend-screen filter blur-3xl z-0"></div>

            {/* New white blur flare ball */}
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl z-0 animate-pulse"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-12">
                    <div className="inline-block bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                        <h2 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">FAQs</h2>
                        <p className="mt-4 text-xl text-blue-200/90">Find answers to common questions about our platform</p>
                    </div>
                </motion.div>
                <div className="flex flex-col-reverse lg:flex-row gap-8">
                    <div className="w-full lg:w-1/2 space-y-4">
                        {faqsData.map((faq, index) => (
                            <motion.div
                                key={index}
                                ref={el => faqRefs.current[index] = el}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-blue-400/30 transition duration-300"
                                layout
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex justify-between items-center text-left focus:outline-none p-6"
                                >
                                    <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                                    <motion.span
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                                        className="text-blue-400"
                                    >
                                        <CaretDown weight="fill" className="h-6 w-6" />
                                    </motion.span>
                                </button>
                                <AnimatePresence initial={false}>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{
                                                opacity: 1,
                                                height: 'auto'
                                            }}
                                            exit={{
                                                opacity: 0,
                                                height: 0
                                            }}
                                            transition={{
                                                duration: 0.4,
                                                ease: [0.4, 0, 0.2, 1],
                                                opacity: { duration: 0.25 }
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 text-blue-200">{faq.answer}</div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                    <div className="w-full lg:w-1/2 flex items-center justify-center relative">
                        {/* White flare behind the image */}
                        <div className="absolute w-56 h-56 bg-white/20 rounded-full filter blur-xl z-0"></div>

                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="w-full h-full flex items-center justify-center relative z-10">
                            <img src="/images/Faqs.png" alt="FAQs Vector" className="w-full h-auto max-w-md mx-auto relative z-10" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQs;
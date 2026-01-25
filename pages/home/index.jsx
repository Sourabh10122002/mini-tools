"use client";

import { useState } from 'react';
import Card from '@/components/card/Card';
import FAQs from '@/components/FAQs/FAQs';
import { MagnifyingGlass, Sparkle } from "@phosphor-icons/react";
import { motion } from "framer-motion";

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className='pt-24 pb-12'>


            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4"
                    >
                        <Sparkle size={16} weight="fill" />
                        <span>All-in-one Developer Tools</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight"
                    >
                        Simplify Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Workflow</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg text-slate-400 leading-relaxed"
                    >
                        A curated collection of powerful tools to help you convert, generate, and edit files with ease. Free, fast, and secure.
                    </motion.p>

                    {/* Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="relative max-w-md mx-auto mt-8 group"
                    >
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                            <MagnifyingGlass size={20} className="text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search for a tool..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-slate-800/50 backdrop-blur-xl border border-slate-700 text-white pl-12 pr-4 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all shadow-lg placeholder:text-slate-500"
                        />
                        <div className="absolute inset-0 rounded-2xl bg-blue-500/5 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none"></div>
                    </motion.div>
                </div>

                {/* Tools Grid */}
                <Card searchQuery={searchQuery} />

                {/* FAQs */}
                <div className="mt-2">
                    <FAQs />
                </div>
            </div>
        </div>
    )
}

export default Home;
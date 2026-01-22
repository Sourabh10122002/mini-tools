"use client";

import React, { useState } from "react";
import { Nut, X, List } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Blogs", path: "/blogs" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" }
    ];

    return (
        <nav className="fixed w-full top-0 left-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800/50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center gap-2 group">
                        <motion.div 
                            whileHover={{ rotate: 15 }} 
                            transition={{ type: "spring", stiffness: 300 }}
                            className="flex items-center gap-2"
                        >
                            <Nut size={32} weight="duotone" className="text-blue-500 group-hover:text-blue-400 transition-colors" />
                            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 tracking-wide">
                                Mini Tools
                            </h1>
                        </motion.div>
                    </Link>
                    
                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <ul className="flex space-x-8">
                            {navItems.map((item) => (
                                <li key={item.path}>
                                    <Link 
                                        href={item.path} 
                                        className={`relative text-sm font-medium transition-colors duration-200 ${
                                            pathname === item.path 
                                                ? "text-blue-400" 
                                                : "text-slate-400 hover:text-slate-100"
                                        }`}
                                    >
                                        {item.name}
                                        {pathname === item.path && (
                                            <motion.div 
                                                className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]" 
                                                layoutId="underline" 
                                            />
                                        )}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button 
                        whileTap={{ scale: 0.95 }} 
                        onClick={() => setMenuOpen(!menuOpen)} 
                        className="md:hidden p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors focus:outline-none"
                    >
                        {menuOpen ? <X className="h-6 w-6" weight="bold" /> : <List className="h-6 w-6" weight="bold" />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <motion.div 
                    initial={{ opacity: 0, height: 0 }} 
                    animate={{ opacity: 1, height: "auto" }} 
                    exit={{ opacity: 0, height: 0 }} 
                    transition={{ duration: 0.2 }} 
                    className="md:hidden bg-slate-900 border-b border-slate-800 absolute w-full shadow-2xl overflow-hidden"
                >
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navItems.map((item) => (
                            <Link 
                                key={item.path} 
                                href={item.path} 
                                onClick={() => setMenuOpen(false)} 
                                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                                    pathname === item.path 
                                        ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" 
                                        : "text-slate-400 hover:bg-slate-800 hover:text-slate-100"
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
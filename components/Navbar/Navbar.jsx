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
        <nav className="bg-white text-gray-900 shadow-md fixed w-full top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center gap-2">
                        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
                            <Nut size={40} weight="duotone" className="text-blue-600" />
                            <h1 className="text-xl font-bold text-blue-600 tracking-wide">Mini Tools</h1>
                        </motion.div>
                    </Link>
                    <div className="hidden md:block">
                        <ul className="flex space-x-8">
                            {navItems.map((item) => (
                                <li key={item.path}>
                                    <Link href={item.path} className={`relative text-base font-medium transition-colors ${pathname === item.path ? "text-blue-600" : "text-gray-600 hover:text-blue-600"}`}>
                                        {item.name}
                                        {pathname === item.path && (
                                            <motion.div className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600" layoutId="underline" />
                                        )}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <motion.button whileTap={{ scale: 0.95 }} onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none">
                        {menuOpen ? <X className="h-6 w-6" weight="bold" /> : <List className="h-6 w-6" weight="bold" />}
                    </motion.button>
                </div>
            </div>
            {menuOpen && (
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.2 }} className="md:hidden absolute w-full bg-white shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navItems.map((item) => (
                            <Link key={item.path} href={item.path} onClick={() => setMenuOpen(false)} className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === item.path ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"}`}>
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
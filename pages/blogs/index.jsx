'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { blogData } from "@/data/blogData";

const BlogGrid = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    const handleBlogClick = (blog) => {
        router.push(`/blog/${blog.slug}`);
    };

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    if (!blogData) {
        return <div className="text-white text-center">No blog data available.</div>;
    }

    return (
        <div className="min-h-screen p-8">
            <div className="container mx-auto">
                <h1
                    style={{ fontSize: '3rem' }}
                    className="font-bold mt-10 my-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
                >
                    Blogs
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {loading
                        ? Array(6)
                            .fill(0)
                            .map((_, index) => (
                                <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg animate-pulse">
                                    <div className="w-full h-48 bg-gray-700"></div>
                                    <div className="p-6">
                                        <div className="h-6 bg-gray-700 rounded w-3/4 mb-4"></div>
                                        <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
                                        <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                                    </div>
                                </div>
                            ))
                        : blogData.map((blog) => (
                            <motion.div
                                key={blog.slug}
                                onClick={() => handleBlogClick(blog)}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
                            >
                                <img src={blog.img} alt={blog.title} className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <h2 className="text-xl font-semibold text-white mb-2">{blog.title}</h2>
                                    <p className="text-gray-300">{blog.description}</p>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {blog.tags.map((tag, index) => (
                                            <motion.span
                                                key={index}
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ duration: 0.2 }}
                                                className="px-4 py-2 bg-blue-600 text-sm text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                                            >
                                                {tag}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default BlogGrid;

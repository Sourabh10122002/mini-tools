import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { blogData } from "../../data/blogData";

const BlogDetailPage = () => {
    const router = useRouter();
    const { slug } = router.query;

    const blog = blogData.find((item) => item.slug === slug);

    if (!blog) {
        return (
            <div className="bg-gradient-to-br from-slate-900 via-blue-800 to-gray-900 min-h-screen flex items-center justify-center">
                <h1 className="text-2xl text-white">Blog not found.</h1>
            </div>
        );
    }

    const recentBlogs = blogData
        .filter((b) => b.slug !== blog.slug)
        .slice(-3)
        .reverse();

    const tableOfContents = blog.content
        .filter((section) => section.h1 || section.h2 || section.h3)
        .map((section, index) => ({
            id: `section-${index}`,
            text: section.h1 || section.h2 || section.h3,
            level: section.h1 ? 1 : section.h2 ? 2 : 3,
        }));

    return (
        <div className="bg-gradient-to-br from-slate-900 via-blue-800 to-gray-900 min-h-screen pt-24 p-8">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-3">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-6"
                    >
                        {blog.title}
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex flex-wrap gap-2 mb-8"
                    >
                        {blog.tags.map((tag, index) => (
                            <span key={index} className="px-4 py-2 bg-blue-600 text-sm text-white rounded-lg">
                                {tag}
                            </span>
                        ))}
                    </motion.div>

                    <motion.img
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        src={blog.img}
                        alt={blog.title}
                        className="w-full max-h-96 object-cover rounded-lg mb-8"
                    />

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-lg text-gray-300 mb-8"
                    >
                        {blog.description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="prose prose-invert max-w-none"
                    >
                        {blog.content.map((section, index) => {
                            if (section.h1) return <h1 key={index} id={`section-${index}`} className="text-3xl font-bold text-white mb-4">{section.h1}</h1>;
                            if (section.h2) return <h2 key={index} id={`section-${index}`} className="text-2xl font-bold text-white mb-4">{section.h2}</h2>;
                            if (section.h3) return <h3 key={index} id={`section-${index}`} className="text-xl font-bold text-white mb-4">{section.h3}</h3>;
                            if (section.text) return <p key={index} className="text-gray-300 mb-4">{section.text}</p>;
                            if (section.ul) return (
                                <ul key={index} className="list-disc list-inside text-gray-300 mb-4">
                                    {section.ul.split("<li>").slice(1).map((item, i) => (
                                        <li key={i}>{item.replace("</li>", "")}</li>
                                    ))}
                                </ul>
                            );
                            if (section.code) return <pre key={index} className="bg-gray-800 p-4 rounded-lg mb-4"><code className="text-gray-300">{section.code}</code></pre>;
                            return null;
                        })}
                    </motion.div>
                </div>

                <div className="lg:col-span-1">
                    <h2 className="text-2xl font-bold text-white mb-6">Recent Blogs</h2>
                    {recentBlogs.map((recent) => (
                        <motion.div
                            key={recent.slug}
                            onClick={() => router.push(`/blogs/${recent.slug}`)}
                            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 mb-4"
                        >
                            <img src={recent.img} alt={recent.title} className="w-full h-32 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-white mb-2">{recent.title}</h3>
                                <p className="text-gray-300 text-sm">{recent.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogDetailPage;
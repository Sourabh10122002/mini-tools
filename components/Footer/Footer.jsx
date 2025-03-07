import { Heart, Code, Envelope, InstagramLogo, GithubLogo, Nut, XLogo } from "@phosphor-icons/react";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-slate-900 to-slate-800 text-slate-300 pt-16 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 group">
                            <Nut size={40} weight="duotone" className="text-blue-500 group-hover:text-blue-400 transition-all group-hover:rotate-[30deg]" />
                            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                Mini Tools
                            </h2>
                        </div>
                        <p className="text-sm leading-relaxed">
                            Crafting powerful tools for modern developers. Simplify your workflow with our curated collection.
                        </p>
                    </div>

                    {/* Resources Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-blue-400 mb-2">Resources</h3>
                        <ul className="space-y-2">
                            <li><a href="/tutorials" className="footer-link-hover">Tutorials</a></li>
                            <li><a href="/blogs" className="footer-link-hover">Blog</a></li>
                            <li><a href="/showcase" className="footer-link-hover">Showcase</a></li>
                        </ul>
                    </div>

                    {/* Legal Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-blue-400 mb-2">Legal</h3>
                        <ul className="space-y-2">
                            <li><a href="/contact" className="footer-link-hover">Contact Us</a></li>
                            <li><a href="/privacy-policy" className="footer-link-hover">Privacy Policy</a></li>
                            <li><a href="/terms" className="footer-link-hover">Terms of Service</a></li>
                        </ul>
                    </div>

                    {/* Social Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-blue-400 mb-2">Connect</h3>
                        <div className="flex space-x-4">
                            {[
                                { icon: XLogo, label: 'Twitter', link: 'https://twitter.com/yourprofile' },
                                { icon: InstagramLogo, label: 'Instagram', link: 'https://instagram.com/yourprofile' },
                                { icon: GithubLogo, label: 'GitHub', link: 'https://github.com/yourprofile' },
                                { icon: Envelope, label: 'Email', link: 'mailto:your@email.com' },
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full bg-slate-800 hover:bg-blue-500 transition-all duration-300 hover:-translate-y-1"
                                    aria-label={social.label}
                                >
                                    <social.icon size={24} className="text-slate-300" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-slate-700/50 mb-8" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center pb-8 space-y-4 md:space-y-0">
                    <div className="flex items-center space-x-2 text-sm">
                        <span>Made with</span>
                        <Heart size={18} className="text-red-500 animate-pulse" />
                        <span>and</span>
                        <Code size={18} className="text-blue-400" />
                    </div>

                    <div className="text-sm text-slate-400">
                        © {new Date().getFullYear()} Mini Tools. All rights reserved.
                    </div>
                </div>
            </div>

            {/* Style for link hover effects */}
            <style jsx="true">{`
        .footer-link-hover {
          position: relative;
          transition: color 0.3s ease;
        }
        .footer-link-hover:hover {
          color: #60a5fa;
        }
        .footer-link-hover::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 0;
          background-color: #60a5fa;
          transition: width 0.3s ease;
        }
        .footer-link-hover:hover::after {
          width: 100%;
        }
      `}</style>
        </footer>
    );
};

export default Footer;
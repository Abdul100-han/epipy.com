import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const sections = [
        {
            title: 'Quick Links',
            links: [
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Services', path: '/services' },
                { name: 'Business Sectors', path: '/sectors' },
            ]
        },
        {
            title: 'Company',
            links: [
                { name: 'Our Team', path: '/team' },
                { name: 'Projects', path: '/projects' },
                { name: 'Training', path: '/training' },
                { name: 'Contact', path: '/contact' },
            ]
        }
    ];

    return (
        <footer className="bg-primary-dark text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="col-span-1 lg:col-span-1">
                        <div className="mb-6">
                            <span className="text-white font-extrabold text-2xl tracking-tighter italic">
                                EPIPY <span className="text-secondary">NIGERIA</span>
                            </span>
                            <p className="text-secondary text-[10px] font-bold uppercase tracking-widest mt-1">Limited</p>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-8 pr-4">
                            “Driving Growth Through Strategy, Systems & Execution.” A leading provider of engineering, consultancy, and technical training solutions in Nigeria.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Links Sections */}
                    {sections.map((section) => (
                        <div key={section.title}>
                            <h4 className="text-lg font-bold mb-8 border-b border-secondary/30 pb-2 inline-block">
                                {section.title}
                            </h4>
                            <ul className="space-y-4">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.path}
                                            className="text-gray-400 hover:text-secondary flex items-center group transition-colors text-sm"
                                        >
                                            <ArrowUpRight size={14} className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact Section */}
                    <div>
                        <h4 className="text-lg font-bold mb-8 border-b border-secondary/30 pb-2 inline-block">
                            Contact Info
                        </h4>
                        <ul className="space-y-5 text-sm text-gray-400">
                            <li className="flex items-start">
                                <MapPin size={20} className="text-secondary mr-3 mt-0.5 flex-shrink-0" />
                                <span>High-rise Office complex, Victoria Island, Lagos, Nigeria.</span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={20} className="text-secondary mr-3 flex-shrink-0" />
                                <span>+234 (0) 123 4567 890</span>
                            </li>
                            <li className="flex items-center">
                                <Mail size={20} className="text-secondary mr-3 flex-shrink-0" />
                                <span>info@epipy.com.ng</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs gap-4">
                    <p>© {currentYear} Epipy Nigeria Limited. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

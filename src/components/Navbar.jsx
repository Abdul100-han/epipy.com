import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/epipy.jpeg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Sectors', path: '/sectors' },
        { name: 'Team', path: '/team' },
        { name: 'Projects', path: '/projects' },
        { name: 'Training', path: '/training' },
        { name: 'Contact', path: '/contact' },
    ];

    const activeStyle = "text-secondary font-bold border-b-2 border-secondary pb-1";
    const baseStyle = "text-primary hover:text-secondary font-medium transition-all duration-300";

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white border-b border-primary py-1' : 'bg-white py-3'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo Section */}
                    <Link to="/" className="flex items-center">
                        <img
                            src={logo}
                            alt="Epipy Limited"
                            className={`transition-all duration-300 ${scrolled ? 'h-14' : 'h-16'} w-auto object-contain rounded break-inside-avoid`}
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    isActive ? activeStyle : baseStyle
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <Link
                            to="/contact"
                            className="bg-primary text-white px-7 py-2.5 rounded-full font-bold hover:bg-secondary hover:text-white transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-primary hover:text-secondary focus:outline-none transition-colors"
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X size={28} className="text-primary" /> : <Menu size={28} className="text-primary" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen border-t border-primary' : 'max-h-0'}`}>
                <div className="bg-white px-4 pt-4 pb-8 space-y-2">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `block px-4 py-3 text-lg font-semibold rounded-lg transition-colors ${isActive ? 'bg-secondary text-white' : 'text-primary hover:bg-secondary hover:text-white'}`
                            }
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <div className="pt-4 px-4">
                        <Link
                            to="/contact"
                            className="block w-full text-center bg-primary text-white px-6 py-4 rounded-xl font-bold hover:bg-secondary hover:text-white transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

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
    const baseStyle = "text-accent-dark hover:text-secondary font-medium transition-all duration-300";

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-3' : 'bg-white/90 backdrop-blur-md py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo Section */}
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="flex flex-col">
                            <span className="text-primary font-extrabold text-2xl tracking-tighter leading-none">
                                EPIPY <span className="text-secondary">NIGERIA</span>
                            </span>
                            <span className="text-[10px] uppercase tracking-[3px] text-accent font-semibold">Limited</span>
                        </div>
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
                            className="bg-primary text-white px-7 py-2.5 rounded-full font-bold hover:bg-primary-dark hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
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
                            {isOpen ? <X size={30} /> : <Menu size={30} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen border-t border-gray-100' : 'max-h-0'}`}>
                <div className="bg-white px-4 pt-4 pb-8 space-y-2 shadow-xl">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `block px-4 py-3 text-lg font-semibold rounded-lg transition-colors ${isActive ? 'bg-secondary/10 text-secondary' : 'text-accent-dark hover:bg-gray-50 hover:text-secondary'}`
                            }
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <div className="pt-4 px-4">
                        <Link
                            to="/contact"
                            className="block w-full text-center bg-primary text-white px-6 py-4 rounded-xl font-bold hover:bg-primary-dark transition-colors"
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

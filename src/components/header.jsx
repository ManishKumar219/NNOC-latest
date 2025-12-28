import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.jpeg'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <header className="bg-white text-slate-900 sticky top-0 z-50 shadow-md">
            <div className="container mx-auto px-4 py-4">
                <nav className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                            {/* <span className="text-lg text-white">N</span> */}
                            <img src={logo} alt="" />
                        </div>
                        <span className="text-xl">New Natural Oil Corporation</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="/" className="text-slate-700 hover:text-emerald-600 transition-colors">
                            Home
                        </a>
                        <a href="/services" className="text-slate-700 hover:text-emerald-600 transition-colors">
                            Services
                        </a>
                        <a href="/about" className="text-slate-700 hover:text-emerald-600 transition-colors">
                            About
                        </a>
                        <a href="/gallery" className="text-slate-700 hover:text-emerald-600 transition-colors">
                            Gallery
                        </a>
                        {/* <a href="/contact" className="text-slate-700 hover:text-emerald-600 transition-colors">
              Contact
            </a> */}
                        <button onClick={() => navigate('/contact')}
                            className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg transition-colors">
                            Contact
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 space-y-4">
                        <a
                            href="/"
                            className="block text-slate-700 hover:text-emerald-600 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </a>
                        <a
                            href="/services"
                            className="block text-slate-700 hover:text-emerald-600 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Services
                        </a>
                        <a
                            href="/about"
                            className="block text-slate-700 hover:text-emerald-600 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </a>
                        <a
                            href="/gallery"
                            className="block text-slate-700 hover:text-emerald-600 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Gallery
                        </a>
                        
                        <button onClick={() => {navigate('/contact'); setIsMenuOpen(false)}} className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg transition-colors w-full">
                            Contact
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;

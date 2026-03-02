import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LogoIcon from "./LogoIcon";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Why Tijuana', href: '#why-tijuana' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled 
                    ? 'bg-black/95 backdrop-blur-md shadow-lg border-b border-white/10' 
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
                <div className="flex items-center justify-between h-24">
                    {/* Logo */}
                    <a href="#" className="flex items-center">
                        <LogoIcon className="h-14 w-auto" />
                        <div className="flex flex-col -ml-4">
                            <span className="text-3xl font-light tracking-widest text-white leading-none">BLAZE</span>
                            <span className="text-[0.7rem] font-semibold tracking-[0.3em] text-[#d4a574] uppercase mt-1">DENTAL</span>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`text-base font-medium tracking-wide transition-colors duration-300 hover:text-[#d4a574] text-white/90`}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a href="#contact">
                            <Button 
                                className="bg-[#d4a574] hover:bg-[#c49464] text-white px-8 py-6 rounded-full text-base font-semibold shadow-lg hover:shadow-xl hover:shadow-[#d4a574]/20 transition-all duration-300"
                            >
                                <Phone className="w-5 h-5 mr-2" />
                                Book Consultation
                            </Button>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`lg:hidden p-2 rounded-lg transition-colors text-white`}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-black border-t border-white/10"
                    >
                        <div className="px-6 py-6 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block text-gray-300 font-medium py-2 hover:text-[#d4a574] transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full block">
                                <Button 
                                    className="w-full bg-[#d4a574] hover:bg-[#c49464] text-white py-3 rounded-full font-medium mt-4"
                                >
                                    <Phone className="w-4 h-4 mr-2" />
                                    Book Consultation
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
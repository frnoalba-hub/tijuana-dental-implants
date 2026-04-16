import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
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
                    ? 'bg-blaze-depth/95 backdrop-blur-md shadow-lg border-b border-white/10' 
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
                {/* No fixed height / vertical padding — bar hugs logo so it reads larger without extra headroom */}
                <div className="flex items-center justify-between gap-4 py-2">
                    <a href="#" className="flex shrink-0 max-w-[48%] sm:max-w-none">
                        <LogoIcon className="h-auto w-auto max-w-full max-h-11 sm:max-h-12 md:max-h-14 lg:max-h-16 xl:max-h-[4.75rem]" />
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center flex-1 justify-center gap-10 ml-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`text-[1.15rem] font-medium tracking-wide transition-colors duration-300 hover:text-blaze-accent text-white/90`}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a href="#contact">
                            <Button 
                                className="border border-white/30 bg-transparent hover:bg-white hover:text-black text-white px-5 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                            >
                                Book Consultation
                            </Button>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        type="button"
                        className="lg:hidden rounded-lg border border-white/10 bg-white/5 p-2 text-white shadow-sm ring-1 ring-white/5 transition-colors hover:border-white/20 hover:bg-white/10"
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
                        className="lg:hidden bg-blaze-depth border-t border-white/10"
                    >
                        <div className="px-6 py-6 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block text-gray-300 font-medium py-2 hover:text-blaze-accent transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full block">
                                <Button 
                                    className="w-full border border-white/30 bg-transparent hover:bg-white hover:text-black text-white py-3 rounded-md font-medium mt-4 transition-colors duration-200"
                                >
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
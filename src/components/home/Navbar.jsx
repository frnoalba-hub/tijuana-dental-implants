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
                    ? 'bg-blaze-depth/90 shadow-2xl shadow-black/30 backdrop-blur-xl border-b border-white/10' 
                    : 'bg-gradient-to-b from-black/70 via-black/25 to-transparent'
            }`}
        >
            <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
                {/* No fixed height / vertical padding — bar hugs logo so it reads larger without extra headroom */}
                <div className="flex items-center justify-between gap-4 py-2">
                    <a href="#" className="flex shrink-0 max-w-[42%] sm:max-w-none">
                        <LogoIcon
                            variant="lockup"
                            sizes="(max-width: 640px) 36vw, 150px"
                            fetchPriority="high"
                            className="h-auto w-auto max-w-full max-h-14 sm:max-h-16 md:max-h-[4.5rem] lg:max-h-20 xl:max-h-[5.5rem] drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                        />
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center flex-1 justify-center gap-8 xl:gap-10 ml-8 rounded-full border border-white/10 bg-white/[0.035] px-5 py-2.5 shadow-inner shadow-white/[0.03] backdrop-blur-md">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-[0.95rem] xl:text-[1.02rem] font-medium tracking-wide text-white/75 transition-colors duration-300 hover:text-white"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a href="#contact">
                            <Button 
                                className="border border-blaze-accent/40 bg-blaze-accent/15 text-white hover:bg-blaze-accent hover:text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg shadow-blaze-accent/10 transition-all duration-200"
                            >
                                Book Consultation
                            </Button>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        type="button"
                        className="lg:hidden rounded-full border border-white/15 bg-white/10 p-2 text-white shadow-sm ring-1 ring-white/5 backdrop-blur-md transition-colors hover:border-white/25 hover:bg-white/15"
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
                        className="lg:hidden bg-blaze-depth/95 border-t border-white/10 shadow-2xl shadow-black/40 backdrop-blur-xl"
                    >
                        <div className="px-6 py-6 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block rounded-xl px-3 py-2 text-gray-300 font-medium hover:bg-white/5 hover:text-white transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full block">
                                <Button 
                                    className="w-full border border-blaze-accent/40 bg-blaze-accent/15 hover:bg-blaze-accent text-white py-3 rounded-full font-semibold mt-4 transition-colors duration-200"
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
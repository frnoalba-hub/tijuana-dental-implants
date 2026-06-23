import React, { useState, useEffect } from 'react';
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 24);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Office', href: '#gallery' },
        { name: 'Training', href: '#training' },
        { name: 'Why Tijuana', href: '#why-tijuana' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'border-b border-white/[0.06] bg-blaze-depth/95 backdrop-blur-md'
                    : 'bg-transparent'
            }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
                <a href="#" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group" aria-label="Blaze Dental home">
                    <img
                        src="/brand/blaze-icon.png"
                        alt=""
                        aria-hidden="true"
                        fetchPriority="high"
                        decoding="async"
                        className="h-10 w-10 sm:h-11 sm:w-11 object-contain shrink-0"
                    />
                    <span className="flex flex-col leading-none">
                        <span className="text-lg sm:text-xl font-bold tracking-tight text-white">
                            BLAZE
                        </span>
                        <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.22em] uppercase text-white/45 mt-0.5">
                            Dental
                        </span>
                    </span>
                </a>

                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-[0.8125rem] font-medium tracking-wide text-white/55 transition-colors hover:text-white"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <a
                    href="#contact"
                    className="hidden lg:inline-flex items-center border border-blaze-accent/35 px-5 py-2 text-[0.8125rem] font-medium tracking-wide text-blaze-accent transition-colors hover:bg-blaze-accent/10"
                >
                    Book Consultation
                </a>

                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    type="button"
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    className="lg:hidden text-white/80 hover:text-white"
                >
                    {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-t border-white/[0.06] bg-blaze-depth lg:hidden"
                    >
                        <div className="space-y-1 px-6 py-5">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block py-2.5 text-sm font-medium text-white/70 hover:text-white"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mt-4 block border border-blaze-accent/35 py-3 text-center text-sm font-medium text-blaze-accent"
                            >
                                Book Consultation
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

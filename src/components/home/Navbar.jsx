import React, { useState, useEffect } from 'react';
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
        { name: 'Office', href: '#gallery' },
        { name: 'Training', href: '#training' },
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
                    : 'bg-gradient-to-b from-black/80 via-black/35 to-transparent'
            }`}
        >
            <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
                <div className="flex items-center justify-between gap-4 py-3">
                    <a href="#" className="inline-flex items-center gap-3 shrink-0">
                        <img
                            src="/brand/blaze-icon.png"
                            alt=""
                            aria-hidden="true"
                            fetchPriority="high"
                            className="h-11 w-auto sm:h-12"
                        />
                        <span className="leading-none">
                            <span className="block font-display text-sm sm:text-base font-semibold tracking-[0.24em] text-white">BLAZE</span>
                            <span className="mt-1 block text-[0.58rem] sm:text-[0.62rem] font-medium tracking-[0.35em] text-white/60">DENTAL</span>
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center flex-1 justify-center gap-8 xl:gap-10 ml-8 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 shadow-inner shadow-white/[0.03] backdrop-blur-md">
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
                            <span className="inline-flex items-center rounded-full border border-blaze-accent/45 bg-blaze-accent/20 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blaze-accent/10 transition-all duration-200 hover:bg-blaze-accent hover:text-blaze-ink">
                                Book Consultation
                            </span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        type="button"
                        aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                        className="group lg:hidden grid h-11 w-11 place-items-center rounded-2xl border border-white/15 bg-black/35 text-white shadow-lg shadow-black/25 ring-1 ring-white/5 backdrop-blur-md transition-all hover:border-blaze-accent/40 hover:bg-white/10"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-5 h-5" />
                        ) : (
                            <Menu className="w-5 h-5" />
                        )}
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
                                <span className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-blaze-accent/45 bg-blaze-accent/20 py-3 font-semibold text-white transition-colors duration-200 hover:bg-blaze-accent hover:text-blaze-ink">
                                    Book Consultation
                                </span>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
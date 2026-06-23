import React, { useState, useEffect } from 'react';
import { Menu, X } from "lucide-react";

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
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
                isScrolled
                    ? 'border-b border-white/[0.08] bg-blaze-depth/95 backdrop-blur-md'
                    : 'bg-blaze-depth/40 backdrop-blur-sm'
            }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3 lg:px-8 lg:py-3.5">
                <a href="#" className="lg:hidden shrink-0" aria-label="Blaze Dental home">
                    <img
                        src="/brand/blaze-icon.png"
                        alt=""
                        aria-hidden="true"
                        fetchPriority="high"
                        decoding="async"
                        className="h-14 w-14 object-contain"
                    />
                </a>

                <div className="hidden lg:block w-32 shrink-0" aria-hidden="true" />

                <nav className="hidden lg:flex items-center justify-center gap-7 flex-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-[0.8125rem] font-medium text-white/85 transition-colors hover:text-white"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <a
                    href="#contact"
                    className="hidden lg:inline-flex items-center rounded-sm bg-blaze-accent px-5 py-2.5 text-[0.8125rem] font-semibold text-blaze-ink shadow-md shadow-black/25 transition-colors hover:bg-blaze-accent-hover shrink-0"
                >
                    Book Consultation
                </a>

                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    type="button"
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    className="lg:hidden text-white hover:text-white/90 p-1"
                >
                    {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                </button>
            </div>

            {isMobileMenuOpen && (
                <div className="border-t border-white/[0.08] bg-blaze-depth lg:hidden">
                    <div className="space-y-1 px-6 py-5">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block py-2.5 text-sm font-medium text-white/85 hover:text-white"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="mt-4 block rounded-sm bg-blaze-accent py-3 text-center text-sm font-semibold text-blaze-ink"
                        >
                            Book Consultation
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}

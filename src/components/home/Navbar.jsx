import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Office', href: '/#gallery' },
    { name: 'Why Tijuana', href: '/#why-tijuana' },
    { name: 'Training', href: '/Training', route: true },
    { name: 'Contact', href: '/Contact', route: true },
];

const SCROLL_LOCKUP_THRESHOLD = 56;

function NavItem({ link, className, onClick }) {
    if (link.route) {
        return (
            <Link to={link.href} onClick={onClick} className={className}>
                {link.name}
            </Link>
        );
    }

    return (
        <a href={link.href} onClick={onClick} className={className}>
            {link.name}
        </a>
    );
}

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > SCROLL_LOCKUP_THRESHOLD);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    const linkClass =
        "text-[0.8125rem] font-medium text-white/85 transition-colors hover:text-white";
    const mobileLinkClass =
        "block py-2.5 text-sm font-medium text-white/85 hover:text-white";

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 lg:bg-blaze-depth/40 lg:backdrop-blur-sm ${
                isScrolled
                    ? 'max-lg:border-b max-lg:border-white/[0.08] max-lg:bg-blaze-depth max-lg:shadow-lg max-lg:shadow-black/30 lg:border-b lg:border-white/[0.08] lg:bg-blaze-depth/97 lg:backdrop-blur-md lg:shadow-lg lg:shadow-black/25'
                    : 'max-lg:bg-transparent max-lg:shadow-none lg:bg-blaze-depth/40'
            }`}
        >
            {/* Desktop */}
            <div className="mx-auto hidden max-w-7xl items-center justify-between gap-4 px-8 py-3.5 lg:flex">
                <div className="w-32 shrink-0" aria-hidden="true" />

                <nav className="flex flex-1 items-center justify-center gap-7">
                    {navLinks.map((link) => (
                        <NavItem key={link.name} link={link} className={linkClass} />
                    ))}
                </nav>

                <Link
                    to="/Contact"
                    className="inline-flex shrink-0 items-center rounded-sm bg-blaze-accent px-5 py-2.5 text-[0.8125rem] font-semibold text-blaze-ink shadow-lg shadow-black/40 ring-1 ring-white/20 transition-colors hover:bg-blaze-accent-hover"
                >
                    Book Consultation
                </Link>
            </div>

            {/* Mobile + tablet: transparent at top; compact lockup bar when scrolled */}
            <div
                className={`grid grid-cols-[2.25rem_1fr_2.25rem] items-center gap-2 px-5 transition-all duration-300 sm:px-6 lg:hidden ${
                    isScrolled ? 'h-14' : 'h-12'
                }`}
            >
                <div aria-hidden="true" />

                <div
                    className={`flex min-w-0 items-center justify-center overflow-hidden transition-all duration-300 ${
                        isScrolled ? 'opacity-100' : 'pointer-events-none opacity-0'
                    }`}
                >
                    <Link
                        to="/"
                        className="navbar-scroll-lockup flex w-full max-w-[11rem] items-center gap-2 sm:max-w-[14rem] sm:gap-2.5"
                        aria-label="Blaze Dental home"
                    >
                        <span className="navbar-scroll-lockup__line" aria-hidden="true" />
                        <span className="navbar-scroll-lockup__frame">
                            <img
                                src="/brand/blaze-lockup-clear.png"
                                srcSet="/brand/blaze-lockup-clear.png 1x, /brand/blaze-lockup-clear@2x.png 2x"
                                alt=""
                                decoding="async"
                                className="navbar-scroll-lockup__img"
                            />
                        </span>
                        <span className="navbar-scroll-lockup__line" aria-hidden="true" />
                    </Link>
                </div>

                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    type="button"
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMobileMenuOpen}
                    className="flex h-9 w-9 items-center justify-center justify-self-end text-white hover:text-white/90"
                >
                    {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                </button>
            </div>

            {isMobileMenuOpen && (
                <div className="border-t border-white/[0.08] bg-blaze-depth lg:hidden">
                    <div className="space-y-1 px-6 py-5">
                        {navLinks.map((link) => (
                            <NavItem
                                key={link.name}
                                link={link}
                                className={mobileLinkClass}
                                onClick={() => setIsMobileMenuOpen(false)}
                            />
                        ))}
                        <Link
                            to="/Contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="mt-4 block rounded-sm bg-blaze-accent py-3 text-center text-sm font-semibold text-blaze-ink"
                        >
                            Book Consultation
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}

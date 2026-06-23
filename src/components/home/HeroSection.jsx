import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { formatUsd, priceComparisons } from "@/data/pricing";

const heroPrices = priceComparisons.filter((p) =>
    ["Dental Implant", "Crown", "All-on-4"].includes(p.name)
);

// Hero surgery photo: training gallery image9 only — do not swap for image42/loupes solo shot
const HERO_SURGERY_IMAGE = "/doctor/dr-arias-surgery-image9.png";
const HERO_SURGERY_IMAGE_2X = "/doctor/dr-arias-surgery-image9@2x.png";

function HeroSectionContent() {
    const [lockupInHeader, setLockupInHeader] = useState(false);

    useEffect(() => {
        const onScroll = () => setLockupInHeader(window.scrollY > 56);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToServices = () => {
        document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="page-section-over-office relative min-h-[100svh] flex items-center overflow-hidden">
            <div className="pointer-events-none absolute inset-0 lg:hidden bg-gradient-to-b from-black/78 via-black/45 to-black/40" />
            <div className="pointer-events-none absolute inset-0 hidden lg:block bg-gradient-to-r from-black/55 via-black/20 to-transparent" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-24 lg:pb-20">
                <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 xl:gap-16">
                    <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
                        <div
                            className={`hero-lockup-shell mb-6 flex flex-col items-center sm:mb-8 lg:items-start transition-opacity duration-300 ${
                                lockupInHeader ? 'max-lg:opacity-0 max-lg:pointer-events-none' : 'opacity-100'
                            }`}
                        >
                            <img
                                src="/brand/blaze-lockup-clear.png"
                                srcSet="/brand/blaze-lockup-clear.png 1x, /brand/blaze-lockup-clear@2x.png 2x"
                                alt="Blaze Dental"
                                fetchPriority="high"
                                decoding="sync"
                                className="hero-brand-lockup relative z-[1] w-[9.5rem] sm:w-[10.5rem] md:w-[12.5rem] lg:w-[14rem]"
                            />
                        </div>

                        <p className="section-label mb-4">
                            Tijuana · Bilingual Care · Southern California Patients
                        </p>

                        <h1 className="font-display text-[2.1rem] sm:text-4xl lg:text-[2.85rem] xl:text-[3rem] font-semibold leading-[1.1] tracking-tight text-white drop-shadow-sm">
                            Implant &amp; Cosmetic Dentistry,
                            <span className="block text-white/70 font-normal mt-1">without the US price tag.</span>
                        </h1>

                        <p className="mt-5 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed text-white/80">
                            Dr. Jose Luis Arias, implant specialist and international instructor.
                            Minutes from San Diego. English and Spanish consultations.
                        </p>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/[0.12] border border-white/[0.12]">
                            {heroPrices.map((item) => (
                                <div key={item.name} className="bg-black/40 px-4 py-4 sm:px-5 sm:py-5 backdrop-blur-sm">
                                    <p className="text-[0.7rem] uppercase tracking-wide text-white/55 mb-2">{item.name}</p>
                                    <p className="text-xl sm:text-2xl font-semibold text-white">{formatUsd(item.blaze)}</p>
                                    <p className="mt-1 text-xs text-white/45 line-through">
                                        US {formatUsd(item.usaLow)}+
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                            <Button
                                asChild
                                size="lg"
                                className="h-12 rounded-sm bg-white px-8 text-sm font-semibold tracking-wide text-blaze-ink shadow-lg shadow-black/30 hover:bg-white/92"
                            >
                                <Link to="/Contact">Book Free Consultation</Link>
                            </Button>
                            <button
                                onClick={scrollToServices}
                                type="button"
                                className="inline-flex items-center gap-2 text-sm font-medium text-white/90 transition-colors hover:text-white"
                            >
                                View all pricing
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>

                    <div className="relative mx-auto mb-2 w-full max-w-md lg:mb-0 lg:max-w-none lg:pt-2">
                        <div className="hero-surgery-frame">
                            <img
                                src={HERO_SURGERY_IMAGE}
                                srcSet={`${HERO_SURGERY_IMAGE} 1x, ${HERO_SURGERY_IMAGE_2X} 2x`}
                                alt="Dr. Jose Luis Arias performing implant surgery"
                                fetchPriority="high"
                                decoding="async"
                                className="hero-surgery-frame__img"
                            />
                            <div className="hero-surgery-frame__shade" aria-hidden="true" />
                            <div className="hero-surgery-frame__edge" aria-hidden="true" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSectionContent;

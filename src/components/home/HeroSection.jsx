import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { formatUsd, priceComparisons } from "@/data/pricing";

const heroPrices = priceComparisons.filter((p) =>
    ["Dental Implant", "Crown", "All-on-4"].includes(p.name)
);

const HERO_SURGERY_IMAGE = "/doctor/dr-arias-surgery-hero.png";

function HeroSectionContent() {
    const scrollToContact = () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToServices = () => {
        document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="page-section-over-office relative min-h-[100svh] flex items-center overflow-hidden hero-surface-texture">
            {/* Local scrim for copy only — office photo comes from fixed OfficeBackdrop */}
            <div className="pointer-events-none absolute inset-0 lg:hidden bg-gradient-to-b from-black/45 via-black/15 to-black/35" />
            <div className="pointer-events-none absolute inset-0 hidden lg:block bg-gradient-to-r from-black/55 via-black/20 to-transparent" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-24 lg:pb-20">
                <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 xl:gap-16">
                    <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col items-center lg:items-start mb-6 sm:mb-8"
                        >
                            <img
                                src="/brand/blaze-lockup.png"
                                alt="Blaze Dental"
                                fetchPriority="high"
                                className="hidden sm:block w-[10.5rem] md:w-[12.5rem] lg:w-[14rem] h-auto"
                            />
                            <img
                                src="/brand/blaze-icon.png"
                                alt="Blaze Dental"
                                fetchPriority="high"
                                className="sm:hidden w-24 h-24 object-contain"
                            />
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="mb-4 text-[0.6875rem] font-medium uppercase tracking-[0.32em] text-blaze-accent"
                        >
                            Tijuana · Bilingual Care · Southern California Patients
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.15 }}
                            className="font-display text-[2.1rem] sm:text-4xl lg:text-[2.85rem] xl:text-[3rem] font-semibold leading-[1.1] tracking-tight text-white drop-shadow-sm"
                        >
                            Implant &amp; Cosmetic Dentistry,
                            <span className="block text-white/70 font-normal mt-1">without the US price tag.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.22 }}
                            className="mt-5 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed text-white/75"
                        >
                            Dr. Jose Luis Arias — implant specialist and international instructor.
                            Minutes from San Diego. English and Spanish consultations.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.28 }}
                            className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/[0.12] border border-white/[0.12]"
                        >
                            {heroPrices.map((item) => (
                                <div key={item.name} className="bg-black/40 px-4 py-4 sm:px-5 sm:py-5 backdrop-blur-sm">
                                    <p className="text-[0.65rem] uppercase tracking-[0.22em] text-white/50 mb-2">{item.name}</p>
                                    <p className="text-xl sm:text-2xl font-semibold text-white">{formatUsd(item.blaze)}</p>
                                    <p className="mt-1 text-xs text-white/45 line-through">
                                        US {formatUsd(item.usaLow)}+
                                    </p>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.34 }}
                            className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4"
                        >
                            <Button
                                onClick={scrollToContact}
                                size="lg"
                                className="h-12 rounded-none bg-blaze-accent px-7 text-sm font-medium tracking-wide text-blaze-ink hover:bg-blaze-accent-hover"
                            >
                                Book Free Consultation
                            </Button>
                            <button
                                onClick={scrollToServices}
                                type="button"
                                className="inline-flex items-center gap-2 text-sm font-medium text-white/75 transition-colors hover:text-white"
                            >
                                View all pricing
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, delay: 0.2 }}
                        className="relative mx-auto w-full max-w-md lg:max-w-none lg:pt-2"
                    >
                        <div className="absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-blaze-accent/20 via-white/5 to-transparent blur-2xl" />
                        <div className="relative overflow-hidden rounded-[1.5rem] border border-white/12 bg-black/15 p-1.5 shadow-2xl shadow-black/35">
                            <img
                                src={HERO_SURGERY_IMAGE}
                                alt="Dr. Jose Luis Arias performing implant surgery"
                                fetchPriority="high"
                                className="w-full rounded-[1.15rem] object-cover aspect-[4/5] object-[52%_40%]"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default HeroSectionContent;

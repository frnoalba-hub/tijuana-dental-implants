import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { formatUsd, priceComparisons } from "@/data/pricing";

const heroPrices = priceComparisons.filter((p) =>
    ["Dental Implant", "Crown", "All-on-4"].includes(p.name)
);

function HeroSectionContent() {
    const scrollToContact = () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToServices = () => {
        document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative min-h-[100svh] flex items-end lg:items-center overflow-hidden bg-blaze-depth">
            <div className="absolute inset-0">
                <img
                    src="/office/bz-office-8.png"
                    alt=""
                    aria-hidden="true"
                    className="h-full w-full object-cover object-[center_40%] scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blaze-depth via-blaze-depth/88 to-blaze-depth/45" />
                <div className="absolute inset-0 bg-gradient-to-t from-blaze-depth via-transparent to-blaze-depth/70" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-14 lg:pt-32 lg:pb-20">
                <div className="max-w-3xl">
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-5 text-[0.6875rem] font-medium uppercase tracking-[0.32em] text-blaze-accent"
                    >
                        Tijuana · Bilingual Care · Southern California Patients
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.05 }}
                        className="font-display text-[2.35rem] sm:text-5xl lg:text-[3.35rem] font-semibold leading-[1.08] tracking-tight text-white"
                    >
                        Implant &amp; Cosmetic Dentistry,
                        <span className="block text-white/55 font-normal mt-1">without the US price tag.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.12 }}
                        className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-white/55"
                    >
                        Dr. Jose Luis Arias — implant specialist and international instructor.
                        Minutes from San Diego. English and Spanish consultations.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.18 }}
                        className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08]"
                    >
                        {heroPrices.map((item) => (
                            <div key={item.name} className="bg-blaze-depth/80 px-4 py-4 sm:px-5 sm:py-5 backdrop-blur-sm">
                                <p className="text-[0.65rem] uppercase tracking-[0.22em] text-white/40 mb-2">{item.name}</p>
                                <p className="text-xl sm:text-2xl font-semibold text-white">{formatUsd(item.blaze)}</p>
                                <p className="mt-1 text-xs text-white/35 line-through">
                                    US {formatUsd(item.usaLow)}+
                                </p>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.24 }}
                        className="mt-8 flex flex-wrap items-center gap-4"
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
                            className="inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white"
                        >
                            View all pricing
                            <ArrowRight className="h-4 w-4" />
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default HeroSectionContent;

import React from 'react';
import { motion } from "framer-motion";
import { DollarSign, MapPin, Clock, Shield, Plane, Star } from "lucide-react";
import { formatUsd, priceComparisons, savingsPercent, usaRange } from "@/data/pricing";

export default function WhyTijuanaSection() {
    const reasons = [
        {
            icon: DollarSign,
            title: "Transparent Pricing",
            description: "Clear from-prices on implants, crowns, veneers, and full-arch solutions — no surprise US billing."
        },
        {
            icon: MapPin,
            title: "Minutes from San Diego",
            description: "Tijuana is a short drive from the border. No flights, no week-long trips."
        },
        {
            icon: Shield,
            title: "Premium Materials",
            description: "Nobel Biocare, Straumann, and other top-tier implant systems used in US clinics."
        },
        {
            icon: Clock,
            title: "Fast Scheduling",
            description: "Consultations and treatment timelines built around cross-border patients."
        },
        {
            icon: Star,
            title: "Surgeon-Led Care",
            description: "Dr. Arias performs and oversees your treatment — not a rotating associate model."
        },
        {
            icon: Plane,
            title: "Cross-Border Support",
            description: "English and Spanish team. We help make your visit straightforward from start to finish."
        }
    ];

    return (
        <section id="why-tijuana" className="py-20 sm:py-28 bg-blaze-surface">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl mb-14 sm:mb-16"
                >
                    <p className="text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-blaze-accent mb-4">
                        Why Tijuana
                    </p>
                    <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">
                        US quality. A fraction of the cost.
                    </h2>
                    <p className="text-base text-white/50 leading-relaxed">
                        Southern California patients routinely save 60–75% on implants, crowns, and full-mouth rehabilitation —
                        with the same materials and specialist-level care.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06] mb-16 sm:mb-20">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={reason.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="bg-blaze-depth p-6 sm:p-7"
                        >
                            <reason.icon className="w-4 h-4 text-blaze-accent mb-4" strokeWidth={1.5} />
                            <h3 className="font-display text-base font-medium text-white mb-2">{reason.title}</h3>
                            <p className="text-sm text-white/45 leading-relaxed">{reason.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
                        <div>
                            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-blaze-accent mb-3">
                                Price Comparison
                            </p>
                            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                                Blaze Dental vs. typical US pricing
                            </h3>
                        </div>
                        <p className="text-xs text-white/35 max-w-sm">
                            US ranges reflect common market rates. CT scans and IV sedation are not included.
                        </p>
                    </div>

                    <div className="border border-white/[0.08] overflow-hidden">
                        <div className="hidden sm:grid grid-cols-[1.2fr_1fr_1fr_0.6fr] gap-4 px-5 py-3 bg-white/[0.03] text-[0.65rem] uppercase tracking-[0.2em] text-white/35">
                            <span>Treatment</span>
                            <span>United States</span>
                            <span>Blaze Dental</span>
                            <span className="text-right">You Save</span>
                        </div>
                        {priceComparisons.map((item, index) => (
                            <div
                                key={item.name}
                                className={`grid grid-cols-1 sm:grid-cols-[1.2fr_1fr_1fr_0.6fr] gap-2 sm:gap-4 px-5 py-4 sm:py-5 items-center ${
                                    index > 0 ? 'border-t border-white/[0.06]' : ''
                                } ${item.name === 'All-on-4' ? 'bg-blaze-accent/[0.04]' : ''}`}
                            >
                                <p className="text-sm font-medium text-white">{item.name}</p>
                                <p className="text-sm text-white/40 sm:order-none">
                                    <span className="sm:hidden text-white/30 text-xs uppercase tracking-wider mr-2">US</span>
                                    {usaRange(item)}
                                </p>
                                <p className="text-base font-semibold text-blaze-accent">
                                    <span className="sm:hidden text-white/30 text-xs uppercase tracking-wider mr-2 font-normal">Blaze</span>
                                    From {formatUsd(item.blaze)}
                                </p>
                                <p className="text-sm text-white/50 sm:text-right">
                                    ~{savingsPercent(item)}%
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

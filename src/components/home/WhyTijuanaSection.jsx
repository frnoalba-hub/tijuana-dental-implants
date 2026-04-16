import React from 'react';
import { motion } from "framer-motion";
import { DollarSign, MapPin, Clock, Shield, Plane, Star } from "lucide-react";

export default function WhyTijuanaSection() {
    const reasons = [
        {
            icon: DollarSign,
            title: "Save Up to 70%",
            description: "Get the same quality implants and materials used in the US at a fraction of the cost."
        },
        {
            icon: MapPin,
            title: "Minutes from San Diego",
            description: "Tijuana is just a short drive from the US border—no expensive flights required."
        },
        {
            icon: Shield,
            title: "US-Grade Quality",
            description: "We use premium implant systems from Nobel Biocare, Straumann, and other top brands."
        },
        {
            icon: Clock,
            title: "No Wait Times",
            description: "Get treated within days, not months. We value your time as much as you do."
        },
        {
            icon: Star,
            title: "Personalized Care",
            description: "Receive one-on-one attention from your surgeon throughout your entire journey."
        },
        {
            icon: Plane,
            title: "Concierge Service",
            description: "We assist with transportation, accommodation, and make your visit stress-free."
        }
    ];

    return (
        <section id="why-tijuana" className="py-24 bg-blaze-depth">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
                >
                    <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                        Why Patients Choose Tijuana
                    </h2>
                    <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                        Thousands of Americans cross the border each year for quality dental care. 
                        Here's why Tijuana has become a top destination for dental implants.
                    </p>
                </motion.div>

                {/* Reasons Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-blaze-surface-elevated border border-blaze-surface-border rounded-xl p-6"
                        >
                            <reason.icon className="w-5 h-5 text-blaze-accent mb-4" />
                            <h3 className="font-display text-base font-semibold text-white mb-2">{reason.title}</h3>
                            <p className="text-white/50 text-sm leading-relaxed">{reason.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Price Comparison */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 sm:mt-16 bg-gradient-to-b from-blaze-surface-elevated to-blaze-surface border border-blaze-surface-border/50 rounded-3xl p-6 sm:p-10 md:p-12"
                >
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white text-center mb-8 sm:mb-10">Price Comparison</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                        <div className="text-center p-6 sm:p-8 bg-blaze-surface-muted/50 rounded-2xl border border-blaze-surface-border/50">
                            <p className="text-gray-400 text-xs sm:text-sm mb-3">Single Implant in USA</p>
                            <p className="text-2xl sm:text-3xl font-bold text-gray-500 line-through">$3,500 - $6,000</p>
                            <p className="text-xs text-gray-500 mt-3">Average market price</p>
                        </div>
                        <div className="text-center p-6 sm:p-8 bg-blaze-surface-elevated border-2 border-blaze-accent/50 rounded-2xl transform sm:scale-105 relative z-10">
                            <p className="text-blaze-accent text-xs font-bold uppercase tracking-widest mb-2">Our Price</p>
                            <p className="text-3xl sm:text-4xl font-bold text-white mb-1">$1,299</p>
                            <p className="text-blaze-accent font-semibold">Save 65-70%</p>
                        </div>
                        <div className="text-center p-6 sm:p-8 bg-blaze-surface-muted/50 rounded-2xl border border-blaze-surface-border/50">
                            <p className="text-gray-400 text-xs sm:text-sm mb-3">All-on-4 in USA</p>
                            <p className="text-2xl sm:text-3xl font-bold text-gray-500 line-through">$20,000 - $35,000</p>
                            <p className="text-xs text-gray-500 mt-3">Full mouth implants</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
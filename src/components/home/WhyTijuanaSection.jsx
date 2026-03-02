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
        <section id="why-tijuana" className="py-24 bg-black relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
                >
                    <span className="text-[#d4a574] font-semibold tracking-wider text-xs sm:text-sm uppercase">Why Choose Us</span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 sm:mt-3 mb-4 sm:mb-6">
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
                            className="bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#d4a574]/50 hover:bg-white/12 transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 bg-gradient-to-br from-[#d4a574] to-[#c49464] rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-[#d4a574]/30 transition-shadow">
                                <reason.icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#d4a574] transition-colors">{reason.title}</h3>
                            <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/70 transition-colors">{reason.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Price Comparison */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 sm:mt-16 bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800/50 rounded-3xl p-6 sm:p-10 md:p-12"
                >
                    <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-8 sm:mb-10">Price Comparison</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                        <div className="text-center p-6 sm:p-8 bg-neutral-800/50 rounded-2xl border border-neutral-700/50">
                            <p className="text-gray-400 text-xs sm:text-sm mb-3">Single Implant in USA</p>
                            <p className="text-2xl sm:text-3xl font-bold text-gray-500 line-through">$3,500 - $6,000</p>
                            <p className="text-xs text-gray-500 mt-3">Average market price</p>
                        </div>
                        <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-black to-neutral-900 border border-[#d4a574]/40 rounded-2xl transform sm:scale-105 relative z-10 shadow-2xl shadow-[#d4a574]/30">
                            <p className="text-[#d4a574] text-xs font-bold uppercase tracking-widest mb-2">Our Price</p>
                            <p className="text-3xl sm:text-4xl font-bold text-white mb-1">$1,299</p>
                            <p className="text-[#d4a574] font-semibold">Save 65-70%</p>
                        </div>
                        <div className="text-center p-6 sm:p-8 bg-neutral-800/50 rounded-2xl border border-neutral-700/50">
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
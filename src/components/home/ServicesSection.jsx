import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Check, Stethoscope, Sparkles, Smile, Bone, CreditCard, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
    const [activeCategory, setActiveCategory] = useState("implant");

    const scrollToContact = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const serviceCategories = {
        implant: {
            icon: Stethoscope,
            title: "Implant Services",
            services: [
                "Dental implants",
                "All-on-4 / All-on-6 full arch implants",
                "Implant planning and restoration",
                "Long-term implant maintenance"
            ]
        },
        cosmetic: {
            icon: Sparkles,
            title: "Smile Design & Restorative",
            services: [
                "Dental veneers (Smile Design)",
                "Dental crowns",
                "Whitening treatments"
            ]
        },
        general: {
            icon: Smile,
            title: "General Services",
            services: [
                "Professional cleaning",
                "Deep cleaning",
                "Root canal treatment (endodontics)",
                "Extractions"
            ]
        },
        reconstruction: {
            icon: Bone,
            title: "Bone Reconstruction",
            services: [
                "Bone graft",
                "Guided Bone Regeneration",
                "Sinus lift"
            ]
        }
    };

    const currentCategory = serviceCategories[activeCategory];

    const featuredServices = [
        "All-on-4 / All-on-6",
        "Dental veneers (Smile Design)",
        "Dental implants",
        "Teeth whitening",
        "Bone graft"
    ];

    const pricingItems = [
        { name: "Dental implants", price: "From $899" },
        { name: "Crown", price: "From $499" },
        { name: "Dental veneers", price: "From $499" },
        { name: "Root canal treatment", price: "From $299" },
        { name: "Teeth whitening", price: "From $399" },
        { name: "All-on-4", price: "From $8,899" }
    ];

    const promoOptions = [
        "Consultation discount",
        "Free first X-ray",
        "Special implant pricing",
        "Whitening special",
        "New patient offers",
        "Cash payment discount",
        "Limited-time promotions"
    ];

    return (
        <section id="services" className="page-section-over-office relative py-20 sm:py-28 bg-blaze-depth/72 backdrop-blur-sm border-t border-white/[0.05]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
                >
                    <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-6">
                        Services & Pricing
                    </h2>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                        From advanced implant surgery to smile design and preventive care, all in one clinic.
                    </p>
                </motion.div>

                {/* Featured Services */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 sm:mb-12 border border-white/[0.08] bg-blaze-surface p-6 sm:p-8"
                >
                    <p className="section-label mb-4">Most Requested</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                        {featuredServices.map((item, index) => (
                            <div key={index} className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/90 text-center">
                                {item}
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
                    {Object.keys(serviceCategories).map((category) => {
                        const cat = serviceCategories[category];
                        const Icon = cat.icon;
                        const isActive = activeCategory === category;
                        return (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-medium transition-colors duration-200 ${
                                    isActive
                                        ? 'bg-blaze-accent text-blaze-ink'
                                        : 'text-white/45 hover:text-white'
                                }`}
                            >
                                <span className="hidden sm:inline">{cat.title}</span>
                                <span className="sm:hidden">{cat.title.split(' ')[0]}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Services List */}
                <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="border border-white/[0.08] bg-blaze-surface p-6 sm:p-10 md:p-14"
                >
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-8">{currentCategory.title}</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        {currentCategory.services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.2, delay: index * 0.03 }}
                                className="flex items-start gap-3 py-2.5 px-3"
                            >
                                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blaze-accent/15 text-blaze-accent">
                                    <Check className="h-3 w-3" />
                                </span>
                                <span className="text-base sm:text-lg text-gray-300">{service}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Pricing */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mt-8 sm:mt-12 border border-white/[0.08] bg-blaze-surface p-6 sm:p-8 md:p-10"
                >
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-6">Prices From</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                        {pricingItems.map((item, index) => (
                            <div key={index} className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4">
                                <p className="text-sm text-gray-400">{item.name}</p>
                                <p className="text-xl font-bold text-white mt-1">{item.price}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-500 mt-5">
                        CT scans (tomographic studies) and IV sedation are not included. Final cost depends on diagnosis and treatment plan.
                    </p>
                </motion.div>

                {/* Payment Options */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mt-8 sm:mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8"
                >
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-5">Payment Options</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                            <Wallet className="w-4 h-4 text-blaze-accent" />
                            <span className="text-sm text-gray-300">Cash accepted</span>
                        </div>
                        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                            <CreditCard className="w-4 h-4 text-blaze-accent" />
                            <span className="text-sm text-gray-300">Credit card accepted</span>
                        </div>
                        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                            <CreditCard className="w-4 h-4 text-blaze-accent" />
                            <span className="text-sm text-gray-300">Debit card accepted</span>
                        </div>
                        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                            <Check className="w-4 h-4 text-blaze-accent" />
                            <span className="text-sm text-gray-300">Payment plans: ask our team</span>
                        </div>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-500 mt-5">
                        US and Mexican insurance are not currently accepted.
                    </p>
                </motion.div>

                {/* Promotions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mt-8 sm:mt-10 rounded-2xl border border-white/10 bg-blaze-surface-elevated p-6 sm:p-8"
                >
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-5">Ask About Current Offers</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {promoOptions.map((offer, index) => (
                            <div key={index} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                                <Check className="w-4 h-4 text-blaze-accent shrink-0" />
                                <span className="text-sm text-gray-300">{offer}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mt-8 sm:mt-12"
                >
                    <Button 
                        onClick={scrollToContact}
                        size="lg"
                        className="border border-blaze-accent/40 bg-transparent text-blaze-accent hover:bg-blaze-accent/10 h-12 px-8 text-sm font-medium tracking-wide transition-colors duration-200"
                    >
                        Request Consultation & Custom Quote
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
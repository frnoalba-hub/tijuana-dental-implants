import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Check, Stethoscope, Sparkles, Smile, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
    const [activeCategory, setActiveCategory] = useState("surgical");

    const scrollToContact = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const serviceCategories = {
        surgical: {
            icon: Stethoscope,
            title: "Surgical Services",
            services: [
                "Implant for individual Crown",
                "Implant w/ temporary Crown",
                "Immediate implants",
                "ALL ON 4 / ALL ON 5 / ALL ON 6",
                "Guided Bone Regeneration",
                "Wisdom tooth extractions",
                "Ridge split",
                "Sinus lift",
                "Bone grafting",
                "Soft tissue graft",
                "Implants for overdenture"
            ]
        },
        general: {
            icon: Smile,
            title: "General Services",
            services: [
                "Professional cleaning",
                "Deep cleaning",
                "Fillings",
                "Crowns",
                "Root canal",
                "Build ups"
            ]
        },
        cosmetic: {
            icon: Sparkles,
            title: "Cosmetic Services",
            services: [
                "Veneers",
                "Digital Smile Design",
                "Full mouth rehabilitation",
                "Teeth whitening"
            ]
        },
        prosthesis: {
            icon: Package,
            title: "Prosthesis",
            services: [
                "Screw retained crowns",
                "Cemented retained crowns",
                "Acrylic dentures",
                "Hybrid prosthesis",
                "Zirconia prosthesis",
                "Toronto prosthesis"
            ]
        }
    };

    const currentCategory = serviceCategories[activeCategory];

    return (
        <section id="services" className="py-16 sm:py-20 bg-blaze-surface">
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
                        Services
                    </h2>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                        From surgical implants to cosmetic enhancements, all under one treatment plan.
                    </p>
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
                                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-md text-sm font-medium transition-colors duration-200 ${
                                    isActive
                                        ? 'bg-white text-black'
                                        : 'text-gray-400 hover:text-white'
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
                    className="bg-blaze-surface-elevated rounded-2xl p-6 sm:p-10 md:p-14 border border-blaze-surface-border"
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
                        className="border border-white/20 bg-transparent text-white hover:bg-white hover:text-black h-12 px-8 rounded-md text-sm font-medium tracking-wide uppercase transition-colors duration-200"
                    >
                        Request Consultation & Pricing
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
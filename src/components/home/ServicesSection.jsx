import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Stethoscope, Sparkles, Smile, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
    const [activeCategory, setActiveCategory] = useState("surgical");

    const serviceCategories = {
        surgical: {
            icon: Stethoscope,
            title: "Surgical Services",
            services: [
                "Implant for individual Crown",
                "Implant w/ temporary Crown",
                "Immediate implants (Extraction + implant at the same visit)",
                "ALL ON 4",
                "ALL ON 5",
                "ALL ON 6",
                "Guided Bone Regeneration",
                "Wisdom tooth extractions",
                "Ridge split",
                "Sinus lift - Crestal approach",
                "Sinus lift - Lateral approach",
                "Bone grafting",
                "Soft tissue graft",
                "Implants for overdenture"
            ]
        },
        general: {
            icon: Smile,
            title: "General Services",
            services: [
                "Regular cleaning",
                "Deep cleaning",
                "Surgical cleaning (per quadrant)",
                "Fillings",
                "Crowns",
                "Root canal",
                "Build ups",
                "Endo post",
                "Others"
            ]
        },
        cosmetic: {
            icon: Sparkles,
            title: "Cosmetic Services",
            services: [
                "Veneers",
                "DSD (Digital Smile Design)",
                "Composite veneers",
                "Full mouth rehabilitation",
                "Whitening"
            ]
        },
        prosthesis: {
            icon: Package,
            title: "Prosthesis",
            services: [
                "Screw retained crown for implants",
                "Cemented retained crown for implants",
                "Crowns for individual natural tooth",
                "Acrylic dentures (regular)",
                "Acrylic dentures (locators for implants / snap on)",
                "Temporary for individual natural tooth",
                "Temporary for individual implant",
                "Flippers",
                "Screw retained prosthesis (ALL ON 4 – ALL ON 5 – ALL ON 6) - PMMA",
                "Screw retained prosthesis (ALL ON 4 – ALL ON 5 – ALL ON 6) - Hybrid",
                "Screw retained prosthesis (ALL ON 4 – ALL ON 5 – ALL ON 6) - Zirconia",
                "Screw retained prosthesis (ALL ON 4 – ALL ON 5 – ALL ON 6) - Toronto"
            ]
        }
    };

    const currentCategory = serviceCategories[activeCategory];

    return (
        <section id="services" className="py-16 sm:py-20 bg-neutral-950">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
                >
                    <span className="text-[#d4a574] font-semibold tracking-wider text-xs uppercase">Our Services</span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 sm:mt-3 mb-3 sm:mb-6">
                        Comprehensive Dental Care
                        <span className="block">Tailored to Your Needs</span>
                    </h2>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                        From surgical implants to cosmetic enhancements, we offer a full range of dental services 
                        using the latest technology and techniques.
                    </p>
                </motion.div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
                    {Object.keys(serviceCategories).map((category) => {
                        const cat = serviceCategories[category];
                        const Icon = cat.icon;
                        return (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium transition-all duration-300 flex items-center gap-2 ${
                                    activeCategory === category
                                        ? 'bg-white text-black shadow-lg'
                                        : 'bg-neutral-900 text-gray-400 hover:bg-neutral-800 border border-neutral-800'
                                }`}
                            >
                                <Icon className="w-4 sm:w-5 h-4 sm:h-5" />
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
                    className="bg-neutral-900 rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-8 md:p-12 border border-neutral-800"
                >
                    <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                        <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#d4a574]/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                            <currentCategory.icon className="w-5 sm:w-6 h-5 sm:h-6 text-[#d4a574]" />
                        </div>
                        <h3 className="text-lg sm:text-2xl font-bold text-white">{currentCategory.title}</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
                        {currentCategory.services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="flex items-start gap-2 sm:gap-3 p-2 sm:p-4 rounded-lg hover:bg-neutral-800 transition-colors"
                            >
                                <div className="w-1.5 h-1.5 bg-[#d4a574] rounded-full mt-2 flex-shrink-0" />
                                <span className="text-sm sm:text-base text-gray-300">{service}</span>
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
                        size="lg"
                        className="bg-white text-black hover:bg-white/90 h-12 sm:h-14 px-6 sm:px-10 rounded-full text-base sm:text-lg font-semibold shadow-2xl shadow-white/10 hover:shadow-white/20 transition-all duration-300"
                    >
                        Request Consultation & Pricing
                    </Button>
                    <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">
                        Contact us for personalized quotes and treatment plans
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
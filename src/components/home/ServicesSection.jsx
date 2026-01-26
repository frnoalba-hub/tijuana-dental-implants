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
        <section id="services" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="text-[#d4a574] font-semibold tracking-wider text-sm uppercase">Our Services</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mt-3 mb-6">
                        Comprehensive Dental Care
                        <span className="block">Tailored to Your Needs</span>
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        From surgical implants to cosmetic enhancements, we offer a full range of dental services 
                        using the latest technology and techniques.
                    </p>
                </motion.div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {Object.keys(serviceCategories).map((category) => {
                        const cat = serviceCategories[category];
                        const Icon = cat.icon;
                        return (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                                    activeCategory === category
                                        ? 'bg-[#1a365d] text-white shadow-lg'
                                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                                }`}
                            >
                                <Icon className="w-5 h-5" />
                                {cat.title}
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
                    className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-[#d4a574]/10 rounded-xl flex items-center justify-center">
                            <currentCategory.icon className="w-6 h-6 text-[#d4a574]" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#1a365d]">{currentCategory.title}</h3>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {currentCategory.services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="flex items-start gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                <div className="w-2 h-2 bg-[#d4a574] rounded-full mt-2 flex-shrink-0" />
                                <span className="text-gray-700">{service}</span>
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
                    className="text-center mt-12"
                >
                    <Button 
                        size="lg"
                        className="bg-[#d4a574] hover:bg-[#c49464] text-white h-14 px-10 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        Request Consultation & Pricing
                    </Button>
                    <p className="text-sm text-gray-500 mt-4">
                        Contact us for personalized quotes and treatment plans
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
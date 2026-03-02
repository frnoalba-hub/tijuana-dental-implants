import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Stethoscope, Sparkles, Smile, Package } from "lucide-react";
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
                        const isActive = activeCategory === category;
                        return (
                            <motion.button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium transition-all duration-300 flex items-center gap-2 ${
                                    isActive
                                        ? 'bg-white text-black shadow-lg shadow-white/20'
                                        : 'bg-neutral-900 text-gray-400 hover:bg-neutral-800 border border-neutral-800 hover:border-[#d4a574]/50'
                                }`}
                            >
                                <Icon className="w-4 sm:w-5 h-4 sm:h-5" />
                                <span className="hidden sm:inline">{cat.title}</span>
                                <span className="sm:hidden">{cat.title.split(' ')[0]}</span>
                            </motion.button>
                        );
                    })}
                </div>

                {/* Services List */}
                <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-3xl shadow-2xl p-6 sm:p-10 md:p-14 border border-neutral-800/50"
                >
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-14 h-14 bg-gradient-to-br from-[#d4a574] to-[#c49464] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                            <currentCategory.icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white">{currentCategory.title}</h3>
                            <p className="text-xs text-[#d4a574] font-semibold tracking-wider uppercase mt-1">Select your service</p>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        {currentCategory.services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                whileHover={{ x: 4 }}
                                className="flex items-start gap-3 p-3 sm:p-4 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-[#d4a574]/40 group cursor-pointer"
                            >
                                <div className="w-2 h-2 bg-gradient-to-r from-[#d4a574] to-[#e8c9a8] rounded-full mt-2.5 flex-shrink-0 shadow-sm group-hover:scale-125 transition-transform duration-300" />
                                <span className="text-lg sm:text-xl font-medium text-gray-200 group-hover:text-white transition-colors leading-relaxed">{service}</span>
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
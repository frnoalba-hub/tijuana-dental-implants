import React from 'react';
import { motion } from "framer-motion";
import { Sparkles, CircleDot, Layers, RefreshCw, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
    const services = [
        {
            icon: CircleDot,
            title: "Single Tooth Implants",
            description: "Replace a missing tooth with a natural-looking, permanent implant that functions just like your real teeth.",
            price: "Starting at $999"
        },
        {
            icon: Layers,
            title: "All-on-4 / All-on-6",
            description: "Full arch restoration with just 4-6 implants. Get a complete smile transformation in one procedure.",
            price: "Starting at $8,999"
        },
        {
            icon: Sparkles,
            title: "Implant-Supported Dentures",
            description: "Secure your dentures with implants for improved stability, comfort, and confidence.",
            price: "Starting at $4,999"
        },
        {
            icon: RefreshCw,
            title: "Bone Grafting",
            description: "Prepare your jaw for implants with advanced bone grafting techniques when needed.",
            price: "Varies by case"
        }
    ];

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
                        Premium Dental Implant Solutions
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        We specialize in advanced implant procedures using top-quality materials 
                        from renowned manufacturers. All prices are significantly lower than US averages 
                        while maintaining the same exceptional standards.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
                        >
                            <div className="flex items-start gap-5">
                                <div className="w-14 h-14 bg-gradient-to-br from-[#1a365d] to-[#2d4a7c] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <service.icon className="w-7 h-7 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-[#1a365d] mb-2">{service.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-[#d4a574] font-semibold">{service.price}</span>
                                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#d4a574] group-hover:translate-x-1 transition-all" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-500 mb-4">Not sure which option is right for you?</p>
                    <Button 
                        size="lg"
                        className="bg-[#1a365d] hover:bg-[#2d4a7c] text-white px-8 py-6 rounded-full font-medium"
                    >
                        Get a Free Assessment
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
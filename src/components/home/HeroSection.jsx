import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Award, Star } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6878725ae2384abaf6424082/8a2f6b74d_474327284_18482019268045269_3930544013866435665_n.jpg"
                    alt="Modern dental surgery"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d]/95 via-[#1a365d]/80 to-[#1a365d]/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/60 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Badge */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
                        >
                            <Award className="w-4 h-4 text-[#d4a574]" />
                            <span className="text-white/90 text-sm font-medium">Board Certified Implant Specialist & Instructor</span>
                        </motion.div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            World-Class
                            <span className="block text-[#d4a574]">Dental Implants</span>
                            in Tijuana
                        </h1>

                        <p className="text-lg text-white/80 mb-8 max-w-xl leading-relaxed">
                            Experience exceptional dental care with a renowned implant surgeon. 
                            Save up to 70% compared to US prices while receiving the same premium 
                            quality materials and expertise.
                        </p>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap gap-6 mb-10">
                            <div className="flex items-center gap-2 text-white/80">
                                <Shield className="w-5 h-5 text-[#d4a574]" />
                                <span className="text-sm">USA-Grade Materials</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/80">
                                <Star className="w-5 h-5 text-[#d4a574]" />
                                <span className="text-sm">15+ Years Experience</span>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <Button 
                                size="lg"
                                className="bg-[#d4a574] hover:bg-[#c49464] text-white px-8 py-6 rounded-full text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300 group"
                            >
                                Free Consultation
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button 
                                size="lg"
                                variant="outline"
                                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 rounded-full text-lg font-medium backdrop-blur-sm transition-all duration-300"
                            >
                                View Our Work
                            </Button>
                        </div>
                    </motion.div>

                    {/* Doctor Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="hidden lg:block"
                    >
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-br from-[#d4a574]/30 to-transparent rounded-3xl blur-2xl" />
                            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6">
                                <img 
                                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6878725ae2384abaf6424082/3ccb2c0c8_image.png"
                                    alt="Doctor Profile"
                                    className="w-full aspect-[4/5] object-cover rounded-2xl mb-4"
                                />
                                <div className="text-center">
                                    <h3 className="text-xl font-semibold text-white">Dr. Jose Luis Arias</h3>
                                    <p className="text-[#d4a574] font-medium">DDS, Implant Specialist</p>
                                    <p className="text-white/60 text-sm mt-1">Tijuana, Mexico</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
                </svg>
            </div>
        </section>
    );
}
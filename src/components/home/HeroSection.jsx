import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

function HeroSectionContent() {
    const scrollToContact = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleWatchStory = () => {
        const videoSection = document.querySelector('#video-section');
        if (videoSection) {
            videoSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setTimeout(() => {
                const iframe = videoSection.querySelector('iframe');
                if (iframe) {
                    iframe.contentWindow.postMessage('{"method":"play"}', '*');
                }
            }, 800);
        }
    };

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
            {/* Background */}
            <div className="absolute inset-0">
                <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/776406629_image6.png"
                    alt="Dr. Arias performing surgery"
                    className="w-full h-full object-cover object-center opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/50" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pb-24 lg:pt-32 lg:pb-28">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <p className="text-[#C8842D] text-sm font-semibold tracking-wider uppercase mb-6">Board Certified Implant Specialist</p>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 sm:mb-8 tracking-tight">
                            World-Class
                            <span className="block text-[#C8842D]">Dental Implants</span>
                            <span className="text-white/50 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light">in Tijuana</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-white/50 mb-10 max-w-lg leading-relaxed">
                            Exceptional dental care with a renowned implant surgeon. 
                            Save up to <span className="text-[#C8842D] font-semibold">70%</span> compared to US prices.
                        </p>

                        {/* Stats */}
                        <div className="flex items-center gap-4 sm:gap-8 mb-8 sm:mb-10 pb-8 sm:pb-10 border-b border-white/10 overflow-x-auto">
                            <div className="shrink-0">
                                <p className="text-3xl sm:text-4xl font-bold text-white"><AnimatedCounter value="10" suffix="+" /></p>
                                <p className="text-xs sm:text-sm text-white/40">Years</p>
                            </div>
                            <div className="w-px h-12 bg-white/10 shrink-0" />
                            <div className="shrink-0">
                                <p className="text-3xl sm:text-4xl font-bold text-white"><AnimatedCounter value="7500" suffix="+" /></p>
                                <p className="text-xs sm:text-sm text-white/40">Implants Placed</p>
                            </div>
                            <div className="w-px h-12 bg-white/10 shrink-0" />
                            <div className="shrink-0">
                                <p className="text-3xl sm:text-4xl font-bold text-[#C8842D]">70%</p>
                                <p className="text-xs sm:text-sm text-white/40">Cost Savings</p>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-wrap items-center gap-5">
                            <Button 
                                onClick={scrollToContact}
                                size="lg"
                                className="bg-[#C8842D] text-white hover:bg-[#A86E1F] px-8 py-7 rounded-lg text-base font-semibold transition-colors duration-200 group"
                            >
                                Book Free Consultation
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <button onClick={handleWatchStory} className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
                                <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/40 transition-colors">
                                    <Play className="w-4 h-4 ml-0.5" />
                                </span>
                                <span className="text-sm font-medium">Watch Our Story</span>
                            </button>
                        </div>
                    </motion.div>

                    {/* Doctor Photo */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="hidden lg:block"
                    >
                        <div className="relative rounded-2xl overflow-hidden">
                            <img 
                                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/3b2183d9c_7f14ec98e_image9.png"
                                alt="Dr. Jose Luis Arias"
                                className="w-full aspect-[4/5] object-cover rounded-2xl"
                            />
                            
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                                <p className="text-[#C8842D] text-xs font-semibold tracking-wider uppercase mb-1">Lead Surgeon</p>
                                <h3 className="text-xl font-bold text-white">Dr. Jose Luis Arias</h3>
                                <p className="text-white/50 text-sm mt-0.5">DDS, Implant Specialist</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-950 to-transparent" />
        </section>
    );
}

export default HeroSectionContent;
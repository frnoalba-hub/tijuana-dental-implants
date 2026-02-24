import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Award, Star, Play } from "lucide-react";

export default function HeroSection() {
    const handleWatchStory = () => {
        const videoSection = document.querySelector('#video-section');
        if (videoSection) {
            videoSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // Wait for scroll to complete, then play the video
            setTimeout(() => {
                const iframe = videoSection.querySelector('iframe');
                if (iframe) {
                    // Use Vimeo Player API to play
                    iframe.contentWindow.postMessage('{"method":"play"}', '*');
                }
            }, 800);
        }
    };

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/0df1fd154_image11.png"
                    alt="Dr. Arias performing surgery"
                    className="w-full h-full object-cover object-center opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
            </div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full border border-white/5"
                />
                <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full border border-[#d4a574]/10"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:py-32">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        {/* Badge */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#d4a574]/20 to-transparent backdrop-blur-sm border border-[#d4a574]/30 rounded-full px-5 py-2.5 mb-8"
                        >
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4a574] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4a574]"></span>
                            </span>
                            <span className="text-white/90 text-sm font-medium tracking-wide">Board Certified Implant Specialist</span>
                        </motion.div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 sm:mb-8 tracking-tight">
                            World-Class
                            <span className="block bg-gradient-to-r from-[#d4a574] to-[#e8c9a8] bg-clip-text text-transparent">Dental Implants</span>
                            <span className="text-white/60 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light">in Tijuana</span>
                        </h1>

                        <p className="text-xl text-white/60 mb-10 max-w-lg leading-relaxed font-light">
                            Experience exceptional dental care with a renowned implant surgeon. 
                            Save up to <span className="text-[#d4a574] font-medium">70%</span> compared to US prices.
                        </p>

                        {/* Stats Row */}
                        <div className="flex items-center gap-4 sm:gap-8 mb-8 sm:mb-10 pb-8 sm:pb-10 border-b border-white/10 overflow-x-auto">
                            <div className="shrink-0">
                                <p className="text-3xl sm:text-4xl font-bold text-white">10+</p>
                                <p className="text-xs sm:text-sm text-white/50">Years</p>
                            </div>
                            <div className="w-px h-12 bg-white/10 shrink-0" />
                            <div className="shrink-0">
                                <p className="text-3xl sm:text-4xl font-bold text-white">10,000+</p>
                                <p className="text-xs sm:text-sm text-white/50">Implants Placed</p>
                            </div>
                            <div className="w-px h-12 bg-white/10 shrink-0" />
                            <div className="shrink-0">
                                <p className="text-3xl sm:text-4xl font-bold text-[#d4a574]">70%</p>
                                <p className="text-xs sm:text-sm text-white/50">Cost Savings</p>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center gap-6">
                            <Button 
                                size="lg"
                                className="bg-white text-black hover:bg-white/90 px-8 py-7 rounded-full text-base font-semibold shadow-2xl shadow-white/10 hover:shadow-white/20 transition-all duration-300 group"
                            >
                                Book Free Consultation
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <button onClick={handleWatchStory} className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                                <span className="w-14 h-14 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-[#d4a574] group-hover:bg-[#d4a574]/10 transition-all">
                                    <Play className="w-5 h-5 ml-1" />
                                </span>
                                <span className="font-medium">Watch Our Story</span>
                            </button>
                        </div>
                    </motion.div>

                    {/* Doctor Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="hidden lg:block"
                    >
                        <div className="relative">
                            {/* Glow Effect */}
                            <div className="absolute -inset-8 bg-gradient-to-br from-[#d4a574]/20 via-transparent to-transparent rounded-[3rem] blur-3xl" />
                            
                            {/* Card */}
                            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-4 overflow-hidden">
                                {/* Decorative Corner */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#d4a574]/20 to-transparent rounded-bl-[4rem]" />
                                
                                <img 
                                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/3b2183d9c_7f14ec98e_image9.png"
                                    alt="Dr. Jose Luis Arias"
                                    className="w-full aspect-[4/5] object-cover rounded-[1.5rem]"
                                />
                                
                                {/* Info Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                                    <div className="flex items-end justify-between">
                                        <div>
                                            <p className="text-[#d4a574] text-sm font-medium tracking-wider uppercase mb-1">Lead Surgeon</p>
                                            <h3 className="text-2xl font-bold text-white">Dr. Jose Luis Arias</h3>
                                            <p className="text-white/60 text-sm mt-1">DDS, Implant Specialist</p>
                                        </div>
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-[#d4a574] text-[#d4a574]" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-950 to-transparent" />
        </section>
    );
}
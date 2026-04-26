import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
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
        <section className="relative min-h-screen flex items-center overflow-hidden bg-blaze-depth">
            {/* Background */}
            <div className="absolute inset-0">
                <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/776406629_image6.png"
                    alt="Dr. Arias performing surgery"
                    className="w-full h-full object-cover object-center opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/50" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_35%,rgba(58,143,183,0.22),transparent_32%),radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.09),transparent_24%)]" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pb-24 lg:pt-32 lg:pb-28">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <p className="inline-flex items-center rounded-full border border-blaze-accent/30 bg-blaze-accent/10 px-4 py-2 text-blaze-accent text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 shadow-lg shadow-blaze-accent/10">
                            Board Certified Implant Specialist
                        </p>

                        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 sm:mb-8 tracking-tight">
                            World-Class
                            <span className="block text-blaze-accent">Dental Implants</span>
                            <span className="text-white/50 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light">in Tijuana</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-white/60 mb-10 max-w-lg leading-relaxed">
                            Exceptional dental care with a renowned implant surgeon. 
                            Save up to <span className="text-blaze-accent font-semibold">70%</span> compared to US prices.
                        </p>

                        {/* Stats — glass panel for clearer structure (icons/counters unchanged) */}
                        <div className="mb-8 sm:mb-10 pb-8 sm:pb-10 border-b border-white/10">
                            <div className="flex items-center gap-4 sm:gap-8 overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-5 sm:px-7 sm:py-6 shadow-inner shadow-black/20 backdrop-blur-sm ring-1 ring-white/5">
                                <div className="shrink-0">
                                    <p className="text-3xl sm:text-4xl font-bold text-white"><AnimatedCounter value="10" suffix="+" /></p>
                                    <p className="text-xs sm:text-sm text-white/45">Years</p>
                                </div>
                                <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent shrink-0" />
                                <div className="shrink-0">
                                    <p className="text-3xl sm:text-4xl font-bold text-white"><AnimatedCounter value="7500" suffix="+" /></p>
                                    <p className="text-xs sm:text-sm text-white/45">Implants Placed</p>
                                </div>
                                <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent shrink-0" />
                                <div className="shrink-0">
                                    <p className="text-3xl sm:text-4xl font-bold text-blaze-accent">70%</p>
                                    <p className="text-xs sm:text-sm text-white/45">Cost Savings</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-wrap items-center gap-4">
                            <Button 
                                onClick={scrollToContact}
                                size="lg"
                                className="bg-white text-blaze-ink hover:bg-white/90 px-7 py-6 rounded-full text-sm font-semibold tracking-wide uppercase shadow-2xl shadow-white/10 transition-all duration-200 hover:-translate-y-0.5"
                            >
                                Book Free Consultation
                            </Button>
                            <button onClick={handleWatchStory} className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-white/70 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/[0.07] hover:text-white">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blaze-accent/15 text-blaze-accent">
                                    <Play className="w-4 h-4 fill-current" />
                                </span>
                                <span className="text-sm">Watch Our Story</span>
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
                        <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.03] p-2 shadow-2xl shadow-black/40">
                            <img 
                                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/3b2183d9c_7f14ec98e_image9.png"
                                alt="Dr. Jose Luis Arias"
                                className="w-full aspect-[4/5] object-cover rounded-[1.5rem]"
                            />
                            
                            <div className="absolute bottom-2 left-2 right-2 rounded-b-[1.5rem] p-6 bg-gradient-to-t from-black/95 via-black/60 to-transparent">
                                <p className="text-blaze-accent text-xs font-semibold tracking-wider uppercase mb-1">Lead Surgeon</p>
                                <h3 className="font-display text-xl font-bold text-white">Dr. Jose Luis Arias</h3>
                                <p className="text-white/50 text-sm mt-0.5">DDS, Implant Specialist</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blaze-surface to-transparent" />
        </section>
    );
}

export default HeroSectionContent;
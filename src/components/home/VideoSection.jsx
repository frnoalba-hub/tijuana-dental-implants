import React from 'react';
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function VideoSection() {
    return (
        <section id="video-section" className="py-24 bg-neutral-950">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-12"
                >
                    <span className="text-[#d4a574] font-semibold tracking-wider text-sm uppercase">Watch & Learn</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6">
                        See Dr. Arias in Action
                    </h2>
                    <p className="text-gray-400 leading-relaxed">
                        Watch real procedures and patient transformations performed by Dr. Jose Luis Arias, 
                        one of the leading implant specialists in North America.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.97 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                    >
                        <div style={{ padding: '75% 0 0 0', position: 'relative' }}>
                            <iframe
                                src="https://player.vimeo.com/video/1170470738?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                title="Dr. Arias - Implant Institute"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.97 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                    >
                        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                            <iframe
                                src="https://player.vimeo.com/video/1167611464?badge=0&autopause=0&player_id=0&app_id=58479"
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                title="BLAZE Dental - Dr. Arias"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
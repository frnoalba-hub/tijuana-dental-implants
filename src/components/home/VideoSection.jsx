import React from 'react';
import { motion } from "framer-motion";

export default function VideoSection() {
    return (
        <section id="video-section" className="py-24 bg-blaze-surface">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-12"
                >
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                        See Dr. Arias in Action
                    </h2>
                    <p className="text-gray-400 leading-relaxed">
                        Real procedures and patient transformations from Dr. Jose Luis Arias.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
                    {/* Landscape embed — 16:9 box matches typical Vimeo; dark shell hides letterbox if any */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.97 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative overflow-hidden rounded-xl border border-blaze-surface-border bg-blaze-depth shadow-xl"
                    >
                        <div className="relative aspect-video w-full">
                            <iframe
                                className="absolute inset-0 h-full w-full"
                                src="https://player.vimeo.com/video/1170470738?autoplay=0&title=0&byline=0&portrait=0&badge=0&autopause=1&player_id=0&app_id=58479&color=3a8fb7"
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                title="Dr. Arias - Implant Institute"
                                loading="lazy"
                            />
                        </div>
                    </motion.div>

                    {/* Portrait-style embed — taller aspect so side pillarboxing from Vimeo isn’t in a wide 16:9 frame */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.97 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="relative overflow-hidden rounded-xl border border-blaze-surface-border bg-blaze-depth shadow-xl"
                    >
                        <div className="relative mx-auto aspect-[9/16] w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px]">
                            <iframe
                                className="absolute inset-0 h-full w-full"
                                src="https://player.vimeo.com/video/1167611464?autoplay=0&badge=0&autopause=1&player_id=0&app_id=58479&color=3a8fb7&title=0&byline=0&portrait=0"
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                                title="BLAZE Dental - Dr. Arias"
                                loading="lazy"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
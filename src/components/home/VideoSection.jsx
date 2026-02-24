import React from 'react';
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function VideoSection() {
    return (
        <section className="py-24 bg-neutral-950">
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

                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                >
                    <div className="aspect-video">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/7TqPj7UVjlQ?rel=0&modestbranding=1"
                            title="BLAZE Dental - Dr. Arias"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
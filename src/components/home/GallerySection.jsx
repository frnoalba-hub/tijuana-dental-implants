import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const officeImages = [
    { src: "/office/bz-office-8.png", alt: "Blaze Dental reception and branding wall", caption: "Reception and signature branding" },
    { src: "/office/bz-office-2.png", alt: "Private operatory at Blaze Dental", caption: "Private operatories with natural light" },
    { src: "/office/bz-office-4.png", alt: "Treatment chair at Blaze Dental", caption: "Comfort-focused treatment rooms" },
    { src: "/office/bz-office-3.png", alt: "Blaze Dental front desk", caption: "Welcoming check-in area" },
    { src: "/office/bz-office-5.png", alt: "Reception and treatment bay", caption: "Built for an easy patient flow" },
    { src: "/office/bz-office-6.png", alt: "Modern operatory setup", caption: "Fully equipped treatment stations" },
    { src: "/office/bz-office-1.png", alt: "Treatment room through arched entry", caption: "Calm spaces with premium finishes" },
];

export default function GallerySection() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section id="gallery" className="py-16 sm:py-24 bg-blaze-depth">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
                >
                    <p className="text-blaze-accent text-xs font-semibold tracking-[0.24em] uppercase mb-4">Our Office</p>
                    <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                        Inside Blaze Dental
                    </h2>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                        A look inside our upgraded clinic — private suites, modern equipment, and a calm patient experience.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
                    {officeImages.map((image, index) => (
                        <motion.div
                            key={image.src}
                            initial={{ opacity: 0, scale: 0.96 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35, delay: Math.min(index * 0.06, 0.3) }}
                            className="group relative overflow-hidden rounded-xl cursor-pointer"
                            onClick={() => setSelectedImage(image)}
                        >
                            <div className="aspect-square relative">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    loading="lazy"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 rounded-2xl"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                                    <p className="text-white font-semibold text-sm sm:text-base leading-snug">{image.caption}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 bg-blaze-depth/90 flex items-center justify-center p-4"
                            onClick={() => setSelectedImage(null)}
                        >
                            <button
                                className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                                onClick={() => setSelectedImage(null)}
                            >
                                <X className="w-6 h-6 text-white" />
                            </button>
                            <motion.img
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.9 }}
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                className="max-w-full max-h-[85vh] rounded-lg object-contain"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}

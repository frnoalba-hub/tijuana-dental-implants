import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

export default function GallerySection() {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        {
            src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/4b2fe752d_image2-Copy.png",
            alt: "Dr. Arias performing surgery",
            caption: "Precision implant placement"
        },
        {
            src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/776406629_image6.png",
            alt: "Surgical procedure",
            caption: "Advanced surgical techniques"
        },
        {
            src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/7f14ec98e_image9.png",
            alt: "Dr. Arias teaching",
            caption: "Training fellow dentists"
        },
        {
            src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/754213e63_image10.png",
            alt: "Team surgery",
            caption: "International surgical collaboration"
        },
        {
            src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/1848d3f02_image5.png",
            alt: "Surgical demonstration",
            caption: "Hands-on training session"
        },
        {
            src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/57c56acf6_image4.png",
            alt: "Teaching session",
            caption: "Instructing advanced techniques"
        },
        {
            src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/b8f550e1c_image12.png",
            alt: "University Implant Educators course",
            caption: "Advanced course instruction"
        },
        {
            src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/d809bc389_image13.png",
            alt: "Surgical mastery course",
            caption: "Teaching cutting-edge techniques"
        },
        {
            src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/7988d856c_image14.png",
            alt: "Team surgical training",
            caption: "Collaborative surgical learning"
        },
        {
            src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/064d11c59_image21.png",
            alt: "Advanced Implant Education certification",
            caption: "AIE certification achievement"
        },
        {
            src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/757ade1b1_image22.png",
            alt: "Supervised surgical training",
            caption: "Mentoring dental professionals"
        },
        {
            src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/8e14e2aad_image23.png",
            alt: "Dr. Arias with team and patient",
            caption: "Patient care excellence"
        },
        {
            src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/eb2e9e610_image24.png",
            alt: "Professional networking dinner",
            caption: "Building international connections"
        },
        {
            src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/0e1987243_image25.png",
            alt: "Dr. Arias with happy patient",
            caption: "Successful procedure celebration"
        },
        {
            src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/430c8fee4_image26.png",
            alt: "Dr. Arias performing implant surgery",
            caption: "Precision implant placement"
        }
    ];

    return (
        <section id="gallery" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="text-[#d4a574] font-semibold tracking-wider text-sm uppercase">Our Work</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mt-3 mb-6">
                        See Our Expertise in Action
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Take a look inside our modern facility and see the precision and care 
                        that goes into every procedure.
                    </p>
                </motion.div>

                {/* Gallery Grid */}
                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl cursor-pointer"
                            onClick={() => setSelectedImage(image)}
                        >
                            <div className="aspect-square">
                                <img 
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <p className="text-white font-medium">{image.caption}</p>
                                </div>
                            </div>
                            <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <ZoomIn className="w-5 h-5 text-white" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Lightbox */}
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
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
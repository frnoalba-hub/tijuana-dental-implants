import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const trainingImages = [
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/4b2fe752d_image2-Copy.png", alt: "Dr. Arias performing surgery", caption: "Precision implant placement" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/776406629_image6.png", alt: "Surgical procedure", caption: "Advanced surgical techniques" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/754213e63_image10.png", alt: "Team surgery", caption: "International surgical collaboration" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/1848d3f02_image5.png", alt: "Surgical demonstration", caption: "Hands-on training session" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/57c56acf6_image4.png", alt: "Teaching session", caption: "Instructing advanced techniques" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/7988d856c_image14.png", alt: "Team surgical training", caption: "Collaborative surgical learning" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/757ade1b1_image22.png", alt: "Supervised surgical training", caption: "Mentoring dental professionals" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/8e14e2aad_image23.png", alt: "Dr. Arias with team and patient", caption: "Patient care excellence" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/eb2e9e610_image24.png", alt: "Professional networking dinner", caption: "Building international connections" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/0e1987243_image25.png", alt: "Dr. Arias with happy patient", caption: "Successful procedure celebration" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/430c8fee4_image26.png", alt: "Dr. Arias performing implant surgery", caption: "Precision implant placement" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/5bc3b53b1_image27.png", alt: "Dr. Arias focused surgical work", caption: "Detailed surgical precision" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/a8324749f_image28.png", alt: "Dr. Arias with surgical team", caption: "Expert team collaboration" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/8141aed8a_image29.png", alt: "Dr. Arias in clinic", caption: "Dental implant expert" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/cb9e02449_image30.png", alt: "Surgical procedure in progress", caption: "Advanced implant surgery" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/9802c402f_image34.png", alt: "Dr. Arias with colleague", caption: "Professional networking" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/0d610e7c1_image35.png", alt: "MINEC America collaboration", caption: "International education partnership" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/a76af698e_image36.png", alt: "Surgical team operation", caption: "Complex surgical procedure" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/8ccd60ebd_image37.png", alt: "Dr. Arias with fellow surgeon", caption: "International collaboration" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/f580acbdb_image38.png", alt: "Welcoming international guests", caption: "Personalized patient care" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/e4ac61740_image39.png", alt: "Focused surgical procedure", caption: "Meticulous surgical care" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/35c3db519_image40.png", alt: "Professional collaboration", caption: "Sharing expertise" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/7787bd987_image41.png", alt: "MINEC team photo", caption: "MegaGen International Network" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/5f3373ea6_image42.png", alt: "Precision surgical work", caption: "Advanced surgical focus" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/6bffcf4c5_image43.png", alt: "Dr. Arias operating", caption: "High-precision implantology" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/d840d1faf_image44.png", alt: "Surgical team in action", caption: "Expert team environment" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/a4b030abd_image45.png", alt: "Advanced surgical procedure", caption: "Collaborative patient care" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/31485251c_image46.png", alt: "University Implant Educators team", caption: "Implant education leadership" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/69a74a04e_image47.png", alt: "Implant Surgical Program Directors", caption: "Industry leadership & recognition" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/086c866b2_image49.png", alt: "Surgical team in action", caption: "Advanced surgical procedure" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/9d1486a76_image50.png", alt: "Dr. Arias performing surgery", caption: "Precision implant surgery" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/0c131e7b2_image51.png", alt: "Digital dentistry planning", caption: "Advanced treatment planning" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/8f2de5261_image52.png", alt: "Clinical instruction", caption: "Teaching surgical techniques" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/d9f45fdc7_image53.png", alt: "AIE Recognition of Achievement", caption: "Professional certification" },
];

export default function TrainingGallerySection() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [visibleCount, setVisibleCount] = useState(8);

    const visibleImages = trainingImages.slice(0, visibleCount);

    return (
        <section id="training" className="py-16 sm:py-24 bg-blaze-surface">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
                >
                    <p className="section-label mb-4">Courses & Training</p>
                    <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                        Surgical Education & Certifications
                    </h2>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                        Dr. Arias trains dentists worldwide. Courses, certifications, and hands-on surgical instruction.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
                    {visibleImages.map((image, index) => (
                        <motion.div
                            key={image.src}
                            initial={{ opacity: 0, scale: 0.96 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35, delay: Math.min(index * 0.05, 0.25) }}
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

                {visibleCount < trainingImages.length && (
                    <div className="flex justify-center mt-8 sm:mt-12">
                        <Button
                            variant="outline"
                            onClick={() => setVisibleCount((prev) => Math.min(prev + 8, trainingImages.length))}
                            className="border border-white/20 bg-transparent text-white hover:bg-white hover:text-black px-6 py-3 rounded-md text-sm transition-colors duration-200"
                        >
                            Load More Photos
                            <ChevronDown className="ml-2 w-4 h-4" />
                        </Button>
                    </div>
                )}

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

import React, { useState } from 'react';
import { X } from "lucide-react";

const featuredOfficeImage = {
    src: "/office/bz-office-8.png",
    alt: "Blaze Dental reception and branding wall",
    caption: "Reception and signature branding",
};

const surroundOfficeImages = [
    { src: "/office/bz-office-2.png", alt: "Private operatory at Blaze Dental", caption: "Private operatories with natural light" },
    { src: "/office/bz-office-4.png", alt: "Treatment chair at Blaze Dental", caption: "Comfort-focused treatment rooms" },
    { src: "/office/bz-office-3.png", alt: "Blaze Dental front desk", caption: "Welcoming check-in area" },
    { src: "/office/bz-office-5.png", alt: "Reception and treatment bay", caption: "Built for an easy patient flow" },
    { src: "/office/bz-office-6.png", alt: "Modern operatory setup", caption: "Fully equipped treatment stations" },
    { src: "/office/bz-office-1.png", alt: "Treatment room through arched entry", caption: "Calm spaces with premium finishes" },
];

function GalleryTile({ image, onSelect, className = "" }) {
    return (
        <button
            type="button"
            className={`group relative overflow-hidden rounded-xl text-left ${className}`}
            onClick={() => onSelect(image)}
        >
            <div className="relative aspect-square">
                <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-sm font-semibold leading-snug text-white">{image.caption}</p>
                </div>
            </div>
        </button>
    );
}

export default function GallerySection() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section id="gallery" className="bg-blaze-depth py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-16">
                    <p className="section-label mb-4">Our Office</p>
                    <h2 className="font-display mb-4 text-2xl font-bold text-white sm:mb-6 sm:text-3xl md:text-4xl">
                        Inside Blaze Dental
                    </h2>
                    <p className="text-sm leading-relaxed text-gray-400 sm:text-base">
                        A look inside our upgraded clinic — private suites, modern equipment, and a calm patient experience.
                    </p>
                </div>

                <div className="mx-auto max-w-4xl space-y-4 sm:space-y-5">
                    <div className="grid grid-cols-3 gap-3 sm:gap-4">
                        {surroundOfficeImages.slice(0, 3).map((image) => (
                            <GalleryTile key={image.src} image={image} onSelect={setSelectedImage} />
                        ))}
                    </div>

                    <button
                        type="button"
                        className="group relative mx-auto block w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40"
                        onClick={() => setSelectedImage(featuredOfficeImage)}
                    >
                        <div className="relative aspect-[16/10] sm:aspect-[5/3]">
                            <img
                                src={featuredOfficeImage.src}
                                alt={featuredOfficeImage.alt}
                                loading="lazy"
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                            />
                        </div>
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                                <p className="text-base font-semibold text-white sm:text-lg">{featuredOfficeImage.caption}</p>
                            </div>
                        </div>
                    </button>

                    <div className="grid grid-cols-3 gap-3 sm:gap-4">
                        {surroundOfficeImages.slice(3, 6).map((image) => (
                            <GalleryTile key={image.src} image={image} onSelect={setSelectedImage} />
                        ))}
                    </div>
                </div>

                {selectedImage && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-blaze-depth/90 p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            type="button"
                            className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="h-6 w-6 text-white" />
                        </button>
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="max-h-[85vh] max-w-full rounded-lg object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                )}
            </div>
        </section>
    );
}

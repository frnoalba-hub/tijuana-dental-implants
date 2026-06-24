import React from 'react';
import { motion } from "framer-motion";

const VIMEO_PARAMS =
    "autoplay=0&badge=0&autopause=1&player_id=0&app_id=58479&color=3a8fb7&title=0&byline=0&portrait=0";

const videos = {
    testimonial: {
        id: "1204335769",
        title: "Patient Testimonial",
        label: "Patient testimonial",
        caption: "Hear from a real Blaze Dental patient.",
        portrait: true,
    },
    institute: {
        id: "1170470738",
        title: "Dr. Arias - Implant Institute",
        label: "Implant overview",
        caption: "Advanced implant care with Dr. Jose Luis Arias.",
        portrait: false,
    },
    clinic: {
        id: "1167611464",
        title: "BLAZE Dental - Dr. Arias",
        label: "Meet the clinic",
        caption: "A quick look at Blaze Dental and Dr. Arias.",
        portrait: true,
    },
};

function VideoCard({ video, className = "", delay = 0 }) {
    const frameClass = video.portrait
        ? "relative mx-auto aspect-[9/16] w-full max-w-[300px] sm:max-w-[320px]"
        : "relative aspect-video w-full";

    return (
        <motion.figure
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className={`group ${className}`}
        >
            <div className="overflow-hidden rounded-xl border border-white/10 bg-blaze-depth shadow-xl shadow-black/40 ring-1 ring-white/5 transition-all duration-300 hover:border-blaze-accent/35 hover:ring-blaze-accent/25">
                <div className={frameClass}>
                    <iframe
                        className="absolute inset-0 h-full w-full"
                        src={`https://player.vimeo.com/video/${video.id}?${VIMEO_PARAMS}`}
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        title={video.title}
                        loading="lazy"
                    />
                </div>
            </div>
            <figcaption className="mt-3 text-center">
                <p className="text-sm font-semibold text-white/90">{video.label}</p>
                <p className="mt-1 text-xs text-white/55">{video.caption}</p>
            </figcaption>
        </motion.figure>
    );
}

export default function VideoSection() {
    return (
        <section id="videos" className="page-section-over-office relative border-t border-white/[0.06] py-20 sm:py-24">
            <div className="absolute inset-0 bg-blaze-depth/88 backdrop-blur-md" aria-hidden="true" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-10 max-w-3xl text-center sm:mb-12"
                >
                    <p className="section-label mb-4">Video</p>
                    <h2 className="font-display mb-4 text-2xl font-bold text-white sm:mb-6 sm:text-3xl md:text-4xl">
                        See Dr. Arias in Action
                    </h2>
                    <p className="text-sm leading-relaxed text-gray-400 sm:text-base">
                        Patient stories, real procedures, and a closer look at Blaze Dental before you book.
                    </p>
                </motion.div>

                <div className="mx-auto flex max-w-5xl flex-col gap-10">
                    <VideoCard video={videos.testimonial} className="md:hidden" />

                    <VideoCard video={videos.institute} delay={0.05} />

                    <div className="grid gap-10 md:grid-cols-2 md:gap-8">
                        <VideoCard video={videos.testimonial} className="hidden md:block" delay={0.1} />
                        <VideoCard video={videos.clinic} delay={0.15} />
                    </div>
                </div>
            </div>
        </section>
    );
}

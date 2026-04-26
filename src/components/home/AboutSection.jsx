import React from 'react';
import { motion } from "framer-motion";
import { Award, Check, GraduationCap, Users } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

export default function AboutSection() {
    const credentials = [
        "Board Certified Dental Surgeon",
        "Dental Implant Instructor",
        "Advanced Implantology Training",
        "Fluent in English & Spanish"
    ];

    const stats = [
        { icon: Award, value: "10+", label: "Years Experience" },
        { icon: Users, value: "7,500+", label: "Successful Implants" },
        { icon: GraduationCap, value: "100+", label: "Doctors Trained" },
    ];

    return (
        <section id="about" className="relative overflow-hidden py-24 bg-blaze-surface">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_24%,rgba(58,143,183,0.12),transparent_28%)]" />
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="relative grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blaze-accent/20 via-white/5 to-transparent blur-xl" />
                        <img 
                            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/60f0cdae2_unnamed3.png"
                            alt="Dr. Jose Luis Arias"
                            className="relative w-full rounded-[2rem] border border-white/10 object-cover object-top aspect-[3/4] shadow-2xl shadow-black/35"
                        />
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="mb-4 text-blaze-accent font-semibold tracking-[0.24em] text-xs uppercase">About the Doctor</p>
                        <h2 className="font-display max-w-2xl text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.04] mb-7">
                            Meet Dr. Jose Luis Arias,
                            <span className="block text-blaze-accent/95 font-semibold mt-2">Your Implant Specialist</span>
                        </h2>

                        <div className="max-w-2xl space-y-5 text-[1.05rem] leading-8 text-gray-400 md:text-lg md:leading-9">
                            <p>
                            With over 10 years of experience in dental implantology, Dr. Arias is not 
                            only a skilled surgeon but also a respected instructor who trains other dentists 
                            in advanced implant techniques. His commitment to excellence and patient care 
                            has made him a trusted choice for patients traveling from the USA.
                            </p>

                            <p>
                            Using state-of-the-art technology and premium materials from leading manufacturers, 
                            Dr. Arias delivers results that meet and exceed US standards at a fraction of the cost.
                            </p>
                        </div>

                        {/* Credentials */}
                        <ul className="mt-8 mb-10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-300">
                            {credentials.map((item, index) => (
                                <li key={index} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3">
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blaze-accent/15 text-blaze-accent">
                                        <Check className="h-3.5 w-3.5" />
                                    </span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-3 border-t border-white/10 pt-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                                    <stat.icon className="mb-3 h-4 w-4 text-blaze-accent" />
                                    <p className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                                        {stat.value.includes('+') ? (
                                            <><AnimatedCounter value={stat.value.replace('+', '')} suffix="+" /></>
                                        ) : stat.value}
                                    </p>
                                    <p className="text-[0.68rem] sm:text-xs text-gray-500 mt-1 leading-snug">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
import React from 'react';
import { motion } from "framer-motion";
import { Award, GraduationCap, Users, CheckCircle2 } from "lucide-react";
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
        <section id="about" className="py-24 bg-neutral-950">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <img 
                            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/60f0cdae2_unnamed3.png"
                            alt="Dr. Jose Luis Arias"
                            className="w-full rounded-2xl object-cover object-top aspect-[3/4]"
                        />
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[#d4a574] font-semibold tracking-wider text-sm uppercase">About the Doctor</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6">
                            Meet Dr. Jose Luis Arias,
                            <span className="block text-gray-400 font-normal text-2xl mt-2">Your Implant Specialist</span>
                        </h2>

                        <p className="text-gray-400 leading-relaxed mb-6">
                            With over 10 years of experience in dental implantology, Dr. Arias is not 
                            only a skilled surgeon but also a respected instructor who trains other dentists 
                            in advanced implant techniques. His commitment to excellence and patient care 
                            has made him a trusted choice for patients traveling from the USA.
                        </p>

                        <p className="text-gray-400 leading-relaxed mb-8">
                            Using state-of-the-art technology and premium materials from leading manufacturers, 
                            Dr. Arias delivers results that meet and exceed US standards—at a fraction of the cost.
                        </p>

                        {/* Credentials */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                            {credentials.map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#d4a574] flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 p-6 bg-neutral-900 rounded-2xl border border-neutral-800">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center group">
                                    <stat.icon className="w-6 h-6 text-[#d4a574] mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                                    <p className="text-2xl font-bold text-white">
                                        {stat.value.includes('+') ? (
                                            <><AnimatedCounter value={stat.value.replace('+', '')} suffix="+" /></>
                                        ) : stat.value}
                                    </p>
                                    <p className="text-xs text-gray-500">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
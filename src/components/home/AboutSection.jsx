import React from 'react';
import { Award, Check, GraduationCap, Users } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const PORTRAIT_SRC = "/doctor/dr-arias-portrait.png";
const PORTRAIT_SRC_2X = "/doctor/dr-arias-portrait@2x.png";

export default function AboutSection() {
    const credentials = [
        "Board Certified Dental Surgeon",
        "Dental Implant Instructor",
        "Advanced Implantology Training",
        "Fluent in English & Spanish"
    ];

    const stats = [
        { icon: Award, value: "10+", label: "Years Experience" },
        { icon: Users, value: "Global", label: "Surgical Education Network" },
        { icon: GraduationCap, value: "100+", label: "Doctors Trained" },
    ];

    return (
        <section id="about" className="page-section-over-office relative border-t border-white/[0.06] py-24">
            <div className="absolute inset-0 bg-blaze-depth/88 backdrop-blur-md" aria-hidden="true" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
                    <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-md">
                        <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blaze-accent/25 via-white/5 to-transparent blur-xl" />
                        <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-blaze-depth shadow-2xl shadow-black/50">
                            <img
                                src={PORTRAIT_SRC}
                                srcSet={`${PORTRAIT_SRC} 1x, ${PORTRAIT_SRC_2X} 2x`}
                                alt="Dr. Jose Luis Arias"
                                loading="lazy"
                                decoding="async"
                                className="about-portrait aspect-[3/4] w-full object-cover object-top"
                            />
                        </div>
                    </div>

                    <div>
                        <p className="section-label mb-4">About the Doctor</p>
                        <h2 className="font-display mb-7 max-w-2xl text-4xl font-bold leading-[1.04] tracking-tight text-white md:text-5xl lg:text-6xl">
                            Meet Dr. Jose Luis Arias,
                            <span className="mt-2 block font-semibold text-blaze-accent">Your Implant Specialist</span>
                        </h2>

                        <div className="max-w-2xl space-y-5 text-[1.05rem] leading-8 text-white/78 md:text-lg md:leading-9">
                            <p>
                                With over 10 years of experience in dental implantology, Dr. Arias is not
                                only a skilled surgeon but also a respected instructor who trains other dentists
                                in advanced implant techniques. His commitment to excellence and patient care
                                has made him a trusted choice for patients traveling from the USA.
                            </p>

                            <p>
                                Through direct patient care, advanced training, and teaching environments, Dr. Arias
                                has been involved in thousands of implant procedures while using premium materials
                                from leading manufacturers at a fraction of typical US pricing.
                            </p>
                        </div>

                        <ul className="mb-10 mt-8 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                            {credentials.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-center gap-3 rounded-2xl border border-white/12 bg-black/35 px-4 py-3 text-white/85"
                                >
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blaze-accent/20 text-blaze-accent">
                                        <Check className="h-3.5 w-3.5" />
                                    </span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="grid grid-cols-3 gap-3 border-t border-white/12 pt-8">
                            {stats.map((stat) => (
                                <div key={stat.label} className="rounded-2xl border border-white/12 bg-black/40 p-4">
                                    <stat.icon className="mb-3 h-4 w-4 text-blaze-accent" />
                                    <p className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                                        {stat.value.includes('+') ? (
                                            <AnimatedCounter value={stat.value.replace('+', '')} suffix="+" />
                                        ) : (
                                            stat.value
                                        )}
                                    </p>
                                    <p className="mt-1 text-[0.68rem] leading-snug text-white/65 sm:text-xs">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

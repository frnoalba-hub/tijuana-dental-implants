import React from 'react';
import { motion } from "framer-motion";
import { Languages, MapPinned, MessageCircle, Route } from "lucide-react";

const serviceAreas = [
    "San Diego",
    "Chula Vista",
    "Orange County",
    "Los Angeles",
    "Riverside",
    "Imperial County"
];

const patientQuestions = [
    {
        question: "Is this close enough for San Diego patients?",
        answer: "Yes. The clinic is in Tijuana, making it practical for patients and families from San Diego, Chula Vista, Orange County, Los Angeles, Riverside, and the rest of Southern California."
    },
    {
        question: "Can my family speak Spanish with the office?",
        answer: "Yes. The team supports English and Spanish, so Spanish-speaking families can ask questions, understand the treatment plan, and coordinate follow-up comfortably."
    },
    {
        question: "Why do Southern California patients cross the border?",
        answer: "Patients often choose Tijuana for lower implant costs, shorter wait times, experienced specialists, and access to premium implant materials without paying typical US pricing."
    },
    {
        question: "What should I ask before booking?",
        answer: "Ask about implant type, timeline, bone grafting needs, total cost, number of visits, materials, recovery, and how follow-up is handled if you live in Southern California."
    }
];

export default function SouthernCaliforniaSection() {
    return (
        <section id="southern-california" className="relative overflow-hidden bg-blaze-surface py-24">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(58,143,183,0.15),transparent_30%),radial-gradient(circle_at_88%_72%,rgba(255,255,255,0.05),transparent_24%)]" />
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-14 max-w-3xl text-center"
                >
                    <p className="section-label mb-4">
                        Southern California Patients
                    </p>
                    <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                        Dental Implants in Tijuana for English and Spanish-Speaking Families
                    </h2>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
                        Blaze Dental is built for patients who live in Southern California and want specialist-level implant care close to home, with bilingual support before, during, and after the visit.
                    </p>
                </motion.div>

                <div className="grid gap-6 lg:grid-cols-3">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/20 lg:col-span-1"
                    >
                        <MapPinned className="mb-5 h-7 w-7 text-blaze-accent" />
                        <h3 className="font-display text-2xl font-semibold text-white">Serving Border-Area Patients</h3>
                        <p className="mt-4 text-sm leading-7 text-gray-400">
                            Clear guidance for families comparing implant care near San Diego, across Southern California, and across the border in Tijuana.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
                            {serviceAreas.map((area) => (
                                <span key={area} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/70">
                                    {area}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/20 lg:col-span-2"
                    >
                        <div className="grid gap-4 sm:grid-cols-3">
                            <div className="rounded-2xl border border-white/10 bg-blaze-depth/40 p-5">
                                <Route className="mb-4 h-5 w-5 text-blaze-accent" />
                                <h4 className="font-semibold text-white">Close to San Diego</h4>
                                <p className="mt-2 text-sm leading-6 text-gray-500">Designed for quick cross-border consultation and treatment planning.</p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-blaze-depth/40 p-5">
                                <Languages className="mb-4 h-5 w-5 text-blaze-accent" />
                                <h4 className="font-semibold text-white">Hablamos Español</h4>
                                <p className="mt-2 text-sm leading-6 text-gray-500">Spanish-speaking patients and families can communicate clearly with the team.</p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-blaze-depth/40 p-5">
                                <MessageCircle className="mb-4 h-5 w-5 text-blaze-accent" />
                                <h4 className="font-semibold text-white">WhatsApp Friendly</h4>
                                <p className="mt-2 text-sm leading-6 text-gray-500">Easy follow-up for questions, scheduling, and treatment coordination.</p>
                            </div>
                        </div>

                        <div className="mt-6 grid gap-3">
                            {patientQuestions.map((item) => (
                                <details key={item.question} className="group rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                                    <summary className="cursor-pointer list-none font-semibold text-white transition-colors group-open:text-blaze-accent">
                                        {item.question}
                                    </summary>
                                    <p className="mt-3 text-sm leading-7 text-gray-400">{item.answer}</p>
                                </details>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

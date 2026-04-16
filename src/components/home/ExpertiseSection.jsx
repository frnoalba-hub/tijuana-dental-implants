import React from 'react';
import { motion } from "framer-motion";
export default function ExpertiseSection() {
    const credentials = [
        {
            title: "Advanced Implant Educator",
            description: "Teaches cutting-edge surgical techniques to dentists worldwide through University Implant Educators",
            image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/d809bc389_image13.png"
        },
        {
            title: "International Instructor",
            description: "Trains dentists from multiple countries in advanced implant placement and bone grafting techniques",
            image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/9a3ac0a5a_028eb11c-2f57-4114-913f-864468b4c0ad.jpg"
        },
        {
            title: "Published Surgeon",
            description: "Recognized instructor with advanced certifications in implantology and bone regeneration",
            image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/d88bba96f_image15.png"
        },
        {
            title: "Global Training Program",
            description: "Leads hands-on surgical courses with international recognition from leading dental institutions",
            image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/7b104b100_image16.png"
        }
    ];

    return (
        <section className="py-24 bg-black">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                        Instructor & Leader in Advanced Implant Surgery
                    </h2>
                    <p className="text-gray-400 leading-relaxed">
                        Dr. Arias doesn't just perform surgeries—he teaches them. As an instructor with University Implant Educators, 
                        he trains dentists from around the world in advanced surgical techniques, demonstrating the depth of his expertise.
                    </p>
                </motion.div>

                {/* Credentials Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {credentials.map((item, index) => {
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-neutral-900 rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-neutral-800"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-display text-base font-semibold text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Trust Message */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 bg-neutral-900 border border-neutral-800 rounded-2xl p-8 md:p-12 text-center"
                >
                    <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
                        When you choose Dr. Arias, you're choosing not just a surgeon, but an educator recognized internationally 
                        for advancing the field of implant dentistry. His commitment to teaching reflects his commitment to excellence in every surgery.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
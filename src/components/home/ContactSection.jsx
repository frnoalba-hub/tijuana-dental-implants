import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send, Clock, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            const { base44 } = await import('@/api/base44Client');
            await base44.integrations.Core.SendEmail({
                to: 'blaze.dental@gmail.com',
                subject: `New Consultation Request from ${formData.name}`,
                body: `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
            });
            setSubmitStatus('success');
            setFormData({ name: '', email: '', phone: '', message: '' });
            setTimeout(() => setSubmitStatus(''), 3000);
        } catch (error) {
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus(''), 3000);
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: Phone,
            label: "Phone",
            value: "+52 664 385 49 87",
            subtext: "Call or WhatsApp"
        },
        {
            icon: Mail,
            label: "Email",
            value: "blaze.dental@gmail.com",
            subtext: "We reply within 24 hours"
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Paseo del Centenario 10310",
            subtext: "Edificio Cazzar, Tijuana B.C"
        },
        {
            icon: Clock,
            label: "Hours",
            value: "Mon - Sat: 9am - 6pm",
            subtext: "Pacific Time"
        }
    ];

    return (
        <section id="contact" className="py-24 bg-neutral-950">
            <div className="max-w-7xl mx-auto px-6 lg:px-16">
                <div className="flex justify-center">
                    {/* Form - Centered */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full max-w-2xl"
                    >
                        <div className="text-center mb-12">
                            <span className="text-[#d4a574] font-semibold tracking-wider text-sm uppercase">Get In Touch</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
                                Request Your Free Consultation
                            </h2>
                            <p className="text-gray-400 leading-relaxed">
                                Ready to transform your smile? Contact us today. We'll review your case, answer your questions, and provide a detailed treatment plan.
                            </p>
                        </div>
                        <div className="bg-neutral-900 rounded-3xl shadow-xl p-8 md:p-10 border border-neutral-800">
                            <h3 className="text-xl font-semibold text-white mb-6">Tell Us About Your Smile</h3>
                            
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                                    <Input
                                        type="text"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        className="h-12 rounded-xl bg-neutral-800 border-neutral-700 text-white placeholder:text-gray-500 focus:border-[#d4a574] focus:ring-[#d4a574] focus:ring-2 transition-all duration-300"
                                    />
                                </motion.div>

                                <div className="grid grid-cols-2 gap-4">
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 0.1 }}
                                    >
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                                        <Input
                                            type="email"
                                            placeholder="john@email.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                            className="h-12 rounded-xl bg-neutral-800 border-neutral-700 text-white placeholder:text-gray-500 focus:border-[#d4a574] focus:ring-[#d4a574] focus:ring-2 transition-all duration-300"
                                        />
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 0.2 }}
                                    >
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                                        <Input
                                            type="tel"
                                            placeholder="+1 (555) 000-0000"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                            className="h-12 rounded-xl bg-neutral-800 border-neutral-700 text-white placeholder:text-gray-500 focus:border-[#d4a574] focus:ring-[#d4a574] focus:ring-2 transition-all duration-300"
                                        />
                                    </motion.div>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 0.3 }}
                                >
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Tell us about your dental needs</label>
                                    <Textarea
                                        placeholder="I'm interested in dental implants..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        className="min-h-[120px] rounded-xl bg-neutral-800 border-neutral-700 text-white placeholder:text-gray-500 focus:border-[#d4a574] focus:ring-[#d4a574] focus:ring-2 transition-all duration-300 resize-none"
                                    />
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Button 
                                        type="submit"
                                        size="lg"
                                        disabled={isSubmitting}
                                        className="w-full bg-white text-black hover:bg-white/90 h-14 rounded-full text-lg font-semibold shadow-2xl shadow-white/10 hover:shadow-white/20 transition-all duration-300 disabled:opacity-50"
                                    >
                                    {submitStatus === 'success' ? (
                                        <>
                                            <CheckCircle2 className="w-5 h-5 mr-2" />
                                            Sent!
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5 mr-2" />
                                            {isSubmitting ? 'Sending...' : 'Send Message'}
                                        </>
                                    )}
                                    </Button>
                                </motion.div>

                                {submitStatus === 'error' && (
                                    <p className="text-center text-sm text-red-400">Something went wrong. Please try again.</p>
                                )}

                                <p className="text-center text-xs text-gray-500">
                                    By submitting, you agree to receive communications from us.
                                </p>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
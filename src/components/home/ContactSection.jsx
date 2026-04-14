import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send, Clock, CheckCircle2, MessageCircle } from "lucide-react";

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

    const whatsappNumber = "526643854987";
    const whatsappMessage = encodeURIComponent("Hi, I'm interested in dental implants at Blaze Dental. Can I get more information?");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <section id="contact" className="py-24 bg-neutral-950">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="text-[#d4a574] font-semibold tracking-wider text-sm uppercase">Get In Touch</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
                        Request Your Free Consultation
                    </h2>
                    <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
                        Ready to transform your smile? Contact us today. We'll review your case, answer your questions, and provide a detailed treatment plan.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-10 items-start">
                    {/* Contact Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 space-y-4"
                    >
                        {contactInfo.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="flex items-start gap-4 p-5 bg-neutral-900 rounded-2xl border border-neutral-800 hover:border-[#d4a574]/40 transition-colors"
                                >
                                    <div className="w-11 h-11 bg-[#d4a574]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-5 h-5 text-[#d4a574]" />
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold text-sm">{item.value}</p>
                                        <p className="text-gray-500 text-xs mt-0.5">{item.subtext}</p>
                                    </div>
                                </motion.div>
                            );
                        })}

                        {/* WhatsApp CTA */}
                        <motion.a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center justify-center gap-3 w-full p-4 bg-[#25D366] hover:bg-[#20BD5A] rounded-2xl text-white font-semibold transition-colors"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Chat on WhatsApp
                        </motion.a>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-3"
                    >
                        <div className="bg-neutral-900 rounded-3xl shadow-xl p-8 md:p-10 border border-neutral-800">
                            <h3 className="text-xl font-semibold text-white mb-6">Tell Us About Your Smile</h3>
                            
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                                    <Input
                                        type="text"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        className="h-12 rounded-xl bg-neutral-800 border-neutral-700 text-white placeholder:text-gray-500 focus:border-[#d4a574] focus:ring-[#d4a574] focus:ring-2 transition-all duration-300"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                                        <Input
                                            type="email"
                                            placeholder="john@email.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                            className="h-12 rounded-xl bg-neutral-800 border-neutral-700 text-white placeholder:text-gray-500 focus:border-[#d4a574] focus:ring-[#d4a574] focus:ring-2 transition-all duration-300"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                                        <Input
                                            type="tel"
                                            placeholder="+1 (555) 000-0000"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                            className="h-12 rounded-xl bg-neutral-800 border-neutral-700 text-white placeholder:text-gray-500 focus:border-[#d4a574] focus:ring-[#d4a574] focus:ring-2 transition-all duration-300"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Tell us about your dental needs</label>
                                    <Textarea
                                        placeholder="I'm interested in dental implants..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        className="min-h-[120px] rounded-xl bg-neutral-800 border-neutral-700 text-white placeholder:text-gray-500 focus:border-[#d4a574] focus:ring-[#d4a574] focus:ring-2 transition-all duration-300 resize-none"
                                    />
                                </div>

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Button 
                                        type="submit"
                                        size="lg"
                                        disabled={isSubmitting}
                                        className="w-full bg-[#d4a574] text-white hover:bg-[#c49464] h-14 rounded-lg text-lg font-semibold transition-colors duration-200 disabled:opacity-50"
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

            {/* Floating WhatsApp Button */}
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-all duration-300"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle className="w-7 h-7 text-white" />
            </a>
        </section>
    );
}
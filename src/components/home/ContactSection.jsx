import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send, Clock, CheckCircle2, MessageCircle } from "lucide-react";

export default function ContactSection({ showHeader = true }) {
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
            await Promise.all([
                base44.entities.ContactSubmission.create(formData),
                base44.integrations.Core.SendEmail({
                    to: 'dr.arias.coei@gmail.com',
                    subject: `New Consultation Request from ${formData.name}`,
                    body: `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`,
                    from_name: formData.name?.trim() || 'Blaze Dental website',
                })
            ]);
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
            value: "dr.arias.coei@gmail.com",
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
        <section id="contact" className={`relative overflow-hidden bg-blaze-surface ${showHeader ? 'py-24' : 'pb-24 pt-8'}`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(58,143,183,0.16),transparent_28%),radial-gradient(circle_at_82%_68%,rgba(255,255,255,0.06),transparent_25%)]" />
            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                {showHeader && (
                <div className="text-center mb-12">
                    <p className="section-label section-label--on-dark mb-4">Private Consultation</p>
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        Start With a Clear Treatment Plan
                    </h2>
                    <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
                        Tell us what you need and our team will follow up with next steps, pricing guidance, and travel-friendly scheduling options.
                    </p>
                </div>
                )}

                <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-start">
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
                                    className="group flex items-start gap-4 p-5 bg-white/[0.035] rounded-2xl border border-white/10 shadow-lg shadow-black/10 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-blaze-accent/40 hover:bg-white/[0.055]"
                                >
                                    <div className="w-11 h-11 bg-blaze-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 ring-1 ring-blaze-accent/15 transition-colors group-hover:bg-blaze-accent/15">
                                        <Icon className="w-5 h-5 text-blaze-accent" />
                                    </div>
                                    <div>
                                        <p className="text-white/95 font-semibold text-sm">{item.value}</p>
                                        <p className="text-gray-500 text-xs mt-1">{item.subtext}</p>
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
                            className="flex items-center justify-center gap-3 w-full p-4 bg-[#25D366] hover:bg-[#20BD5A] rounded-2xl text-white font-semibold shadow-xl shadow-[#25D366]/15 transition-all"
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
                        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/30 backdrop-blur-sm md:p-10">
                            <div className="mb-7">
                                <h3 className="font-display text-2xl font-semibold text-white">Tell Us About Your Smile</h3>
                                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                                    A coordinator will respond directly to confirm details and availability.
                                </p>
                            </div>
                            
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Full Name <span className="text-blaze-accent">*</span></label>
                                    <Input
                                        type="text"
                                        placeholder="John Doe"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        className="h-12 rounded-xl bg-blaze-surface-muted/80 border-white/10 text-white placeholder:text-gray-500 focus:border-blaze-accent focus:ring-blaze-accent/30 focus:ring-2 transition-all duration-300"
                                    />
                                </div>

                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Email <span className="text-blaze-accent">*</span></label>
                                        <Input
                                            type="email"
                                            placeholder="john@email.com"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                            className="h-12 rounded-xl bg-blaze-surface-muted/80 border-white/10 text-white placeholder:text-gray-500 focus:border-blaze-accent focus:ring-blaze-accent/30 focus:ring-2 transition-all duration-300"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Phone / WhatsApp</label>
                                        <Input
                                            type="tel"
                                            placeholder="+1 (555) 000-0000"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                            className="h-12 rounded-xl bg-blaze-surface-muted/80 border-white/10 text-white placeholder:text-gray-500 focus:border-blaze-accent focus:ring-blaze-accent/30 focus:ring-2 transition-all duration-300"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Tell us about your dental needs</label>
                                    <Textarea
                                        placeholder="I'm interested in dental implants, timeline, pricing, or a second opinion..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        className="min-h-[130px] rounded-xl bg-blaze-surface-muted/80 border-white/10 text-white placeholder:text-gray-500 focus:border-blaze-accent focus:ring-blaze-accent/30 focus:ring-2 transition-all duration-300 resize-none"
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
                                        className="w-full bg-blaze-accent text-white hover:bg-blaze-accent-hover h-14 rounded-full text-base sm:text-lg font-semibold shadow-xl shadow-blaze-accent/20 transition-all duration-200 hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-50"
                                    >
                                    {submitStatus === 'success' ? (
                                        <>
                                            <CheckCircle2 className="w-5 h-5 mr-2" />
                                            Sent!
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5 mr-2" />
                                            {isSubmitting ? 'Sending...' : 'Request My Consultation'}
                                        </>
                                    )}
                                    </Button>
                                </motion.div>

                                {submitStatus === 'success' && (
                                    <p className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-center text-sm text-emerald-300">
                                        Message sent. We will follow up shortly.
                                    </p>
                                )}

                                {submitStatus === 'error' && (
                                    <p className="rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-center text-sm text-red-300">
                                        Something went wrong. Please try again or message us on WhatsApp.
                                    </p>
                                )}

                                <p className="text-center text-xs text-gray-500">
                                    No spam. Just a direct response about your consultation.
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

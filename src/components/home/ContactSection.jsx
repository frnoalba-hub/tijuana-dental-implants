import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send, MessageCircle, Clock } from "lucide-react";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Open WhatsApp with pre-filled message
        const message = `Hi, I'm interested in dental implants. Name: ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone}, Details: ${formData.message}`;
        const whatsappUrl = `https://wa.me/526643854987?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        setFormData({ name: '', email: '', phone: '', message: '' });
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
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left Side - Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-[#d4a574] font-semibold tracking-wider text-sm uppercase">Get In Touch</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6">
                            Start Your Journey to a
                            <span className="block">Beautiful Smile</span>
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-10">
                            Ready to transform your smile? Contact us for a free consultation. 
                            We'll review your case, answer your questions, and provide a detailed 
                            treatment plan with transparent pricing.
                        </p>

                        {/* Contact Cards */}
                        <div className="grid grid-cols-2 gap-4">
                            {contactInfo.map((item, index) => (
                                <div 
                                    key={index}
                                    className="bg-neutral-900 p-5 rounded-xl border border-neutral-800 hover:shadow-lg transition-shadow duration-300"
                                >
                                    <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-3">
                                        <item.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider">{item.label}</p>
                                    <p className="font-semibold text-white mt-1">{item.value}</p>
                                    <p className="text-xs text-gray-500 mt-1">{item.subtext}</p>
                                </div>
                            ))}
                        </div>

                        {/* WhatsApp CTA */}
                        <div className="mt-8 p-6 bg-green-950/20 rounded-2xl border border-green-900/30">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                                    <MessageCircle className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="font-semibold text-white">Prefer WhatsApp?</p>
                                    <p className="text-sm text-gray-400">Message us directly for quick responses</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-neutral-900 rounded-3xl shadow-xl p-8 md:p-10 border border-neutral-800">
                            <h3 className="text-xl font-semibold text-white mb-6">Request Free Consultation</h3>
                            
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                                    <Input
                                        type="text"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        className="h-12 rounded-xl bg-neutral-800 border-neutral-700 text-white placeholder:text-gray-500 focus:border-[#d4a574] focus:ring-[#d4a574]"
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
                                            className="h-12 rounded-xl bg-neutral-800 border-neutral-700 text-white placeholder:text-gray-500 focus:border-[#d4a574] focus:ring-[#d4a574]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                                        <Input
                                            type="tel"
                                            placeholder="+1 (555) 000-0000"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                            className="h-12 rounded-xl bg-neutral-800 border-neutral-700 text-white placeholder:text-gray-500 focus:border-[#d4a574] focus:ring-[#d4a574]"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Tell us about your dental needs</label>
                                    <Textarea
                                        placeholder="I'm interested in dental implants..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        className="min-h-[120px] rounded-xl bg-neutral-800 border-neutral-700 text-white placeholder:text-gray-500 focus:border-[#d4a574] focus:ring-[#d4a574] resize-none"
                                    />
                                </div>

                                <Button 
                                    type="submit"
                                    size="lg"
                                    className="w-full bg-white text-black hover:bg-white/90 h-14 rounded-full text-lg font-semibold shadow-2xl shadow-white/10 hover:shadow-white/20 transition-all duration-300"
                                >
                                    <Send className="w-5 h-5 mr-2" />
                                    Send Message
                                </Button>

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
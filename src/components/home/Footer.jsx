import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative overflow-hidden bg-blaze-depth text-white border-t border-white/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(58,143,183,0.12),transparent_28%)]" />
            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-16">
                <div className="grid md:grid-cols-4 gap-10 lg:gap-14">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="mb-5">
                            <img
                                src="/brand/blaze-lockup.png"
                                alt="Blaze Dental"
                                className="h-auto w-auto max-w-[220px] sm:max-w-[260px] drop-shadow-[0_12px_35px_rgba(0,0,0,0.45)]"
                            />
                        </div>
                        <p className="text-white/60 leading-relaxed max-w-sm mb-7">
                            Modern implant and cosmetic care in Tijuana for patients from both sides of the border.
                        </p>
                        {/* Social links. Update hrefs when accounts are confirmed. */}
                        <div className="flex gap-3">
                            <a href="https://www.instagram.com/blaze.dental" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white/75 hover:bg-white hover:text-black transition-all duration-300">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="https://www.facebook.com/blazedental" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white/75 hover:bg-white hover:text-black transition-all duration-300">
                                <Facebook className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                        <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#about" className="text-white/60 hover:text-blaze-accent transition-colors">About</a></li>
                            <li><a href="#services" className="text-white/60 hover:text-blaze-accent transition-colors">Services</a></li>
                            <li><a href="#gallery" className="text-white/60 hover:text-blaze-accent transition-colors">Office</a></li>
                            <li><a href="#training" className="text-white/60 hover:text-blaze-accent transition-colors">Training</a></li>
                            <li><a href="#southern-california" className="text-white/60 hover:text-blaze-accent transition-colors">SoCal Patients</a></li>
                            <li><a href="#contact" className="text-white/60 hover:text-blaze-accent transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                        <h4 className="font-semibold mb-4 text-white">Contact</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-3 text-white/60">
                                <Phone className="w-4 h-4 text-blaze-accent mt-0.5 shrink-0" />
                                <span>+52 664 385 49 87</span>
                            </li>
                            <li className="flex items-start gap-3 text-white/60">
                                <Mail className="w-4 h-4 text-blaze-accent mt-0.5 shrink-0" />
                                <span>blaze.dental@gmail.com</span>
                            </li>
                            <li className="flex items-start gap-3 text-white/60">
                                <MapPin className="w-4 h-4 text-blaze-accent mt-0.5 shrink-0" />
                                <span>Paseo del Centenario 10310, Edificio Cazzar, Tijuana B.C</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/40 text-sm">
                        © {currentYear} Dr. Jose Luis Arias. All rights reserved.
                    </p>
                    <p className="text-white/40 text-sm">
                        Tijuana, Mexico
                    </p>
                </div>
            </div>
        </footer>
    );
}
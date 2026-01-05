import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#1a365d] text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                <span className="text-white font-bold text-lg">D</span>
                            </div>
                            <span className="text-xl font-semibold">[Clinic Name]</span>
                        </div>
                        <p className="text-white/60 leading-relaxed max-w-sm mb-6">
                            World-class dental implants in Tijuana, Mexico. 
                            Experience exceptional care at affordable prices.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#d4a574] transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#d4a574] transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><a href="#about" className="text-white/60 hover:text-[#d4a574] transition-colors">About</a></li>
                            <li><a href="#services" className="text-white/60 hover:text-[#d4a574] transition-colors">Services</a></li>
                            <li><a href="#gallery" className="text-white/60 hover:text-[#d4a574] transition-colors">Gallery</a></li>
                            <li><a href="#contact" className="text-white/60 hover:text-[#d4a574] transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold mb-4">Contact</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-white/60">
                                <Phone className="w-4 h-4 text-[#d4a574]" />
                                [Phone Number]
                            </li>
                            <li className="flex items-center gap-3 text-white/60">
                                <Mail className="w-4 h-4 text-[#d4a574]" />
                                [email@placeholder.com]
                            </li>
                            <li className="flex items-center gap-3 text-white/60">
                                <MapPin className="w-4 h-4 text-[#d4a574]" />
                                Tijuana, Mexico
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/40 text-sm">
                        © {currentYear} [Clinic Name]. All rights reserved.
                    </p>
                    <p className="text-white/40 text-sm">
                        [Website URL]
                    </p>
                </div>
            </div>
        </footer>
    );
}
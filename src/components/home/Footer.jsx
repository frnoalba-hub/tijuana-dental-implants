import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import LogoIcon from "./LogoIcon";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-14">
                <div className="grid md:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="mb-4">
                            <LogoIcon className="h-44 w-auto max-w-[300px] sm:h-48 sm:max-w-[340px] md:max-w-[380px]" />
                        </div>
                        <p className="text-white/60 leading-relaxed max-w-sm mb-6">
                            World-class dental implants in Tijuana, Mexico. 
                            Experience exceptional care at affordable prices.
                        </p>
                        {/* Social links — update hrefs when accounts are confirmed */}
                        <div className="flex gap-3">
                            <a href="https://www.instagram.com/blaze.dental" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="https://www.facebook.com/blazedental" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                                <Facebook className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><a href="#about" className="text-white/60 hover:text-[#3A8FB7] transition-colors">About</a></li>
                            <li><a href="#services" className="text-white/60 hover:text-[#3A8FB7] transition-colors">Services</a></li>
                            <li><a href="#gallery" className="text-white/60 hover:text-[#3A8FB7] transition-colors">Gallery</a></li>
                            <li><a href="#contact" className="text-white/60 hover:text-[#3A8FB7] transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold mb-4">Contact</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-white/60">
                                <Phone className="w-4 h-4 text-[#3A8FB7]" />
                                +52 664 385 49 87
                            </li>
                            <li className="flex items-center gap-3 text-white/60">
                                <Mail className="w-4 h-4 text-[#3A8FB7]" />
                                blaze.dental@gmail.com
                            </li>
                            <li className="flex items-center gap-3 text-white/60">
                                <MapPin className="w-4 h-4 text-[#3A8FB7]" />
                                Paseo del Centenario 10310, Edificio Cazzar, Tijuana B.C
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
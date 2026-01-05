import React from 'react';
import Navbar from '@/components/home/Navbar';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import GallerySection from '@/components/home/GallerySection';
import WhyTijuanaSection from '@/components/home/WhyTijuanaSection';
import ContactSection from '@/components/home/ContactSection';
import Footer from '@/components/home/Footer';

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <GallerySection />
            <WhyTijuanaSection />
            <ContactSection />
            <Footer />
        </div>
    );
}
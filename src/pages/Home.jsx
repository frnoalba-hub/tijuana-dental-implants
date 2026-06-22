import React, { lazy, Suspense } from 'react';
import Navbar from '@/components/home/Navbar';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';

const GallerySection = lazy(() => import('@/components/home/GallerySection'));
const ExpertiseSection = lazy(() => import('@/components/home/ExpertiseSection'));
const TrainingGallerySection = lazy(() => import('@/components/home/TrainingGallerySection'));
const WhyTijuanaSection = lazy(() => import('@/components/home/WhyTijuanaSection'));
const SouthernCaliforniaSection = lazy(() => import('@/components/home/SouthernCaliforniaSection'));
const VideoSection = lazy(() => import('@/components/home/VideoSection'));
const ContactSection = lazy(() => import('@/components/home/ContactSection'));
const Footer = lazy(() => import('@/components/home/Footer'));

const LoadingFallback = () => <div className="h-screen bg-blaze-depth" />;

export default function Home() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <Suspense fallback={<LoadingFallback />}>
                <GallerySection />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
                <ExpertiseSection />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
                <TrainingGallerySection />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
                <VideoSection />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
                <WhyTijuanaSection />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
                <SouthernCaliforniaSection />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
                <ContactSection />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
                <Footer />
            </Suspense>
        </div>
    );
}
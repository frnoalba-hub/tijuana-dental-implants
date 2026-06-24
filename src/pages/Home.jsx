import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/home/Navbar';
import OfficeBackdrop from '@/components/home/OfficeBackdrop';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';

const GallerySection = lazy(() => import('@/components/home/GallerySection'));
const WhyTijuanaSection = lazy(() => import('@/components/home/WhyTijuanaSection'));
const SouthernCaliforniaSection = lazy(() => import('@/components/home/SouthernCaliforniaSection'));
const VideoSection = lazy(() => import('@/components/home/VideoSection'));
const Footer = lazy(() => import('@/components/home/Footer'));

const LoadingFallback = () => <div className="h-screen bg-blaze-depth" />;

export default function Home() {
    return (
        <div className="relative min-h-screen bg-blaze-depth">
            <OfficeBackdrop />
            <div className="relative z-[1]">
                <Navbar />
                <HeroSection />

                {/* Mobile: breathing room between hero surgery photo and About portrait */}
                <div className="page-section-over-office relative border-t border-white/10 px-6 py-8 lg:hidden">
                    <div className="absolute inset-0 bg-blaze-depth/88 backdrop-blur-md" aria-hidden="true" />
                    <div className="relative mx-auto max-w-md text-center">
                        <p className="section-label mb-2">About the Doctor</p>
                        <p className="text-sm leading-relaxed text-white/75">
                            Meet the surgeon behind Blaze Dental. For courses and certifications, see{' '}
                            <Link to="/Training" className="text-blaze-accent underline-offset-2 hover:underline">
                                Training &amp; Education
                            </Link>
                            .
                        </p>
                    </div>
                </div>

                <AboutSection />
                <ServicesSection />
                <Suspense fallback={<LoadingFallback />}>
                    <VideoSection />
                </Suspense>
                <Suspense fallback={<LoadingFallback />}>
                    <GallerySection />
                </Suspense>
                <Suspense fallback={<LoadingFallback />}>
                    <WhyTijuanaSection />
                </Suspense>
                <Suspense fallback={<LoadingFallback />}>
                    <SouthernCaliforniaSection />
                </Suspense>
                <Suspense fallback={<LoadingFallback />}>
                    <Footer />
                </Suspense>
            </div>
        </div>
    );
}

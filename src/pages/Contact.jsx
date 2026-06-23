import React, { lazy, Suspense } from 'react';
import Navbar from '@/components/home/Navbar';
import PageBanner from '@/components/home/PageBanner';
import ContactSection from '@/components/home/ContactSection';

const Footer = lazy(() => import('@/components/home/Footer'));

const LoadingFallback = () => <div className="h-32 bg-blaze-surface" />;

export default function Contact() {
    return (
        <div className="min-h-screen bg-blaze-depth">
            <Navbar />
            <main className="pt-[3.75rem] sm:pt-16">
                <PageBanner
                    label="Contact"
                    title="Book Your Free Consultation"
                    description="Reach Blaze Dental in Tijuana for implants, smile design, and full-arch solutions. English and Spanish support for Southern California patients."
                />
                <ContactSection showHeader={false} />
            </main>
            <Suspense fallback={<LoadingFallback />}>
                <Footer />
            </Suspense>
        </div>
    );
}

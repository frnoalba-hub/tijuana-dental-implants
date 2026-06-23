import React, { lazy, Suspense } from 'react';
import Navbar from '@/components/home/Navbar';
import PageBanner from '@/components/home/PageBanner';
import ExpertiseSection from '@/components/home/ExpertiseSection';

const TrainingGallerySection = lazy(() => import('@/components/home/TrainingGallerySection'));
const Footer = lazy(() => import('@/components/home/Footer'));

const LoadingFallback = () => <div className="h-32 bg-blaze-surface" />;

export default function Training() {
    return (
        <div className="min-h-screen bg-blaze-depth">
            <Navbar />
            <main className="pt-[3.75rem] sm:pt-16">
                <PageBanner
                    label="Training & Education"
                    title="Instructor & Leader in Advanced Implant Surgery"
                    description="Dr. Arias trains dentists worldwide in advanced implant placement, bone grafting, and surgical technique. Explore his credentials, courses, and certifications."
                />
                <ExpertiseSection showHeader={false} />
                <Suspense fallback={<LoadingFallback />}>
                    <TrainingGallerySection />
                </Suspense>
            </main>
            <Suspense fallback={<LoadingFallback />}>
                <Footer />
            </Suspense>
        </div>
    );
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function PageBanner({ label, title, description, backHref = "/" }) {
    return (
        <div className="border-b border-white/10 bg-blaze-depth px-6 py-10 sm:py-12">
            <div className="mx-auto max-w-3xl text-center">
                <Link
                    to={backHref}
                    className="mb-4 inline-block text-xs font-medium uppercase tracking-wide text-white/45 transition-colors hover:text-blaze-accent"
                >
                    ← Back to home
                </Link>
                {label && <p className="section-label mb-3">{label}</p>}
                <h1 className="font-display text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
                    {title}
                </h1>
                {description && (
                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
}

import React from 'react';

export default function Layout({ children }) {
    return (
        <div className="min-h-screen bg-black">
            <style>{`
                /* Hide scrollbar completely */
                ::-webkit-scrollbar {
                    width: 0px !important;
                    height: 0px !important;
                    display: none !important;
                    background: transparent !important;
                }
                * {
                    scrollbar-width: none !important;
                    -ms-overflow-style: none !important;
                }
            `}</style>
            {children}
        </div>
    );
}
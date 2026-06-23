import React from 'react';

/** Fixed clinic photo — stays put while page scrolls; sections fade in over it. */
export default function OfficeBackdrop() {
    return (
        <div className="office-backdrop" aria-hidden="true">
            <img
                src="/office/bz-office-7.png"
                alt=""
                className="office-backdrop__photo"
            />
            <div className="office-backdrop__tint" />
        </div>
    );
}

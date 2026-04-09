import React from 'react';
import { cn } from "@/lib/utils";

/** Full lockup on black. File is JPEG (use .jpg — many exports are JPEG despite a .png filename). */
const BLAZE_LOGO_SRC = '/blaze-dental-logo.jpg';

export default function LogoIcon({ className, wrapperClassName }) {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center shrink-0',
        wrapperClassName
      )}
    >
      <img
        src={BLAZE_LOGO_SRC}
        alt="Blaze Dental"
        className={cn('object-contain', className)}
      />
    </span>
  );
}
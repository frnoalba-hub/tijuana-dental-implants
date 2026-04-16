import React from 'react';
import { cn } from "@/lib/utils";

/** True PNG with transparency — white mark on transparent. Wrap in bg-black so it shows on any section. */
const BLAZE_LOGO_SRC = '/blaze-dental-logo.png';

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
        className={cn('object-contain object-left object-top', className)}
      />
    </span>
  );
}
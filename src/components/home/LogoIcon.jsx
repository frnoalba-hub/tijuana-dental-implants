import React from 'react';
import { cn } from "@/lib/utils";

/** True PNG with transparency — white mark on transparent. Use on dark surfaces (e.g. bg-blaze-depth). */
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
        className={cn('block object-contain object-left object-top', className)}
      />
    </span>
  );
}
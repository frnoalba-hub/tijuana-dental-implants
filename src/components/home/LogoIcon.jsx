import React from 'react';
import { cn } from "@/lib/utils";

const VARIANTS = {
  /** Wide mark, best for compact nav bar */
  default: {
    src: '/blaze-dental-logo.png',
    srcSet: '/blaze-dental-logo.png 433w, /blaze-dental-logo@2x.png 866w',
    width: 433,
    height: 305,
  },
  /** Full vertical lockup (icon + BLAZE + DENTAL), higher-res for large footer */
  lockup: {
    src: '/blaze-dental-lockup.png',
    srcSet: '/blaze-dental-lockup.png 386w, /blaze-dental-lockup@2x.png 772w',
    width: 386,
    height: 392,
  },
};

/**
 * @param {object} props
 * @param {string} [props.className]
 * @param {string} [props.wrapperClassName]
 * @param {'default'|'lockup'} [props.variant]
 * @param {string} [props.sizes] Responsive hint for srcSet (important for correct 1x/2x pick)
 * @param {'high'|'low'|'auto'} [props.fetchPriority]
 */
export default function LogoIcon({
  className,
  wrapperClassName,
  variant = 'default',
  sizes = '(max-width: 1024px) 60vw, 240px',
  fetchPriority,
}) {
  const a = VARIANTS[variant] ?? VARIANTS.default;

  return (
    <span
      className={cn(
        'inline-flex items-center justify-center shrink-0 [contain:layout]',
        wrapperClassName
      )}
    >
      <img
        src={a.src}
        srcSet={a.srcSet}
        sizes={sizes}
        width={a.width}
        height={a.height}
        alt="Blaze Dental"
        decoding="async"
        fetchPriority={fetchPriority}
        className={cn(
          'block max-h-full max-w-full object-contain object-left object-top',
          className
        )}
      />
    </span>
  );
}

import React from 'react';

export default function LogoIcon({ className }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className} 
      fill="none" 
      stroke="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left tooth section - angular geometric outline */}
      <path 
        d="M 22 28 L 32 20 L 42 24 L 47 35 L 48 50 L 45 68 L 40 82 L 34 87 L 28 82 L 24 68 L 22 50 L 23 35 Z" 
        strokeWidth="2.8" 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Right tooth section - angular geometric outline */}
      <path 
        d="M 53 24 L 63 17 L 74 21 L 79 29 L 81 39 L 81 54 L 77 69 L 70 81 L 64 85 L 58 81 L 53 67 L 51 49 L 52 34 Z" 
        strokeWidth="2.8" 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Top connecting line between tooth sections */}
      <path 
        d="M 42 24 L 53 24" 
        strokeWidth="2.8" 
        strokeLinecap="round"
      />
      
      {/* Implant screw - horizontal thread lines */}
      <line x1="56" y1="52" x2="72" y2="52" strokeWidth="3" strokeLinecap="round" />
      <line x1="58" y1="60" x2="70" y2="60" strokeWidth="3" strokeLinecap="round" />
      <line x1="60" y1="68" x2="68" y2="68" strokeWidth="3" strokeLinecap="round" />
      <line x1="62" y1="76" x2="66" y2="76" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
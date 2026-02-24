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
      {/* Left tooth section - outer line */}
      <path 
        d="M 17 38 L 25 22 L 45 28 L 55 38" 
        strokeWidth="3.5" 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Left tooth section - main body */}
      <path 
        d="M 20 48 L 28 32 L 43 37 L 62 54 L 48 62 L 38 85 L 34 88 L 28 80 L 23 60 Z" 
        strokeWidth="3.5" 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Right tooth section */}
      <path 
        d="M 43 37 L 72 24 L 84 42 L 74 54 L 62 54" 
        strokeWidth="3.5" 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Right tooth section tail */}
      <path 
        d="M 74 54 L 72 61" 
        strokeWidth="3.5" 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Implant bars */}
      <path 
        d="M 56 64 L 72 64 M 57.5 70 L 69.5 70 M 59 76 L 67 76 M 60.5 82 L 64.5 82 M 61.5 88 L 63.5 88" 
        strokeWidth="4" 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
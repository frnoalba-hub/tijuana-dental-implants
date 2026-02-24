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
      {/* Left tooth section - outer roof line */}
      <path 
        d="M 12 38 L 25 20 L 45 20 L 64 39" 
        strokeWidth="3" 
      />
      
      {/* Left tooth section - main body */}
      <path 
        d="M 18 40 L 25 30 L 35 30 L 50 55 L 40 75 L 35 85 L 28 80 L 24 60 Z" 
        strokeWidth="3" 
      />
      
      {/* Right tooth section */}
      <path 
        d="M 48 35 L 60 20 L 75 20 L 88 38 L 80 60 L 63 60 Z" 
        strokeWidth="3" 
      />
      
      {/* Implant bars */}
      <path 
        d="M 65 66 L 78 66 M 66.5 73 L 76.5 73 M 68 80 L 75 80 M 69.5 87 L 73.5 87" 
        strokeWidth="4" 
      />
    </svg>
  );
}
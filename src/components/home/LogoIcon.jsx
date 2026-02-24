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
      {/* Left part of the tooth */}
      <path 
        d="M 28 28 L 45 28 L 60 43 L 50 48 L 42 70 L 28 50 Z" 
        strokeWidth="3.5" 
        strokeLinejoin="round"
      />
      {/* Right part of the tooth */}
      <path 
        d="M 50 28 L 62 28 L 70 38 L 65 43 Z" 
        strokeWidth="3.5" 
        strokeLinejoin="round"
      />
      {/* Implant screw threads */}
      <path d="M 55 48 L 67 48 L 65 53 L 57 53 Z" fill="currentColor" stroke="none" />
      <path d="M 56 55 L 64 55 L 62 60 L 58 60 Z" fill="currentColor" stroke="none" />
      <path d="M 57 62 L 63 62 L 61 67 L 59 67 Z" fill="currentColor" stroke="none" />
      <path d="M 58 69 L 62 69 L 61 74 L 59 74 Z" fill="currentColor" stroke="none" />
    </svg>
  );
}
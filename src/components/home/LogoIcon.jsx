import React from 'react';
import { cn } from "@/lib/utils";

export default function LogoIcon({ className }) {
  return (
    <img
      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695b0e23c5556d6ae22b3a01/64eb631b5_7227093e8_Gemini_Generated_Image_d3i7p9d3i7p9d3i72.png"
      alt="Blaze Dental Logo"
      className={cn("object-contain", className)}
    />
  );
}
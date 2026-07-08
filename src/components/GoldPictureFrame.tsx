/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

export default function GoldPictureFrame({ src, alt }: { src: string, alt: string }) {
  return (
    <div className="relative p-1 md:p-1.5 bg-[#5A4005] shadow-[0_25px_50px_rgba(0,0,0,0.5)]">
      {/* Main ornate frame body */}
      <div className="relative p-2 md:p-3 bg-gradient-to-br from-[#E8D099] via-[#8B6508] to-[#E8D099]">
        
        {/* Inner detailed ridges */}
        <div className="relative border-4 border-[#C5A059] p-1.5">
          <div className="absolute inset-0 border-2 border-[#5A4005]/40" />
          
          <div className="relative border-[6px] border-[#F4EFE6]/30 p-1">
            <div className="absolute inset-0 shadow-[inset_0_0_15px_rgba(0,0,0,0.6)] mix-blend-multiply" />
            
            {/* The picture canvas area */}
            <div className="relative border-2 border-[#2C2822] bg-[#FAF6F0] w-full h-full aspect-[4/5] sm:aspect-auto sm:h-[450px] overflow-hidden">
                <img 
                  src={src} 
                  alt={alt} 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer"
                />
            </div>
            
            {/* Corner Decorative Frame Appliques */}
            <FrameOrnament className="top-0 left-0" />
            <FrameOrnament className="top-0 right-0 scale-x-[-1]" />
            <FrameOrnament className="bottom-0 left-0 scale-y-[-1]" />
            <FrameOrnament className="bottom-0 right-0 scale-x-[-1] scale-y-[-1]" />
          </div>
        </div>
        
        {/* Outer Corner Ornaments (Large) */}
        <OuterOrnament className="-top-1 -left-1" />
        <OuterOrnament className="-top-1 -right-1 scale-x-[-1]" />
        <OuterOrnament className="-bottom-1 -left-1 scale-y-[-1]" />
        <OuterOrnament className="-bottom-1 -right-1 scale-x-[-1] scale-y-[-1]" />

      </div>
    </div>
  );
}

const FrameOrnament = ({ className }: { className?: string }) => (
  <svg 
    className={`absolute w-10 h-10 text-[#C5A059] pointer-events-none z-20 mix-blend-color-burn ${className}`} 
    viewBox="0 0 50 50" 
    fill="currentColor"
  >
    <path d="M0,0 L20,0 C15,5 15,15 20,20 C15,20 5,15 0,20 L0,0 Z" />
    <circle cx="5" cy="5" r="2" fill="#5A4005" />
  </svg>
);

const OuterOrnament = ({ className }: { className?: string }) => (
  <svg 
    className={`absolute w-12 h-12 text-[#E8D099] pointer-events-none z-20 drop-shadow-md ${className}`} 
    viewBox="0 0 50 50" 
    fill="currentColor"
  >
    <path d="M0,0 L25,0 C20,10 20,20 25,25 C20,25 10,20 0,25 Z" />
    <path d="M5,5 L15,5 C12,10 12,15 15,15 C12,15 5,12 5,15 Z" fill="#AA7C11" opacity="0.8" />
  </svg>
);

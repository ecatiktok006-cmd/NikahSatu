/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

const Flourish = ({ className }: { className?: string }) => (
  <svg 
    className={`absolute w-12 h-12 text-[#C5A059]/80 pointer-events-none ${className}`} 
    viewBox="0 0 100 100" 
    fill="none" 
  >
    <path d="M5 50 C5 30 15 20 50 15" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 50 C12 35 22 25 50 22" stroke="currentColor" strokeWidth="0.5" />
    <path d="M5 25 Q20 25 20 5" stroke="currentColor" strokeWidth="1" />
    <circle cx="20" cy="20" r="1.5" fill="currentColor" />
    <circle cx="12" cy="12" r="2.5" fill="currentColor" />
    <path d="M25 15 Q30 10 40 10" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
    <path d="M15 25 Q10 30 10 40" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
  </svg>
);

export default function OrnateCard({ children, className = "" }: { className?: string, children: React.ReactNode }) {
  return (
    <div className={`relative bg-[#F9F6F0] p-8 md:p-10 rounded-[20px] shadow-[0_20px_50px_rgba(139,101,8,0.15)] border border-[#C5A059]/30 ${className}`}>
      {/* Outer border */}
      <div className="absolute inset-[6px] border-[0.5px] border-[#C5A059] rounded-[14px] pointer-events-none" />
      
      {/* Inner border */}
      <div className="absolute inset-[10px] border-[0.5px] border-[#C5A059]/50 rounded-[10px] pointer-events-none" />
      
      {/* Corner Flourishes */}
      <Flourish className="top-1.5 left-1.5" />
      <Flourish className="top-1.5 right-1.5 scale-x-[-1]" />
      <Flourish className="bottom-1.5 left-1.5 scale-y-[-1]" />
      <Flourish className="bottom-1.5 right-1.5 scale-x-[-1] scale-y-[-1]" />
      
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}

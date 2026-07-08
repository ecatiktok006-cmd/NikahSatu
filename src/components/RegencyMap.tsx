/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

export default function RegencyMap({ className = "" }: { className?: string }) {
  const peninsularPath = `
    M 30,12 
    C 45,11 60,14 68,18 
    C 74,21 82,25 85,32 
    C 88,38 85,46 81,51 
    C 76,57 70,62 65,68 
    C 58,76 52,82 48,89 
    C 45,94 43,97 42,98 
    C 41,99 39,99 38,97
    C 36,94 33,90 31,88
    C 29,86 27,85 24,81
    C 20,76 18,71 18,68
    C 18,65 21,61 19,59
    C 16,56 12,53 12,49
    C 12,44 15,39 16,35
    C 17,29 15,24 14,20
    C 13,15 18,13 30,12 Z
  `;

  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 110 110" className="w-full h-full drop-shadow-sm">
        <defs>
          <pattern id="hatch" width="4" height="4" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="4" stroke="#8B6508" strokeWidth="0.3" opacity="0.5" />
          </pattern>
        </defs>

        {/* Map Outline with hatching fill */}
        <path
          d={peninsularPath}
          fill="url(#hatch)"
          stroke="#8B6508"
          strokeWidth="0.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Inner double stroke for sketched look */}
        <path
          d={peninsularPath}
          fill="none"
          stroke="#AA7C11"
          strokeWidth="0.4"
          strokeDasharray="1 1.5"
          transform="scale(0.95) translate(2.5, 2.5)"
        />

        {/* Decorative Mosque Icon */}
        <g transform="translate(42, 5) scale(0.6)" fill="none" stroke="#8B6508" strokeWidth="1">
          <path d="M10,20 L10,12 C10,6 20,0 20,0 C20,0 30,6 30,12 L30,20" fill="#F9F6F0" />
          <line x1="10" y1="20" x2="30" y2="20" />
          <path d="M15,20 L15,12 C15,8 20,5 20,5 C20,5 25,8 25,12 L25,20" />
          {/* Minarets */}
          <rect x="5" y="10" width="2" height="10" />
          <path d="M5,10 L6,5 L7,10 Z" />
          <rect x="33" y="10" width="2" height="10" />
          <path d="M33,10 L34,5 L35,10 Z" />
        </g>

        {/* Decorative Vintage Ship Icon */}
        <g transform="translate(68, 65) scale(0.65)" fill="none" stroke="#8B6508" strokeWidth="1">
          <path d="M5,15 C10,20 20,20 25,15 L30,10 L0,10 Z" fill="#F9F6F0" />
          <line x1="12" y1="10" x2="12" y2="0" />
          <line x1="22" y1="10" x2="22" y2="4" />
          <path d="M12,0 C17,3 17,8 12,10 C7,8 7,3 12,0 Z" />
          <path d="M22,4 C25,6 25,8 22,10 C19,8 19,6 22,4 Z" />
          {/* Waves */}
          <path d="M0,18 Q5,15 10,18 T20,18 T30,18" strokeDasharray="1 1.5" strokeWidth="0.8" />
        </g>

        {/* Map Key Marker */}
        <g transform="translate(42, 60)">
          <circle cx="0" cy="0" r="2" fill="#F9F6F0" stroke="#8B6508" strokeWidth="0.8" />
          <circle cx="0" cy="0" r="0.8" fill="#8B6508" />
          <path d="M0,2 L0,5" stroke="#8B6508" strokeWidth="0.8" />
        </g>
      </svg>
    </div>
  );
}

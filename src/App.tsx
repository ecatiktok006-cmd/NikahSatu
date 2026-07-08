/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Search, User } from "lucide-react";
import OrnateCard from "./components/OrnateCard";
import GoldPictureFrame from "./components/GoldPictureFrame";
import RegencyMap from "./components/RegencyMap";
import { MALAYSIA_REGIONS } from "./data/weddingData";

const Crown = () => (
  <svg viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-1 text-[#8B6508] w-6 h-auto">
    <path d="M16 2L20 10L28 4L24 16H8L4 4L12 10L16 2Z" fill="currentColor"/>
    <circle cx="16" cy="2" r="1.5" fill="currentColor"/>
    <circle cx="28" cy="4" r="1.5" fill="currentColor"/>
    <circle cx="4" cy="4" r="1.5" fill="currentColor"/>
  </svg>
);

export default function App() {
  const klVenue = MALAYSIA_REGIONS[0].venues[0];

  return (
    <div className="min-h-screen bg-[#F4EFE6] text-[#2C2822] relative overflow-hidden flex flex-col font-serif">
      
      {/* Background Silk Image Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1550596334-7bb40a71b6bc?auto=format&fit=crop&w=2000&q=80" 
          alt="Silk Texture" 
          className="w-full h-full object-cover opacity-60 sepia-[0.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#F4EFE6]/80 via-[#F4EFE6]/60 to-[#F4EFE6]/80 mix-blend-overlay" />
        <div className="absolute inset-0 bg-[#F4EFE6]/40 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Top Header Navigation */}
        <header className="px-6 md:px-12 py-8 flex items-center justify-between w-full max-w-[1600px] mx-auto">
          <div className="flex flex-col items-center">
            <Crown />
            <div className="text-center leading-[1.1]">
              <span className="font-serif text-[22px] tracking-tight text-[#2C2822] block">The Regency</span>
              <span className="font-serif text-[19px] tracking-wide text-[#2C2822] block">Collection</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-12">
            <nav className="flex items-center space-x-8 font-serif text-[17px] text-[#2C2822]">
              <a href="#" className="hover:text-[#8B6508] transition-colors">Registry</a>
              <a href="#" className="hover:text-[#8B6508] transition-colors">Planning</a>
              <a href="#" className="text-[#2C2822] border-b-[1.5px] border-[#8B6508] pb-0.5">Showcase</a>
              <a href="#" className="hover:text-[#8B6508] transition-colors">About</a>
              <a href="#" className="hover:text-[#8B6508] transition-colors">Contact</a>
            </nav>
            <div className="flex items-center space-x-5 text-[#8B6508]">
              <button className="hover:scale-110 transition-transform cursor-pointer">
                <Search className="w-5 h-5 stroke-[1.5]" />
              </button>
              <button className="w-9 h-9 rounded-full bg-gradient-to-b from-[#E8D099] to-[#C5A059] flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer shadow-sm text-white">
                <User className="w-5 h-5 stroke-[1.5]" />
              </button>
            </div>
          </div>
        </header>

        {/* Main Content Layout */}
        <main className="flex-1 max-w-[1600px] mx-auto w-full px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 xl:gap-20 pb-16">
          
          {/* Left Column: Typography & Content Card */}
          <div className="w-full lg:w-[48%] flex flex-col space-y-8">
            
            <div className="space-y-1">
              <h1 className="font-serif text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] leading-[1.05] tracking-tight text-[#2C2822] drop-shadow-sm">
                Royal Regency<br />Wedding Showcase
              </h1>
              <p className="font-script text-[3rem] md:text-[3.5rem] lg:text-[4rem] text-[#2C2822] -rotate-2 pl-2 md:pl-4 opacity-90 drop-shadow-sm">
                Exclusively for Your Fairytale.
              </p>
            </div>

            <OrnateCard className="w-full max-w-[700px]">
              <div className="flex flex-col sm:flex-row gap-8 relative">
                
                {/* Card Text Content */}
                <div className="flex-1 space-y-6 md:space-y-8 z-10 relative">
                  <div className="space-y-3">
                    <h2 className="font-serif text-3xl md:text-[2rem] text-[#2C2822] tracking-wide">
                      Curated Experiences
                    </h2>
                    <p className="font-sans text-[14px] md:text-[15px] text-[#2C2822] font-medium leading-[1.6] max-w-[380px]">
                      Immerse yourself in a world of bespoke elegance and timeless romance. We specialize in crafting grand weddings that echo the splendor of a bygone era, tailoring every detail to your unique love story.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h2 className="font-serif text-3xl md:text-[2rem] text-[#2C2822] tracking-wide leading-tight">
                      Destination<br />Malaysia
                    </h2>
                    <p className="font-sans text-[14px] md:text-[15px] text-[#2C2822] font-medium leading-[1.6] max-w-[280px]">
                      From the heart of Kuala Lumpur to private island escapes, discover unparalleled venues and experiences.
                    </p>
                  </div>

                  <button className="bg-gradient-to-r from-[#D9B76A] via-[#C5A059] to-[#D9B76A] hover:from-[#C5A059] hover:to-[#B59049] text-[#2C2822] px-8 py-2.5 rounded-full font-serif text-[17px] tracking-wide shadow-md transition-all duration-300 hover:shadow-lg cursor-pointer border border-[#8B6508]/20">
                    Explore Venues
                  </button>
                </div>
                
                {/* Sketched Map Overlay */}
                <div className="absolute right-0 bottom-4 w-[280px] md:w-[320px] pointer-events-none flex flex-col items-center">
                  <RegencyMap className="w-full h-auto drop-shadow-md" />
                  <span className="font-script text-5xl md:text-6xl text-[#AA7C11] drop-shadow-sm -mt-10 ml-8 -rotate-3 z-10">
                    Malaysia
                  </span>
                </div>
              </div>
            </OrnateCard>
            
          </div>

          {/* Right Column: Ornate Gold Frame & Venue Image */}
          <div className="w-full lg:w-[48%] xl:w-[45%] flex flex-col items-center justify-center mt-10 lg:mt-0">
            
            <OrnateCard className="w-full max-w-[650px] !p-5 md:!p-7">
              <div className="flex flex-col items-center gap-5">
                <GoldPictureFrame 
                  src={klVenue.image} 
                  alt="St. Regis Grand Ballroom" 
                />
                
                <h3 className="font-script text-[2rem] md:text-[2.5rem] text-[#2C2822] text-center px-4 leading-none pt-2">
                  Grand Ballroom, Kuala Lumpur - A Royal Affair.
                </h3>
              </div>
            </OrnateCard>

          </div>

        </main>

        {/* Footer Gold Bar */}
        <footer className="mt-auto bg-gradient-to-r from-[#D6B564] via-[#F2D794] to-[#D6B564] text-[#4A3B18] py-4 px-6 md:px-12 text-[12px] font-sans font-medium tracking-wide flex flex-col md:flex-row justify-between items-center gap-4 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] border-t border-[#8B6508]/30">
          <div className="flex items-center space-x-2">
            <span>2024 The Regency Collection</span>
            <span className="opacity-50 mx-1">|</span>
            <span>+91 1123 456 780</span>
          </div>
          
          <div className="flex items-center space-x-8 text-lg text-[#5A4518]">
            {/* Social Icons */}
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 cursor-pointer hover:text-black transition-colors"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 cursor-pointer hover:text-black transition-colors"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 cursor-pointer hover:text-black transition-colors"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </div>
          
          <div>
            © 2024 The Regency Collection. All rights reserved.
          </div>
        </footer>
        
      </div>
    </div>
  );
}


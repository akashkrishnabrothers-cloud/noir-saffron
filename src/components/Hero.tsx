import React from 'react';
import { ArrowRight, Leaf, Sparkles, Award } from 'lucide-react';

interface HeroProps {
  onExploreMenu: () => void;
  onReserveTable: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onReserveTable }) => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-20 sm:pt-24 lg:pt-28 pb-14 sm:pb-20 lg:pb-24 overflow-hidden bg-[#090909]"
    >
      {/* Subtle Radial Golden Background Atmosphere */}
      <div className="absolute top-1/4 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#D98739]/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] bg-[#B8783D]/8 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none -z-0" />

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(207,143,77,0.06)_1px,transparent_1px)] [background-size:24px_24px] sm:[background-size:32px_32px] pointer-events-none -z-0 opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* LEFT COLUMN: ~48% width */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="w-6 sm:w-8 h-[1px] bg-[#D98739] shrink-0" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#D98739] truncate">
                AN EXTRAORDINARY DINING EXPERIENCE
              </span>
            </div>

            {/* Main Headline with Fluid Clamp */}
            <h1 className="font-serif text-[clamp(2.15rem,6.8vw,4.25rem)] font-semibold tracking-tight text-[#F5F1EC] leading-[1.08] mb-4 sm:mb-6 text-balance">
              Where Flavour <br className="hidden sm:block" />
              Meets{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D98739] via-[#E6AF68] to-[#D98739] italic font-normal">
                Perfection
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-[#B7B0A8] text-sm sm:text-base lg:text-lg font-light leading-relaxed max-w-xl mb-6 sm:mb-8">
              Discover an extraordinary world of culinary artistry, where exceptional ingredients and
              inspired craftsmanship create unforgettable moments.
            </p>

            {/* CTA Buttons: Full width on mobile, row on tablet/desktop */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
              <button
                type="button"
                onClick={onExploreMenu}
                className="group px-6 sm:px-7 py-3.5 sm:py-4 bg-gradient-to-r from-[#D98739] to-[#E6AF68] text-[#090909] font-bold text-xs sm:text-sm tracking-wider uppercase rounded-full hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-[0_4px_25px_rgba(217,135,57,0.35)] min-h-[48px]"
              >
                <span>EXPLORE OUR MENU</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={onReserveTable}
                className="px-6 sm:px-7 py-3.5 sm:py-4 bg-transparent subtle-border text-[#F5F1EC] hover:text-[#E6AF68] hover:border-[#D98739] hover:bg-[#242424]/40 font-semibold text-xs sm:text-sm tracking-wider uppercase rounded-full transition-all flex items-center justify-center active:scale-95 min-h-[48px]"
              >
                RESERVE YOUR TABLE
              </button>
            </div>

            {/* Three Compact Brand-Benefit Indicators */}
            <div className="pt-6 sm:pt-8 border-t border-[rgba(207,143,77,0.25)] grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-4">
              {/* Indicator 1 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#1b1918] subtle-border flex items-center justify-center shrink-0 text-[#E6AF68] mt-0.5">
                  <Leaf className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[11px] sm:text-[12px] font-bold uppercase tracking-wider text-[#F5F1EC]">
                    FRESH INGREDIENTS
                  </h4>
                  <p className="text-[11px] sm:text-[12px] text-[#858079] mt-0.5 leading-snug">
                    Locally sourced daily.
                  </p>
                </div>
              </div>

              {/* Indicator 2 */}
              <div className="flex items-start gap-3 sm:border-l sm:border-[rgba(207,143,77,0.2)] sm:pl-4">
                <div className="w-8 h-8 rounded-full bg-[#1b1918] subtle-border flex items-center justify-center shrink-0 text-[#E6AF68] mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[11px] sm:text-[12px] font-bold uppercase tracking-wider text-[#F5F1EC]">
                    CULINARY EXCELLENCE
                  </h4>
                  <p className="text-[11px] sm:text-[12px] text-[#858079] mt-0.5 leading-snug">
                    Crafted with passion.
                  </p>
                </div>
              </div>

              {/* Indicator 3 */}
              <div className="flex items-start gap-3 sm:border-l sm:border-[rgba(207,143,77,0.2)] sm:pl-4">
                <div className="w-8 h-8 rounded-full bg-[#1b1918] subtle-border flex items-center justify-center shrink-0 text-[#E6AF68] mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[11px] sm:text-[12px] font-bold uppercase tracking-wider text-[#F5F1EC]">
                    MASTER CHEFS
                  </h4>
                  <p className="text-[11px] sm:text-[12px] text-[#858079] mt-0.5 leading-snug">
                    Inspired by perfection.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: ~52% width */}
          <div className="lg:col-span-6 relative flex items-center justify-center mt-2 sm:mt-6 lg:mt-0 px-2 sm:px-0">
            {/* Outer Subtle Golden Ring Framing */}
            <div className="relative w-full max-w-[540px] aspect-[4/3] rounded-2xl p-2 sm:p-3 bg-gradient-to-br from-[#2b2928] via-[#1a1918] to-[#0d0d0d] subtle-border shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
              {/* Image Frame */}
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#161616]">
                <img
                  src="/assets/images/hero_steak_platter_1794228992603.jpg"
                  alt="Fine dining charcoal-grilled Wagyu steak platter with roasted vegetables and rich reduction"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
              </div>

              {/* Circular Brand Seal Badge */}
              <div className="absolute -bottom-3 -right-2 sm:-bottom-6 sm:-right-6 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-[#111111] subtle-border p-1 shadow-[0_10px_30px_rgba(0,0,0,0.9)] flex items-center justify-center z-10">
                <div className="w-full h-full rounded-full border border-dashed border-[#D98739]/50 flex flex-col items-center justify-center text-center p-1.5 sm:p-2 bg-[#1b1918]/90">
                  <span className="text-[7px] sm:text-[8px] uppercase tracking-[0.2em] text-[#D98739] font-medium">
                    EST. 2024
                  </span>
                  <span className="font-serif text-[10px] sm:text-[12px] font-bold text-[#E6AF68] tracking-wider my-0.5 leading-none">
                    NOIR &amp; SAFFRON
                  </span>
                  <span className="text-[6.5px] sm:text-[7.5px] uppercase tracking-[0.16em] text-[#B7B0A8]">
                    FINE DINING
                  </span>
                </div>
              </div>

              {/* Decorative Subtle Gold Corner Accents */}
              <div className="absolute top-0 left-0 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-l-2 border-[#D98739] rounded-tl-lg" />
              <div className="absolute top-0 right-0 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-r-2 border-[#D98739] rounded-tr-lg" />
              <div className="absolute bottom-0 left-0 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-l-2 border-[#D98739] rounded-bl-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

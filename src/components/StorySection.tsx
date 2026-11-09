import React from 'react';

export const StorySection: React.FC = () => {
  return (
    <section id="our-story" className="relative py-14 sm:py-20 lg:py-28 bg-[#090909] overflow-hidden">
      {/* Subtle background ambient gold */}
      <div className="absolute top-1/3 left-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#D98739]/5 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT COLUMN: Editorial Story */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="w-6 sm:w-8 h-[1px] bg-[#D98739]" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#D98739]">
                OUR STORY
              </span>
            </div>

            {/* Heading with fluid clamp */}
            <h2 className="font-serif text-[clamp(1.85rem,5.5vw,3rem)] font-semibold text-[#F5F1EC] tracking-tight leading-[1.12] mb-4 sm:mb-6">
              Passion in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D98739] via-[#E6AF68] to-[#D98739]">
                Every Plate
              </span>
            </h2>

            {/* Paragraph */}
            <p className="text-[#B7B0A8] text-sm sm:text-base lg:text-lg font-light leading-relaxed mb-4 sm:mb-6">
              At NOIR &amp; SAFFRON, we believe exceptional dining is about more than extraordinary food.
              It is about creating memorable experiences through thoughtful hospitality, carefully selected
              ingredients, and the artistry of passionate chefs.
            </p>

            <p className="text-[#858079] text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8">
              Founded on the pillars of gastronomic purity and sensory balance, each plate is conceived
              as an ephemeral canvas. From wild-foraged truffles to slow-cured artisanal spices, our kitchen
              honours timeless culinary heritage through contemporary innovation.
            </p>

            {/* Handwritten Signature-Style Text */}
            <div className="mb-8 pl-1 sm:pl-2">
              <span className="font-signature text-2xl sm:text-4xl text-[#E6AF68] tracking-wide block">
                Crafted with Passion.
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-[#858079] mt-1 block">
                Jean-Luc Laurent &middot; Executive Chef &amp; Co-Founder
              </span>
            </div>

            {/* Three Achievement Statistics */}
            <div className="pt-6 sm:pt-8 border-t border-[rgba(207,143,77,0.25)] grid grid-cols-3 gap-2 sm:gap-6 text-center sm:text-left">
              {/* Stat 1 */}
              <div>
                <span className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#E6AF68] block tabular-nums leading-none">
                  12+
                </span>
                <span className="text-[9px] sm:text-xs text-[#B7B0A8] uppercase tracking-wider mt-1.5 block leading-tight">
                  Years of Excellence
                </span>
              </div>

              {/* Thin Vertical Golden Divider 1 */}
              <div className="border-l border-[rgba(207,143,77,0.35)] pl-2.5 sm:pl-6">
                <span className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#E6AF68] block tabular-nums leading-none">
                  50+
                </span>
                <span className="text-[9px] sm:text-xs text-[#B7B0A8] uppercase tracking-wider mt-1.5 block leading-tight">
                  Signature Creations
                </span>
              </div>

              {/* Thin Vertical Golden Divider 2 */}
              <div className="border-l border-[rgba(207,143,77,0.35)] pl-2.5 sm:pl-6">
                <span className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#E6AF68] block tabular-nums leading-none">
                  10K+
                </span>
                <span className="text-[9px] sm:text-xs text-[#B7B0A8] uppercase tracking-wider mt-1.5 block leading-tight">
                  Happy Guests
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Editorial Image Composition */}
          <div className="lg:col-span-6 mt-4 lg:mt-0">
            <div className="grid grid-cols-12 gap-2.5 sm:gap-4 items-center">
              {/* Large Rectangular Image: Professional Chef */}
              <div className="col-span-7 relative">
                <div className="aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#1a1918] subtle-border shadow-2xl group">
                  <img
                    src="/assets/images/story_chef_prep_1794228995731.jpg"
                    alt="Master chef garnishing fine dining dish with tweezers"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#D98739] font-medium block">
                      Behind the Pass
                    </span>
                    <span className="text-[11px] sm:text-xs font-serif font-bold text-[#F5F1EC]">
                      Meticulous Haute Cuisine
                    </span>
                  </div>
                </div>
              </div>

              {/* Two Smaller Stacked Photographs */}
              <div className="col-span-5 flex flex-col gap-2.5 sm:gap-4">
                {/* Image 1: Plated Fine Dining */}
                <div className="aspect-square w-full rounded-xl overflow-hidden bg-[#1a1918] subtle-border shadow-lg group">
                  <img
                    src="/assets/images/story_plated_dish_1794228995505.jpg"
                    alt="Artfully plated fine-dining dessert with 24k gold leaf"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Image 2: Luxury Restaurant Interior */}
                <div className="aspect-square w-full rounded-xl overflow-hidden bg-[#1a1918] subtle-border shadow-lg group">
                  <img
                    src="/assets/images/story_restaurant_interior_1794228996289.jpg"
                    alt="Ultra-luxury modern fine-dining restaurant dining room interior at night"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

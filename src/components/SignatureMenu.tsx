import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SIGNATURE_DISHES } from '../data/restaurantData';
import { MenuCard } from './MenuCard';
import { MenuItem } from '../types';

interface SignatureMenuProps {
  onViewFullMenu: () => void;
  onOpenDishModal: (dish: MenuItem) => void;
}

export const SignatureMenu: React.FC<SignatureMenuProps> = ({
  onViewFullMenu,
  onOpenDishModal,
}) => {
  return (
    <section id="menu" className="relative py-14 sm:py-20 lg:py-28 bg-[#111111] subtle-border-top subtle-border-bottom">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[300px] bg-[#D98739]/5 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Menu Showcase Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
            <span className="w-5 sm:w-6 h-[1px] bg-[#D98739]" />
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#D98739]">
              CURATED WITH PASSION
            </span>
            <span className="w-5 sm:w-6 h-[1px] bg-[#D98739]" />
          </div>

          <h2 className="font-serif text-[clamp(1.85rem,5vw,3rem)] font-semibold text-[#F5F1EC] tracking-tight">
            Our Signature{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D98739] to-[#E6AF68]">
              Collection
            </span>
          </h2>

          <p className="mt-3 sm:mt-4 text-xs sm:text-base text-[#B7B0A8] font-light leading-relaxed max-w-lg mx-auto">
            Discover dishes inspired by exceptional ingredients, refined techniques, and unforgettable flavours.
          </p>
        </div>

        {/* Four Food Cards in One Row on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {SIGNATURE_DISHES.map((dish) => (
            <MenuCard key={dish.id} dish={dish} onOpenDetails={onOpenDishModal} />
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="mt-10 sm:mt-14 text-center">
          <button
            type="button"
            onClick={onViewFullMenu}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-[#1b1918] subtle-border hover:border-[#D98739] text-[#F5F1EC] hover:text-[#E6AF68] font-semibold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-lg min-h-[48px] active:scale-95"
          >
            <span>VIEW FULL MENU</span>
            <ArrowRight className="w-4 h-4 text-[#D98739] transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

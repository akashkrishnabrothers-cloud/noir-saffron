import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { EXPERIENCES } from '../data/restaurantData';
import { ExperienceItem } from '../types';

interface ExperiencesProps {
  onSelectExperience: (experience: ExperienceItem) => void;
}

export const ExperiencesSection: React.FC<ExperiencesProps> = ({ onSelectExperience }) => {
  return (
    <section id="experiences" className="relative py-14 sm:py-20 lg:py-28 bg-[#090909]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
            <span className="w-5 sm:w-6 h-[1px] bg-[#D98739]" />
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#D98739]">
              BESPOKE HOSPITALITY
            </span>
            <span className="w-5 sm:w-6 h-[1px] bg-[#D98739]" />
          </div>

          <h2 className="font-serif text-[clamp(1.85rem,5vw,3rem)] font-semibold text-[#F5F1EC] tracking-tight">
            Curated Dining{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D98739] to-[#E6AF68]">
              Experiences
            </span>
          </h2>

          <p className="mt-3 sm:mt-4 text-xs sm:text-base text-[#B7B0A8] font-light leading-relaxed max-w-md mx-auto">
            Elevate your evening with tailored tasting menus, vintage wine cellaring journeys, and private salons.
          </p>
        </div>

        {/* 3 Experience Showcases (Mobile-first stack) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="group flex flex-col justify-between rounded-2xl bg-[#161616] subtle-border hover:border-[#D98739] transition-all duration-300 overflow-hidden shadow-xl"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#242424]">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#090909]/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase text-[#E6AF68] subtle-border">
                  {exp.tag}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] text-[#D98739] font-medium tracking-widest uppercase block mb-1">
                    {exp.subtitle}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#F5F1EC] group-hover:text-[#E6AF68] transition-colors mb-2.5">
                    {exp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#B7B0A8] leading-relaxed mb-5 font-light">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-[#F5F1EC]">
                        <Check className="w-3.5 h-3.5 text-[#D98739] shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectExperience(exp)}
                  className="w-full py-3.5 bg-[#1e1c1b] subtle-border hover:border-[#D98739] hover:bg-[#D98739] text-[#F5F1EC] hover:text-[#090909] font-semibold text-xs tracking-wider uppercase rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn min-h-[48px] active:scale-95"
                >
                  <span>RESERVE THIS EXPERIENCE</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/restaurantData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const totalReviews = TESTIMONIALS.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalReviews - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalReviews - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 45) handleNext();
    if (diff < -45) handlePrev();
    setTouchStartX(null);
  };

  return (
    <section id="testimonials" className="relative py-14 sm:py-20 lg:py-28 bg-[#111111] subtle-border-top subtle-border-bottom overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-[300px] sm:w-[500px] h-[300px] bg-[#D98739]/5 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Title on Left & Rating Badge on Right */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-14">
          <div>
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="w-6 sm:w-8 h-[1px] bg-[#D98739]" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#D98739]">
                WHAT OUR GUESTS SAY
              </span>
            </div>
            <h2 className="font-serif text-[clamp(1.85rem,5.5vw,3rem)] font-semibold text-[#F5F1EC] tracking-tight">
              Unforgettable{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D98739] to-[#E6AF68]">
                Experiences
              </span>
            </h2>
          </div>

          {/* Rating Badge */}
          <div className="flex items-center gap-3.5 bg-[#1b1918] subtle-border px-4 py-2.5 rounded-2xl shadow-lg shrink-0 self-start sm:self-auto">
            <div className="flex -space-x-2.5 overflow-hidden">
              <div className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-[#090909] bg-[#2b2928] overflow-hidden flex items-center justify-center font-serif text-[11px] font-bold text-[#E6AF68]">
                AM
              </div>
              <div className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-[#090909] bg-[#3a3532] overflow-hidden flex items-center justify-center font-serif text-[11px] font-bold text-[#E6AF68]">
                RK
              </div>
              <div className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-[#090909] bg-[#222120] overflow-hidden flex items-center justify-center font-serif text-[11px] font-bold text-[#E6AF68]">
                MS
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1 text-[#E6AF68]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-[#E6AF68] text-[#E6AF68]" />
                ))}
                <span className="ml-1 text-xs font-bold text-[#F5F1EC] tabular-nums">4.9/5</span>
              </div>
              <p className="text-[10px] text-[#858079]">
                From 2,500+ happy diners
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Swipeable Container */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative select-none"
        >
          {/* Mobile View */}
          <div className="block md:hidden">
            {TESTIMONIALS.map((item, index) => {
              if (index !== currentIndex) return null;
              return (
                <div
                  key={item.id}
                  className="flex flex-col justify-between rounded-2xl bg-[#2B2928]/95 subtle-border p-6 shadow-xl transition-all duration-300"
                >
                  <Quote className="w-8 h-8 text-[#D98739]/30 mb-3" />

                  <div className="flex items-center gap-1 mb-3 text-[#E6AF68]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#E6AF68] text-[#E6AF68]" />
                    ))}
                  </div>

                  <p className="text-sm text-[#F5F1EC] font-light leading-relaxed italic mb-5">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  <div className="w-full h-[1px] bg-[rgba(207,143,77,0.25)] my-3" />

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#161616] subtle-border flex items-center justify-center font-serif text-sm font-bold text-[#E6AF68] shrink-0">
                      {item.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-bold text-[#F5F1EC]">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-[#D98739] tracking-wider uppercase">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop View */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="relative flex flex-col justify-between rounded-2xl bg-[#2B2928]/90 subtle-border p-7 lg:p-8 shadow-xl hover:border-[#D98739] transition-all duration-300 group hover:-translate-y-1"
              >
                <Quote className="w-9 h-9 text-[#D98739]/25 mb-4 group-hover:text-[#D98739]/40 transition-colors" />

                <div className="flex items-center gap-1 mb-4 text-[#E6AF68]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#E6AF68] text-[#E6AF68]" />
                  ))}
                </div>

                <p className="text-sm lg:text-base text-[#F5F1EC] font-light leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>

                <div className="w-full h-[1px] bg-[rgba(207,143,77,0.25)] my-4" />

                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-[#161616] subtle-border flex items-center justify-center font-serif text-sm font-bold text-[#E6AF68] shrink-0">
                    {item.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-[#F5F1EC]">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#D98739] tracking-wider uppercase">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="mt-8 sm:mt-10 flex items-center justify-between sm:justify-end gap-4">
            <div className="flex items-center gap-2 py-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className="h-2 rounded-full transition-all duration-300 min-h-[24px] min-w-[24px] flex items-center justify-center"
                >
                  <span
                    className={`h-1.5 rounded-full transition-all ${
                      currentIndex === idx ? 'w-6 bg-[#D98739]' : 'w-2 bg-[#2B2928]'
                    }`}
                  />
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="w-11 h-11 rounded-full bg-[#1b1918] subtle-border flex items-center justify-center text-[#B7B0A8] hover:text-[#E6AF68] hover:border-[#D98739] active:scale-95 transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next testimonial"
                className="w-11 h-11 rounded-full bg-[#1b1918] subtle-border flex items-center justify-center text-[#B7B0A8] hover:text-[#E6AF68] hover:border-[#D98739] active:scale-95 transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X, Calendar, MapPin, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onOpenReservation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenReservation }) => {
  const { totalItems, setIsCartOpen, setIsSearchOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const sections = ['home', 'menu', 'experiences', 'our-story', 'testimonials', 'reservation', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090909]/95 backdrop-blur-md shadow-2xl subtle-border-bottom py-2.5 sm:py-3.5'
            : 'bg-gradient-to-b from-black/95 via-black/70 to-transparent py-3 sm:py-5 subtle-border-bottom'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-6 h-11 sm:h-12">
            {/* LEFT: Brand Wordmark */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('home');
              }}
              className="flex items-center gap-2 sm:gap-3 group shrink-0 focus:outline-none min-h-[44px] py-1"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#1b1918] subtle-border flex items-center justify-center text-[#E6AF68] font-serif font-bold text-xs sm:text-sm tracking-wider group-hover:border-[#D98739] transition-colors shrink-0">
                N&amp;S
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-2xl font-semibold tracking-wider text-[#F5F1EC] group-hover:text-[#E6AF68] transition-colors whitespace-nowrap">
                  NOIR &amp; SAFFRON
                </span>
                <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-[#D98739] font-medium -mt-1 hidden xs:block">
                  Fine Dining
                </span>
              </div>
            </a>

            {/* CENTER: Navigation Links */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-medium tracking-[0.15em] uppercase text-[#B7B0A8]">
              {[
                { label: 'HOME', id: 'home' },
                { label: 'MENU', id: 'menu' },
                { label: 'EXPERIENCES', id: 'experiences' },
                { label: 'OUR STORY', id: 'our-story' },
                { label: 'RESERVATION', id: 'reservation' },
                { label: 'CONTACT', id: 'contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`relative py-2 transition-colors hover:text-[#F5F1EC] focus:outline-none whitespace-nowrap ${
                    activeSection === item.id ? 'text-[#E6AF68]' : ''
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D98739] shadow-[0_0_8px_#D98739]" />
                  )}
                </button>
              ))}
            </nav>

            {/* RIGHT: Actions */}
            <div className="flex items-center gap-1 sm:gap-3 shrink-0">
              {/* Search Icon */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search Dishes"
                className="w-11 h-11 flex items-center justify-center text-[#B7B0A8] hover:text-[#E6AF68] hover:bg-[#242424]/60 rounded-full transition-colors focus:outline-none active:scale-95"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Shopping Bag Icon with Counter */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                aria-label="View Dining Order"
                className="relative w-11 h-11 flex items-center justify-center text-[#B7B0A8] hover:text-[#E6AF68] hover:bg-[#242424]/60 rounded-full transition-colors focus:outline-none active:scale-95"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute top-1.5 right-1.5 bg-[#D98739] text-[#090909] text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Reservation CTA Button */}
              <button
                type="button"
                onClick={onOpenReservation}
                className="hidden lg:flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#090909] bg-gradient-to-r from-[#D98739] to-[#E6AF68] rounded-full hover:brightness-110 active:scale-95 transition-all shadow-md whitespace-nowrap min-h-[40px]"
              >
                <Calendar className="w-3.5 h-3.5 text-[#090909]" />
                <span>Book A Table</span>
              </button>

              {/* Mobile Menu Trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
                className="md:hidden w-11 h-11 flex items-center justify-center text-[#F5F1EC] hover:text-[#D98739] focus:outline-none active:scale-95"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE FULL-SCREEN / SLIDE-OUT PANEL */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#090909]/98 backdrop-blur-xl flex flex-col justify-between px-5 py-6 md:hidden overflow-y-auto">
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-[#2B2928] pb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#1b1918] subtle-border flex items-center justify-center text-[#E6AF68] font-serif font-bold text-xs">
                N&amp;S
              </div>
              <span className="font-serif text-lg font-bold tracking-wider text-[#F5F1EC]">
                NOIR &amp; SAFFRON
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-11 h-11 flex items-center justify-center text-[#B7B0A8] hover:text-white rounded-full bg-[#181818] subtle-border"
              aria-label="Close Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2 py-6">
            {[
              { label: 'Home', id: 'home' },
              { label: 'Signature Menu', id: 'menu' },
              { label: 'Curated Experiences', id: 'experiences' },
              { label: 'Our Story & Heritage', id: 'our-story' },
              { label: 'Guest Testimonials', id: 'testimonials' },
              { label: 'Reserve A Table', id: 'reservation' },
              { label: 'Contact & Location', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="w-full text-left py-3 px-3 rounded-xl font-serif text-xl tracking-wider text-[#F5F1EC] hover:text-[#D98739] hover:bg-[#161616] transition-colors flex items-center justify-between active:scale-98 min-h-[48px]"
              >
                <span>{item.label}</span>
                <span className="text-xs text-[#D98739]/60 font-sans tracking-widest uppercase">
                  &rarr;
                </span>
              </button>
            ))}
          </nav>

          {/* Mobile Footer */}
          <div className="space-y-4 pt-4 border-t border-[#2B2928] pb-safe">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full py-4 bg-gradient-to-r from-[#D98739] to-[#E6AF68] text-[#090909] font-bold text-sm tracking-wider uppercase rounded-xl flex items-center justify-center gap-2 shadow-lg min-h-[48px] active:scale-95"
            >
              <Calendar className="w-4 h-4 text-[#090909]" />
              <span>Reserve Your Table</span>
            </button>

            <div className="flex items-center justify-around pt-2 text-xs text-[#858079]">
              <a href="tel:+919876543210" className="flex items-center gap-1.5 py-2 px-3 text-[#B7B0A8] hover:text-[#E6AF68]">
                <Phone className="w-3.5 h-3.5 text-[#D98739]" />
                <span>Call Concierge</span>
              </a>
              <span className="text-[#2B2928]">&bull;</span>
              <a href="#contact" onClick={() => scrollTo('contact')} className="flex items-center gap-1.5 py-2 px-3 text-[#B7B0A8] hover:text-[#E6AF68]">
                <MapPin className="w-3.5 h-3.5 text-[#D98739]" />
                <span>Directions</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

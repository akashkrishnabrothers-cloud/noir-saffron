import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 450);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 w-11 h-11 rounded-full bg-[#161616]/95 backdrop-blur-sm subtle-border hover:border-[#D98739] text-[#E6AF68] hover:text-[#F5F1EC] hover:bg-[#D98739]/20 shadow-[0_5px_20px_rgba(0,0,0,0.7)] flex items-center justify-center active:scale-95 transition-all duration-300"
    >
      <ArrowUp className="w-5 h-5 stroke-[2.5]" />
    </button>
  );
};

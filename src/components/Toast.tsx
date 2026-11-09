import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Toast: React.FC = () => {
  const { toast } = useCart();

  if (!toast || !toast.visible) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3 rounded-full bg-[#161616]/95 backdrop-blur-md subtle-border text-xs sm:text-sm text-[#F5F1EC] shadow-[0_10px_35px_rgba(0,0,0,0.8)] border-[#D98739]/50 animate-bounce">
      <CheckCircle2 className="w-4 h-4 text-[#D98739] shrink-0" />
      <span>{toast.message}</span>
    </div>
  );
};

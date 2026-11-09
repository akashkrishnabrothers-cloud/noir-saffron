import React, { useState } from 'react';
import { X, Clock, Flame, Plus, Minus, Check, ShoppingBag, ShieldCheck } from 'lucide-react';
import { MenuItem } from '../types';
import { useCart } from '../context/CartContext';

interface DishDetailModalProps {
  dish: MenuItem | null;
  onClose: () => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({ dish, onClose }) => {
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!dish) return null;

  const handleAdd = () => {
    addToCart(dish, qty);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#141414] subtle-border rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[92vh] overflow-y-auto">
        {/* Close Button (min 44px) */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-11 h-11 flex items-center justify-center bg-black/70 backdrop-blur-sm rounded-full text-[#B7B0A8] hover:text-[#F5F1EC] transition-colors"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top/Left: Image */}
        <div className="md:w-1/2 relative aspect-[4/3] md:aspect-auto bg-[#1b1918] shrink-0">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] md:from-transparent via-transparent to-transparent" />
        </div>

        {/* Bottom/Right: Details & Actions */}
        <div className="md:w-1/2 p-5 sm:p-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-[#D98739]">
                {dish.category.replace('-', ' ')}
              </span>
              {dish.isSignature && (
                <span className="text-[9px] sm:text-[10px] bg-[#D98739]/20 text-[#E6AF68] px-2 py-0.5 rounded border border-[#D98739]/40 uppercase font-medium">
                  Signature
                </span>
              )}
            </div>

            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F5F1EC] mb-2 leading-tight">
              {dish.name}
            </h3>

            <p className="text-xs sm:text-sm text-[#B7B0A8] font-light leading-relaxed mb-4">
              {dish.description}
            </p>

            {/* Quick Metrics */}
            <div className="flex items-center gap-3 py-2.5 border-y border-[rgba(207,143,77,0.2)] mb-4 text-[11px] sm:text-xs text-[#858079]">
              {dish.prepTime && (
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#D98739]" />
                  <span>{dish.prepTime}</span>
                </div>
              )}
              {dish.calories && (
                <div className="flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-[#D98739]" />
                  <span>{dish.calories}</span>
                </div>
              )}
              <div className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D98739]" />
                <span>Locally Sourced</span>
              </div>
            </div>

            {/* Dietary Tags */}
            {dish.dietary && (
              <div className="flex flex-wrap gap-1.5 mb-5">
                {dish.dietary.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[10px] bg-[#1e1c1b] border border-[#2B2928] text-[#B7B0A8] px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Quantity & CTA */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[9px] text-[#858079] block uppercase tracking-wider">Price</span>
                <span className="font-serif text-xl sm:text-2xl font-bold text-[#E6AF68] tabular-nums">
                  ₹{(dish.price * qty).toLocaleString('en-IN')}
                </span>
              </div>

              {/* Quantity Stepper */}
              <div className="flex items-center gap-2 bg-[#1e1c1b] subtle-border rounded-xl px-2 py-1">
                <button
                  type="button"
                  onClick={() => setQty((prev) => Math.max(1, prev - 1))}
                  className="w-8 h-8 flex items-center justify-center text-[#858079] hover:text-[#F5F1EC] active:scale-95"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-bold text-sm text-[#F5F1EC] w-5 text-center tabular-nums">
                  {qty}
                </span>
                <button
                  type="button"
                  onClick={() => setQty((prev) => prev + 1)}
                  className="w-8 h-8 flex items-center justify-center text-[#858079] hover:text-[#F5F1EC] active:scale-95"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={handleAdd}
              disabled={added}
              className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all min-h-[48px] ${
                added
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gradient-to-r from-[#D98739] to-[#E6AF68] text-[#090909] hover:brightness-110 active:scale-98 shadow-md'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>ADDED TO TABLE ORDER</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>ADD TO DINING ORDER</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Plus, Check, Clock } from 'lucide-react';
import { MenuItem } from '../types';
import { useCart } from '../context/CartContext';

interface MenuCardProps {
  dish: MenuItem;
  onOpenDetails?: (dish: MenuItem) => void;
}

export const MenuCard: React.FC<MenuCardProps> = ({ dish, onOpenDetails }) => {
  const { addToCart } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(dish);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
  };

  return (
    <div
      onClick={() => onOpenDetails && onOpenDetails(dish)}
      className="group relative flex flex-col justify-between rounded-[18px] bg-[#242424] subtle-border hover:border-[#D98739] hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.6)] active:scale-[0.99]"
    >
      {/* Top Image Container with Fixed 4:3 Aspect Ratio */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#181818]">
        <img
          src={dish.image}
          alt={dish.name}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
        />

        {/* Dietary Tag */}
        {dish.dietary && dish.dietary.length > 0 && (
          <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 bg-[#090909]/85 backdrop-blur-sm px-2.5 py-1 rounded-md text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase text-[#E6AF68] subtle-border">
            <span>{dish.dietary[0]}</span>
          </div>
        )}

        {/* Prep Time Tag */}
        {dish.prepTime && (
          <div className="absolute top-2.5 right-2.5 flex items-center gap-1 bg-[#090909]/80 backdrop-blur-sm px-2 py-0.5 rounded text-[9px] sm:text-[10px] text-[#B7B0A8]">
            <Clock className="w-3 h-3 text-[#D98739]" />
            <span>{dish.prepTime}</span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#242424] via-transparent to-transparent opacity-90 pointer-events-none" />
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category */}
          <div className="text-[10px] sm:text-[11px] font-medium tracking-widest uppercase text-[#D98739] mb-1">
            {dish.category.replace('-', ' ')}
          </div>

          {/* Product Title */}
          <h3 className="font-serif text-base sm:text-lg font-bold text-[#F5F1EC] group-hover:text-[#E6AF68] transition-colors leading-snug line-clamp-1">
            {dish.name}
          </h3>

          {/* Description */}
          <p className="mt-1.5 text-xs text-[#B7B0A8] leading-relaxed line-clamp-2">
            {dish.description}
          </p>
        </div>

        {/* Price & Add to Cart Footer */}
        <div className="mt-4 pt-3 border-t border-[rgba(207,143,77,0.2)] flex items-center justify-between">
          <div>
            <span className="text-[9px] sm:text-[10px] text-[#858079] block uppercase tracking-wider">Price</span>
            <span className="font-serif text-lg sm:text-xl font-bold text-[#F5F1EC] tabular-nums">
              ₹{dish.price.toLocaleString('en-IN')}
            </span>
          </div>

          {/* Circular Add to Cart Button */}
          <button
            type="button"
            onClick={handleAdd}
            aria-label={`Add ${dish.name} to order`}
            className={`min-w-[44px] min-h-[44px] rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
              justAdded
                ? 'bg-emerald-600 text-white scale-105'
                : 'bg-gradient-to-r from-[#D98739] to-[#E6AF68] text-[#090909] active:scale-95'
            }`}
          >
            {justAdded ? <Check className="w-5 h-5 stroke-[2.5]" /> : <Plus className="w-5 h-5 stroke-[2.5]" />}
          </button>
        </div>
      </div>
    </div>
  );
};

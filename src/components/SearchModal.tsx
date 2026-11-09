import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Plus, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { FULL_MENU_ITEMS } from '../data/restaurantData';
import { MenuItem } from '../types';

interface SearchModalProps {
  onOpenDish: (dish: MenuItem) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ onOpenDish }) => {
  const { isSearchOpen, setIsSearchOpen, addToCart } = useCart();
  const [query, setQuery] = useState('');
  const [addedDishId, setAddedDishId] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const results = query.trim()
    ? FULL_MENU_ITEMS.filter(
        (item) =>
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase()) ||
          (item.dietary && item.dietary.some((d) => d.toLowerCase().includes(query.toLowerCase())))
      )
    : FULL_MENU_ITEMS.slice(0, 4);

  const handleAdd = (e: React.MouseEvent, dish: MenuItem) => {
    e.stopPropagation();
    addToCart(dish);
    setAddedDishId(dish.id);
    setTimeout(() => setAddedDishId(null), 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-14 sm:pt-20 p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn pt-safe pb-safe">
      <div className="relative w-full max-w-2xl bg-[#141414] subtle-border rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Search Input Bar */}
        <div className="p-3.5 sm:p-5 border-b border-[rgba(207,143,77,0.25)] flex items-center gap-3 bg-[#181818] shrink-0">
          <Search className="w-5 h-5 text-[#D98739] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            inputMode="search"
            placeholder="Search tenderloin, truffle pasta, seafood, wines..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-base sm:text-sm text-[#F5F1EC] placeholder-[#858079] focus:outline-none min-h-[44px]"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-[#858079] hover:text-[#F5F1EC] p-2"
            >
              Clear
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="w-11 h-11 flex items-center justify-center text-[#858079] hover:text-[#F5F1EC] rounded-full shrink-0"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="p-3 sm:p-4 flex-1 overflow-y-auto space-y-2.5">
          <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#858079] mb-1 px-1">
            {query.trim() ? `Search Results (${results.length})` : 'Popular Recommendations'}
          </div>

          {results.length === 0 ? (
            <div className="py-12 text-center text-xs text-[#858079]">
              No dishes found matching &ldquo;{query}&rdquo;. Try &ldquo;steak&rdquo;, &ldquo;truffle&rdquo;, or &ldquo;seafood&rdquo;.
            </div>
          ) : (
            results.map((dish) => (
              <div
                key={dish.id}
                onClick={() => {
                  setIsSearchOpen(false);
                  onOpenDish(dish);
                }}
                className="group flex items-center justify-between gap-3 p-2.5 sm:p-3 rounded-xl bg-[#1b1918] subtle-border hover:border-[#D98739] cursor-pointer transition-colors active:scale-[0.99]"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-12 h-12 rounded-lg object-cover bg-[#242424] shrink-0"
                  />
                  <div className="min-w-0">
                    <h5 className="font-serif text-xs sm:text-sm font-bold text-[#F5F1EC] group-hover:text-[#E6AF68] transition-colors truncate">
                      {dish.name}
                    </h5>
                    <p className="text-[11px] text-[#858079] truncate">{dish.description}</p>
                    <span className="text-[10px] text-[#D98739] font-medium uppercase tracking-wider">
                      {dish.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 shrink-0">
                  <span className="font-serif text-xs sm:text-sm font-bold text-[#F5F1EC] tabular-nums">
                    ₹{dish.price.toLocaleString('en-IN')}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => handleAdd(e, dish)}
                    aria-label={`Add ${dish.name}`}
                    className={`min-w-[40px] min-h-[40px] rounded-full flex items-center justify-center transition-all ${
                      addedDishId === dish.id
                        ? 'bg-emerald-600 text-white'
                        : 'bg-[#141414] subtle-border hover:bg-[#D98739] hover:text-[#090909] text-[#E6AF68]'
                    }`}
                  >
                    {addedDishId === dish.id ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

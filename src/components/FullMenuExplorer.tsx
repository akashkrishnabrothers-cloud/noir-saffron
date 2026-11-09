import React, { useState } from 'react';
import { X, Search, Filter, Sparkles, Utensils } from 'lucide-react';
import { FULL_MENU_ITEMS } from '../data/restaurantData';
import { MenuCategory, MenuItem } from '../types';
import { MenuCard } from './MenuCard';

interface FullMenuExplorerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDishModal: (dish: MenuItem) => void;
}

const CATEGORIES: { id: MenuCategory; label: string }[] = [
  { id: 'all', label: 'All Dishes' },
  { id: 'starters', label: 'Starters' },
  { id: 'main-course', label: 'Main Course' },
  { id: 'pasta', label: 'Pasta' },
  { id: 'seafood', label: 'Seafood' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'beverages', label: 'Beverages' },
];

export const FullMenuExplorer: React.FC<FullMenuExplorerProps> = ({
  isOpen,
  onClose,
  onOpenDishModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDietary, setSelectedDietary] = useState<string>('all');

  if (!isOpen) return null;

  const filteredDishes = FULL_MENU_ITEMS.filter((dish) => {
    const matchesCategory = selectedCategory === 'all' || dish.category === selectedCategory;
    const matchesSearch =
      dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dish.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDietary =
      selectedDietary === 'all' ||
      (dish.dietary && dish.dietary.some((tag) => tag.toLowerCase() === selectedDietary.toLowerCase()));

    return matchesCategory && matchesSearch && matchesDietary;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center sm:p-4 bg-black/85 backdrop-blur-md overflow-hidden animate-fadeIn">
      <div className="relative w-full h-full sm:h-auto sm:max-h-[92vh] max-w-6xl bg-[#111111] sm:subtle-border sm:rounded-2xl flex flex-col shadow-2xl overflow-hidden pt-safe pb-safe">
        {/* Header */}
        <div className="px-4 sm:px-6 py-3.5 sm:py-5 border-b border-[rgba(207,143,77,0.25)] flex items-center justify-between bg-[#161616] shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#1e1c1b] subtle-border flex items-center justify-center text-[#E6AF68] shrink-0">
              <Utensils className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <h2 className="font-serif text-lg sm:text-2xl font-bold text-[#F5F1EC] truncate">
                Full Carte Menu
              </h2>
              <p className="text-[10px] sm:text-xs text-[#B7B0A8] truncate">
                NOIR &amp; SAFFRON Signature Creations
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="w-11 h-11 flex items-center justify-center text-[#B7B0A8] hover:text-[#E6AF68] rounded-full hover:bg-[#242424] transition-colors shrink-0"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-3 sm:p-5 border-b border-[#242424] bg-[#0c0c0c] space-y-3 shrink-0">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2.5 sm:gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#858079]" />
              <input
                type="text"
                inputMode="search"
                placeholder="Search ingredients, dishes, flavours..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#1b1918] subtle-border rounded-full pl-10 pr-12 py-2 text-base sm:text-sm text-[#F5F1EC] placeholder-[#858079] focus:outline-none focus:border-[#D98739] min-h-[44px]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#858079] hover:text-[#F5F1EC] p-1"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Dietary quick filter */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
              <span className="text-[#858079] flex items-center gap-1 text-[10px] uppercase tracking-wider shrink-0">
                <Filter className="w-3 h-3 text-[#D98739]" /> Filter:
              </span>
              {['all', 'Signature', 'Vegetarian', 'Seafood', 'Chef Special'].map((diet) => (
                <button
                  key={diet}
                  onClick={() => setSelectedDietary(diet)}
                  className={`px-3 py-1.5 rounded-full text-[11px] sm:text-xs transition-colors whitespace-nowrap min-h-[36px] flex items-center ${
                    selectedDietary === diet
                      ? 'bg-[#D98739] text-[#090909] font-bold'
                      : 'bg-[#1e1c1b] text-[#B7B0A8] hover:text-[#F5F1EC] border border-[rgba(207,143,77,0.2)]'
                  }`}
                >
                  {diet === 'all' ? 'All Dietary' : diet}
                </button>
              ))}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pt-1 no-scrollbar border-t border-[rgba(207,143,77,0.15)] pb-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-lg text-[11px] sm:text-xs font-semibold tracking-wider uppercase transition-all whitespace-nowrap min-h-[40px] flex items-center ${
                  selectedCategory === cat.id
                    ? 'bg-[#D98739]/20 text-[#E6AF68] border border-[#D98739]'
                    : 'text-[#858079] hover:text-[#F5F1EC] hover:bg-[#1b1918]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Cards Grid Scrollable Container */}
        <div className="flex-1 overflow-y-auto p-3.5 sm:p-6 bg-[#090909]">
          {filteredDishes.length === 0 ? (
            <div className="py-16 text-center">
              <Sparkles className="w-8 h-8 text-[#D98739] mx-auto mb-3 opacity-60" />
              <p className="text-base text-[#F5F1EC] font-serif">No culinary creations matched your filter.</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                  setSelectedDietary('all');
                }}
                className="mt-3 text-xs text-[#D98739] underline hover:text-[#E6AF68] p-2"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredDishes.map((dish) => (
                <MenuCard key={dish.id} dish={dish} onOpenDetails={onOpenDishModal} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

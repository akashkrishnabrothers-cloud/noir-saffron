/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SignatureMenu } from './components/SignatureMenu';
import { FullMenuExplorer } from './components/FullMenuExplorer';
import { ExperiencesSection } from './components/ExperiencesSection';
import { StorySection } from './components/StorySection';
import { Testimonials } from './components/Testimonials';
import { ReservationSection } from './components/ReservationSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { SearchModal } from './components/SearchModal';
import { DishDetailModal } from './components/DishDetailModal';
import { BackToTop } from './components/BackToTop';
import { Toast } from './components/Toast';
import { MenuItem, ExperienceItem } from './types';

export default function App() {
  const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [preselectedExp, setPreselectedExp] = useState<string | null>(null);

  const handleOpenReservation = (expName?: string) => {
    if (expName) setPreselectedExp(expName);
    const element = document.getElementById('reservation');
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleExploreMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleSelectExperience = (exp: ExperienceItem) => {
    handleOpenReservation(exp.title);
  };

  return (
    <CartProvider>
      <div className="w-full min-h-screen bg-[#090909] text-[#F5F1EC] selection:bg-[#D98739] selection:text-white flex flex-col justify-between overflow-x-hidden">
        {/* Sticky Luxury Header */}
        <Header onOpenReservation={() => handleOpenReservation()} />

        <main className="flex-1 w-full overflow-x-hidden">
          {/* Hero Section */}
          <Hero
            onExploreMenu={handleExploreMenu}
            onReserveTable={() => handleOpenReservation()}
          />

          {/* Signature Menu Showcase */}
          <SignatureMenu
            onViewFullMenu={() => setIsFullMenuOpen(true)}
            onOpenDishModal={(dish) => setSelectedDish(dish)}
          />

          {/* Curated Bespoke Experiences */}
          <ExperiencesSection onSelectExperience={handleSelectExperience} />

          {/* Restaurant Story Section */}
          <StorySection />

          {/* Customer Testimonials Section */}
          <Testimonials />

          {/* Table Reservation & Conversion */}
          <ReservationSection preselectedExperience={preselectedExp} />
        </main>

        {/* 4-Column Luxury Footer */}
        <Footer />

        {/* Floating Controls & Modals */}
        <FullMenuExplorer
          isOpen={isFullMenuOpen}
          onClose={() => setIsFullMenuOpen(false)}
          onOpenDishModal={(dish) => setSelectedDish(dish)}
        />

        <DishDetailModal
          dish={selectedDish}
          onClose={() => setSelectedDish(null)}
        />

        <CartDrawer />
        <SearchModal onOpenDish={(dish) => setSelectedDish(dish)} />
        <BackToTop />
        <Toast />
      </div>
    </CartProvider>
  );
}

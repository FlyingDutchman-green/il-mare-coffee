import React from 'react';
import MenuShowcase from '@/components/menu/MenuShowcase.client';

export const metadata = {
  title: 'Menu | IL MARE COFFEE',
  description: 'Explore the premium selection of our signature coffees and artisanal beverages in an elegant showcase.',
};

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-coffee-bg pt-24 md:pt-32 pb-16">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-coffee-dark tracking-tight">
          Boutique Selections
        </h1>
        <p className="mt-4 font-sans text-coffee-dark/70 text-lg max-w-xl mx-auto md:mx-0">
          Discover our meticulously crafted beverages. From signature bold espressos to delicate artisan frappes.
        </p>
      </div>

      {/* Interactive Menu Showcase */}
      <MenuShowcase />

    </div>
  );
}

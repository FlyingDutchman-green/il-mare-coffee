'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = ['Coffee Series', 'Frappe Series', 'Milk Series', 'Tea Series'];

const PRODUCTS = {
  'Coffee Series': [
    { id: 1, name: 'Lungo Coffee', desc: 'A perfectly extracted long black espresso shot, delivering bold and complex flavors directly to your palate.', price: 'Rp 25.000', image: '/menu/coffee-series.png' },
    { id: 2, name: 'Dalgona Coffee', desc: 'Whipped sweet coffee foam layered over iced milk for a creamy, rich, and intensely satisfying experience.', price: 'Rp 30.000', image: '/menu/coffee-series.png' },
    { id: 3, name: 'Filter Coffee', desc: 'Manual brewed specialty coffee that extracts the purest characteristics and subtle fruity notes of the bean.', price: 'Rp 59.000', image: '/menu/coffee-series.png' },
  ],
  'Frappe Series': [
    { id: 4, name: 'Matcha Frappe', desc: 'Premium matcha green tea blended meticulously with ice and milk, topped with a delicate whipped cream swirl.', price: 'Rp 35.000', image: '/menu/frappe-series.png' },
    { id: 5, name: 'Caramel Frappe', desc: 'Rich caramel syrup blended harmoniously with our signature espresso, ice, and smooth whole milk.', price: 'Rp 38.000', image: '/menu/frappe-series.png' },
  ],
  'Milk Series': [
    { id: 6, name: 'Hokkaido Milk', desc: 'Rich, creamy authentic Hokkaido-style milk served over crystal clear ice cubes for a refreshing dairy hit.', price: 'Rp 28.000', image: '/menu/milk-series.png' },
  ],
  'Tea Series': [
    { id: 7, name: 'Earl Grey', desc: 'Classic Earl Grey tea infused with natural bergamot oil for a deeply refreshing, aromatic break.', price: 'Rp 22.000', image: '/menu/tea-series.png' },
  ]
};

export default function MenuShowcase() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
  const [productIndex, setProductIndex] = useState(0);

  const currentProducts = PRODUCTS[activeCategory as keyof typeof PRODUCTS];
  const activeProduct = currentProducts[productIndex];

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setProductIndex(0);
  };

  const nextProduct = () => {
    setProductIndex((prev) => (prev + 1) % currentProducts.length);
  };

  const prevProduct = () => {
    setProductIndex((prev) => (prev - 1 + currentProducts.length) % currentProducts.length);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 flex flex-col md:flex-row gap-12">
      
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-1/4">
        {/* Mobile: Horizontal Scroll, Desktop: Vertical List */}
        <nav className="flex md:flex-col overflow-x-auto md:overflow-visible gap-6 pb-4 md:pb-0 border-b md:border-b-0 border-coffee-dark/10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`text-left font-sans text-sm md:text-xl font-bold whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat 
                  ? 'text-coffee-dark translate-x-0 md:translate-x-2' 
                  : 'text-coffee-dark/40 hover:text-coffee-dark/70'
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="w-full md:w-3/4 flex items-center justify-center min-h-[500px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProduct.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-full flex flex-col md:flex-row items-center gap-12"
          >
            {/* Left: Image Carousel Element */}
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <div className="aspect-[3/4] w-full max-w-sm rounded-3xl overflow-hidden shadow-md bg-coffee-dark/5">
                <img 
                  src={activeProduct.image} 
                  alt={activeProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Product Details & Controls */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <span className="font-sans text-xs font-bold tracking-widest uppercase text-coffee-latte mb-4">
                {activeCategory}
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-dark leading-tight mb-6">
                {activeProduct.name}
              </h2>
              <p className="font-sans text-coffee-dark/80 text-base leading-relaxed mb-8">
                {activeProduct.desc}
              </p>
              <div className="text-2xl font-black font-sans text-coffee-dark tracking-wide mb-12">
                {activeProduct.price}
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-6">
                <button 
                  onClick={prevProduct}
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-coffee-dark/20 text-coffee-dark hover:bg-coffee-dark hover:text-coffee-bg transition-all duration-300 shadow-sm"
                  aria-label="Previous product"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <div className="font-sans text-sm font-bold text-coffee-dark/40 tracking-widest">
                  0{productIndex + 1} / 0{currentProducts.length}
                </div>
                <button 
                  onClick={nextProduct}
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-coffee-dark/20 text-coffee-dark hover:bg-coffee-dark hover:text-coffee-bg transition-all duration-300 shadow-sm"
                  aria-label="Next product"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

    </div>
  );
}

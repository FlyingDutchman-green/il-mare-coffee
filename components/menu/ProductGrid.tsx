'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import MenuFilterClient from './MenuFilterClient';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
}

interface ProductGridProps {
  products: Product[];
}

const CATEGORIES = ['All', 'Special Coffee', 'Special Dessert'];

export default function ProductGrid({ products }: ProductGridProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, activeCategory, searchQuery]);

  const formatPrice = (price: number) => {
    return `Rp ${price}`;
  };

  return (
    <section>
      <MenuFilterClient
        categories={CATEGORIES}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="flex flex-col bg-coffee-white border border-coffee-dark/10 rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image Placeholder */}
            <div className="aspect-square w-full relative bg-coffee-bg overflow-hidden border-b border-coffee-dark/5">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            
            {/* Content */}
            <div className="p-4 md:p-5 flex flex-col flex-grow justify-between bg-coffee-white">
              <div>
                <span className="text-xs font-sans text-coffee-dark/60 uppercase tracking-wider block mb-1">
                  {product.category}
                </span>
                <h3 className="font-serif text-lg font-bold text-coffee-dark mb-2 leading-tight">
                  {product.name}
                </h3>
              </div>
              <p className="font-sans font-bold text-coffee-latte text-lg mt-3">
                {formatPrice(product.price)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <p className="font-sans text-coffee-dark/70 text-lg">No menu items found matching your criteria.</p>
          <button 
            onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
            className="mt-4 px-6 py-2 bg-coffee-dark text-coffee-bg font-sans text-sm rounded-full hover:bg-coffee-latte transition-colors"
          >
            Clear Filters
          </button>
        </motion.div>
      )}
    </section>
  );
}

'use client';

import React from 'react';

interface MenuFilterClientProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function MenuFilterClient({
  categories,
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
}: MenuFilterClientProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
      {/* Category Tabs */}
      <div className="flex overflow-x-auto w-full md:w-auto space-x-3 pb-2 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`whitespace-nowrap px-6 py-2 rounded-full font-sans text-sm font-medium transition-all border ${
              activeCategory === cat
                ? 'bg-coffee-dark text-coffee-bg border-coffee-dark'
                : 'bg-transparent text-coffee-dark/70 border-coffee-latte/30 hover:border-coffee-dark hover:text-coffee-dark'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Search Input */}
      <div className="w-full md:w-72">
        <div className="relative">
          <input
            type="text"
            placeholder="Search our menu..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-4 pr-10 py-2.5 rounded-full border border-coffee-latte/30 bg-coffee-white text-coffee-dark focus:outline-none focus:border-coffee-dark focus:ring-1 focus:ring-coffee-dark font-sans text-sm transition-shadow"
          />
          <svg
            className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-coffee-dark/50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

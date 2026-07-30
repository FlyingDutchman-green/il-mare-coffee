import React from 'react';
import ProductGrid, { Product } from '@/components/menu/ProductGrid';

const MOCK_PRODUCTS: Product[] = [
  { id: '1', name: 'Lungo Coffee', price: 199, category: 'Special Coffee', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop' },
  { id: '2', name: 'Dalgona Coffee', price: 159, category: 'Special Coffee', image: 'https://images.unsplash.com/photo-1589396575653-c09c794ff6a6?q=80&w=800&auto=format&fit=crop' },
  { id: '3', name: 'Iced Coffee', price: 149, category: 'Special Coffee', image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=800&auto=format&fit=crop' },
  { id: '4', name: 'Filter Coffee', price: 59, category: 'Special Coffee', image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop' },
  { id: '5', name: 'Churros', price: 170, category: 'Special Dessert', image: 'https://images.unsplash.com/photo-1624371414361-e670edf4898d?q=80&w=800&auto=format&fit=crop' },
  { id: '6', name: 'Chocolate Tiramisu', price: 250, category: 'Special Dessert', image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=800&auto=format&fit=crop' },
];

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-coffee-bg pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-coffee-dark mb-6">Our Menu</h1>
          <p className="font-sans text-coffee-dark/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Discover our carefully curated selection of premium coffees and delightful desserts, crafted to absolute perfection.
          </p>
        </div>
        
        <ProductGrid products={MOCK_PRODUCTS} />
      </div>
    </div>
  );
}

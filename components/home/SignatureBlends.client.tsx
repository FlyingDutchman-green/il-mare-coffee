'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const SIGNATURES = [
  { id: '1', name: 'Lungo Coffee', price: 199, category: 'Special Coffee', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop' },
  { id: '2', name: 'Dalgona Coffee', price: 159, category: 'Special Coffee', image: 'https://images.unsplash.com/photo-1589396575653-c09c794ff6a6?q=80&w=800&auto=format&fit=crop' },
  { id: '6', name: 'Chocolate Tiramisu', price: 250, category: 'Special Dessert', image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=800&auto=format&fit=crop' },
];

export default function SignatureBlendsClient() {
  return (
    <section className="py-24 md:py-32 bg-coffee-white border-y border-coffee-dark/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <span className="font-sans text-sm font-bold tracking-widest text-coffee-latte uppercase mb-4 block">
            Discover Our Favorites
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-coffee-dark mb-6">
            Signature Blends
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {SIGNATURES.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.15 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="flex flex-col bg-coffee-bg border border-coffee-dark/10 rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-[4/3] w-full relative overflow-hidden border-b border-coffee-dark/5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between bg-coffee-white">
                <div>
                  <span className="text-xs font-sans text-coffee-dark/60 uppercase tracking-wider block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-coffee-dark mb-2">
                    {item.name}
                  </h3>
                </div>
                <p className="font-sans font-bold text-coffee-latte text-lg mt-3">
                  Rp {item.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          <Link 
            href="/menu"
            className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-coffee-dark bg-coffee-dark text-coffee-bg font-sans font-semibold rounded-full hover:bg-coffee-bg hover:text-coffee-dark transition-colors shadow-md"
          >
            View Full Menu
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

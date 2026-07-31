'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const menuCategories = [
  { 
    id: 1, 
    name: 'Coffee Series', 
    image: '/menu/coffee-series.png'
  },
  { 
    id: 2, 
    name: 'Frappe Series', 
    image: '/menu/frappe-series.png'
  },
  { 
    id: 3, 
    name: 'Milk Series', 
    image: '/menu/milk-series.png'
  },
  { 
    id: 4, 
    name: 'Tea Series', 
    image: '/menu/tea-series.png'
  }
];

export default function SignatureBlendsClient() {
  return (
    <section className="py-24 bg-coffee-bg">
      {/* 1. Section Header: Left-aligned */}
      <div className="text-left max-w-7xl mx-auto px-6 mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif font-bold text-coffee-dark mb-4"
        >
          Menu
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-sans text-coffee-dark/70 text-lg max-w-2xl"
        >
          Nikmati kelezatan minuman premium yang diracik dengan elegan, Always on Point bersama IL MARE COFFEE.
        </motion.p>
      </div>

      {/* 2. Grid Layout: 3-column responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 mb-16">
        {menuCategories.map((category, index) => (
          <Link href="/menu" key={category.id} className="block group">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col"
            >
              {/* 3. Category Card Sizing & Styling */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-coffee-dark/5">
                <img 
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-center mt-4 text-sm md:text-base font-semibold text-coffee-dark tracking-wide font-sans">
                {category.name}
              </h3>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* 4. Center Bottom Button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="flex justify-center"
      >
        <Link 
          href="/menu"
          className="inline-flex items-center justify-center px-10 py-4 text-sm font-sans font-bold uppercase tracking-wider rounded-full bg-coffee-dark text-coffee-bg hover:bg-coffee-latte transition-all duration-300 shadow-sm hover:shadow-md"
        >
          View Full Menu
        </Link>
      </motion.div>
    </section>
  );
}

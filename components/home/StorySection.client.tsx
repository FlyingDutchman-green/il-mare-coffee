'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function StorySectionClient() {
  return (
    <section className="py-24 md:py-32 bg-coffee-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            <span className="font-sans text-sm font-bold tracking-widest text-coffee-latte uppercase mb-4 block">
              Our Story
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-coffee-dark mb-6 leading-tight">
              Crafted with Passion,<br/>Served with Elegance
            </h2>
            <p className="font-sans text-coffee-dark/80 text-lg leading-relaxed mb-6">
              IL MARE COFFEE was born from a desire to blend the timeless tradition of boutique cafe culture with a modern, sophisticated atmosphere. Every bean is carefully sourced, and every cup is poured with absolute precision.
            </p>
            <p className="font-sans text-coffee-dark/80 text-lg leading-relaxed">
              We believe that coffee is more than just a drink—it is an experience, a moment of pause, and a celebration of true craftsmanship.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-full lg:ml-auto">
              <img 
                src="https://images.unsplash.com/photo-1495474472201-4efa1ee00b8c?q=80&w=1000&auto=format&fit=crop" 
                alt="Premium cafe interior pouring espresso" 
                className="object-cover w-full h-full rounded-sm shadow-xl"
              />
              <div className="absolute inset-0 border border-coffee-dark/10 rounded-sm"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

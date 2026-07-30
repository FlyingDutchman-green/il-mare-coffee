'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroClient() {
  return (
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="font-serif text-5xl md:text-7xl font-bold text-coffee-white mb-6 leading-tight drop-shadow-lg"
      >
        We serve the richest coffee in the city!
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        className="font-sans text-lg md:text-xl text-coffee-bg/90 mb-10 max-w-2xl mx-auto drop-shadow-md"
      >
        Experience the authentic taste of boutique coffee crafted with passion, precision, and the finest beans sourced from around the world.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
      >
        <Link 
          href="/menu"
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-sans font-semibold rounded-full bg-coffee-dark text-coffee-bg hover:bg-coffee-latte hover:text-coffee-white transition-all duration-300 shadow-xl"
        >
          Order Now
        </Link>
      </motion.div>
    </div>
  );
}

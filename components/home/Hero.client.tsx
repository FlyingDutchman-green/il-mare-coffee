'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroClient() {
  return (
    <div className="relative z-10 flex items-center justify-start w-full h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mt-20 md:mt-32 pt-10">
      <div className="w-full md:max-w-2xl flex flex-col items-start text-left">
      
      {/* Accent Top Label */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex items-center text-coffee-bg mb-4"
      >
        <div className="w-6 h-[1px] bg-current mr-3"></div>
        <span className="font-sans text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
          Boutique Coffee Experience
        </span>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
        className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-coffee-white mb-6 leading-[1.1]"
      >
        We serve the <br className="hidden md:block" />
        richest coffee <br className="hidden md:block" />
        in the city.
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        className="font-sans text-lg md:text-xl text-coffee-bg/90 mb-10 max-w-xl leading-relaxed"
      >
        Experience the authentic taste of boutique coffee crafted with passion, precision, and the finest beans sourced from around the world.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        className="flex flex-wrap items-center gap-4 mt-2"
      >
        {/* Left Button - Solid */}
        <Link 
          href="/locations"
          className="inline-flex items-center justify-center px-6 py-3.5 text-xs md:text-sm font-sans font-bold uppercase tracking-wider rounded-md bg-coffee-dark text-coffee-bg hover:bg-coffee-latte transition-all duration-300 shadow-xl group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2 transition-transform group-hover:scale-110 duration-200">
            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>
          Visit Us
        </Link>
        
        {/* Right Button - Ghost/Outline */}
        <Link 
          href="/menu"
          className="inline-flex items-center justify-center px-6 py-3.5 text-xs md:text-sm font-sans font-bold uppercase tracking-wider rounded-md border border-coffee-bg text-coffee-bg hover:bg-coffee-bg hover:text-coffee-dark transition-all duration-300"
        >
          View Our Menu
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </motion.div>
      </div>
    </div>
  );
}

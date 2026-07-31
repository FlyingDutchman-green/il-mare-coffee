'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const milestones = [
  { year: '2016', title: 'The Genesis', desc: 'IL MARE COFFEE started as a humble roastery, dedicated to exploring the finest local beans and artisanal roasting techniques.' },
  { year: '2020', title: 'The Expansion', desc: 'Opened our flagship boutique cafe, introducing a modern architectural space to elevate the premium coffee experience.' },
  { year: '2023', title: 'Artisan Mastery', desc: 'Launched our signature Dalgona and Lungo blends, establishing a new standard for premium boutique coffee.' },
  { year: '2026', title: 'A New Era', desc: 'Expanding our vision while remaining deeply rooted in our commitment to boutique craftsmanship and elegance.' }
];

export default function TimelineSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 bg-coffee-bg">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-serif font-bold text-coffee-dark mb-16"
        >
          Perjalanan IL MARE COFFEE
        </motion.h2>
        
        {/* Timeline Tracker */}
        <div className="flex justify-between items-center relative mb-12 px-2 md:px-12">
          {/* Connecting Line */}
          <div className="absolute left-10 right-10 md:left-20 md:right-20 top-[10px] h-[2px] bg-coffee-dark/10 -z-10"></div>
          
          {milestones.map((m, idx) => (
            <button 
              key={m.year}
              onClick={() => setActive(idx)}
              className={`relative flex flex-col items-center transition-all duration-300 ${active === idx ? 'scale-110' : 'opacity-60 hover:opacity-100'}`}
            >
              <div className={`w-5 h-5 rounded-full mb-4 border-[3px] border-coffee-bg transition-colors duration-300 ${active === idx ? 'bg-coffee-dark' : 'bg-coffee-latte'}`}></div>
              <span className={`font-sans font-bold tracking-wider ${active === idx ? 'text-coffee-dark text-lg' : 'text-coffee-dark/60 text-sm'}`}>{m.year}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Description Block */}
        <div className="min-h-[160px] flex items-center justify-center mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="max-w-2xl mx-auto"
            >
              <h3 className="text-2xl font-serif font-bold text-coffee-dark mb-4">{milestones[active].title}</h3>
              <p className="font-sans text-coffee-dark/80 text-lg leading-relaxed">
                {milestones[active].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

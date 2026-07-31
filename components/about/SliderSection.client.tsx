'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1200&auto=format&fit=crop"
];

export default function SliderSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-coffee-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative aspect-video md:aspect-[21/9] overflow-hidden rounded-[2rem] shadow-2xl bg-coffee-dark">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={images[current]}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 w-full h-full object-cover"
              alt={`Premium Boutique Cafe Image ${current + 1}`}
            />
          </AnimatePresence>
          
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-4">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${current === idx ? 'w-8 bg-coffee-dark' : 'w-2.5 bg-coffee-dark/30 hover:bg-coffee-dark/60'}`}
              aria-label={`Go to slide ${idx + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

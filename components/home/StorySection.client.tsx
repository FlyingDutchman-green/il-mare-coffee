'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function StorySectionClient() {
  return (
    <section className="py-16 md:py-24 bg-coffee-bg overflow-hidden">
      {/* Container utama menggunakan Grid 2 Kolom yang Center secara Vertikal */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        
        {/* KOLOM KIRI: TEKS & CTA */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-start space-y-6 text-left"
        >
          <span className="font-sans text-sm font-bold tracking-widest text-coffee-latte uppercase block">
            Our Story
          </span>

          {/* Judul Utama yang Bold & Tegas */}
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-coffee-dark leading-tight tracking-tight">
            Crafted with Passion,<br />Served with Elegance
          </h2>
          
          {/* Deskripsi Cerita */}
          <div className="space-y-4 text-coffee-dark/80 font-sans leading-relaxed text-base md:text-lg">
            <p>
              IL MARE COFFEE was born from a desire to blend the timeless tradition of 
              boutique cafe culture with a modern, sophisticated atmosphere. Every bean 
              is carefully sourced, and every cup is poured with absolute precision.
            </p>
            <p>
              We believe that coffee is more than just a drink—it is an experience, 
              a moment of pause, and a celebration of true craftsmanship.
            </p>
          </div>
          
          {/* Tombol CTA Penyeimbang Layout */}
          <Link 
            href="/about"
            className="mt-2 px-8 py-3.5 bg-coffee-dark text-coffee-bg font-sans font-semibold rounded-full hover:bg-coffee-latte hover:text-coffee-white transition-all duration-300 shadow-sm hover:shadow-md inline-block"
          >
            Lihat Selengkapnya
          </Link>
        </motion.div>

        {/* KOLOM KANAN: GAMBAR DENGAN SUDUT SELEMBUT POINT COFFEE */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="w-full"
        >
          <div className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-coffee-white border border-coffee-dark/5">
            <img 
              src="/images/pouring-espresso.jpg" 
              alt="Premium cafe interior pouring espresso"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop";
              }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

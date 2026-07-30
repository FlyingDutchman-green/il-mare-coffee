'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import OpenNowBadge, { WeeklyHours } from '@/components/locations/OpenNowBadge.client';

const PEKALONGAN_HOURS: WeeklyHours = {
  monday: { open: '08:00', close: '22:00' },
  tuesday: { open: '08:00', close: '22:00' },
  wednesday: { open: '08:00', close: '22:00' },
  thursday: { open: '08:00', close: '22:00' },
  friday: { open: '08:00', close: '23:00' },
  saturday: { open: '08:00', close: '23:00' },
  sunday: { open: '08:00', close: '22:00' },
};

export default function VisitSectionClient() {
  return (
    <section className="py-24 md:py-32 bg-coffee-bg overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-coffee-dark via-coffee-bg to-coffee-bg"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-coffee-white border border-coffee-dark/10 p-10 md:p-16 rounded-sm shadow-sm flex flex-col items-center text-center"
        >
          <span className="font-sans text-sm font-bold tracking-widest text-coffee-latte uppercase mb-4 block">
            Experience IL MARE
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-coffee-dark mb-8">
            Pekalongan Branch
          </h2>
          
          <div className="mb-8 flex flex-col items-center w-full">
            <OpenNowBadge hours={PEKALONGAN_HOURS} />
            
            <div className="mt-6 font-sans text-sm text-coffee-dark/70 space-y-1.5">
              <p><span className="font-semibold text-coffee-dark">Mon - Thu:</span> 08:00 - 22:00</p>
              <p><span className="font-semibold text-coffee-dark">Fri - Sat:</span> 08:00 - 23:00</p>
              <p><span className="font-semibold text-coffee-dark">Sunday:</span> 08:00 - 22:00</p>
            </div>
          </div>

          <address className="not-italic font-sans text-coffee-dark/80 mb-10 text-lg leading-relaxed max-w-sm mx-auto">
            Jl. Diponegoro No. 45<br />
            Kota Pekalongan, Jawa Tengah 51141<br />
            Indonesia
          </address>

          <Link 
            href="/locations"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-coffee-dark text-coffee-bg font-sans font-semibold rounded-full hover:bg-coffee-latte hover:text-coffee-white transition-all shadow-md"
          >
            Find Our Branch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

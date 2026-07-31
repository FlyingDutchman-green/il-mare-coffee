'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import OpenNowBadge, { WeeklyHours } from '@/components/locations/OpenNowBadge.client';

const weeklyHours: WeeklyHours = {
  monday: { open: '10:00', close: '24:00' },
  tuesday: { open: '10:00', close: '24:00' },
  wednesday: { open: '10:00', close: '24:00' },
  thursday: { open: '10:00', close: '24:00' },
  friday: { open: '10:00', close: '24:00' },
  saturday: { open: '10:00', close: '24:00' },
  sunday: { open: '10:00', close: '24:00' }
};

const days = [
  { id: 'monday', name: 'Senin', hours: '10:00 - 00:00' },
  { id: 'tuesday', name: 'Selasa', hours: '10:00 - 00:00' },
  { id: 'wednesday', name: 'Rabu', hours: '10:00 - 00:00' },
  { id: 'thursday', name: 'Kamis', hours: '10:00 - 00:00' },
  { id: 'friday', name: 'Jumat', hours: '10:00 - 00:00' },
  { id: 'saturday', name: 'Sabtu', hours: '10:00 - 00:00' },
  { id: 'sunday', name: 'Minggu', hours: '10:00 - 00:00' },
];

export default function VisitSectionClient() {
  const [currentDayId, setCurrentDayId] = useState<string>('');

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Jakarta',
      weekday: 'long',
    });
    const dayName = formatter.format(new Date()).toLowerCase();
    setCurrentDayId(dayName);
  }, []);

  return (
    <section className="bg-coffee-bg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-6 py-16">
        
        {/* Left Column: Content & Timetable */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col space-y-8"
        >
          {/* Header */}
          <div>
            <span className="font-sans text-xs font-bold tracking-widest text-coffee-latte uppercase mb-3 block">
              Find Us
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-dark leading-tight">
              Come As You Are
            </h2>
          </div>

          {/* Timetable Grid */}
          <div className="bg-coffee-white border border-coffee-dark/5 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-coffee-dark/5">
              <span className="font-sans text-sm font-bold tracking-widest text-coffee-dark uppercase">Opening Hours</span>
              <OpenNowBadge hours={weeklyHours} />
            </div>
            
            <ul className="flex flex-col space-y-2">
              {days.map((day) => (
                <li 
                  key={day.id} 
                  className={`flex justify-between items-center px-4 py-2 rounded-md font-sans text-sm transition-colors ${
                    day.id === currentDayId 
                      ? 'bg-coffee-dark/5 text-coffee-dark font-bold' 
                      : 'text-coffee-dark/70 font-medium'
                  }`}
                >
                  <span>{day.name}</span>
                  <span>{day.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Meta Blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div>
              <span className="font-sans text-xs font-bold tracking-widest text-coffee-dark/50 uppercase block mb-2">Address</span>
              <p className="font-sans text-sm text-coffee-dark leading-relaxed font-medium mb-3">
                Jl. Raya Podo, Capgawen, Kedungwuni Tim.<br />
                Kec. Kedungwuni, Kabupaten Pekalongan<br />
                Jawa Tengah 51173
              </p>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=IL+MARE+COFFEE+Kedungwuni+Pekalongan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-coffee-latte hover:text-coffee-dark transition-colors"
              >
                Open in Maps
                <svg className="w-3.5 h-3.5 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <div className="flex flex-col space-y-6">
              <div>
                <span className="font-sans text-xs font-bold tracking-widest text-coffee-dark/50 uppercase block mb-2">Phone</span>
                <p className="font-sans text-sm text-coffee-dark font-medium">+62 895-3158-8485</p>
              </div>
              <div>
                <span className="font-sans text-xs font-bold tracking-widest text-coffee-dark/50 uppercase block mb-2">Email</span>
                <p className="font-sans text-sm text-coffee-dark font-medium">hello@ilmarecoffee.id</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Map Hub */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full aspect-square rounded-3xl overflow-hidden shadow-sm border border-neutral-200/60 bg-coffee-dark/5 relative"
        >
          <iframe 
            src="https://maps.google.com/maps?q=IL+MARE+COFFEE+Kedungwuni+Pekalongan&t=&z=16&ie=UTF8&iwloc=&output=embed" 
            className="w-full h-full border-0" 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="IL MARE COFFEE Location Map"
          ></iframe>
        </motion.div>

      </div>
    </section>
  );
}

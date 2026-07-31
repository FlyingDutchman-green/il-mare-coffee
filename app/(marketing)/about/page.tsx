import React from 'react';
import Link from 'next/link';
import TimelineSection from '@/components/about/TimelineSection.client';
import SliderSection from '@/components/about/SliderSection.client';

export const metadata = {
  title: 'About Us | IL MARE COFFEE',
  description: 'Discover the journey, craftsmanship, and boutique elegance behind IL MARE COFFEE.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-coffee-bg pt-24 md:pt-32 pb-16">
      
      {/* 1. Brand Timeline Section */}
      <TimelineSection />

      {/* 2. Boutique Visual Slider Section */}
      <SliderSection />

      {/* 3. Location Finder Hub */}
      <section className="py-24 bg-coffee-white border-y border-coffee-dark/5">
        <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-coffee-dark mb-6 leading-tight">
            Temukan IL MARE COFFEE<br />di Sekitarmu
          </h2>
          <p className="font-sans text-coffee-dark/70 text-base md:text-lg mb-10 leading-relaxed">
            Kunjungi boutique cafe kami dan rasakan langsung pengalaman minum kopi premium yang disajikan dengan penuh elegan dan keramahan.
          </p>
          <Link
            href="/locations"
            className="px-8 py-3.5 border border-coffee-dark rounded-md font-sans text-xs font-semibold uppercase tracking-wider text-coffee-dark hover:bg-coffee-dark hover:text-coffee-bg transition-all duration-300 shadow-sm"
          >
            Lihat Semua Lokasi
          </Link>
        </div>
      </section>

    </div>
  );
}

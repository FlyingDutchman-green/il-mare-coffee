import React from 'react';
import Link from 'next/link';

export interface PromoData {
  id: string;
  title: string;
  description: string;
  image: string;
  ctaText: string;
  validUntil: string;
}

interface PromoBannerProps {
  promo: PromoData;
}

export default function PromoBanner({ promo }: PromoBannerProps) {
  return (
    <div className="flex flex-col md:flex-row bg-coffee-white border border-coffee-dark/10 rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="w-full md:w-2/5 aspect-[4/3] md:aspect-auto relative bg-coffee-dark overflow-hidden border-b md:border-b-0 md:border-r border-coffee-dark/10">
        <img 
          src={promo.image} 
          alt={promo.title} 
          className="object-cover w-full h-full opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-700" 
          loading="lazy" 
        />
      </div>
      <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
        <span className="font-sans text-xs font-bold tracking-widest text-coffee-latte uppercase mb-3 block">
          Valid until {promo.validUntil}
        </span>
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-coffee-dark mb-4 leading-tight">
          {promo.title}
        </h3>
        <p className="font-sans text-coffee-dark/70 mb-8 leading-relaxed">
          {promo.description}
        </p>
        <Link 
          href="/menu"
          className="inline-flex items-center justify-center px-6 py-2.5 border-2 border-coffee-dark text-coffee-dark font-sans font-semibold rounded-full hover:bg-coffee-dark hover:text-coffee-bg transition-colors self-start"
        >
          {promo.ctaText}
        </Link>
      </div>
    </div>
  );
}

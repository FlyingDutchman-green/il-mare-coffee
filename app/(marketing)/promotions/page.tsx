import React from 'react';
import PromoBanner, { PromoData } from '@/components/promotions/PromoBanner';

const PROMOTIONS: PromoData[] = [
  {
    id: '1',
    title: 'Grand Opening Special: 20% OFF Regular Brews',
    description: 'Celebrate our new Pekalongan branch opening with a flat 20% discount on all regular brewed coffees. Perfect for your morning kickstart.',
    image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=800&auto=format&fit=crop',
    ctaText: 'View Eligible Drinks',
    validUntil: 'Aug 31, 2026',
  },
  {
    id: '2',
    title: 'Weekend Bundle Deal',
    description: 'Grab any Special Coffee along with a slice of our signature Chocolate Tiramisu for a special bundled price every weekend.',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop',
    ctaText: 'Claim Offer',
    validUntil: 'Sep 15, 2026',
  }
];

export default function PromotionsPage() {
  return (
    <div className="min-h-screen bg-coffee-bg pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-coffee-dark mb-6">Current Promotions</h1>
          <p className="font-sans text-coffee-dark/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Enjoy exclusive deals and seasonal offers on our premium coffee selections. Treat yourself today.
          </p>
        </div>

        <div className="flex flex-col gap-8 md:gap-12">
          {PROMOTIONS.map((promo) => (
            <PromoBanner key={promo.id} promo={promo} />
          ))}
        </div>
      </div>
    </div>
  );
}

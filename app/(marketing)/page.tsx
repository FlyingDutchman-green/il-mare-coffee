import React from 'react';
import HeroClient from '@/components/home/Hero.client';
import StorySectionClient from '@/components/home/StorySection.client';
import SignatureBlendsClient from '@/components/home/SignatureBlends.client';
import VisitSectionClient from '@/components/home/VisitSection.client';

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-coffee-dark flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop")' }}
        >
          <div className="absolute inset-0 bg-coffee-dark/50 mix-blend-multiply" />
        </div>
        
        <HeroClient />
      </section>

      {/* Brand Philosophy Section */}
      <StorySectionClient />

      {/* Signature Blends Preview */}
      <SignatureBlendsClient />

      {/* Quick Visit & Hours Section */}
      <VisitSectionClient />
    </div>
  );
}

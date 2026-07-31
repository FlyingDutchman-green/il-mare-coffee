import React from 'react';
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

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-coffee-bg pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-coffee-dark mb-6">Our Locations</h1>
          <p className="font-sans text-coffee-dark/70 text-lg max-w-xl mx-auto">
            Find an IL MARE COFFEE boutique near you and experience our craft firsthand.
          </p>
        </div>

        <div className="bg-coffee-white border border-coffee-dark/10 rounded-sm overflow-hidden shadow-sm flex flex-col md:flex-row">
          {/* Map Visual Representation */}
          <div className="w-full md:w-1/2 bg-coffee-dark/5 relative min-h-[350px] border-b md:border-b-0 md:border-r border-coffee-dark/10">
            <iframe 
              src="https://maps.google.com/maps?q=IL+MARE+COFFEE+Kedungwuni+Pekalongan&t=&z=16&ie=UTF8&iwloc=&output=embed" 
              className="absolute inset-0 w-full h-full border-0" 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="IL MARE COFFEE Kedungwuni Location"
            ></iframe>
          </div>
          
          {/* Location Details */}
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <h2 className="font-serif text-2xl font-bold text-coffee-dark">IL MARE COFFEE</h2>
              <OpenNowBadge hours={PEKALONGAN_HOURS} />
            </div>
            
            <h3 className="font-sans font-semibold text-coffee-dark mb-3">Kedungwuni Branch</h3>
            
            <address className="not-italic font-sans text-coffee-dark/70 mb-10 leading-relaxed">
              Jl. Raya Podo, Capgawen, Kedungwuni Tim.<br />
              Kec. Kedungwuni, Kabupaten Pekalongan<br />
              Jawa Tengah 51173<br />
              Indonesia
            </address>

            <a 
              href="https://www.google.com/maps/search/?api=1&query=IL+MARE+COFFEE+Kedungwuni+Pekalongan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-coffee-dark text-coffee-bg font-sans font-semibold rounded-full hover:bg-coffee-latte hover:text-coffee-white transition-all shadow-md w-full sm:w-auto self-start"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

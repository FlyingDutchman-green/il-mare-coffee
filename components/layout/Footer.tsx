"use client";
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-coffee-dark text-coffee-bg py-16 border-t border-coffee-dark/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col">
            <Link href="/" className="flex items-center space-x-3 mb-4 group">
              <img 
                src="/logos.svg" 
                alt="IL MARE Logo Mark" 
                className="h-10 w-auto object-contain"
              />
              <div className="flex flex-col items-center leading-none text-white">
                <span className="text-xl font-black tracking-wide font-sans uppercase">IL MARE</span>
                <div className="flex items-center justify-center w-full mt-1 text-[9px] font-bold tracking-[0.25em] uppercase">
                  <div className="h-[1px] w-2.5 bg-white/40"></div>
                  <span className="mx-1.5 ml-2.5">COFFEE</span>
                  <div className="h-[1px] w-2.5 bg-white/40"></div>
                </div>
              </div>
            </Link>
            <p className="font-sans text-coffee-bg/70 mb-4 leading-relaxed">
              Serving the richest, most meticulously crafted coffee in the city. Experience true boutique coffee culture.
            </p>
            <div className="font-sans text-xs text-coffee-bg/50 mt-4 leading-relaxed">
              <p>
                <strong>Kedungwuni Branch</strong><br />
                Jl. Raya Podo, Capgawen, Kedungwuni Tim.<br />
                Kec. Kedungwuni, Kabupaten Pekalongan<br />
                Jawa Tengah 51173
              </p>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="flex flex-col">
            <h4 className="font-sans font-bold text-coffee-white mb-6 uppercase tracking-wider text-sm">Explore</h4>
            <ul className="space-y-4 font-sans text-coffee-bg/70">
              <li><Link href="/menu" className="hover:text-coffee-white transition-colors">Menu Catalog</Link></li>
              <li><Link href="/promotions" className="hover:text-coffee-white transition-colors">Promotions</Link></li>
              <li><Link href="/locations" className="hover:text-coffee-white transition-colors">Locations</Link></li>
              <li><Link href="/about" className="hover:text-coffee-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col">
            <h4 className="font-sans font-bold text-coffee-white mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <address className="not-italic font-sans text-coffee-bg/70 space-y-4 flex flex-col">
              <div className="flex flex-col space-y-1">
                <a href="mailto:hello@ilmarecoffee.id" className="hover:text-coffee-white transition-colors">hello@ilmarecoffee.id</a>
                <a href="tel:+6289531588485" className="hover:text-coffee-white transition-colors">+62 895-3158-8485</a>
              </div>
              <div className="flex items-center space-x-4 pt-2 text-coffee-bg/50">
                <a href="https://wa.me/6289531588485" target="_blank" rel="noopener noreferrer" className="hover:text-coffee-white transition-colors" aria-label="WhatsApp">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 transition-colors duration-200"><path d="M12.004 2c-5.517 0-9.996 4.479-9.996 9.995 0 1.763.459 3.479 1.332 4.992L2.066 22l5.122-1.343a9.932 9.932 0 004.816 1.238h.005c5.517 0 9.996-4.479 9.996-9.995C22.005 6.479 17.521 2 12.004 2zm5.221 14.241c-.287.808-1.42 1.484-1.956 1.554-.537.07-1.21.366-3.489-.572-2.73-1.124-4.508-3.906-4.644-4.088-.136-.182-1.109-1.474-1.109-2.813 0-1.339.702-1.996.95-2.259.248-.262.537-.329.715-.329.179 0 .358.002.513.01.163.008.384-.062.602.464.225.542.767 1.868.832 2.001.066.132.109.286.022.46-.087.174-.131.286-.262.438-.131.152-.275.339-.393.456-.131.131-.269.273-.116.537.153.264.681 1.12 1.458 1.81.996.885 1.832 1.158 2.094 1.29.262.132.415.11.569-.066.153-.175.656-.765.83-1.026.175-.262.35-.219.59-.131.24.088 1.529.721 1.791.852.262.132.437.197.502.307.066.11.066.634-.22 1.442z"/></svg>
                </a>
                <a href="#" className="hover:text-coffee-white transition-colors" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 transition-colors duration-200"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="#" className="hover:text-coffee-white transition-colors" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 transition-colors duration-200"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                </a>
                <a href="#" className="hover:text-coffee-white transition-colors" aria-label="TikTok">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 transition-colors duration-200"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.69 4.14 1.25 1.25 2.94 1.88 4.67 2v3.91c-1.78-.04-3.5-.66-4.92-1.76v7.35c.1 4.76-3.8 8.95-8.58 8.97-4.96.11-9.14-3.9-9.13-8.86C.1 12.65 4.3 8.5 9.25 8.65c.03 1.4.04 2.79.04 4.19-2.22-.51-4.57.51-5.46 2.6-.96 2.12-.13 4.7 1.94 5.76 2.06 1.09 4.78.36 5.95-1.67.31-.56.46-1.19.45-1.83V0z"/></svg>
                </a>
              </div>
            </address>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col">
            <h4 className="font-sans font-bold text-coffee-white mb-6 uppercase tracking-wider text-sm">Newsletter</h4>
            <p className="font-sans text-coffee-bg/70 mb-5 leading-relaxed text-sm">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter email address" 
                className="w-full px-4 py-3 bg-coffee-white/5 border border-coffee-white/20 rounded-sm text-coffee-white placeholder:text-coffee-white/40 focus:outline-none focus:border-coffee-latte font-sans text-sm transition-colors"
                required
              />
              <button 
                type="submit" 
                className="w-full px-4 py-3 bg-coffee-latte text-coffee-white font-sans font-semibold rounded-sm hover:bg-coffee-white hover:text-coffee-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>
        
        {/* Footer Bottom Strip */}
        <div className="border-t border-coffee-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-sm text-coffee-bg/50">
            &copy; {new Date().getFullYear()} IL MARE COFFEE. All rights reserved.
          </p>
          <div className="flex space-x-6 font-sans text-sm text-coffee-bg/50">
            <Link href="#" className="hover:text-coffee-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-coffee-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

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
            <Link href="/" className="font-serif text-2xl font-bold tracking-wider text-coffee-white mb-6 block">
              IL MARE COFFEE
            </Link>
            <p className="font-sans text-coffee-bg/70 mb-8 leading-relaxed">
              Serving the richest, most meticulously crafted coffee in the city. Experience true boutique coffee culture.
            </p>
            <div className="flex items-center space-x-5">
              <a href="#" className="text-coffee-bg/70 hover:text-coffee-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="text-coffee-bg/70 hover:text-coffee-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
              </a>
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
            <address className="not-italic font-sans text-coffee-bg/70 space-y-4">
              <p>
                <strong>Pekalongan Branch</strong><br />
                Jl. Diponegoro No. 45<br />
                Kota Pekalongan 51141
              </p>
              <p className="flex flex-col space-y-1">
                <a href="mailto:hello@ilmarecoffee.id" className="hover:text-coffee-white transition-colors">hello@ilmarecoffee.id</a>
                <a href="tel:+6281234567890" className="hover:text-coffee-white transition-colors">+62 812-3456-7890</a>
              </p>
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

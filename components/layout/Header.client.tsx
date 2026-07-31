'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Menu', href: '/menu' },
  { name: 'Promotions', href: '/promotions' },
  { name: 'Locations', href: '/locations' },
  { name: 'About Us', href: '/about' },
];

export default function HeaderClient() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === '/';
  const shouldBeSolid = !isHomePage || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 64);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        shouldBeSolid ? 'bg-coffee-bg shadow-sm text-coffee-dark' : 'bg-transparent text-coffee-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-3 group h-full">
              {!logoError && (
                <img 
                  src="/logo.svg" 
                  alt="IL MARE Logo Mark" 
                  className="h-8 w-auto object-contain transition-opacity duration-300"
                  onError={() => setLogoError(true)}
                />
              )}
              <div className="flex flex-col items-center text-[#4A2E2B] leading-none">
                <span className="text-xl font-black tracking-wide font-sans uppercase">IL MARE</span>
                <div className="flex items-center justify-center w-full mt-1 text-[8px] font-bold tracking-[0.25em] uppercase">
                  <div className="h-[1px] w-3 bg-[#4A2E2B]"></div>
                  <span className="mx-1.5 ml-2.5">COFFEE</span>
                  <div className="h-[1px] w-3 bg-[#4A2E2B]"></div>
                </div>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-sans text-xs font-semibold tracking-wide hover:text-coffee-latte transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/locations"
              className={`hidden md:inline-flex px-4 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider transition-all border ${
                shouldBeSolid
                  ? 'border-coffee-dark hover:bg-coffee-dark hover:text-coffee-bg'
                  : 'border-coffee-white hover:bg-coffee-white hover:text-coffee-dark'
              }`}
            >
              Visit Us
            </Link>
            <button
              className="md:hidden p-2 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-coffee-bg text-coffee-dark border-t border-coffee-dark/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 shadow-md">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-4 font-sans text-base font-medium border-b border-coffee-dark/5 hover:bg-coffee-dark/5"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  href="/locations"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center px-6 py-3 rounded-full font-sans text-base font-semibold bg-coffee-dark text-coffee-bg hover:bg-coffee-latte transition-colors"
                >
                  Visit Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

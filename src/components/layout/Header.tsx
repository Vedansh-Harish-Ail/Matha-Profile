'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, MessageCircle, MapPin, Menu, X, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      {/* Top bar for contact info */}
      <div className="bg-[#06112C] py-2 text-white">
        <div className="container mx-auto flex flex-wrap justify-between px-4 text-xs md:text-sm">
          <div className="flex space-x-4">
            <a href="tel:+918080673647" className="flex items-center space-x-1 hover:text-secondary-light">
              <Phone size={14} />
              <span>+91 80806 73647</span>
            </a>
            <a href="https://wa.me/918080673647" className="flex items-center space-x-1 hover:text-secondary-light">
              <MessageCircle size={14} />
              <span>WhatsApp Enquiry</span>
            </a>
          </div>
          <div className="hidden items-center space-x-1 md:flex">
            <MapPin size={14} />
            <span>Kopar Khairane, Navi Mumbai</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold text-[#06112C] md:text-2xl">
          MATA REFRIGERATION
        </Link>

        {/* Desktop Nav */}
        <div className="hidden space-x-8 font-medium lg:flex">
          {navLinks.map((link) => {
            const isActive = link.href === '/'
              ? pathname === '/'
              : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                prefetch={false}
                className={`relative transition-all duration-200 active:scale-90 py-1 ${isActive
                    ? 'text-primary font-bold'
                    : 'text-gray-600 hover:text-primary'
                  }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeNavUnderline"
                    className="absolute -bottom-1 left-0 h-0.5 w-full bg-secondary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center space-x-4">
          <Link
            href="/admin"
            aria-label="Admin login"
            title="Admin login"
            className="hidden h-10 w-10 items-center justify-center rounded-md border border-primary text-primary transition-colors hover:bg-primary hover:text-white md:flex"
          >
            <ShieldCheck size={20} />
          </Link>

          <Link
            href="/contact"
            className="hidden rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent-dark md:block transition-transform active:scale-95"
          >
            Request Quote
          </Link>

          {/* Burger Menu Button */}
          <button
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#06112C] p-2 text-white lg:hidden z-[101] shadow-xl"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - SIMPLE CSS VERSION */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-white overflow-y-auto lg:hidden">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <span className="text-xl font-bold text-primary">MENU</span>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-3 bg-gray-100 rounded-full text-gray-600"
            >
              <X size={28} />
            </button>
          </div>
          
          {/* Navigation Links */}
          <nav className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={false}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-2xl font-bold py-6 border-b border-gray-50 flex justify-between items-center ${isActive ? 'text-primary' : 'text-gray-800'}`}
                >
                  {link.name}
                  {isActive && <div className="h-3 w-3 rounded-full bg-primary" />}
                </Link>
              );
            })}
            
            {/* CTA Button */}
            <Link 
              href="/contact" 
              onClick={() => setIsMenuOpen(false)}
              className="mt-6 w-full bg-accent text-white text-center py-5 rounded-xl text-xl font-bold shadow-lg shadow-accent/20"
            >
              Request Quote
            </Link>

            <Link
              href="/admin"
              onClick={() => setIsMenuOpen(false)}
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-primary py-5 text-xl font-bold text-primary"
            >
              <ShieldCheck size={24} />
              Admin Login
            </Link>

            {/* Quick Contact Info */}
            <div className="pt-8 mt-4 border-t border-gray-100 space-y-6">
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Direct Contact</p>
              <a href="tel:+918080673647" className="flex items-center gap-4 text-gray-700 font-bold text-lg">
                <div className="bg-primary/10 p-3 rounded-full text-primary"><Phone size={24} /></div>
                +91 80806 73647
              </a>
              <a href="https://wa.me/918080673647" className="flex items-center gap-4 text-gray-700 font-bold text-lg">
                <div className="bg-green-50 p-3 rounded-full text-green-600"><MessageCircle size={24} /></div>
                WhatsApp Enquiry
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}


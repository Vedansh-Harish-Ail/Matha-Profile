'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, MessageCircle, MapPin, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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
      <div className="bg-primary py-2 text-white">
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
        <Link href="/" className="text-xl font-bold text-primary md:text-2xl">
          MATA REFRIGERATION
        </Link>

        <div className="hidden space-x-8 font-medium lg:flex">
          {navLinks.map((link) => {
            const isActive = link.href === '/'
              ? pathname === '/'
              : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
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
            href="/contact"
            className="hidden rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent-dark md:block transition-transform active:scale-95"
          >
            Request Quote
          </Link>

          {/* Burger Menu Button */}
          <button
            className="p-2 text-gray-600 lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 top-[104px] z-30 bg-black/50 lg:hidden"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-[104px] bottom-0 z-40 w-[80%] max-w-sm bg-white shadow-2xl lg:hidden"
            >
              <div className="flex h-full flex-col p-6 overflow-y-auto">
                <div className="flex flex-col space-y-6">
                  {navLinks.map((link) => {
                    const isActive = link.href === '/'
                      ? pathname === '/'
                      : pathname.startsWith(link.href);

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`flex items-center justify-between px-5 py-4 text-lg font-bold transition-all rounded-xl ${isActive
                            ? 'text-primary bg-primary/10'
                            : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                          }`}
                      >
                        <span>{link.name}</span>
                        {isActive && (
                          <motion.div
                            layoutId="activeDot"
                            className="h-2 w-2 rounded-full bg-primary"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </Link>
                    );
                  })}
                  <Link
                    href="/contact"
                    className="mt-4 rounded-md bg-accent py-4 text-center text-lg font-bold text-white shadow-lg active:scale-95 transition-transform"
                  >
                    Request Quote
                  </Link>
                </div>

                <div className="mt-auto pt-8 border-t border-gray-100">
                  <p className="text-sm text-gray-500 mb-4 font-medium">Quick Contact</p>
                  <div className="space-y-4">
                    <a href="tel:+918080673647" className="flex items-center space-x-3 text-gray-700">
                      <div className="bg-blue-50 p-2 rounded-full text-blue-600">
                        <Phone size={18} />
                      </div>
                      <span>+91 80806 73647</span>
                    </a>
                    <a href="https://wa.me/918080673647" className="flex items-center space-x-3 text-gray-700">
                      <div className="bg-green-50 p-2 rounded-full text-green-600">
                        <MessageCircle size={18} />
                      </div>
                      <span>WhatsApp Enquiry</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

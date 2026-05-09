'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About Us', href: '/about' },
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
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.href}
                href={link.href} 
                className={`relative transition-all duration-200 active:scale-90 py-1 ${
                  isActive 
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
        </div>
      </nav>
    </header>
  );
}

import Link from 'next/link';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-10 md:py-16 pb-28 md:pb-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 md:gap-8">
          
          {/* Company Info - Full width on mobile, 1st col on desktop */}
          <div className="col-span-2 lg:col-span-1 text-center md:text-left">
            <h3 className="mb-4 text-xl font-bold text-white">Mata Refrigeration</h3>
            <p className="mb-6 text-sm leading-relaxed mx-auto md:mx-0 max-w-sm lg:max-w-none">
              Trusted supplier of refrigerant gases, compressor oils, copper pipes, and HVAC accessories in Navi Mumbai.
            </p>
            <div className="flex flex-col items-center md:items-start space-y-2 text-sm">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-3 text-center md:text-left">
                <MapPin size={18} className="text-secondary shrink-0 mt-1" />
                <span className="max-w-[250px] md:max-w-none">
                  CHANNEL CLASSIC, HSG Society<br />
                  Shop No -1, Plot No-91, Sector 1<br />
                  Kopar Khairane, Navi Mumbai 400709
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links - Left on mobile, 2nd col on desktop */}
          <div className="col-span-1 lg:col-span-1">
            <h4 className="mb-4 font-semibold text-white uppercase tracking-wider text-sm md:text-base">Quick Links</h4>
            <ul className="space-y-3 md:space-y-2 text-sm">
              <li><Link href="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link href="/products" className="hover:text-secondary transition-colors">All Products</Link></li>
              <li><Link href="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">Request a Quote</Link></li>
            </ul>
          </div>

          {/* Products - Right on mobile, 3rd col on desktop */}
          <div className="col-span-1 lg:col-span-1">
            <h4 className="mb-4 font-semibold text-white uppercase tracking-wider text-sm md:text-base">Top Categories</h4>
            <ul className="space-y-3 md:space-y-2 text-sm">
              <li><Link href="/products?category=refrigerant-gas" className="hover:text-secondary transition-colors">Refrigerant Gas</Link></li>
              <li><Link href="/products?category=compressor-oil" className="hover:text-secondary transition-colors">Compressor Oils</Link></li>
              <li><Link href="/products?category=copper-pipes" className="hover:text-secondary transition-colors">Copper Pipes</Link></li>
              <li><Link href="/products?category=brazing-rods" className="hover:text-secondary transition-colors">Brazing Rods</Link></li>
              <li><Link href="/products?category=accessories" className="hover:text-secondary transition-colors">Accessories</Link></li>
            </ul>
          </div>

          {/* Contact Details - Bottom grid on mobile, 4th col on desktop */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="mb-6 lg:mb-4 font-semibold text-white uppercase tracking-wider text-center md:text-left text-sm md:text-base">Contact Us</h4>
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-4">
              <a href="tel:+918080673647" className="flex flex-col lg:flex-row items-center lg:items-start space-y-2 lg:space-y-0 lg:space-x-3 hover:text-secondary transition-colors group">
                <Phone size={20} className="text-secondary shrink-0 lg:w-[18px] lg:h-[18px]" />
                <span className="text-[10px] sm:text-xs lg:text-sm text-center lg:text-left">080806 73647</span>
              </a>
              <a href="https://wa.me/918080673647" className="flex flex-col lg:flex-row items-center lg:items-start space-y-2 lg:space-y-0 lg:space-x-3 hover:text-secondary transition-colors group">
                <MessageCircle size={20} className="text-secondary shrink-0 lg:w-[18px] lg:h-[18px]" />
                <span className="text-[10px] sm:text-xs lg:text-sm text-center lg:text-left">WhatsApp</span>
              </a>
              <a href="mailto:info@matarefrigeration.com" className="flex flex-col lg:flex-row items-center lg:items-start space-y-2 lg:space-y-0 lg:space-x-3 hover:text-secondary transition-colors group">
                <Mail size={20} className="text-secondary shrink-0 lg:w-[18px] lg:h-[18px]" />
                <span className="text-[10px] sm:text-xs lg:text-sm text-center lg:text-left truncate max-w-full">Email Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-xs md:text-sm text-gray-400">
            © {new Date().getFullYear()} Mata Refrigeration. All rights reserved.
          </p>
          <p className="mt-2 text-[10px] md:text-xs font-medium uppercase tracking-widest text-secondary/80">
            GST Registered Business | Bulk Supply Specialist
          </p>
        </div>
      </div>
    </footer>
  );
}

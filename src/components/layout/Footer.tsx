import Link from 'next/link';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">Mata Refrigeration</h3>
            <p className="mb-4 text-sm leading-relaxed">
              Trusted supplier of refrigerant gases, compressor oils, copper pipes, and HVAC accessories in Navi Mumbai. Serving professionals with quality and reliability.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin size={18} className="mt-1 text-secondary" />
                <span>Shop no 1, Channel Classic, Plot No-91, Sector 4, Kopar Khairane, Navi Mumbai - 400709</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-secondary">Home</Link></li>
              <li><Link href="/products" className="hover:text-secondary">All Products</Link></li>
              <li><Link href="/about" className="hover:text-secondary">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-secondary">Contact Us</Link></li>
              <li><Link href="/quote" className="hover:text-secondary">Request a Quote</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-4 font-semibold text-white uppercase tracking-wider">Top Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products?category=refrigerant-gas" className="hover:text-secondary">Refrigerant Gas</Link></li>
              <li><Link href="/products?category=compressor-oil" className="hover:text-secondary">Compressor Oils</Link></li>
              <li><Link href="/products?category=copper-pipes" className="hover:text-secondary">Copper Pipes</Link></li>
              <li><Link href="/products?category=brazing-rods" className="hover:text-secondary">Brazing Rods</Link></li>
              <li><Link href="/products?category=accessories" className="hover:text-secondary">Accessories</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="mb-4 font-semibold text-white uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-secondary" />
                <a href="tel:+918080673647" className="hover:text-secondary">+91 80806 73647</a>
              </li>
              <li className="flex items-center space-x-3">
                <MessageCircle size={18} className="text-secondary" />
                <a href="https://wa.me/918080673647" className="hover:text-secondary">WhatsApp Support</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-secondary" />
                <a href="mailto:info@matarefrigeration.com" className="hover:text-secondary">info@matarefrigeration.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-xs">
          <p>© {new Date().getFullYear()} Mata Refrigeration. All rights reserved.</p>
          <p className="mt-2">GST Registered Business | Bulk Supply Specialist</p>
        </div>
      </div>
    </footer>
  );
}

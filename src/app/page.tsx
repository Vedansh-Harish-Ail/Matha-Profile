import { ShieldCheck, Truck, MessageCircle, ArrowRight, Star, MapPin } from 'lucide-react';
import Hero from '@/components/sections/Hero';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      
      {/* Trust Strip */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#030816] via-[#06112C] to-[#030816] py-8 text-white border-b border-white/5">
        {/* Decorative subtle grid background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            
            {/* Item 1 - Google Rating */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.01] border border-white/[0.03] hover:bg-white/[0.03] hover:border-white/[0.08] hover:shadow-lg hover:shadow-yellow-500/5 transition-all duration-300 group">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-500 group-hover:scale-110 transition-transform">
                <Star size={24} className="fill-yellow-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-extrabold tracking-tight text-white leading-tight">5.0 Google Rating</span>
                <span className="text-[10px] uppercase tracking-widest text-[#A0B4CC] mt-0.5">Verified Reviews</span>
              </div>
            </div>

            {/* Item 2 - GST Verified */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.01] border border-white/[0.03] hover:bg-white/[0.03] hover:border-white/[0.08] hover:shadow-lg hover:shadow-secondary-light/5 transition-all duration-300 group">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary-light/10 text-secondary-light group-hover:scale-110 transition-transform">
                <ShieldCheck size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-extrabold tracking-tight text-white leading-tight">GST Verified</span>
                <span className="text-[10px] uppercase tracking-widest text-[#A0B4CC] mt-0.5">Tax Compliant</span>
              </div>
            </div>

            {/* Item 3 - Bulk Supply */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.01] border border-white/[0.03] hover:bg-white/[0.03] hover:border-white/[0.08] hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 group">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:scale-110 transition-transform">
                <Truck size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-extrabold tracking-tight text-white leading-tight">Bulk Support</span>
                <span className="text-[10px] uppercase tracking-widest text-[#A0B4CC] mt-0.5">Wholesale Supply</span>
              </div>
            </div>

            {/* Item 4 - Local Dealer */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.01] border border-white/[0.03] hover:bg-white/[0.03] hover:border-white/[0.08] hover:shadow-lg hover:shadow-secondary-light/5 transition-all duration-300 group">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary-light/10 text-secondary-light group-hover:scale-110 transition-transform">
                <MapPin size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-extrabold tracking-tight text-white leading-tight">Navi Mumbai</span>
                <span className="text-[10px] uppercase tracking-widest text-[#A0B4CC] mt-0.5">Local Distribution</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-primary md:text-4xl">Our Products</h2>
            <p className="mt-4 text-gray-600">Premium industrial refrigeration and HVAC supplies</p>
          </div>
          
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-8">
            {[
              {
                title: "Refrigerant Gas",
                products: ["MPCL R134A", "Freon R22", "Floron R410A", "MPCL R404A"],
                link: "/products"
              },
              {
                title: "Compressor Oil",
                products: ["Subros R134a Oil", "Fluoro R134a Oil"],
                link: "/products"
              },
              {
                title: "Butane Gas Cartridge",
                products: ["MPCL Blue Flame Cartridge"],
                link: "/products"
              },
              {
                title: "AC Copper Pipe",
                products: ["Air Conditioner Copper Pipe"],
                link: "/products"
              },
              {
                title: "Brazing Rod",
                products: ["Copper Brazing Rods"],
                link: "/products"
              },
              {
                title: "Refrigeration Accessories",
                products: ["Industrial Valves", "HVAC Fittings"],
                link: "/products"
              }
            ].map((cat) => (
              <div key={cat.title} className="group relative overflow-hidden rounded-xl border border-gray-100 bg-gray-50/50 p-3 md:p-8 transition-all hover:bg-white hover:shadow-xl hover:border-secondary/20 flex flex-col items-center text-center md:items-start md:text-left">
                <h3 className="text-[10px] sm:text-xs md:text-xl font-bold text-primary mb-2 md:mb-4 leading-tight">{cat.title}</h3>
                <ul className="hidden md:block space-y-2 mb-6">
                  {cat.products.map(p => (
                    <li key={p} className="text-sm text-gray-600 flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary/40 mr-2"></span>
                      {p}
                    </li>
                  ))}
                </ul>
                <Link href={cat.link} className="inline-flex items-center text-[8px] sm:text-[10px] md:text-sm font-semibold text-secondary group-hover:underline">
                  <span className="hidden md:inline">View All Products</span>
                  <span className="md:hidden">View</span>
                  <ArrowRight size={12} className="ml-1 md:w-4 md:h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/products">
              <button className="rounded-full bg-primary px-8 py-3 font-bold text-white transition-all hover:bg-primary-dark shadow-md active:scale-95 text-sm md:text-base">
                + View All Products
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-16 text-3xl font-bold text-primary md:text-4xl">Why Choose Mata Refrigeration?</h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div>
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                <ShieldCheck size={32} />
              </div>
              <h3 className="mb-4 text-xl font-bold">Genuine Products</h3>
              <p className="text-gray-600">We supply only original and verified refrigeration gases and components from trusted brands.</p>
            </div>
            <div>
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                <Truck size={32} />
              </div>
              <h3 className="mb-4 text-xl font-bold">Fast Delivery</h3>
              <p className="text-gray-600">Quick dispatch and delivery services across Navi Mumbai and surrounding regions in Maharashtra.</p>
            </div>
            <div>
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                <MessageCircle size={32} />
              </div>
              <h3 className="mb-4 text-xl font-bold">Expert Support</h3>
              <p className="text-gray-600">Our team provides technical guidance to help you choose the right gas or part for your system.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Brand Banner Section */}
      <section className="py-12 bg-white w-full">
        <div className="container mx-auto px-4">
          <div className="relative w-full rounded-3xl overflow-hidden bg-[#06112C] py-10 px-6 md:px-12 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 shadow-2xl border border-secondary/20">
            {/* Background Sparkles/Stars Decoration */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />
            
            {/* Gold Seal Logo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/images/mata_logo_gold.svg" 
              alt="Mata Refrigeration Gold Logo" 
              className="relative z-10 h-32 w-32 md:h-48 md:w-48 object-contain drop-shadow-[0_8px_24px_rgba(255,167,81,0.3)] shrink-0 animate-pulse-slow"
              style={{ animationDuration: '4s' }}
            />
            
            {/* Text and Tagline */}
            <div className="relative z-10 text-center md:text-left flex flex-col justify-center">
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-none text-white uppercase font-sans">
                Mata<br className="md:hidden" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE259] to-[#FFA751]">Refrigeration</span>
              </h2>
              
              {/* Tagline with arrows */}
              <div className="mt-4 flex items-center justify-center md:justify-start gap-2 text-xs sm:text-sm md:text-lg font-bold text-gray-300 tracking-wider">
                <span className="text-accent text-lg">→</span>
                <span>Your Trusted Partner for Refrigeration &amp; Cooling Solutions</span>
                <span className="text-accent text-lg">←</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary py-20 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="mb-6 text-4xl md:text-5xl font-bold uppercase tracking-tight">Ready to place an order?</h2>
          <p className="mb-12 text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Contact us today for specialized industrial pricing, technical consultation, and bulk availability across Maharashtra.
          </p>
          <div className="flex flex-col justify-center items-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
            <a 
              href="tel:+918080673647" 
              className="w-full sm:w-auto rounded-full bg-white px-10 py-4 font-bold text-primary hover:bg-gray-100 transition-all active:scale-95 shadow-lg"
            >
              Call Now
            </a>
            <a 
              href="https://wa.me/918080673647?text=Hi%2C%20I%20saw%20your%20website%20and%20I%27m%20interested%20in%20your%20industrial%20refrigeration%20products.%20Can%20you%20please%20provide%20more%20details%3F" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto rounded-full bg-[#25D366] px-10 py-4 font-bold text-white hover:bg-[#1DA851] transition-all active:scale-95 shadow-lg flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Enquiry WhatsApp
            </a>
          </div>
        </div>
        {/* Subtle background decoration */}
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-secondary/10 to-transparent pointer-events-none" />
        <div className="absolute left-0 bottom-0 h-full w-1/4 bg-gradient-to-r from-secondary/5 to-transparent pointer-events-none" />
      </section>
    </main>
  );
}

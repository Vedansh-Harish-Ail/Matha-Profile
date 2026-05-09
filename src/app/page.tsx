import Hero from '@/components/sections/Hero';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      
      {/* Trust Strip */}
      <section className="bg-primary py-8 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-center md:justify-between">
            <div className="flex flex-col">
              <span className="text-2xl font-bold">5.0</span>
              <span className="text-xs uppercase tracking-wider text-secondary-light">Google Rating</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold">GST</span>
              <span className="text-xs uppercase tracking-wider text-secondary-light">Verified Business</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold">BULK</span>
              <span className="text-xs uppercase tracking-wider text-secondary-light">Supply Support</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold">NAVI MUMBAI</span>
              <span className="text-xs uppercase tracking-wider text-secondary-light">Local Dealer</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories (Placeholder) */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-primary md:text-4xl">Product Categories</h2>
            <p className="mt-4 text-gray-600">Explore our wide range of refrigeration and HVAC supplies</p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Refrigerant Gases",
              "Compressor Oils",
              "Butane Gas Cartridges",
              "AC Copper Pipes",
              "Brazing Rods",
              "Refrigeration Accessories"
            ].map((cat) => (
              <div key={cat} className="group relative overflow-hidden rounded-lg bg-gray-100 p-8 transition-all hover:bg-white hover:shadow-xl">
                <h3 className="text-xl font-bold text-primary">{cat}</h3>
                <p className="mt-2 text-sm text-gray-500">Quality products for industrial and commercial use.</p>
                <div className="mt-6 flex items-center text-sm font-semibold text-secondary group-hover:underline">
                  View Products →
                </div>
              </div>
            ))}
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

// Re-importing icons used in Why Choose Us
import { ShieldCheck, Truck, MessageCircle } from 'lucide-react';

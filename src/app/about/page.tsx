import { 
  ShieldCheck, 
  Truck, 
  MapPin, 
  Package, 
  Wrench, 
  Boxes, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="flex flex-col text-primary font-sans">
      {/* --- Hero Section --- */}
      <section className="relative flex h-[500px] items-center overflow-hidden w-full">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC37i-8XdrQj4Ji82pMNwwyko2D5XCUWuKcGFfL6CvtGaJnrDtdoTcq_IQzFyK13O3XtJ_0m3mNcyPqkwB-nAFc4-lBlJPerM0ciTsZ0sMN8Y5ha-TPzugwgS-3fnEFqZICPXRiot_-O47TRZVJWF5rHimb8obkf1xCeR9qkd-MCHn8mKwisABxuOyp3ZplRryQKpaB4N6gQrD7RR3_DGE1-HZSssrfkOlnTFVb5nBLQ7U3FcraQkz7UVw-Rbz6o8FOR8fLCXk6v8E"
            alt="Industrial Refrigeration Warehouse"
            fill
            className="object-cover opacity-30 grayscale contrast-125"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent opacity-90"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">
          <div className="max-w-2xl">
            <span className="text-secondary mb-2 inline-block font-semibold tracking-widest uppercase text-sm">
              ESTABLISHED EXCELLENCE
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase leading-tight tracking-tight">
              Industrial Cooling Solutions for Maharashtra
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Mata Refrigeration is Navi Mumbai&apos;s leading provider of industrial-grade HVAC and refrigeration components, delivering technical precision and genuine parts across the region.
            </p>
          </div>
        </div>
      </section>

      {/* --- Company Intro & Local Focus (Bento) --- */}
      <section className="py-12 max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Story */}
          <div className="md:col-span-8 bg-white border border-gray-100 p-8 rounded-xl shadow-sm">
            <h2 className="text-3xl font-bold text-primary mb-4 uppercase">Our Heritage</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Based in the heart of Navi Mumbai, Mata Refrigeration has grown from a local supplier to an industrial powerhouse. We specialize in the procurement and distribution of critical refrigeration infrastructure, ensuring that cold chains and industrial processes across Maharashtra never skip a beat.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-secondary shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-primary">Certified Quality</h4>
                  <p className="text-sm text-gray-500">All products meet international ISO standards for performance.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Truck className="text-secondary shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-primary">Regional Logistics</h4>
                  <p className="text-sm text-gray-500">Specialized delivery network covering Pune, Mumbai, and Thane.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Local Reach Card */}
          <div className="md:col-span-4 bg-primary text-white p-8 rounded-xl flex flex-col justify-between shadow-lg">
            <div>
              <span className="text-secondary text-xs uppercase tracking-widest font-bold">GEOGRAPHIC FOCUS</span>
              <h3 className="text-2xl font-bold mt-2 mb-4">Navi Mumbai & Beyond</h3>
              <p className="text-sm text-white/70 mb-4 leading-relaxed">Strategic warehouse locations allow us to serve the industrial hubs of Maharashtra with 24-hour turnaround on stock components.</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg border border-white/10">
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm"><MapPin size={16} className="text-secondary" /> Taloja MIDC</li>
                <li className="flex items-center gap-2 text-sm"><MapPin size={16} className="text-secondary" /> Pawane MIDC</li>
                <li className="flex items-center gap-2 text-sm"><MapPin size={16} className="text-secondary" /> Rabale Industrial Area</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- Why Choose Us --- */}
      <section className="bg-gray-50 py-16 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary uppercase">The Mata Advantage</h2>
            <p className="text-gray-600 mt-2">Why procurement officers choose us for their mission-critical hardware.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Package, title: "Genuine Products", desc: "We stock only authorized components from global leaders. 100% authenticity guaranteed with full support." },
              { icon: Wrench, title: "Technical Guidance", desc: "Our engineers help you select the right compressor or valve for your specific BTU requirements." },
              { icon: Boxes, title: "Bulk Support", desc: "Scale your project with our specialized bulk pricing. We maintain deep inventory levels for installations." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 border border-gray-100 rounded-xl hover:border-secondary transition-all hover:shadow-lg group">
                <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-lg mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Inventory Portfolio --- */}
      <section className="py-20 w-full px-6 md:px-12 lg:px-20">
        <div className="max-w-[1800px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary uppercase mb-12 text-left">Inventory Portfolio</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:h-[750px]">
            {/* Big Vertical Image - Left (Spans 2 columns, 2 rows) */}
            <div className="relative md:col-span-2 md:row-span-2 h-[500px] md:h-full overflow-hidden rounded-xl group shadow-2xl border border-gray-100">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQ1aSjUkUuICPt0WduzsCKK0qias9LJ7a2sHky3SCmYI1wW_0zCacuXBPUtgbojjKjLdB6grYwTt414hwyMj9NKFmSe9ww6rT-Dxg-cNhILJtdLVXB-qURElXeoEPAIgS6Y08hjjh4BBN5sMw895Cfo0FTBxSPWC0MoaWQCW9I5QJKXb3K3XEIn4cUlMBUZZTybMLv_hZ5u-s9I0O-_EuDWaGMaG9dSpGdt-Vl_Di8nreLKxAlg4n_gj6nCIBA8eu1PZ4fSuEUdtY"
                alt="Main Distribution Center"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-10 text-white">
                <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-2 block">Central Hub</span>
                <p className="text-2xl font-bold leading-tight">Primary Distribution Center,<br />Navi Mumbai</p>
              </div>
            </div>
            
            {/* Top Row - 2 Small Images */}
            <div className="relative h-[300px] md:h-full overflow-hidden rounded-xl border border-gray-100 shadow-md">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBduq4o6lZk2fWnUMu28__1_QuC6EuEhfPEjQ-B3rdX4lTusXtRkNWxOa37cFsQbIrzoZVUVIX4L9utt8Blv4ylmwAA85tpkJsHsdqV2gfwzDIOg8cAmzqXjOCNjRaAf1hprjkemiMBAb2lAu6-jZjjWHE8RFTDsVX8j0PtxXPdLYXjt8gry38KtAgrxmlOQ5_QlbPacpccPuLeQFgsePrmhrOeqLpYvw5eFLP0YSNGww4FCnjncvmftchOqcMT6M8CGczZ8D7I-nI"
                alt="Technical Parts"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 25vw"
              />
            </div>
            
            <div className="relative h-[300px] md:h-full overflow-hidden rounded-xl border border-gray-100 shadow-md">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJMVy9b8BjmH2yJe5toCSb6RvUc4Cq7q6rq35sHgq7Ti6I6_ngDbzn0L0UGadp_6m89hChAMiBCzCQjGpE32X-cSUiD4nRK006Wt1V1E4kYF-tSspXD9oMpfapEguItmlaHiHG2OHJFgAo4CkhkqLXYSIZ277jzqKJQFS8w_dVTeKeU8EqFWRXSUbyUa5Saooj7Xv3uVcMr101NYOsWlWIODIyZx3yY22g-Sos2fGXC41TFpZYfuuN6I179EPWklF16I38D-rtp6E"
                alt="Warehouse Aisle"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 25vw"
              />
            </div>
            
            {/* Bottom Row - 1 Wide Image (Under the 2 small ones) */}
            <div className="relative h-[350px] md:h-full md:col-span-2 overflow-hidden rounded-xl border border-gray-100 shadow-xl">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpkUu7WlJcXK-EfoSARTSd06zseS_zaQtjxalsMkvEvU0UUNEz-fWrE1X0G3EcyvNmUEWpOz6837V2QeFQaeC2KEX03cpB2F7tpq2ymA9MlngF1lQX114E1ee3sgHzQiWnOmjBvNv0igOOx197my-Fg7HvVRDy745sXoNwIp7_oLKGzMqwmgjt8Oxes7lMRIsNBMxPTRRSo42EjGv-zGIbzAReRdem3HTkVvF6du1yc43Zzf9EEe6Btyn4bQ2bSKjkw_Ce7uKlAUs"
                alt="Technician Inspection"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA Banner --- */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 mb-16">
        <div className="bg-primary text-white p-10 md:p-16 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl overflow-hidden relative">
          <div className="max-w-xl relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-6 leading-tight">Start Your Project Today</h2>
            <p className="text-lg text-white/70">Get specialized pricing and technical consultation for your industrial refrigeration needs.</p>
          </div>
          <Link 
            href="/quote"
            className="bg-secondary hover:bg-secondary-dark text-white font-bold h-14 px-10 rounded-full transition-all flex items-center gap-3 whitespace-nowrap active:scale-95 relative z-10 shadow-lg"
          >
            REQUEST A QUOTE
            <ArrowRight size={20} />
          </Link>
          {/* Subtle decoration */}
          <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-secondary/10 to-transparent" />
        </div>
      </section>
    </div>
  );
}

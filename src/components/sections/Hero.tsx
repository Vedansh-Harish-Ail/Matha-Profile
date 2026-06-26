import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, BadgeCheck, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#06112C]">
      {/* --- Layout Grid --- */}
      <div className="relative flex min-h-[420px] lg:min-h-[520px]">

        {/* ---- LEFT: Content Pane ---- */}
        <div className="relative z-10 flex w-full flex-col justify-center px-6 py-14 sm:px-10 lg:w-[58%] lg:px-16 lg:py-20">

          {/* Badge */}
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-sm bg-[#1FAB89] px-3 py-1">
            <BadgeCheck size={13} className="text-white" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-white">
              Authorized Industrial Dealer
            </span>
          </div>

          {/* Headline */}
          <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.6rem]">
            Mata Refrigeration&nbsp;&mdash; Refrigerant Gas &amp;{' '}
            <br className="hidden sm:block" />
            HVAC Supply Experts
          </h1>

          {/* Sub-text */}
          <p className="mb-8 max-w-lg text-[15px] leading-relaxed text-[#A0B4CC]">
            Trusted supplier of refrigerant gases, compressor oils, copper pipes, brazing
            rods, and refrigeration accessories in Navi Mumbai. Precision components for
            large-scale industrial cooling.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+918080673647"
              className="inline-flex items-center gap-2 rounded-md border border-white bg-transparent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#06112C]"
            >
              <Phone size={16} />
              Call Now
            </a>
            <a
              href="https://wa.me/918080673647?text=Hi%2C%20I%20saw%20your%20website%20and%20I%27m%20interested%20in%20your%20industrial%20refrigeration%20products.%20Can%20you%20please%20provide%20more%20details%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1DA851]"
            >
              <MessageCircle size={16} />
              WhatsApp Enquiry
            </a>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Shop+no+1,+Channel+Classic,+Plot+No-91,+HSG+Society,+Sector+4,+Kopar+Khairane,+Navi+Mumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-secondary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-secondary-dark"
            >
              <MapPin size={16} />
              Get Directions
            </a>
          </div>
        </div>

        {/* ---- RIGHT: Image Pane ---- */}
        <div className="absolute inset-0 lg:relative lg:inset-auto lg:w-[42%]">
          {/* Dark overlay on mobile so text is readable; clipped on desktop */}
          <div className="absolute inset-0 bg-[#06112C]/75 lg:bg-transparent" />
          {/* Blue-tinted overlay on top of the image on desktop */}
          <div className="absolute inset-0 hidden bg-[#06112C]/55 lg:block" />
          <Image
            src="/images/hero-bg.png"
            alt="Industrial refrigeration machinery"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  { src: '/home/hero-slide-1.jpg', alt: 'M2M Joinery — bespoke painted garage doors, Sheffield' },
  { src: '/home/hero-slide-2.jpg', alt: 'M2M Joinery — commercial pub bar interior fit-out' },
  { src: '/home/hero-slide-3.jpg', alt: 'M2M Joinery — traditional bar and counter installation' },
  { src: '/home/hero-slide-4.png', alt: 'M2M Joinery — Sheffield workshop floor, precision machining' },
  { src: '/home/hero-slide-5.jpg', alt: 'M2M Joinery — commercial banquette seating installation' },
  { src: '/home/hero-slide-6.png', alt: 'M2M Joinery — workshop bench assembly, Sheffield' },
  { src: '/home/hero-slide-7.jpg', alt: 'M2M Joinery — bespoke commercial shelving and joinery fit-out' },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent(c => (c + 1) % slides.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] overflow-hidden">

      {/* Slide images */}
      {slides.map((slide, i) => (
        <div
          key={i}
          aria-hidden={i !== current}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Overlay — light enough to let photography show through */}
      <div className="absolute inset-0 bg-zinc-950/40" />

      {/* Content + scroll indicator — anchored to lower third */}
      <div className="absolute bottom-14 left-0 right-0 z-10 flex flex-col items-center gap-7 px-4">

        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-extrabold text-white tracking-tight text-4xl md:text-5xl leading-none mb-5">
            Made 2 Measure Joinery
          </h1>
          <p className="font-normal text-zinc-200 text-base leading-relaxed max-w-2xl mx-auto">
            A premier commercial and residential joinery workshop — precision manufacturing
            and high-volume assembly from our specialist Sheffield facility.
          </p>
        </div>

        {/* Scroll indicator — acts as anchor link to Section 2 */}
        <a
          href="#services"
          aria-label="Scroll to services"
          className="flex flex-col items-center gap-1 text-zinc-300 hover:text-white transition-colors duration-200"
        >
          <span className="text-[10px] font-semibold tracking-widest uppercase">Scroll</span>
          <svg
            className="animate-bounce"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </a>

      </div>

      {/* Slide progress dots — bottom right */}
      <div className="absolute bottom-8 right-8 z-10 flex gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
              i === current ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>

    </section>
  );
}

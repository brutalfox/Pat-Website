'use client';

import { useState } from 'react';

const clients = [
  { name: 'All Bar One',        logo: '/logos/all%20bar%20one.png',             scale: 1.5 },
  { name: 'B&Q',                logo: '/logos/b%20and%20q.svg',                 scale: 1.3 },
  { name: 'Costa Coffee',       logo: '/logos/costa%20coffee.png' },
  { name: 'Craft Union',        logo: '/logos/craft%20union.jpg',               scale: 1.2 },
  { name: 'Ember Inn',          logo: '/logos/ember%20inn.png',                 scale: 1.3 },
  { name: 'Greene King',        logo: '/logos/greene%20king.png',               bg: 'bg-zinc-900' },
  { name: 'Greggs',             logo: '/logos/greggs.png' },
  { name: 'Hungry Horse',       logo: '/logos/hungry%20horse.png' },
  { name: 'Miller & Carter',    logo: '/logos/miller%20and%20carter.png',  scale: 1.8 },
  { name: 'Mirage Vapes',       logo: '/logos/mirage%20vapes.png',         scale: 1.8 },
  { name: 'Mitchell & Butlers', logo: '/logos/mitchell%20and%20butlers.png' },
  { name: "Nando's",            logo: '/logos/nandos.png' },
  { name: "O'Neill's",          logo: '/logos/oneils%20logo.png' },
  { name: 'Premier Inn',        logo: '/logos/premier%20inn.png' },
  { name: 'Sizzling Pubs',      logo: '/logos/sizzling%20pub.png',         scale: 1.5 },
  { name: 'Starbucks',          logo: '/logos/starbucks.png' },
  { name: 'Toby Carvery',       logo: '/logos/toby%20carvery.png' },
  { name: 'Travelodge',         logo: '/logos/travel%20lodge.png' },
  { name: 'Wagamama',           logo: '/logos/wagamamma.png' },
  { name: 'Wetherspoons',       logo: '/logos/wetherspoons.png' },
];

const PER_PAGE = 4;
const TOTAL_PAGES = Math.ceil(clients.length / PER_PAGE);

export default function ClientCarousel() {
  const [page, setPage] = useState(0);

  const prev = () => setPage(p => (p - 1 + TOTAL_PAGES) % TOTAL_PAGES);
  const next = () => setPage(p => (p + 1) % TOTAL_PAGES);

  return (
    <section className="py-16 px-4 bg-white border-t border-zinc-200/60">
      <div className="max-w-5xl mx-auto">

        <h2 className="font-semibold text-zinc-950 tracking-wider text-xl md:text-2xl uppercase mb-10 text-center">
          Who We Work With
        </h2>

        <div className="flex items-center gap-4 sm:gap-6">

          {/* Prev arrow */}
          <button
            onClick={prev}
            aria-label="Previous clients"
            className="flex-none w-9 h-9 flex items-center justify-center border border-zinc-300 text-zinc-500 hover:border-zinc-950 hover:text-zinc-950 transition-colors duration-200 rounded-none"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Sliding track — explicit total width so each slide is exactly viewport-wide */}
          <div className="flex-1 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                width: `${TOTAL_PAGES * 100}%`,
                transform: `translateX(-${page * (100 / TOTAL_PAGES)}%)`,
              }}
            >
              {Array.from({ length: TOTAL_PAGES }).map((_, p) => (
                <div
                  key={p}
                  style={{ width: `${100 / TOTAL_PAGES}%` }}
                  className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
                >
                  {clients.slice(p * PER_PAGE, (p + 1) * PER_PAGE).map(({ name, logo, scale, bg }) => (
                    <div
                      key={name}
                      className={`border border-zinc-200/50 h-24 p-2 overflow-hidden ${bg ?? 'bg-white'}`}
                    >
                      <div className="relative w-full h-full overflow-hidden">
                        <img
                          src={logo}
                          alt={name}
                          className="absolute inset-0 w-full h-full object-contain"
                          style={scale ? { transform: `scale(${scale})` } : undefined}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Next arrow */}
          <button
            onClick={next}
            aria-label="Next clients"
            className="flex-none w-9 h-9 flex items-center justify-center border border-zinc-300 text-zinc-500 hover:border-zinc-950 hover:text-zinc-950 transition-colors duration-200 rounded-none"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Go to page ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                i === page ? 'bg-zinc-950' : 'bg-zinc-300'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

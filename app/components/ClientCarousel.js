'use client';

import { useState } from 'react';

const clients = [
  { name: 'Costa Coffee',    logo: '/logos/Costa_Coffee_idpIABOpxt_0.png' },
  { name: 'Greene King',     logo: '/logos/Greene_King_idFc7c0YGT_0.png' },
  { name: 'Greggs',          logo: '/logos/Greggs_plc_id3Y2SjUG5_1.png' },
  { name: 'Hungry Horse',    logo: '/logos/Hungry_Horse_id9jWinAgZ_0.png' },
  { name: 'Toby Carvery',    logo: '/logos/iddB0OuUHX_1780655599019.png' },
  { name: 'Travelodge',      logo: '/logos/idxaWbW4mC_logos.png' },
  { name: 'J D Wetherspoon', logo: '/logos/J_D_Wetherspoon_idj_uVKb7P_0.png' },
  { name: "Nando's",         logo: "/logos/Nando's_idlrXECncs_1.png" },
  { name: 'Premier Inn',     logo: '/logos/Premier_Inn_idUnktHnN6_1.png' },
  { name: 'Starbucks',       logo: '/logos/Starbucks_Logo_1.png' },
  { name: 'Wagamama',        logo: '/logos/Wagamama_Uk_idUigmqZ0O_0.png' },
];

const PER_PAGE = 4;
const TOTAL_PAGES = Math.ceil(clients.length / PER_PAGE);

export default function ClientCarousel() {
  const [page, setPage] = useState(0);

  const prev = () => setPage(p => Math.max(0, p - 1));
  const next = () => setPage(p => Math.min(TOTAL_PAGES - 1, p + 1));

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
            disabled={page === 0}
            aria-label="Previous clients"
            className="flex-none w-9 h-9 flex items-center justify-center border border-zinc-300 text-zinc-500 hover:border-zinc-950 hover:text-zinc-950 disabled:opacity-25 disabled:cursor-not-allowed transition-colors duration-200 rounded-none"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Sliding track */}
          <div className="flex-1 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${page * (100 / TOTAL_PAGES)}%)` }}
            >
              {Array.from({ length: TOTAL_PAGES }).map((_, p) => (
                <div
                  key={p}
                  className="min-w-full grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
                >
                  {clients.slice(p * PER_PAGE, (p + 1) * PER_PAGE).map(({ name, logo }) => (
                    <div
                      key={name}
                      className="bg-white border border-zinc-200/50 rounded-none h-24 flex items-center justify-center p-5"
                    >
                      <img
                        src={logo}
                        alt={name}
                        className="max-h-10 w-auto max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Next arrow */}
          <button
            onClick={next}
            disabled={page === TOTAL_PAGES - 1}
            aria-label="Next clients"
            className="flex-none w-9 h-9 flex items-center justify-center border border-zinc-300 text-zinc-500 hover:border-zinc-950 hover:text-zinc-950 disabled:opacity-25 disabled:cursor-not-allowed transition-colors duration-200 rounded-none"
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

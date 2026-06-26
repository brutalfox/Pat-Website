import Image from 'next/image';

export const metadata = {
  title: 'Bespoke Home Bars & Entertaining Spaces Sheffield | M2M Joinery Ltd',
  description:
    'Handcrafted luxury home bars, media walls, and entertaining suites built in our Sheffield workshop. Bespoke joinery for private residences across South Yorkshire.',
};

const processSteps = [
  {
    title: 'Precision Measurement',
    img: '/brand/tape.png',
    copy: 'High-precision spatial mapping and design consultations to perfectly fit your home’s structure.',
  },
  {
    title: 'Workshop Manufacturing',
    img: '/brand/circular%20saw.png',
    copy: 'Full-scale raw timber processing, machining, custom spray finishing, and complete off-site dry-assembly to guarantee structural perfection before transit.',
  },
  {
    title: 'Immaculate Installation',
    img: '/brand/drill.png',
    copy: 'Clean, efficient delivery from our specialist fitting team. We utilise advanced M-class dust extraction systems and comprehensive surface protection, leaving the residence entirely immaculate.',
  },
];

export default function Bars() {
  return (
    <div>

      {/* ── Hero ─────────────────────────────────────────────────
          Full-bleed image with overlay, centered heading + tagline + CTA
      ───────────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden">
        <Image
          src="/bars%20and%20entertaining/bespoke%20bar%202.png"
          alt="Bespoke handcrafted oak home bar with backlit spirits display"
          fill
          className="object-cover rounded-none"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-zinc-950/60" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="font-extrabold text-white tracking-tight text-4xl md:text-5xl leading-none mb-5">
            Statement Home Bars &amp; Entertaining Spaces
          </h1>
          <p className="font-normal text-zinc-200 text-base leading-relaxed max-w-2xl mx-auto mb-10">
            Bringing the luxury, geometric precision, and atmospheric presence of elite commercial
            venues into the private residence.
          </p>
          <a
            href="/contact"
            className="bg-white text-zinc-950 border border-white px-6 py-3 tracking-wide text-sm font-medium uppercase hover:bg-sky-400 hover:border-sky-400 transition-colors duration-200 rounded-none inline-block"
          >
            Book a Design Consultation
          </a>
        </div>
      </section>


      {/* ── Philosophy Banner ─────────────────────────────────────
          Wide-spaced, high-contrast typography block
      ───────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-zinc-950 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <p className="font-semibold text-zinc-400 text-[10px] tracking-widest uppercase mb-6">
            Spatial Philosophy
          </p>
          <p className="font-semibold text-white text-xl md:text-3xl tracking-wide leading-relaxed uppercase">
            Luxury hosting begins with architecture, not accessories — we design each bar as a
            permanent fixture of the room, its geometry, lighting, and materials considered as
            carefully as any kitchen or staircase, so the space performs like an elite venue
            every time the doors open.
          </p>
        </div>
      </section>


      {/* ── Showcase Row 1: Text LEFT · Image RIGHT ──────────────── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2">

          <div className="flex flex-col justify-center px-10 py-14 lg:px-16">
            <h2 className="font-semibold text-zinc-950 tracking-wider text-xl md:text-2xl uppercase mb-6">
              Integrated Drinks Cabinets &amp; &ldquo;Pocket-Door&rdquo; Cocktail Bars
            </h2>
            <p className="font-normal text-zinc-600 text-base leading-relaxed max-w-md">
              Statement cocktail bars built into recessed alcoves, designed to completely
              disappear behind custom timber pocket doors when not in use. Each commission
              features custom-milled internal wine racks, precision-engineered drinks shelving
              with integrated accent LED channel lighting, and tailored stone preparation
              inserts.
            </p>
          </div>

          <div className="relative min-h-72 lg:min-h-[480px]">
            <Image
              src="/bars%20and%20entertaining/bespoke%20bar%203.png"
              alt="Integrated drinks cabinet and pocket-door cocktail bar"
              fill
              className="object-cover rounded-none"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

        </div>
      </section>


      {/* ── Showcase Row 2: Image LEFT · Text RIGHT ──────────────── */}
      <section className="bg-zinc-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2">

          <div className="relative min-h-72 lg:min-h-[480px]">
            <Image
              src="/bars%20and%20entertaining/bespoke%20bar%201.png"
              alt="Bespoke freestanding and island home bar"
              fill
              className="object-cover rounded-none"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="flex flex-col justify-center px-10 py-14 lg:px-16">
            <h2 className="font-semibold text-zinc-950 tracking-wider text-xl md:text-2xl uppercase mb-6">
              Bespoke Freestanding &amp; Island Bars
            </h2>
            <p className="font-normal text-zinc-600 text-base leading-relaxed max-w-md">
              Custom-designed entertaining hubs crafted as focal centerpieces for social spaces.
              Engineered with premium hardwood frameworks, durable work surfaces, and dedicated
              integration for under-counter refrigeration and luxury fixtures.
            </p>
          </div>

        </div>
      </section>


      {/* ── The M2M Process ────────────────────────────────────────
          Uniform 3-column workshop / installation process
      ───────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white border-t border-zinc-200/60">
        <div className="max-w-6xl mx-auto">

          <h2 className="font-bold text-zinc-950 tracking-wider text-3xl md:text-4xl uppercase leading-tight text-center mb-16">
            The M2M Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {processSteps.map((step) => (
              <div key={step.title} className="flex flex-col items-center text-center px-4">
                <div className="relative w-20 h-20 mb-6">
                  <Image
                    src={step.img}
                    alt={step.title}
                    fill
                    className="object-contain rounded-none"
                    sizes="80px"
                  />
                </div>
                <h3 className="font-semibold text-zinc-950 tracking-wider text-sm uppercase mb-4">
                  {step.title}
                </h3>
                <p className="font-normal text-zinc-600 text-sm leading-relaxed max-w-xs">
                  {step.copy}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-zinc-950 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-semibold text-white tracking-wider text-xl md:text-2xl uppercase mb-6">
            Ready to Build Your Entertaining Space?
          </h2>
          <p className="font-normal text-zinc-400 text-base leading-relaxed mx-auto mb-8">
            Get in touch with our team to arrange a design consultation and receive a tailored
            quote for your home bar or entertaining space.
          </p>
          <a
            href="/contact"
            className="bg-white text-zinc-950 border border-white px-6 py-3 tracking-wide text-sm font-medium uppercase hover:bg-sky-400 hover:border-sky-400 transition-colors duration-200 rounded-none inline-block"
          >
            Book a Design Consultation
          </a>
        </div>
      </section>

    </div>
  );
}

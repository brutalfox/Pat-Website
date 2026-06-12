import Link from 'next/link';
import Image from 'next/image';
import HeroSlideshow from './components/HeroSlideshow';
import ClientCarousel from './components/ClientCarousel';

export const metadata = {
  title: 'M2M Joinery Ltd | Made 2 Measure Sheffield',
};

export default function Home() {
  return (
    <div>

      {/* ─────────────────────────────────────────────────────────
          SECTION 1 — Full-Screen Hero Slideshow
      ───────────────────────────────────────────────────────── */}
      <HeroSlideshow />


      {/* ─────────────────────────────────────────────────────────
          SECTION 2 — Services Asymmetrical Split
      ───────────────────────────────────────────────────────── */}
      <section id="services" className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">

            {/* Left 1/3 — label + intro + link */}
            <div className="lg:sticky lg:top-28">
              <h2 className="font-semibold text-zinc-950 tracking-wider text-xl md:text-2xl uppercase mb-6">
                Our Joinery Services
              </h2>
              <p className="font-normal text-zinc-600 text-base leading-relaxed max-w-3xl mb-8">
                M2M Joinery Ltd bridges elite craftsmanship with dependable commercial execution —
                manufacturing precision joinery for national contractors and bespoke residential
                clients alike from our specialist Sheffield workshop.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-zinc-950 border-b border-zinc-950 pb-px hover:text-sky-400 hover:border-sky-400 transition-colors duration-200"
              >
                More About Our Workshop
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>

            {/* Right 2/3 — two division cards */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">

              {/* Residential */}
              <div>
                <div className="relative h-72 overflow-hidden bg-zinc-100 mb-5">
                  <Image
                    src="/home/residential.jpg"
                    alt="Bespoke residential fitted cabinetry and wardrobes"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <h3 className="font-medium text-zinc-900 text-lg md:text-xl mb-3">Residential</h3>
                <p className="font-normal text-zinc-600 text-base leading-relaxed max-w-3xl mb-4">
                  We transform home spaces with custom-dimensioned fitted furniture — tailored to
                  your exact room and crafted from premium timber species selected by you.
                </p>
                <Link
                  href="/residential"
                  className="text-xs font-semibold tracking-widest uppercase text-zinc-400 hover:text-zinc-950 transition-colors duration-200"
                >
                  View Residential →
                </Link>
              </div>

              {/* Commercial */}
              <div>
                <div className="relative h-72 overflow-hidden bg-zinc-100 mb-5">
                  <Image
                    src="/home/commercial.jpg"
                    alt="Premium commercial interior fit-out and hospitality joinery"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <h3 className="font-medium text-zinc-900 text-lg md:text-xl mb-3">Commercial</h3>
                <p className="font-normal text-zinc-600 text-base leading-relaxed max-w-3xl mb-4">
                  High-volume manufacturing for national contractors and hospitality brands —
                  delivered on programme, to specification, every time.
                </p>
                <Link
                  href="/commercial"
                  className="text-xs font-semibold tracking-widest uppercase text-zinc-400 hover:text-zinc-950 transition-colors duration-200"
                >
                  View Commercial →
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────
          SECTION 3 — Workshop Capabilities Grid
      ───────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-5xl mx-auto">

          <h2 className="font-semibold text-zinc-950 tracking-wider text-xl md:text-2xl uppercase mb-4 text-center">
            Workshop Capabilities
          </h2>
          <p className="font-normal text-zinc-500 text-base leading-relaxed max-w-2xl mx-auto mb-10 text-center">
            All joinery is manufactured at our purpose-built facility in Sheffield, S6 — equipped
            with modern CNC machinery and staffed by a team of highly experienced joiners.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Card 1: Precision Machining */}
            <div className="bg-white border border-zinc-200/60 shadow-sm rounded-none overflow-hidden">
              <div className="relative h-56 bg-zinc-100">
                <Image
                  src="/home/precision-machining.png"
                  alt="CNC precision machining in M2M joinery workshop"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-medium text-zinc-900 text-lg md:text-xl mb-3">
                  Precision Machining
                </h3>
                <ul className="font-normal text-zinc-500 text-base space-y-2 leading-relaxed">
                  <li>• CNC routing and profile cutting</li>
                  <li>• Accurate component batch production</li>
                  <li>• Tight-tolerance profiles for commercial rollouts</li>
                </ul>
              </div>
            </div>

            {/* Card 2: Workshop Assembly */}
            <div className="bg-white border border-zinc-200/60 shadow-sm rounded-none overflow-hidden">
              <div className="relative h-56 bg-zinc-100">
                <Image
                  src="/home/workshop-assembly.png"
                  alt="Workshop bench assembly and cabinet joinery"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-medium text-zinc-900 text-lg md:text-xl mb-3">
                  Workshop Assembly
                </h3>
                <ul className="font-normal text-zinc-500 text-base space-y-2 leading-relaxed">
                  <li>• Full cabinet and unit assembly in Sheffield</li>
                  <li>• Joinery pre-finished before site delivery</li>
                  <li>• Staging and quality control prior to dispatch</li>
                </ul>
              </div>
            </div>

            {/* Card 3: Architectural Joinery */}
            <div className="bg-white border border-zinc-200/60 shadow-sm rounded-none overflow-hidden">
              <div className="relative h-56 bg-zinc-100">
                <Image
                  src="/home/architectural-joinery.jpg"
                  alt="Architectural joinery finishing and bespoke timber detailing"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-medium text-zinc-900 text-lg md:text-xl mb-3">
                  Architectural Joinery
                </h3>
                <ul className="font-normal text-zinc-500 text-base space-y-2 leading-relaxed">
                  <li>• Bespoke staircases, panelling, feature walls</li>
                  <li>• Specialist timber species and premium finishes</li>
                  <li>• Period and contemporary architectural profiles</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────
          SECTION 4 — Who We Work With Carousel
      ───────────────────────────────────────────────────────── */}
      <ClientCarousel />

    </div>
  );
}

import Image from 'next/image';

export const metadata = {
  title: 'Bespoke Architectural Joinery: Staircases, Doors & Entranceways Sheffield | M2M Joinery Ltd',
  description:
    'Handcrafted bifold doors, clad staircases, and statement entranceways built in our Sheffield workshop. Structural architectural joinery for private residences across South Yorkshire.',
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

export default function ArchitecturalJoinery() {
  return (
    <div>

      {/* ── Hero ─────────────────────────────────────────────────
          Full-bleed image with overlay, centered heading + tagline + CTA
      ───────────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden">
        <Image
          src="/architetural/doors%20porch.png"
          alt="Bespoke statement entranceway and structural timber porch"
          fill
          className="object-cover rounded-none"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-zinc-950/60" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="font-extrabold text-white tracking-tight text-4xl md:text-5xl leading-none mb-5">
            Architectural Joinery: Structural Craftsmanship
          </h1>
          <p className="font-normal text-zinc-200 text-base leading-relaxed max-w-2xl mx-auto mb-10">
            Oversized entranceways, custom-clad staircases, and premium glazed door systems
            engineered with absolute structural precision.
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
            Architectural joinery sits at the intersection of heavy structural engineering and the
            fine, immaculate margins of master bench joinery — every door, stair, and entranceway
            must bear real structural load while being finished to a tolerance fit for a piece of
            furniture.
          </p>
        </div>
      </section>


      {/* ── Showcase Row 1: Text LEFT · Image RIGHT ──────────────── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2">

          <div className="flex flex-col justify-center px-10 py-14 lg:px-16">
            <h2 className="font-semibold text-zinc-950 tracking-wider text-xl md:text-2xl uppercase mb-6">
              Premium Timber Bifold &amp; Glazed Doors
            </h2>
            <p className="font-normal text-zinc-600 text-base leading-relaxed max-w-md">
              Precision-engineered exterior bifold and French door systems designed to
              effortlessly open living spaces to the outdoors. Crafted from exceptionally stable
              hardwoods and finished with premium real-wood veneers or weather-resistant
              workshop spray coatings, each system incorporates advanced multi-point locking
              mechanisms and high-performance thermal glazing.
            </p>
          </div>

          <div className="relative min-h-72 lg:min-h-[480px]">
            <Image
              src="/architetural/bifold%20doors.png"
              alt="Premium timber bifold doors opening onto a garden"
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
              src="/architetural/staircase.jpg"
              alt="Bespoke clad staircase with hardwood handrail and glass balustrade"
              fill
              className="object-cover rounded-none"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="flex flex-col justify-center px-10 py-14 lg:px-16">
            <h2 className="font-semibold text-zinc-950 tracking-wider text-xl md:text-2xl uppercase mb-6">
              Bespoke Clad Staircases &amp; Balustrades
            </h2>
            <p className="font-normal text-zinc-600 text-base leading-relaxed max-w-md">
              Transforming standard stair structures into striking architectural centerpieces.
              We specialize in precision-cladding existing stairways with premium oak or ash
              veneers, seamlessly integrating continuous hardwood handrails, minimalist glass
              balustrades, and custom-milled structural steps to match your flooring perfectly.
            </p>
          </div>

        </div>
      </section>


      {/* ── Showcase Row 3: Text LEFT · Image RIGHT ──────────────── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2">

          <div className="flex flex-col justify-center px-10 py-14 lg:px-16">
            <h2 className="font-semibold text-zinc-950 tracking-wider text-xl md:text-2xl uppercase mb-6">
              Custom Porches &amp; Statement Entranceways
            </h2>
            <p className="font-normal text-zinc-600 text-base leading-relaxed max-w-md">
              Bespoke grand front doors and external timber framing built to make a powerful
              first impression. Our workshop processes heavy, high-durability timbers to
              construct structural porches and oversized entrance doors complete with
              integrated sidelights, custom hardware detailing, and robust multi-point security
              systems.
            </p>
          </div>

          <div className="relative min-h-72 lg:min-h-[480px]">
            <Image
              src="/architetural/doors%20porch.png"
              alt="Custom statement entranceway with oversized timber front door"
              fill
              className="object-cover rounded-none"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
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
            Ready to Build Your Architectural Joinery?
          </h2>
          <p className="font-normal text-zinc-400 text-base leading-relaxed mx-auto mb-8">
            Get in touch with our team to arrange a design consultation and receive a tailored
            quote for your doors, staircase, or entranceway.
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

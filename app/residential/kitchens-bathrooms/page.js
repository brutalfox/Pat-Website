import Image from 'next/image';

export const metadata = {
  title: 'Bespoke Handmade Kitchens & Bathroom Cabinetry Sheffield | M2M Joinery Ltd',
  description:
    'Handcrafted bespoke kitchens and luxury bathroom vanity units built in our Sheffield workshop. Custom kitchen and bathroom joinery for private residences across South Yorkshire.',
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

export default function KitchensBathrooms() {
  return (
    <div>

      {/* ── Hero ─────────────────────────────────────────────────
          Full-bleed image with overlay, centered heading + tagline + CTA
      ───────────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden">
        <Image
          src="/kitchen%20and%20bathrooms/kitchen.png"
          alt="Bespoke handmade kitchen with premium cabinetry"
          fill
          className="object-cover rounded-none"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-zinc-950/60" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="font-extrabold text-white tracking-tight text-4xl md:text-5xl leading-none mb-5">
            Kitchens &amp; Bathrooms: Bespoke Handmade Cabinetry
          </h1>
          <p className="font-normal text-zinc-200 text-base leading-relaxed max-w-2xl mx-auto mb-10">
            Handcrafted kitchen installations and luxury bathroom cabinetry engineered for
            high-moisture environments without sacrificing premium aesthetic appeal.
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
            Kitchens and bathrooms demand a rare discipline — industrial-grade durability fused
            with fine cabinetry — so that the spaces enduring the most daily use feel completely
            effortless, perform flawlessly under moisture and wear, and remain visually stunning
            for decades.
          </p>
        </div>
      </section>


      {/* ── Showcase Row 1: Text LEFT · Image RIGHT ──────────────── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2">

          <div className="flex flex-col justify-center px-10 py-14 lg:px-16">
            <h2 className="font-semibold text-zinc-950 tracking-wider text-xl md:text-2xl uppercase mb-6">
              Bespoke Handmade Kitchens
            </h2>
            <p className="font-normal text-zinc-600 text-base leading-relaxed max-w-md">
              Custom-built kitchen spaces designed to serve as the ultimate architectural
              centerpiece of the home. Handcrafted in our workshop using premium hardwood
              frameworks and beautiful real-wood veneers like oak and ash, every kitchen cabinet,
              drawer array, and pantry unit can be custom spray-finished to flawlessly
              color-match your design palette while integrating state-of-the-art storage
              hardware.
            </p>
          </div>

          <div className="relative min-h-72 lg:min-h-[480px]">
            <Image
              src="/kitchen%20and%20bathrooms/kitchen.png"
              alt="Bespoke handmade kitchen cabinetry and pantry units"
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
              src="/kitchen%20and%20bathrooms/bathroom.png"
              alt="Premium bathroom vanity unit and fitted cabinetry"
              fill
              className="object-cover rounded-none"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="flex flex-col justify-center px-10 py-14 lg:px-16">
            <h2 className="font-semibold text-zinc-950 tracking-wider text-xl md:text-2xl uppercase mb-6">
              Premium Vanity Units &amp; Bathroom Cabinetry
            </h2>
            <p className="font-normal text-zinc-600 text-base leading-relaxed max-w-md">
              Bespoke bathroom storage and vanity units precision-engineered for moisture-prone
              environments. Utilizing specialized water-resistant substrates finished with
              durable real-wood veneers or protective, high-end workshop spray coats, our
              cabinetry completely conceals pipework while providing sophisticated, seamless
              storage solutions.
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
            Ready to Build Your Kitchen or Bathroom?
          </h2>
          <p className="font-normal text-zinc-400 text-base leading-relaxed mx-auto mb-8">
            Get in touch with our team to arrange a design consultation and receive a tailored
            quote for your kitchen or bathroom cabinetry.
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

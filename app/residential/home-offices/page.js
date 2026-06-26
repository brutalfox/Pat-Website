import Image from 'next/image';

export const metadata = {
  title: 'Bespoke Home Office & Executive Workspace Joinery Sheffield | M2M Joinery Ltd',
  description:
    'Handcrafted executive desking, fitted cabinetry, and discrete hardware integration for luxury home offices. Bespoke workspace joinery built in our Sheffield workshop for private residences across South Yorkshire.',
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

export default function HomeOffices() {
  return (
    <div>

      {/* ── Hero ─────────────────────────────────────────────────
          Full-bleed image with overlay, centered heading + tagline + CTA
      ───────────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden">
        <Image
          src="/home%20office/home%20office%201.jpg"
          alt="Bespoke executive home office desking and fitted cabinetry"
          fill
          className="object-cover rounded-none"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-zinc-950/60" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="font-extrabold text-white tracking-tight text-4xl md:text-5xl leading-none mb-5">
            Home Offices: Bespoke Executive Workspaces
          </h1>
          <p className="font-normal text-zinc-200 text-base leading-relaxed max-w-2xl mx-auto mb-10">
            Combining advanced ergonomic design, discrete hardware integration, and premium
            cabinetry to create an elite environment for remote work and focus.
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
            A dedicated workspace should sharpen focus, not compete for it — by precision-milling
            every desk, cavity, and storage run around your workflow, we build an environment that
            performs like a professional studio while remaining indistinguishable from the
            architecture of a luxury home.
          </p>
        </div>
      </section>


      {/* ── Showcase Row 1: Text LEFT · Image RIGHT ──────────────── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2">

          <div className="flex flex-col justify-center px-10 py-14 lg:px-16">
            <h2 className="font-semibold text-zinc-950 tracking-wider text-xl md:text-2xl uppercase mb-6">
              Bespoke Executive Desking &amp; Hardware Integration
            </h2>
            <p className="font-normal text-zinc-600 text-base leading-relaxed max-w-md">
              Tailored executive desks engineered for modern professional demands. Crafted from
              premium hardwoods or book-matched veneers, each workstation features completely
              concealed cable management cavities, integrated power access, and seamless layout
              configurations tailored exactly to your workflow.
            </p>
          </div>

          <div className="relative min-h-72 lg:min-h-[480px]">
            <Image
              src="/home%20office/home%20office%201.jpg"
              alt="Bespoke executive desking with concealed hardware integration"
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
              src="/home%20office/home%20office%202.jpg"
              alt="Floor-to-ceiling home office storage and fitted cabinetry"
              fill
              className="object-cover rounded-none"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="flex flex-col justify-center px-10 py-14 lg:px-16">
            <h2 className="font-semibold text-zinc-950 tracking-wider text-xl md:text-2xl uppercase mb-6">
              Floor-to-Ceiling Storage &amp; Fitted Cabinetry
            </h2>
            <p className="font-normal text-zinc-600 text-base leading-relaxed max-w-md">
              Immaculate storage solutions designed to eliminate visual clutter. From hidden
              printer glide-out drawers and file organization arrays to open display galleries
              with integrated LED accent lighting, our custom cabinetry balances absolute utility
              with architectural elegance.
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
            Ready to Build Your Home Office?
          </h2>
          <p className="font-normal text-zinc-400 text-base leading-relaxed mx-auto mb-8">
            Get in touch with our team to arrange a design consultation and receive a tailored
            quote for your executive workspace.
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

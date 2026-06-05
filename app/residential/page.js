import Image from 'next/image';

export const metadata = {
  title: 'Residential Joinery | M2M Joinery Ltd',
};

const services = [
  'Fitted bedroom wardrobes and dressing rooms',
  'Alcove shelving and cabinetry',
  'Home office furniture and built-in desks',
  'Kitchen joinery and pantry units',
  'Bespoke TV and media units',
  'Utility room storage and laundry cabinetry',
  'Staircase balustrades and handrails',
  'Internal doors and door frames',
];

export default function Residential() {
  return (
    <div>

      {/* ── 1. Split-Hero ────────────────────────────────────────
          Text 5/12 · Image 7/12 (asymmetric desktop grid)
      ───────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-zinc-200/60 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:min-h-[85vh]">

          <div className="lg:col-span-5 flex flex-col justify-center px-10 py-20 lg:px-16 xl:px-24">
            <h1 className="font-extrabold text-zinc-950 tracking-tight text-4xl md:text-5xl leading-none mb-5">
              Residential Joinery
            </h1>
            <p className="font-normal text-zinc-500 text-base leading-relaxed max-w-md">
              Bespoke timber furniture and fitted installations, crafted in our Sheffield workshop
              and installed in homes across South Yorkshire and nationwide.
            </p>
          </div>

          <div className="relative min-h-64 lg:col-span-7">
            <Image
              src="/home/residential.jpg"
              alt="Bespoke fitted wardrobes and light-oak cabinetry installation"
              fill
              className="object-cover rounded-none"
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </div>

        </div>
      </section>


      {/* ── 2a. Editorial Row 1: Text LEFT · Image RIGHT ─────────
          Fitted Wardrobes & Cabinetry + Custom Dimensions
      ───────────────────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2">

          <div className="flex flex-col justify-center px-10 py-14 lg:px-16">
            <h2 className="font-semibold text-zinc-950 tracking-wider text-xl md:text-2xl uppercase mb-6">
              Fitted Wardrobes &amp; Cabinetry
            </h2>
            <p className="font-normal text-zinc-600 text-base leading-relaxed mb-8">
              At M2M Joinery Ltd, our fitted wardrobes and cabinetry are built entirely to your
              specification — not selected from a catalogue. Every unit we manufacture is designed
              around the precise dimensions of your room, ensuring a seamless integration with your
              existing architecture and maximising every available inch of storage.
            </p>
            <h3 className="font-medium text-zinc-900 text-lg md:text-xl mb-3">
              Custom Dimensions
            </h3>
            <p className="font-normal text-zinc-600 text-base leading-relaxed">
              No two rooms are the same. Sloped ceilings, alcoves, chimney breasts, and irregular
              wall angles are not obstacles for our team — they are design opportunities. We survey
              each space thoroughly before production begins, ensuring the finished joinery fits as
              though it was always part of the building. Floor-to-ceiling runs, split-level designs,
              corner units, and walk-in configurations are all part of our standard offering.
            </p>
          </div>

          <div className="relative min-h-72 lg:min-h-[480px]">
            <Image
              src="/home/precision-machining.jpg"
              alt="Precision joinery production — structural lines and workshop framing"
              fill
              className="object-cover rounded-none"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

        </div>
      </section>


      {/* ── 2b. Editorial Row 2: Image LEFT · Text RIGHT ─────────
          Workshop Assembly photo · Timber + Installation copy
      ───────────────────────────────────────────────────────── */}
      <section className="bg-zinc-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2">

          <div className="relative min-h-72 lg:min-h-[480px]">
            <Image
              src="/home/workshop-assembly.jpg"
              alt="Bench joiner carrying out hands-on cabinet assembly"
              fill
              className="object-cover rounded-none"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="flex flex-col justify-center px-10 py-14 lg:px-16">
            <h3 className="font-medium text-zinc-900 text-lg md:text-xl mb-3">
              Premium Timber Selection
            </h3>
            <p className="font-normal text-zinc-600 text-base leading-relaxed mb-8">
              The quality of the raw material is the foundation of quality joinery. Our clients are
              welcome to select from a curated range of premium timber species and board materials —
              from moisture-resistant MDF for painted finishes to solid oak, walnut, and ash for
              natural wood aesthetics. All sheet materials are sourced from reputable suppliers and
              carry the appropriate environmental certification.
            </p>
            <h3 className="font-medium text-zinc-900 text-lg md:text-xl mb-3">
              Seamless Home Installation
            </h3>
            <p className="font-normal text-zinc-600 text-base leading-relaxed">
              Our installation team are M2M employees — not subcontractors. They carry the same
              pride in the finished result as the joiners who built the units in our Sheffield
              workshop. We take great care to protect your home during installation: dust sheets,
              careful tool management, and a thorough clean-up are standard practice. Before we
              leave the site, every door is hung, every hinge adjusted, and every surface inspected.
            </p>
          </div>

        </div>
      </section>


      {/* ── 3. Residential Specialisms Checklist ─────────────────
          50/50 split — label LEFT · 2-col icon list RIGHT
      ───────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white border-t border-zinc-200/60">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          <div className="lg:sticky lg:top-28">
            <h2 className="font-bold text-zinc-950 tracking-wider text-3xl md:text-4xl uppercase leading-tight">
              Residential Specialisms
            </h2>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
            {services.map(item => (
              <li key={item} className="flex items-start gap-3">
                <svg
                  width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="#9cd0ec" strokeWidth="2.5" strokeLinecap="round"
                  strokeLinejoin="round" aria-hidden="true"
                  className="flex-none mt-1"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="font-normal text-zinc-600 text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

        </div>
      </section>


      {/* ── 4. Architectural Showcase Banner ─────────────────────
          Full-width fixed-height accent strip
      ───────────────────────────────────────────────────────── */}
      <section className="relative h-[400px] overflow-hidden">
        <Image
          src="/residential/living%20room.jpg"
          alt="Bespoke residential joinery — premium living room installation"
          fill
          className="object-cover rounded-none"
          sizes="100vw"
        />
      </section>


      {/* ── 5. Testimonials ──────────────────────────────────────
          Flat bg-zinc-50, no card borders or shadows
      ───────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-semibold text-zinc-950 tracking-wider text-xl md:text-2xl uppercase mb-10">
            What Our Residential Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="py-8 px-2">
              <p className="font-normal text-zinc-600 text-base leading-relaxed italic mb-6">
                &ldquo;We had a full set of fitted wardrobes installed across our master bedroom and
                two guest rooms. The precision of the fit was honestly remarkable — every unit sat
                perfectly against the walls with no gaps, no filler, and no shortcuts. The timber
                quality was beautiful and the installation team were professional, tidy, and
                efficient. M2M Joinery&apos;s attention to detail far exceeded what we&apos;d
                experienced from other companies.&rdquo;
              </p>
              <p className="font-semibold text-zinc-950 text-[10px] tracking-widest uppercase">
                Sarah T. &bull; Private Homeowner, Sheffield
              </p>
            </div>

            <div className="py-8 px-2">
              <p className="font-normal text-zinc-600 text-base leading-relaxed italic mb-6">
                &ldquo;We asked M2M Joinery to design and fit a full home office into our spare
                room — shelving, a central desk, and cabinetry along the entire back wall. What
                struck us most was how cleanly the installation was carried out. There was no mess,
                no damage to the plaster, and the finished result looks like it was built into the
                house when it was constructed. Absolutely first-class service from start to
                finish.&rdquo;
              </p>
              <p className="font-semibold text-zinc-950 text-[10px] tracking-widest uppercase">
                James &amp; Claire M. &bull; Private Homeowners, Rotherham
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ── 6. CTA ───────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-zinc-950 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-semibold text-white tracking-wider text-xl md:text-2xl uppercase mb-6">
            Ready to Discuss Your Residential Project?
          </h2>
          <p className="font-normal text-zinc-400 text-base leading-relaxed mx-auto mb-8">
            Get in touch with our team to arrange a consultation and receive a tailored quote for
            your home.
          </p>
          <a
            href="/contact"
            className="bg-white text-zinc-950 border border-white px-6 py-3 tracking-wide text-sm font-medium uppercase hover:bg-sky-400 hover:border-sky-400 transition-colors duration-200 rounded-none inline-block"
          >
            Request a Residential Quote
          </a>
        </div>
      </section>

    </div>
  );
}

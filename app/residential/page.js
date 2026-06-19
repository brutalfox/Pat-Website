import Image from 'next/image';

export const metadata = {
  title: 'Residential Joinery | M2M Joinery Ltd',
};

const services = [
  'Fitted wardrobes and dressing rooms',
  'Alcove shelving and cabinetry',
  'Home office furniture and built-in desks',
  'Kitchen joinery and pantry units',
  'Bespoke TV and media units',
  'Home bars and entertaining spaces',
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


      {/* ── Section title ─────────────────────────────────────────── */}
      <div className="py-10 px-4 bg-white border-t border-zinc-200/60 text-center">
        <h2 className="font-bold text-zinc-950 tracking-wider text-3xl md:text-4xl uppercase leading-tight">
          Residential Specialisms
        </h2>
      </div>


      {/* ── 2a. Fitted Wardrobes: Text LEFT · Image RIGHT ────────── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2">

          <div className="flex flex-col justify-center px-10 py-10 lg:px-16">
            <h2 className="font-semibold text-zinc-950 tracking-wider text-xl md:text-2xl uppercase mb-6">
              Bespoke Dressing Rooms &amp; Luxury Wardrobes
            </h2>
            <p className="font-normal text-zinc-600 text-base leading-relaxed">
              From floor-to-ceiling dressing rooms to flawlessly integrated master bedroom storage,
              our bespoke wardrobes are engineered to maximize your space without compromising
              architectural lines.
            </p>
          </div>

          <div className="relative min-h-72 lg:min-h-[320px]">
            <Image
              src="/residential/wardrobe%20assembly.png"
              alt="Bespoke fitted wardrobe assembly"
              fill
              className="object-cover rounded-none"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

        </div>
      </section>


      {/* ── 2b. Media Walls: Image LEFT · Text RIGHT ─────────────── */}
      <section className="bg-zinc-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2">

          <div className="relative min-h-72 lg:min-h-[320px]">
            <Image
              src="/residential/media%20bar.png"
              alt="Bespoke architectural media wall"
              fill
              className="object-cover rounded-none"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="flex flex-col justify-center px-10 py-10 lg:px-16">
            <h2 className="font-semibold text-zinc-950 tracking-wider text-xl md:text-2xl uppercase mb-6">
              Architectural Media Walls
            </h2>
            <p className="font-normal text-zinc-600 text-base leading-relaxed">
              Elevate your living space with a commanding, architectural media wall tailored to
              seamlessly house your technology, lighting, and display collections.
            </p>
          </div>

        </div>
      </section>


      {/* ── 2c. Home Bars: Text LEFT · Image RIGHT ───────────────── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2">

          <div className="flex flex-col justify-center px-10 py-10 lg:px-16">
            <h2 className="font-semibold text-zinc-950 tracking-wider text-xl md:text-2xl uppercase mb-6">
              Statement Home Bars &amp; Entertaining Spaces
            </h2>
            <p className="font-normal text-zinc-600 text-base leading-relaxed">
              Elevate your hosting experience with a bespoke, architectural lounge bar tailored to
              bring the luxury of a premium venue into your private residence.
            </p>
          </div>

          <div className="relative min-h-72 lg:min-h-[320px]">
            <Image
              src="/residential/home%20bar.png"
              alt="Bespoke statement home bar and entertaining space"
              fill
              className="object-cover rounded-none"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

        </div>
      </section>


      {/* ── 2d. Bifold Doors: Image LEFT · Text RIGHT ────────────── */}
      <section className="bg-zinc-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2">

          <div className="relative min-h-72 lg:min-h-[320px]">
            <Image
              src="/residential/bifold%20doors.png"
              alt="Premium bifold doors installation"
              fill
              className="object-cover rounded-none"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="flex flex-col justify-center px-10 py-10 lg:px-16">
            <h2 className="font-semibold text-zinc-950 tracking-wider text-xl md:text-2xl uppercase mb-6">
              Bifold Doors
            </h2>
            <p className="font-normal text-zinc-600 text-base leading-relaxed">
              Bridge the gap between internal luxury and your outdoor space with premium,
              low-profile bifold doors engineered for effortless, fluid motion.
            </p>
          </div>

        </div>
      </section>


      {/* ── 3. Further Capabilities Checklist ────────────────────── */}
      <section className="py-16 px-4 bg-white border-t border-zinc-200/60">
        <div className="max-w-5xl mx-auto">

          <h2 className="font-bold text-zinc-950 tracking-wider text-3xl md:text-4xl uppercase leading-tight mb-10">
            Further Capabilities
          </h2>

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
          src="/residential/living%20room.png"
          alt="Bespoke residential joinery — premium living room installation"
          fill
          className="object-cover rounded-none"
          sizes="100vw"
        />
      </section>


      {/* ── 5. White-Glove Installation ──────────────────────────
          Split grid: copy left · installation guarantees right
      ───────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white border-t border-zinc-200/60">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

          <div>
            <p className="font-semibold text-zinc-400 text-[10px] tracking-widest uppercase mb-4">
              White-Glove Installation
            </p>
            <h2 className="font-bold text-zinc-950 tracking-wider text-3xl md:text-4xl uppercase leading-tight mb-4">
              The M2M Residential Fit
            </h2>
            <p className="font-semibold text-zinc-950 text-xl leading-snug mb-8">
              No Outsourcing. No Mess.
            </p>
            <p className="font-normal text-zinc-600 text-base leading-relaxed">
              We understand that a home renovation is a deeply personal investment. Unlike other
              joinery providers who hand your project off to third-party subcontractors, our fitted
              bedrooms, home bars, and architectural media walls are installed exclusively by our
              own full-time, highly trained carpenters. We arrive utilise advanced M-class dust
              extraction systems on-site, lay down comprehensive floor-and-wall protection, and
              leave your home entirely immaculate.
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <div className="border-t border-zinc-200 py-6">
              <p className="font-semibold text-zinc-950 text-[10px] tracking-widest uppercase mb-2">
                In-House Carpenters Only
              </p>
              <p className="font-normal text-zinc-500 text-sm leading-relaxed">
                Zero subcontracting — every installation is carried out exclusively by our own
                full-time, highly trained team.
              </p>
            </div>
            <div className="border-t border-zinc-200 py-6">
              <p className="font-semibold text-zinc-950 text-[10px] tracking-widest uppercase mb-2">
                M-Class Dust Extraction
              </p>
              <p className="font-normal text-zinc-500 text-sm leading-relaxed">
                Advanced extraction systems deployed on every job — no dust, no disruption,
                no trace.
              </p>
            </div>
            <div className="border-t border-b border-zinc-200 py-6">
              <p className="font-semibold text-zinc-950 text-[10px] tracking-widest uppercase mb-2">
                Full Floor &amp; Wall Protection
              </p>
              <p className="font-normal text-zinc-500 text-sm leading-relaxed">
                Comprehensive site protection laid as standard — your home left entirely
                immaculate on completion.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* ── 6. Testimonials ──────────────────────────────────────
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

import Image from 'next/image';

export const metadata = {
  title: 'Commercial Joinery | M2M Joinery Ltd',
};

const costaBullets = [
  'Multi-site production planning and coordinated delivery scheduling',
  'Consistent batch quality across high-volume manufacturing runs',
  'Compliance with brand design standards and material specifications',
];

const nandosBullets = [
  'Bespoke feature joinery manufactured to architect specification',
  'Pre-assembled units to minimise on-site installation time',
  'Robust construction suited to high-traffic restaurant environments',
];

const hotelBullets = [
  'Premium timber species and high-specification lacquer finishes',
  'Phased delivery coordination aligned with hotel construction programmes',
  'Architectural quality panelling, joinery, and furniture suites',
];

function CheckList({ items }) {
  return (
    <ul className="space-y-3 mt-6">
      {items.map(item => (
        <li key={item} className="flex items-start gap-3">
          <svg
            width="15" height="15" viewBox="0 0 24 24" fill="none"
            stroke="#9cd0ec" strokeWidth="2.5" strokeLinecap="round"
            strokeLinejoin="round" aria-hidden="true"
            className="flex-none mt-0.5"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span className="font-normal text-zinc-500 text-sm leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Commercial() {
  return (
    <div>

      {/* ── 1. Split-Hero ────────────────────────────────────────
          Text 5/12 · Image 7/12 (asymmetric desktop grid)
      ───────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-zinc-200/60 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:min-h-[85vh]">

          <div className="lg:col-span-5 flex flex-col justify-center px-10 py-20 lg:px-16 xl:px-24">
            <h1 className="font-extrabold text-zinc-950 tracking-tight text-4xl md:text-5xl leading-none mb-5">
              Commercial Joinery
            </h1>
            <p className="font-normal text-zinc-500 text-base leading-relaxed max-w-md">
              High-volume manufacturing, strict blueprint compliance, and reliable nationwide
              delivery for commercial fit-out contractors and hospitality brands.
            </p>
          </div>

          <div className="relative min-h-64 lg:col-span-7">
            <Image
              src="/home/commercial.jpg"
              alt="Premium commercial bar counter and hospitality joinery installation"
              fill
              className="object-cover rounded-none"
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </div>

        </div>
      </section>


      {/* ── 2. Manufacturing at Scale — 50/50 Split ──────────────
          Text LEFT · Workshop machinery image RIGHT
      ───────────────────────────────────────────────────────── */}
      <section className="bg-zinc-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2">

          <div className="flex flex-col justify-center px-10 py-14 lg:px-16">
            <h2 className="font-semibold text-zinc-950 tracking-wider text-xl md:text-2xl uppercase mb-6">
              Commercial Manufacturing at Scale
            </h2>
            <p className="font-normal text-zinc-600 text-base leading-relaxed mb-6">
              M2M Joinery Ltd has built a strong reputation as a trusted joinery supplier for
              commercial fit-out programmes across the UK. Our Sheffield workshop is equipped and
              structured to handle the demands of commercial production — consistent quality across
              high volumes, adherence to tight project programmes, and the ability to coordinate
              deliveries across multiple sites simultaneously.
            </p>
            <p className="font-normal text-zinc-600 text-base leading-relaxed">
              We work directly with main contractors, fit-out specialists, and national hospitality
              brands who need a manufacturing partner they can rely on. Our production team
              understands the pressure of commercial project timelines, and we build our scheduling
              accordingly — with dedicated project management from order placement through to final
              delivery.
            </p>
          </div>

          <div className="relative min-h-72 lg:min-h-[480px]">
            <Image
              src="/commercial/one.png"
              alt="M2M Joinery commercial manufacturing facility"
              fill
              className="object-cover rounded-none"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

        </div>
      </section>


      {/* ── 3. Showcase Projects label ───────────────────────────── */}
      <div className="py-10 px-10 bg-white border-t border-zinc-200/60 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-semibold text-zinc-950 tracking-wider text-xl md:text-2xl uppercase">
            Showcase Projects
          </h2>
        </div>
      </div>


      {/* ── 4. Case Study: Costa Coffee ──────────────────────────
          Text LEFT · Image RIGHT
      ───────────────────────────────────────────────────────── */}
      <section className="bg-white border-t border-zinc-200/60">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2">

          <div className="flex flex-col justify-center px-10 py-14 lg:px-16">
            <p className="text-[10px] font-semibold tracking-widest uppercase text-zinc-400 mb-3">
              Case Study
            </p>
            <h3 className="font-medium text-zinc-900 text-lg md:text-xl mb-4">
              High-Volume Banquette Seating &amp; Bars for Costa Coffee
            </h3>
            <p className="font-normal text-zinc-600 text-base leading-relaxed">
              M2M Joinery Ltd has supplied upholstered banquette seating units and solid timber
              bar constructions for multiple Costa Coffee locations as part of national
              refurbishment and new-build programmes. These contracts require the consistent batch
              production of identical joinery components across multiple stores — demanding tight
              dimensional tolerances and a repeatable finishing standard.
            </p>
            <CheckList items={costaBullets} />
          </div>

          <div className="relative min-h-72 lg:min-h-[480px]">
            <Image
              src="/commercial/costa.jpeg"
              alt="Costa Coffee commercial seating and bar joinery installation"
              fill
              className="object-cover rounded-none"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

        </div>
      </section>


      {/* ── 5. Case Study: Nando's ───────────────────────────────
          Image LEFT · Text RIGHT
      ───────────────────────────────────────────────────────── */}
      <section className="bg-zinc-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2">

          <div className="relative min-h-72 lg:min-h-[480px]">
            <Image
              src="/commercial/nandos.jpg"
              alt="Nando's restaurant bespoke feature joinery and booth installations"
              fill
              className="object-cover rounded-none"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="flex flex-col justify-center px-10 py-14 lg:px-16">
            <p className="text-[10px] font-semibold tracking-widest uppercase text-zinc-400 mb-3">
              Case Study
            </p>
            <h3 className="font-medium text-zinc-900 text-lg md:text-xl mb-4">
              Bespoke Fit-Out Features for Nando&apos;s
            </h3>
            <p className="font-normal text-zinc-600 text-base leading-relaxed">
              Nando&apos;s restaurant fit-outs demand joinery that combines visual character with
              structural durability — features that can withstand the intensive daily use of a
              busy restaurant environment while retaining the aesthetic quality the brand demands.
              M2M Joinery Ltd has manufactured bespoke joinery features for Nando&apos;s sites
              including feature wall panelling, booth surround structures, bar fronts, and service
              counter components.
            </p>
            <CheckList items={nandosBullets} />
          </div>

        </div>
      </section>


      {/* ── 6. Case Study: Premium Hotels ────────────────────────
          Text LEFT · Structural showcase image RIGHT
      ───────────────────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2">

          <div className="flex flex-col justify-center px-10 py-14 lg:px-16">
            <p className="text-[10px] font-semibold tracking-widest uppercase text-zinc-400 mb-3">
              Case Study
            </p>
            <h3 className="font-medium text-zinc-900 text-lg md:text-xl mb-4">
              Architectural Timber Installations for Premium Hotels
            </h3>
            <p className="font-normal text-zinc-600 text-base leading-relaxed">
              Premium hotel fit-outs demand the highest standard of joinery manufacture and
              finish. M2M Joinery Ltd has supplied architectural timber installations for hotel
              projects including reception desk structures, bedroom furniture suites, lounge and
              bar cabinetry, and feature panelling schemes.
            </p>
            <CheckList items={hotelBullets} />
          </div>

          <div className="relative min-h-72 lg:min-h-[480px]">
            <Image
              src="/home/hero-slide-4.jpg"
              alt="Architectural staircase and structural timber installation for premium hotel"
              fill
              className="object-cover rounded-none"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

        </div>
      </section>


      {/* ── 7. Testimonials ──────────────────────────────────────
          Flat bg-zinc-50, no card borders or shadows
      ───────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-zinc-50 border-t border-zinc-200/60">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-semibold text-zinc-950 tracking-wider text-xl md:text-2xl uppercase mb-10">
            What Our Commercial Partners Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="py-8 px-2">
              <p className="font-normal text-zinc-600 text-base leading-relaxed italic mb-6">
                &ldquo;We&apos;ve used M2M Joinery across three national fit-out programmes and they
                have never let us down on programme. The joinery arrives pre-finished, correctly
                dimensioned, and packaged properly — which sounds basic but in this industry it
                genuinely isn&apos;t. Their workshop clearly has its act together. That reliability
                is invaluable when you&apos;re coordinating a multi-site rollout.&rdquo;
              </p>
              <p className="font-semibold text-zinc-950 text-[10px] tracking-widest uppercase">
                David R. &bull; Site Manager, National Fit-Out Contractor
              </p>
            </div>

            <div className="py-8 px-2">
              <p className="font-normal text-zinc-600 text-base leading-relaxed italic mb-6">
                &ldquo;Blueprint compliance is non-negotiable on our contracts — even small
                deviations from specification create costly knock-on problems on site. M2M Joinery
                consistently produce to the drawings. Their communication throughout the production
                process is excellent — we always know where we stand, and if there&apos;s ever an
                issue, they flag it early rather than letting it become a problem.&rdquo;
              </p>
              <p className="font-semibold text-zinc-950 text-[10px] tracking-widest uppercase">
                Karen H. &bull; Contracts Manager, Commercial Fit-Out Specialist
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ── 8. CTA ───────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-zinc-950 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-semibold text-white tracking-wider text-xl md:text-2xl uppercase mb-6">
            Discuss a Commercial Contract
          </h2>
          <p className="font-normal text-zinc-400 text-base leading-relaxed mx-auto mb-8">
            Send us your drawings or project brief and our commercial team will respond with a
            detailed manufacturing quotation.
          </p>
          <a
            href="/contact"
            className="bg-white text-zinc-950 border border-white px-6 py-3 tracking-wide text-sm font-medium uppercase hover:bg-sky-400 hover:border-sky-400 transition-colors duration-200 rounded-none inline-block"
          >
            Request a Commercial Spec
          </a>
        </div>
      </section>

    </div>
  );
}

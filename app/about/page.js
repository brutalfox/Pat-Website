import Image from 'next/image';

export const metadata = {
  title: 'About | M2M Joinery Ltd',
};

export default function About() {
  return (
    <div>

      {/* ── Hero ─────────────────────────────────────────────────
          Full-width image with overlay, centered heading + tagline
      ───────────────────────────────────────────────────────── */}
      <section className="relative min-h-[55vh] flex flex-col items-center justify-center overflow-hidden">
        <Image
          src="/about/hero%20image.png"
          alt="M2M Joinery workshop interior"
          fill
          className="object-cover object-[center_35%] rounded-none"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-zinc-950/55" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="font-extrabold text-white tracking-tight text-4xl md:text-5xl leading-none mb-5">
            About Us
          </h1>
          <p className="font-normal text-zinc-200 text-base leading-relaxed max-w-2xl mx-auto">
            A Sheffield-based joinery manufacturer built on craftsmanship, technical expertise,
            and reliable commercial delivery.
          </p>
        </div>
      </section>


      {/* ── Company Overview ─────────────────────────────────────
          Single condensed intro paragraph, full-width text block
      ───────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="font-normal text-zinc-600 text-base leading-relaxed">
            M2M Joinery Ltd is a specialist joinery manufacturer based in Sheffield, South
            Yorkshire — founded to bridge the gap between elite craftsmanship and the dependable
            delivery standards that modern commercial clients demand. Our workshop on Limestone
            Cottage Lane is equipped with CNC machinery and traditional hand tools, capable of
            handling everything from a single residential commission to large-scale multi-unit
            commercial rollouts.
          </p>
        </div>
      </section>


      {/* ── Our Team ─────────────────────────────────────────────
          Image LEFT · Text RIGHT
      ───────────────────────────────────────────────────────── */}
      <section className="bg-zinc-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2">

          <div className="relative min-h-72 lg:min-h-[480px]">
            <Image
              src="/about/m2m%20team.png"
              alt="The M2M Joinery team"
              fill
              className="object-cover rounded-none"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="flex flex-col justify-center px-10 py-14 lg:px-16">
            <h2 className="font-semibold text-zinc-950 tracking-wider text-xl md:text-2xl uppercase mb-6">
              Our Team
            </h2>
            <p className="font-normal text-zinc-600 text-base leading-relaxed max-w-3xl">
              The M2M team is made up of time-served joiners, skilled bench fabricators, and
              experienced project managers — all of whom share a genuine passion for the quality
              and longevity of timber joinery. Many of our craftsmen have decades of experience
              working across residential, commercial, and heritage joinery sectors, giving us a
              breadth of technical knowledge that underpins everything we produce.
            </p>
          </div>

        </div>
      </section>


      {/* ── Technical Expertise ──────────────────────────────────
          Text LEFT · Image RIGHT
      ───────────────────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2">

          <div className="flex flex-col justify-center px-10 py-14 lg:px-16 order-2 lg:order-1">
            <h2 className="font-semibold text-zinc-950 tracking-wider text-xl md:text-2xl uppercase mb-6">
              Technical Expertise
            </h2>
            <p className="font-normal text-zinc-600 text-base leading-relaxed max-w-3xl">
              From complex joinery profiles requiring precise CNC programming to handcrafted
              architectural details demanding an experienced eye and skilled hand, our team is
              comfortable operating across the full spectrum of technical challenge. We regularly
              work from architect drawings, interior design specifications, and contractor
              blueprints — translating detailed plans into finished joinery components that arrive
              on site ready to install.
            </p>
          </div>

          <div className="relative min-h-72 lg:min-h-[480px] order-1 lg:order-2">
            <Image
              src="/about/technical%20expertise.png"
              alt="Technical joinery expertise and precision machining"
              fill
              className="object-cover rounded-none"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

        </div>
      </section>


      {/* ── Serving South Yorkshire and Beyond ───────────────────
          Image LEFT · Text RIGHT
      ───────────────────────────────────────────────────────── */}
      <section className="bg-zinc-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2">

          <div className="relative min-h-72 lg:min-h-[480px]">
            <Image
              src="/about/serving%20south%20yorkshire.png"
              alt="M2M Joinery serving South Yorkshire and the UK"
              fill
              className="object-cover rounded-none"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="flex flex-col justify-center px-10 py-14 lg:px-16">
            <h2 className="font-semibold text-zinc-950 tracking-wider text-xl md:text-2xl uppercase mb-6">
              Serving South Yorkshire and Beyond
            </h2>
            <p className="font-normal text-zinc-600 text-base leading-relaxed max-w-3xl">
              While our roots are firmly in Sheffield and South Yorkshire, M2M Joinery Ltd works
              with clients and contractors across the UK. We have supplied joinery to sites in
              London, Manchester, Leeds, Birmingham, and beyond — managing logistics from our
              central Sheffield base to ensure on-time delivery wherever the project demands.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

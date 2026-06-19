import Image from 'next/image';

export const metadata = {
  title: 'About | M2M Joinery Ltd',
};

const team = [
  { name: 'Dave',     title: 'Workshop Manager',           img: '/about/dave.png',            objPos: 'object-top'    },
  { name: 'Sean',     title: 'Workshop Manager',           img: '/about/sean.png',            objPos: 'object-center' },
  { name: 'Dave',     title: 'Site Installation Lead',     img: '/about/little%20dave.jpg',   objPos: 'object-[50%_25%]' },
  { name: 'Ash',      title: 'Senior Joiner',              img: '/about/ash.png',             objPos: 'object-top'    },
  { name: 'Dan',      title: 'Bench Joiner',               img: '/about/dan.png',             objPos: 'object-center' },
  { name: 'Harrison', title: 'Bench Joiner',               img: '/about/harrison.png',        objPos: 'object-top'    },
  { name: 'Finn',     title: 'Spray Finishing Technician', img: '/about/finn.png',            objPos: 'object-top'    },
  { name: 'Patrick',  title: 'Trainee Joiner',             img: '/about/pat.png',             objPos: 'object-center' },
];

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
            Cottage Lane is equipped with heavy-duty industrial machinery, advanced digital
            fabrication tools, and traditional hand tools, capable of handling everything from a
            single residential commission to large-scale multi-unit commercial rollouts.
          </p>
        </div>
      </section>


      {/* ── Meet the Team ────────────────────────────────────────
          2-row × 4-col portrait grid on desktop, 2-col on mobile
      ───────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white border-t border-zinc-200/60">
        <div className="max-w-5xl mx-auto">

          <h2 className="font-semibold text-zinc-950 tracking-wider text-xl md:text-2xl uppercase mb-12 text-center">
            Meet the Team
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-12">
            {team.map((member, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="relative w-full aspect-square mb-5">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className={`object-cover rounded-none ${member.objPos}`}
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>
                <p className="font-semibold text-zinc-950 text-sm tracking-wide mb-1">
                  {member.name}
                </p>
                <p className="font-normal text-zinc-500 text-[10px] tracking-widest uppercase">
                  {member.title}
                </p>
              </div>
            ))}
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
              src="/about/spray%20room.png"
              alt="M2M Joinery spray room and finishing facility"
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

export const metadata = {
  title: 'Contact | M2M Joinery Ltd',
};

export default function Contact() {
  return (
    <div>

      {/* ── Page Header ──────────────────────────────────────── */}
      <section className="bg-zinc-50 py-16 px-4 border-b border-zinc-200/60">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-extrabold text-zinc-950 tracking-tight text-4xl md:text-5xl leading-none mb-4">
            Contact Us
          </h1>
          <p className="font-normal text-zinc-500 text-base leading-relaxed max-w-3xl">
            Get in touch with the M2M Joinery Ltd team to discuss your project or request a quote.
          </p>
        </div>
      </section>

      {/* ── Workshop Info + Form ──────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Info + Map */}
          <div>
            <h2 className="font-semibold text-zinc-950 tracking-wider text-xl md:text-2xl uppercase mb-6">
              Workshop Details
            </h2>

            <div className="space-y-6 mb-10">
              <div>
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-1">
                  Address
                </p>
                <address className="not-italic font-normal text-zinc-700 text-base leading-relaxed">
                  M2M Joinery Ltd<br />
                  Unit 1a Limestone Cottage Lane<br />
                  Sheffield<br />
                  S6 1NJ
                </address>
              </div>
              <div>
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-1">
                  Phone
                </p>
                <a
                  href="tel:01145535100"
                  className="font-normal text-zinc-700 text-base hover:text-sky-500 transition-colors duration-200"
                >
                  0114 553 5100
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-1">
                  Email
                </p>
                <a
                  href="mailto:info@m2mjoinery.co.uk"
                  className="font-normal text-zinc-700 text-base hover:text-sky-500 transition-colors duration-200"
                >
                  info@m2mjoinery.co.uk
                </a>
              </div>
            </div>

            {/* Live Google Maps embed */}
            <iframe
              src="https://maps.google.com/maps?q=Unit+1a+Limestone+Cottage+Lane%2C+Sheffield+S6+1NJ&output=embed&z=16"
              title="M2M Joinery Ltd — Unit 1a Limestone Cottage Lane, Sheffield S6 1NJ"
              className="w-full h-72 rounded-none border-0"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-semibold text-zinc-950 tracking-wider text-xl md:text-2xl uppercase mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full border border-zinc-300 rounded-none px-4 py-3 text-zinc-900 text-sm font-normal focus:outline-none focus:ring-2 focus:ring-[#9cd0ec] bg-zinc-50"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-1">
                  Company Name{' '}
                  <span className="text-zinc-400 normal-case font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full border border-zinc-300 rounded-none px-4 py-3 text-zinc-900 text-sm font-normal focus:outline-none focus:ring-2 focus:ring-[#9cd0ec] bg-zinc-50"
                  placeholder="Your company (if applicable)"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border border-zinc-300 rounded-none px-4 py-3 text-zinc-900 text-sm font-normal focus:outline-none focus:ring-2 focus:ring-[#9cd0ec] bg-zinc-50"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full border border-zinc-300 rounded-none px-4 py-3 text-zinc-900 text-sm font-normal focus:outline-none focus:ring-2 focus:ring-[#9cd0ec] bg-zinc-50"
                  placeholder="+44 (0) XXXX XXX XXX"
                />
              </div>
              <div>
                <label htmlFor="brief" className="block text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-1">
                  Project Brief <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="brief"
                  name="brief"
                  required
                  rows={5}
                  className="w-full border border-zinc-300 rounded-none px-4 py-3 text-zinc-900 text-sm font-normal focus:outline-none focus:ring-2 focus:ring-[#9cd0ec] bg-zinc-50 resize-y"
                  placeholder="Residential or commercial, scope, timelines, and any specific requirements..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-zinc-950 text-white border border-zinc-800 px-6 py-3 tracking-wide text-sm font-medium uppercase hover:bg-sky-400 hover:text-zinc-950 hover:border-sky-400 transition-colors duration-200 rounded-none"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
}

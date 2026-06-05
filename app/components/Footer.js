import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="mb-4">
              <Logo variant="dark" />
            </div>
            <p className="text-sm leading-relaxed mt-3">
              Premier commercial and residential joinery manufacturing, based in Sheffield.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Workshop Address</h3>
            <address className="text-sm not-italic leading-relaxed">
              M2M Joinery Ltd<br />
              Unit 1a Limestone Cottage Lane<br />
              Sheffield<br />
              S6 1NJ
            </address>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link href="/residential" className="hover:text-white transition-colors">Residential</Link>
              </li>
              <li>
                <Link href="/commercial" className="hover:text-white transition-colors">Commercial</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-zinc-800 mt-10 pt-6 text-xs text-zinc-600 text-center">
          &copy; {new Date().getFullYear()} M2M Joinery Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

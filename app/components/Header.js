'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Logo from './Logo';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/residential', label: 'Residential' },
  { href: '/commercial', label: 'Commercial' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-zinc-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Logo variant="light" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors duration-150 ${
                  pathname === href
                    ? 'border-b-2 pb-0.5'
                    : 'text-zinc-500 hover:text-zinc-950'
                }`}
                style={
                  pathname === href
                    ? { color: '#9cd0ec', borderColor: '#9cd0ec' }
                    : undefined
                }
              >
                {label}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden p-2 rounded text-zinc-500 hover:text-zinc-950 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="block w-5 h-0.5 bg-current mb-1" />
            <span className="block w-5 h-0.5 bg-current mb-1" />
            <span className="block w-5 h-0.5 bg-current" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-zinc-200 bg-white">
          <div className="px-4 py-3 flex flex-col gap-3">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium py-1 transition-colors"
                style={
                  pathname === href
                    ? { color: '#9cd0ec', fontWeight: 600 }
                    : { color: '#71717a' }
                }
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

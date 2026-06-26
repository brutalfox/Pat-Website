'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const residentialLinks = [
  { href: '/residential/bars', label: 'Bars & Entertaining' },
  { href: '/residential/living-rooms', label: 'Living Rooms & Media Walls' },
  { href: '/residential/home-offices', label: 'Executive Home Offices' },
  { href: '/residential/bedrooms', label: 'Bedrooms & Wardrobes' },
  { href: '/residential/kitchens-bathrooms', label: 'Kitchens & Bathrooms' },
  { href: '/residential/architectural-joinery', label: 'Architectural Joinery' },
  { href: '/residential/smart-storage', label: 'Smart Storage' },
];

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/residential', label: 'Residential', children: residentialLinks },
  { href: '/commercial', label: 'Commercial' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [residentialOpen, setResidentialOpen] = useState(false);
  const [mobileResidentialOpen, setMobileResidentialOpen] = useState(false);
  const closeTimer = useRef(null);

  const openResidential = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setResidentialOpen(true);
  };

  const scheduleCloseResidential = () => {
    closeTimer.current = setTimeout(() => setResidentialOpen(false), 120);
  };

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-zinc-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/brand/favicon.png"
              alt="M2M Joinery Ltd"
              width={44}
              height={44}
              className="h-11 w-11 object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label, children }) => {
              const isActive = pathname === href || (children && pathname.startsWith(href));

              if (!children) {
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`text-sm font-medium transition-colors duration-150 ${
                      isActive ? 'border-b-2 pb-0.5' : 'text-zinc-500 hover:text-zinc-950'
                    }`}
                    style={isActive ? { color: '#9cd0ec', borderColor: '#9cd0ec' } : undefined}
                  >
                    {label}
                  </Link>
                );
              }

              return (
                <div
                  key={href}
                  className="relative"
                  onMouseEnter={openResidential}
                  onMouseLeave={scheduleCloseResidential}
                >
                  <button
                    type="button"
                    onClick={() => setResidentialOpen((open) => !open)}
                    aria-expanded={residentialOpen}
                    aria-haspopup="true"
                    className={`flex items-center gap-1 text-sm font-medium transition-colors duration-150 ${
                      isActive ? 'pb-0.5' : 'text-zinc-500 hover:text-zinc-950'
                    }`}
                    style={isActive ? { color: '#9cd0ec' } : undefined}
                  >
                    {label}
                    <ChevronDown
                      size={14}
                      strokeWidth={2}
                      className={`transition-transform duration-200 ${
                        residentialOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <div
                    className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 transition-all duration-200 ${
                      residentialOpen
                        ? 'opacity-100 translate-y-0 visible'
                        : 'opacity-0 -translate-y-1 invisible pointer-events-none'
                    }`}
                  >
                    <div className="w-64 bg-zinc-950 border border-zinc-800 shadow-xl py-2">
                      {children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setResidentialOpen(false)}
                          className={`block px-5 py-3 text-sm font-medium tracking-wide transition-colors duration-150 ${
                            pathname === child.href
                              ? 'text-white'
                              : 'text-zinc-400 hover:text-white'
                          }`}
                          style={pathname === child.href ? { color: '#9cd0ec' } : undefined}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
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
          <div className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map(({ href, label, children }) => {
              const isActive = pathname === href || (children && pathname.startsWith(href));

              if (!children) {
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm font-medium py-2 transition-colors"
                    style={isActive ? { color: '#9cd0ec', fontWeight: 600 } : { color: '#71717a' }}
                  >
                    {label}
                  </Link>
                );
              }

              return (
                <div key={href} className="flex flex-col">
                  <button
                    type="button"
                    onClick={() => setMobileResidentialOpen((open) => !open)}
                    aria-expanded={mobileResidentialOpen}
                    className="flex items-center justify-between text-sm font-medium py-2 transition-colors"
                    style={isActive ? { color: '#9cd0ec', fontWeight: 600 } : { color: '#71717a' }}
                  >
                    {label}
                    <ChevronDown
                      size={16}
                      strokeWidth={2}
                      className={`transition-transform duration-200 ${
                        mobileResidentialOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {mobileResidentialOpen && (
                    <div className="flex flex-col bg-zinc-950 -mx-4 px-4 py-2">
                      {children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMenuOpen(false)}
                          className="text-sm font-medium py-2.5 transition-colors"
                          style={
                            pathname === child.href
                              ? { color: '#9cd0ec' }
                              : { color: '#a1a1aa' }
                          }
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}

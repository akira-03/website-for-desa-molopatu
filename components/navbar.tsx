'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { href: '/', label: 'Beranda' },
  { href: '/berita', label: 'Berita' },
  { href: '/produk', label: 'Produk' },
  { href: '/kontak', label: 'Kontak' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="animate-fade-down sticky top-0 z-50 border-b border-primary/30 bg-primary text-primary-foreground shadow-sm">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16">
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-4 transition-transform duration-300 hover:scale-[1.02]"
          >
            <img
              src="/logo-kabupaten-gorontalo.png"
              alt="Logo Desa Molopatodu"
              className="h-12 w-12 object-contain"
              onError={(event) => {
                event.currentTarget.style.display = 'none'
              }}
            />
            <span className="truncate text-2xl font-bold tracking-normal">
              Desa Molopatodu
            </span>
          </Link>

          <div className="hidden items-center gap-10 text-lg font-medium md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative transition hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-md transition hover:bg-white/20 md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="animate-fade-down space-y-1 border-t border-primary-foreground/10 pb-4 pt-2 text-base font-medium md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-md px-3 py-3 transition hover:bg-white/20"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

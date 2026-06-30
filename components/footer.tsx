import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="animate-fade-up relative mt-16 overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 bg-[url('/hero-desa-molopatodu.png')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-accent/80" />
      <div className="relative mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="animate-fade-up">
            <h3 className="mb-4 text-lg font-bold">Tentang Kami</h3>
            <p className="text-sm leading-relaxed opacity-90">
              Desa Molopatodu adalah desa yang dikenal dengan produk olahan pangan berkualitas tinggi. Kami berkomitmen untuk menjual produk-produk terbaik dari UMKM lokal kami.
            </p>
          </div>

          <div className="animate-fade-up animate-delay-100">
            <h3 className="mb-4 text-lg font-bold">Link Cepat</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:opacity-80 transition">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/produk" className="hover:opacity-80 transition">
                  Produk
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:opacity-80 transition">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          <div className="animate-fade-up animate-delay-200">
            <h3 className="mb-4 text-lg font-bold">Hubungi Kami</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>(62) 812-3456-7890</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@molopatodu.id</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1" />
                <span>Desa Molopatodu, Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm">
          <p>&copy; 2024 Desa Molopatodu. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}

import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="animate-fade-up bg-primary text-primary-foreground mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tentang Desa */}
          <div className="animate-fade-up">
            <h3 className="font-bold text-lg mb-4">Tentang Kami</h3>
            <p className="text-sm opacity-90">
              Desa Molopatodu adalah desa yang dikenal dengan produk olahan pangan berkualitas tinggi. Kami berkomitmen untuk menjual produk-produk terbaik dari UMKM lokal kami.
            </p>
          </div>

          {/* Link Cepat */}
          <div className="animate-fade-up animate-delay-100">
            <h3 className="font-bold text-lg mb-4">Link Cepat</h3>
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

          {/* Kontak */}
          <div className="animate-fade-up animate-delay-200">
            <h3 className="font-bold text-lg mb-4">Hubungi Kami</h3>
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

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2024 Desa Molopatodu. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}

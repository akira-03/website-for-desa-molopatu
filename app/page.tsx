import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { TentangDesaSection } from '@/components/tentang-desa-section'
import { AparatDesaSection } from '@/components/aparat-desa-section'
import { PetaDesaSection } from '@/components/peta-desa-section'
import { products } from '@/lib/products'
import Link from 'next/link'
import {
  ArrowRight,
  Award,
  Leaf,
  MapPin,
  Newspaper,
  ShoppingBag,
  Users,
} from 'lucide-react'

const strengths = [
  {
    title: 'Produk Lokal',
    description:
      'Produk dibuat oleh pelaku UMKM desa dengan bahan yang dekat dengan kehidupan masyarakat Molopatodu.',
    icon: Leaf,
  },
  {
    title: 'Harga Terjangkau',
    description:
      'Harga produk dijaga tetap ramah untuk masyarakat tanpa mengurangi kualitas rasa dan kemasan.',
    icon: ShoppingBag,
  },
  {
    title: 'Dukung Warga',
    description:
      'Setiap pembelian ikut membantu perputaran ekonomi dan pengembangan usaha kecil di desa.',
    icon: Users,
  },
  {
    title: 'Kualitas Terjaga',
    description:
      'Produk dipilih dari olahan yang layak dipasarkan dan terus dikembangkan bersama warga.',
    icon: Award,
  },
]

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <section className="section-reveal relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden border-b border-primary/20 bg-white px-4 py-16">
          <img
            src="/hero-desa-molopatodu.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/82 to-white/55" />
          <div className="absolute inset-0 bg-primary/10" />
          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="animate-fade-right text-center lg:text-left">
              <div className="animate-scale-in mb-6 inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-white/80 px-4 py-2 text-sm font-semibold text-primary shadow-sm">
                <MapPin size={16} />
                Website Resmi Desa Molopatodu
              </div>

              <h1 className="animate-fade-up animate-delay-100 mb-6 text-5xl font-bold leading-tight text-balance text-foreground md:text-7xl">
                Selamat Datang di Desa Molopatodu
              </h1>

              <p className="animate-fade-up animate-delay-200 mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl lg:mx-0">
                Temukan informasi desa, berita kegiatan, dan produk unggulan
                masyarakat Molopatodu dalam satu tempat yang bersih dan mudah
                diakses.
              </p>

              <div className="animate-fade-up animate-delay-300 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                <Link
                  href="/produk"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-8 py-4 font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
                >
                  Lihat Produk
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/berita"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary px-8 py-4 font-semibold text-primary transition-all duration-300 hover:bg-primary/10"
                >
                  Baca Berita
                  <Newspaper size={18} />
                </Link>
              </div>
            </div>

            <div className="animate-fade-left animate-delay-200 mx-auto w-full max-w-md overflow-hidden rounded-lg border border-primary/25 bg-white/90 shadow-xl shadow-primary/10 lg:max-w-none">
              <div className="relative h-72 overflow-hidden md:h-80">
                <img
                  src="/hero-desa-molopatodu.png"
                  alt="Pemandangan Desa Molopatodu"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center gap-4 rounded-lg border border-white/35 bg-white/90 p-4 shadow-lg backdrop-blur">
                  <img
                    src="/logo-kabupaten-gorontalo.png"
                    alt="Logo Kabupaten Gorontalo"
                    className="animate-float h-14 w-14 flex-shrink-0 object-contain"
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-primary">
                      Desa Molopatodu
                    </p>
                    <h2 className="truncate text-xl font-bold">
                      Informasi Desa
                    </h2>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 p-6 sm:grid-cols-3">
                <div className="animate-scale-in animate-delay-300 rounded-lg bg-primary/10 p-4">
                  <p className="text-3xl font-bold text-primary">4</p>
                  <p className="text-sm text-muted-foreground">
                    Produk unggulan
                  </p>
                </div>
                <div className="animate-scale-in animate-delay-400 rounded-lg bg-secondary/20 p-4">
                  <p className="text-3xl font-bold text-primary">3</p>
                  <p className="text-sm text-muted-foreground">
                    Berita terbaru
                  </p>
                </div>
                <div className="animate-scale-in animate-delay-500 rounded-lg bg-accent/10 p-4">
                  <p className="text-3xl font-bold text-primary">1</p>
                  <p className="text-sm text-muted-foreground">
                    Peta lokasi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-reveal px-4 py-20 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="animate-fade-up mb-12 max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
                Keunggulan Desa
              </p>
              <h2 className="mb-4 text-4xl font-bold text-balance md:text-5xl">
                Desa yang tumbuh lewat produk lokal dan kerja bersama
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Halaman home dirancang untuk langsung memperlihatkan identitas,
                produk, berita, dan akses informasi penting Desa Molopatodu.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {strengths.map((item, index) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.title}
                    className="animate-fade-up hover-lift rounded-lg border border-border bg-card p-6 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10"
                    style={{ animationDelay: `${index * 90}ms` }}
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/15 text-primary">
                      <Icon size={24} />
                    </div>
                    <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                    <p className="leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="section-reveal border-y border-primary/15 bg-primary/5 px-4 py-20 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="animate-fade-up mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-3xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
                  Produk Unggulan
                </p>
                <h2 className="mb-4 text-4xl font-bold text-balance md:text-5xl">
                  Olahan lokal dari masyarakat Molopatodu
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Pilih produk untuk melihat penjelasan lengkap, manfaat, dan
                  informasi pemesanan.
                </p>
              </div>

              <Link
                href="/produk"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary px-6 py-3 font-semibold text-primary transition-all duration-300 hover:bg-primary/10"
              >
                Semua Produk
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {products.map((product, index) => (
                <Link
                  key={product.id}
                  href={`/produk/${product.slug}`}
                  className="animate-fade-up hover-lift group rounded-lg border border-border bg-white p-6 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/15 text-2xl font-bold text-primary">
                    {product.image}
                  </div>
                  <p className="mb-2 text-sm font-semibold text-primary">
                    {product.category}
                  </p>
                  <h3 className="mb-3 text-xl font-bold transition-colors group-hover:text-primary">
                    {product.name}
                  </h3>
                  <p className="mb-5 line-clamp-3 leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>
                  <span className="inline-flex items-center gap-2 font-semibold text-primary">
                    Lihat Detail
                    <ArrowRight size={16} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <TentangDesaSection />
        <AparatDesaSection />
        <PetaDesaSection />

        <section className="section-reveal px-4 py-20 md:py-24">
          <div className="animate-scale-in mx-auto max-w-5xl rounded-lg bg-gradient-to-r from-primary to-accent px-6 py-14 text-center text-primary-foreground md:px-12">
            <h2 className="mb-5 text-4xl font-bold text-balance md:text-5xl">
              Jelajahi produk dan kabar terbaru Desa Molopatodu
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed opacity-90">
              Website ini menjadi pintu informasi untuk mengenal desa,
              mengikuti berita, dan menemukan produk unggulan masyarakat.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/produk"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-primary transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-black/20"
              >
                Lihat Produk
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/kontak"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white/15"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

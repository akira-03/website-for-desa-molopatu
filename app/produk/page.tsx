import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { products } from '@/lib/products'
import { ArrowRight, ShoppingCart } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Produk | Desa Molopatodu',
  description: 'Jelajahi empat produk unggulan Desa Molopatodu.',
}

export default function ProdukPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="section-reveal relative overflow-hidden px-4 py-16 md:py-24">
          <div className="animate-shimmer absolute inset-0 bg-gradient-to-r from-primary/15 to-secondary/15" />
          <div className="animate-pulse-soft absolute right-0 top-0 h-72 w-72 -translate-y-1/2 translate-x-1/2 rounded-full bg-accent/10" />

          <div className="animate-fade-up relative mx-auto max-w-6xl">
            <div className="animate-scale-in mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-gradient-to-r from-primary/20 to-accent/20 px-4 py-2">
              <ShoppingCart size={16} className="text-primary" />
              <span className="text-sm font-semibold text-primary">
                Produk Unggulan Desa
              </span>
            </div>
            <h1 className="animate-fade-up animate-delay-100 mb-4 text-5xl font-bold text-balance md:text-6xl">
              Jelajahi Produk Kami
            </h1>
            <p className="animate-fade-up animate-delay-200 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Empat produk pilihan dari UMKM lokal Desa Molopatodu. Klik produk
              untuk membaca penjelasan lengkap dan keunggulannya.
            </p>
          </div>
        </section>

        <section className="section-reveal px-4 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {products.map((product, index) => (
                <Link
                  key={product.id}
                  href={`/produk/${product.slug}`}
                  className="animate-fade-up hover-lift group relative overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/20"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                    <span className="flex h-24 w-24 items-center justify-center rounded-full bg-white text-3xl font-bold text-primary shadow-sm transition-transform duration-500 group-hover:scale-110">
                      {product.image}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>

                  <div className="relative p-6">
                    <div className="mb-3">
                      <span className="inline-flex items-center rounded-full border border-primary/30 bg-gradient-to-r from-primary/20 to-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {product.category}
                      </span>
                    </div>

                    <h3 className="mb-2 line-clamp-2 text-lg font-bold transition-colors group-hover:text-primary">
                      {product.name}
                    </h3>

                    <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                      {product.description}
                    </p>

                    <div className="flex items-end justify-between border-t border-border pt-4">
                      <div>
                        <span className="text-xs text-muted-foreground">
                          Harga
                        </span>
                        <div className="bg-gradient-to-r from-primary to-accent bg-clip-text text-2xl font-bold text-transparent">
                          Rp{product.price.toLocaleString('id-ID')}
                        </div>
                      </div>
                      <span className="rounded-xl bg-gradient-to-r from-primary to-accent p-3 text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/40">
                        <ArrowRight size={20} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-reveal relative mb-12 overflow-hidden px-4 py-20">
          <div className="animate-shimmer absolute inset-0 bg-gradient-to-b from-primary/5 via-secondary/5 to-accent/5" />
          <div className="animate-pulse-soft absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

          <div className="animate-scale-in relative mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-balance md:text-5xl">
              Tertarik Untuk Memesan?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Hubungi kami melalui halaman kontak untuk informasi lebih detail
              tentang produk, pemesanan, dan pengiriman.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/kontak"
                className="inline-block rounded-xl bg-gradient-to-r from-primary to-accent px-10 py-4 font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/40"
              >
                Hubungi Kami Sekarang
              </Link>
              <a
                href="https://wa.me/62"
                className="inline-block rounded-xl border-2 border-primary px-10 py-4 font-semibold text-primary transition-all duration-300 hover:bg-primary/5"
              >
                Chat WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

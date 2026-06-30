import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { CalendarDays, Newspaper } from 'lucide-react'

const news = [
  {
    title: 'UMKM Desa Molopatodu Terus Mengembangkan Produk Lokal',
    date: '30 Juni 2026',
    excerpt:
      'Pelaku UMKM Desa Molopatodu terus memperkuat produksi olahan pangan lokal agar semakin dikenal masyarakat luas.',
  },
  {
    title: 'Aparat Desa Dorong Pemasaran Produk Melalui Website',
    date: '25 Juni 2026',
    excerpt:
      'Website desa dimanfaatkan sebagai media informasi sekaligus etalase digital untuk memperkenalkan produk unggulan desa.',
  },
  {
    title: 'Warga Mengolah Kelapa Menjadi Produk Bernilai Ekonomi',
    date: '20 Juni 2026',
    excerpt:
      'Kelapa lokal diolah menjadi minyak kelapa kampung sebagai salah satu produk yang memiliki potensi ekonomi bagi warga.',
  },
]

export const metadata = {
  title: 'Berita | Desa Molopatodu',
  description: 'Kabar terbaru dan informasi kegiatan dari Desa Molopatodu.',
}

export default function BeritaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="section-reveal relative overflow-hidden px-4 py-16 md:py-24">
          <div className="animate-shimmer absolute inset-0 bg-gradient-to-r from-primary/15 to-secondary/15" />
          <div className="animate-pulse-soft absolute right-0 top-0 h-72 w-72 -translate-y-1/2 translate-x-1/2 rounded-full bg-accent/10" />

          <div className="animate-fade-up relative mx-auto max-w-6xl">
            <div className="animate-scale-in mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-gradient-to-r from-primary/20 to-accent/20 px-4 py-2">
              <Newspaper size={16} className="text-primary" />
              <span className="text-sm font-semibold text-primary">
                Kabar Desa
              </span>
            </div>
            <h1 className="animate-fade-up animate-delay-100 mb-4 text-5xl font-bold text-balance md:text-6xl">
              Berita Desa Molopatodu
            </h1>
            <p className="animate-fade-up animate-delay-200 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Informasi terbaru tentang kegiatan desa, perkembangan UMKM, dan
              kabar masyarakat Desa Molopatodu.
            </p>
          </div>
        </section>

        <section className="section-reveal px-4 py-20">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
            {news.map((item, index) => (
              <article
                key={item.title}
                className="animate-fade-up hover-lift rounded-2xl border border-border bg-card p-6 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Newspaper size={24} />
                </div>
                <div className="mb-4 flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <CalendarDays size={16} />
                  {item.date}
                </div>
                <h2 className="mb-3 text-xl font-bold leading-snug">
                  {item.title}
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  {item.excerpt}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { getProductBySlug, products } from '@/lib/products'
import { ArrowLeft, CheckCircle2, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface ProductDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: ProductDetailPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return {
      title: 'Produk Tidak Ditemukan | Desa Molopatodu',
    }
  }

  return {
    title: `${product.name} | Desa Molopatodu`,
    description: product.description,
  }
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="section-reveal relative overflow-hidden px-4 py-16 md:py-24">
          <div className="animate-shimmer absolute inset-0 bg-gradient-to-r from-primary/15 via-secondary/10 to-accent/15" />

          <div className="relative mx-auto max-w-6xl">
            <Link
              href="/produk"
              className="animate-fade-right mb-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:-translate-x-1 hover:text-accent"
            >
              <ArrowLeft size={16} />
              Kembali ke Produk
            </Link>

            <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="animate-scale-in flex aspect-square items-center justify-center rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/20 to-secondary/20">
                <span className="animate-float flex h-40 w-40 items-center justify-center rounded-full bg-white text-5xl font-bold text-primary shadow-lg">
                  {product.image}
                </span>
              </div>

              <div className="animate-fade-left animate-delay-100">
                <span className="animate-scale-in mb-4 inline-flex rounded-full border border-primary/30 bg-primary/15 px-4 py-2 text-sm font-semibold text-primary">
                  {product.category}
                </span>
                <h1 className="animate-fade-up animate-delay-200 mb-5 text-4xl font-bold text-balance md:text-6xl">
                  {product.name}
                </h1>
                <p className="animate-fade-up animate-delay-300 mb-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
                  {product.description}
                </p>
                <div className="animate-fade-up animate-delay-400 mb-8">
                  <span className="text-sm font-medium text-muted-foreground">
                    Harga
                  </span>
                  <div className="bg-gradient-to-r from-primary to-accent bg-clip-text text-4xl font-bold text-transparent">
                    Rp{product.price.toLocaleString('id-ID')}
                  </div>
                </div>
                <Link
                  href="/kontak"
                  className="animate-fade-up animate-delay-500 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-8 py-4 font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/40"
                >
                  <ShoppingCart size={20} />
                  Pesan Produk
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-reveal px-4 py-20">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <article className="animate-fade-right rounded-2xl border border-border bg-card p-8 md:p-10">
              <h2 className="mb-6 text-3xl font-bold">Tentang Produk</h2>
              <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                {product.details.map((detail, index) => (
                  <p
                    key={detail}
                    className="animate-fade-up"
                    style={{ animationDelay: `${index * 90}ms` }}
                  >
                    {detail}
                  </p>
                ))}
              </div>
            </article>

            <aside className="animate-fade-left animate-delay-100 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8 md:p-10">
              <h2 className="mb-6 text-2xl font-bold">Keunggulan</h2>
              <div className="space-y-4">
                {product.benefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="animate-fade-up flex items-start gap-3"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="leading-relaxed text-muted-foreground">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

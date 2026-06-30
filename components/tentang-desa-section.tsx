'use client'

import { DESA_CONFIG } from '@/lib/constants'
import { BookOpen, Lightbulb, Target } from 'lucide-react'

export function TentangDesaSection() {
  return (
    <section className="section-reveal px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="animate-fade-up mb-16 text-center">
          <div className="animate-scale-in mb-6 inline-flex items-center gap-2 rounded-lg border border-primary/25 bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
            <BookOpen size={16} className="text-primary" />
            <span className="text-sm font-semibold text-primary">
              Tentang Kami
            </span>
          </div>
          <h2 className="animate-fade-up animate-delay-100 mb-4 text-4xl font-bold text-balance md:text-5xl">
            Mengenal Desa Molopatodu
          </h2>
          <p className="animate-fade-up animate-delay-200 mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Desa dengan kehidupan agraris, potensi perkebunan, dan semangat
            warga untuk membangun ekonomi lokal yang berkelanjutan.
          </p>
        </div>

        <div className="animate-fade-up mb-12 overflow-hidden rounded-2xl border border-border bg-white shadow-xl shadow-primary/5">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative min-h-72 overflow-hidden">
              <img
                src="/hero-desa-molopatodu.png"
                alt="Suasana pedesaan Desa Molopatodu"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-primary/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
                  Sejarah Desa
                </p>
                <h3 className="mt-2 text-3xl font-bold text-white">
                  Akar desa, alam, dan kerja warga
                </h3>
              </div>
            </div>

            <div className="space-y-5 p-8 md:p-10">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {DESA_CONFIG.tentang.sejarah}
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Sejarah terbentuknya Desa Molopatodu, yang terletak di
                Kecamatan Bongomeme, Kabupaten Gorontalo, lekat dengan
                perkembangan wilayah administratif dan adat di Gorontalo. Nama
                Molopatodu berasal dari bahasa Gorontalo yang menggambarkan
                kondisi atau peristiwa alam pada masa pembentukan desa.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Dalam perkembangannya, Desa Molopatodu menjadi kawasan pedesaan
                yang kuat pada sektor pertanian dan perkebunan, termasuk potensi
                kelapa yang terus dikembangkan bersama masyarakat.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="animate-fade-right hover-lift group relative overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-br from-white to-primary/5 p-8 shadow-sm hover:border-primary/60 hover:shadow-xl hover:shadow-primary/15 md:p-10">
            <div className="absolute right-0 top-0 h-28 w-28 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/10 transition-colors group-hover:bg-primary/15" />
            <div className="relative">
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-primary/20 to-secondary/30 p-3 transition-colors group-hover:from-primary/30 group-hover:to-secondary/40">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-4 text-2xl font-bold">Visi</h3>
              <p className="leading-relaxed text-muted-foreground">
                {DESA_CONFIG.tentang.visi}
              </p>
            </div>
          </div>

          <div className="animate-fade-left animate-delay-100 hover-lift group relative overflow-hidden rounded-2xl border border-secondary/50 bg-gradient-to-br from-white to-secondary/20 p-8 shadow-sm hover:border-secondary/80 hover:shadow-xl hover:shadow-secondary/20 md:p-10">
            <div className="absolute right-0 top-0 h-28 w-28 -translate-y-1/2 translate-x-1/2 rounded-full bg-secondary/30 transition-colors group-hover:bg-secondary/40" />
            <div className="relative">
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-secondary/40 to-primary/15 p-3 transition-colors group-hover:from-secondary/60 group-hover:to-primary/25">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-4 text-2xl font-bold">Misi</h3>
              <ul className="space-y-3">
                {DESA_CONFIG.tentang.misi.map((misi, index) => (
                  <li
                    key={misi}
                    className="animate-fade-up flex gap-3"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span className="leading-relaxed text-muted-foreground">
                      {misi}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

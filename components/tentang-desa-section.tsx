'use client'

import { DESA_CONFIG } from '@/lib/constants'
import { Lightbulb, Target, BookOpen } from 'lucide-react'

export function TentangDesaSection() {
  return (
    <section className="section-reveal py-20 md:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="animate-fade-up text-center mb-16">
          <div className="animate-scale-in inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 mb-6">
            <BookOpen size={16} className="text-primary" />
            <span className="text-sm font-semibold text-primary">Tentang Kami</span>
          </div>
          <h2 className="animate-fade-up animate-delay-100 text-4xl md:text-5xl font-bold mb-4 text-balance">
            Mengenal Desa Molopatodu
          </h2>
          <p className="animate-fade-up animate-delay-200 text-lg text-muted-foreground max-w-2xl mx-auto">
            Desa dengan warisan budaya kaya dan komitmen terhadap pertumbuhan ekonomi berkelanjutan
          </p>
        </div>

        {/* Sejarah */}
        <div className="animate-fade-up bg-gradient-to-br from-card/80 to-card/40 border border-border rounded-2xl p-8 md:p-12 mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Sejarah Desa</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {DESA_CONFIG.tentang.sejarah}
          </p>
        </div>

        {/* Visi dan Misi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Visi */}
          <div className="animate-fade-right hover-lift group relative bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 hover:border-primary/60 rounded-2xl p-8 md:p-10 hover:shadow-xl hover:shadow-primary/20">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
            <div className="relative">
              <div className="mb-4 inline-block p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl group-hover:from-primary/40 group-hover:to-primary/20 transition-colors">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Visi</h3>
              <p className="text-muted-foreground leading-relaxed">
                {DESA_CONFIG.tentang.visi}
              </p>
            </div>
          </div>

          {/* Misi */}
          <div className="animate-fade-left animate-delay-100 hover-lift group relative bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/30 hover:border-secondary/60 rounded-2xl p-8 md:p-10 hover:shadow-xl hover:shadow-secondary/20">
            <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-secondary/10 transition-colors" />
            <div className="relative">
              <div className="mb-4 inline-block p-3 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-xl group-hover:from-secondary/40 group-hover:to-secondary/20 transition-colors">
                <Target className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Misi</h3>
              <ul className="space-y-3">
                {DESA_CONFIG.tentang.misi.map((misi, index) => (
                  <li
                    key={index}
                    className="animate-fade-up flex gap-3"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <span className="text-primary font-bold flex-shrink-0">•</span>
                    <span className="text-muted-foreground leading-relaxed">{misi}</span>
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

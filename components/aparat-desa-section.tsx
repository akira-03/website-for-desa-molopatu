'use client'

import { APARAT_DESA } from '@/lib/constants'
import { AvatarOfficial } from './avatar-official'
import { Users } from 'lucide-react'

export function AparatDesaSection() {
  return (
    <section className="section-reveal py-20 md:py-28 px-4 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="animate-fade-up text-center mb-16">
          <div className="animate-scale-in inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 mb-6">
            <Users size={16} className="text-primary" />
            <span className="text-sm font-semibold text-primary">Aparat Desa</span>
          </div>
          <h2 className="animate-fade-up animate-delay-100 text-4xl md:text-5xl font-bold mb-4 text-balance">
            Struktur Organisasi Desa
          </h2>
          <p className="animate-fade-up animate-delay-200 text-lg text-muted-foreground max-w-2xl mx-auto">
            Tim profesional yang berdedikasi melayani dan memberdayakan masyarakat desa
          </p>
        </div>

        {/* Officials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {APARAT_DESA.map((official, index) => (
            <div
              key={official.id}
              className="animate-fade-up flex justify-center"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <AvatarOfficial
                nama={official.nama}
                posisi={official.posisi}
                deskripsi={official.deskripsi}
                warna={official.warna}
                inisial={official.inisial}
                foto={official.foto}
              />
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="animate-scale-in mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8 text-center">
          <p className="text-muted-foreground leading-relaxed">
            Aparat desa kami berkomitmen untuk memberikan pelayanan terbaik dan membawa desa menuju masa depan yang lebih sejahtera dan maju.
          </p>
        </div>
      </div>
    </section>
  )
}

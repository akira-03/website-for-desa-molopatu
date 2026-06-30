'use client'

import { APARAT_DESA } from '@/lib/constants'
import { AvatarOfficial } from './avatar-official'
import { Users } from 'lucide-react'

export function AparatDesaSection() {
  return (
    <section className="section-reveal bg-gradient-to-b from-background via-primary/5 to-background px-4 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="animate-fade-up mb-16 text-center">
          <div className="animate-scale-in mb-6 inline-flex items-center gap-2 rounded-lg border border-primary/25 bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
            <Users size={16} className="text-primary" />
            <span className="text-sm font-semibold text-primary">
              Aparat Desa
            </span>
          </div>
          <h2 className="animate-fade-up animate-delay-100 mb-4 text-4xl font-bold text-balance md:text-5xl">
            Struktur Organisasi Desa
          </h2>
          <p className="animate-fade-up animate-delay-200 mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Tim pemerintahan desa yang berdedikasi melayani masyarakat dan
            mengawal program pembangunan desa.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {APARAT_DESA.map((official, index) => (
            <div
              key={official.id}
              className="animate-fade-up flex"
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

        <div className="animate-scale-in mt-16 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 via-white to-secondary/20 p-8 text-center shadow-sm shadow-primary/5">
          <p className="leading-relaxed text-muted-foreground">
            Aparat desa kami berkomitmen untuk memberikan pelayanan terbaik dan membawa desa menuju masa depan yang lebih sejahtera dan maju.
          </p>
        </div>
      </div>
    </section>
  )
}

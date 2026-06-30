'use client'

import Image from 'next/image'

interface AvatarOfficialProps {
  nama: string
  posisi: string
  deskripsi: string
  warna: string
  inisial: string
  foto?: string
}

export function AvatarOfficial({
  nama,
  posisi,
  deskripsi,
  warna,
  inisial,
  foto,
}: AvatarOfficialProps) {
  return (
    <div className="group w-full rounded-2xl border border-border/80 bg-white/95 p-6 text-center shadow-sm shadow-primary/5 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
      <div className={`animate-float relative mx-auto mb-5 h-32 w-32 overflow-hidden rounded-full bg-gradient-to-br ${warna} p-1 shadow-lg shadow-primary/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-primary/30 md:h-36 md:w-36`}>
        {foto ? (
          <Image
            src={foto}
            alt={nama}
            fill
            className="object-cover rounded-full"
            priority={false}
          />
        ) : (
          <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
            <span className={`text-5xl md:text-6xl font-bold bg-gradient-to-br ${warna} bg-clip-text text-transparent`}>
              {inisial}
            </span>
          </div>
        )}
      </div>

      <h3 className="mb-1 text-lg font-bold md:text-xl">{nama}</h3>
      <p className="mb-3 text-sm font-semibold text-primary">{posisi}</p>
      <p className="mx-auto max-w-xs text-sm leading-relaxed text-muted-foreground">
        {deskripsi}
      </p>
    </div>
  )
}

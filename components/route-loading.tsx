'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

const MIN_LOADING_TIME = 1000

export function RouteLoading() {
  const pathname = usePathname()
  const previousPathname = useRef(pathname)
  const startedAt = useRef(0)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const clearLoadingTimer = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    }

    const showLoading = () => {
      clearLoadingTimer()
      startedAt.current = Date.now()
      setIsLoading(true)
    }

    const handleClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return
      }

      if (!(event.target instanceof Element)) {
        return
      }

      const anchor = event.target.closest('a')

      if (!anchor) {
        return
      }

      const href = anchor.getAttribute('href')
      const targetAttr = anchor.getAttribute('target')

      if (!href || href.startsWith('#') || targetAttr === '_blank') {
        return
      }

      const nextUrl = new URL(href, window.location.href)

      if (
        nextUrl.origin !== window.location.origin ||
        nextUrl.pathname === window.location.pathname
      ) {
        return
      }

      showLoading()
    }

    document.addEventListener('click', handleClick, true)

    return () => {
      document.removeEventListener('click', handleClick, true)
      clearLoadingTimer()
    }
  }, [])

  useEffect(() => {
    if (previousPathname.current === pathname) {
      return
    }

    previousPathname.current = pathname

    if (!startedAt.current) {
      startedAt.current = Date.now()
      setIsLoading(true)
    }

    const elapsed = Date.now() - startedAt.current
    const remaining = Math.max(MIN_LOADING_TIME - elapsed, 0)

    timeoutRef.current = setTimeout(() => {
      startedAt.current = 0
      setIsLoading(false)
    }, remaining)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [pathname])

  if (!isLoading) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[9999] grid place-items-center bg-white/90 px-6 text-center backdrop-blur-md">
      <div className="animate-scale-in is-visible flex flex-col items-center">
        <div className="relative mb-5 flex h-28 w-28 items-center justify-center rounded-full border border-primary/20 bg-white shadow-2xl shadow-primary/20">
          <div className="absolute inset-0 rounded-full border-4 border-primary/15 border-t-primary animate-spin" />
          <img
            src="/logo-kabupaten-gorontalo.png"
            alt="Logo Desa Molopatodu"
            className="h-20 w-20 object-contain"
          />
        </div>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
          Desa Molopatodu
        </p>
        <p className="mt-2 text-lg font-bold text-foreground">
          Memuat halaman...
        </p>
      </div>
    </div>
  )
}

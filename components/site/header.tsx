'use client'

import { useEffect, useState } from 'react'
import { Menu, Search, X, ShoppingBag } from 'lucide-react'
import { Logo } from './logo'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Categorias', href: '#categorias' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

const CATALOG_URL =
  'https://lista.mercadolivre.com.br/_CustId_3292895120'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'glass shadow-[0_8px_30px_rgba(0,0,0,0.4)]' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6 lg:px-8">
        <a href="#inicio" aria-label="MDC Imports Express - Início">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Menu principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-2">
            <Search className="size-4 text-muted-foreground" aria-hidden="true" />
            <input
              type="search"
              placeholder="Buscar produtos..."
              aria-label="Buscar produtos"
              className="w-32 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none lg:w-40"
            />
          </div>
          <a
            href={CATALOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full gold-gradient-bg px-5 py-2.5 text-sm font-semibold text-[color:var(--preto-premium)] transition-transform duration-300 hover:scale-[1.04]"
          >
            <ShoppingBag className="size-4" aria-hidden="true" />
            Ver Catálogo
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="glass border-t border-border lg:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4"
            aria-label="Menu mobile"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <a
              href={CATALOG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full gold-gradient-bg px-5 py-3 text-sm font-semibold text-[color:var(--preto-premium)]"
            >
              <ShoppingBag className="size-4" aria-hidden="true" />
              Ver Catálogo no Mercado Livre
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ShoppingCart } from 'lucide-react'

const CATALOG_URL = 'https://lista.mercadolivre.com.br/_CustId_3292895120'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/hero-gate.png)' }}
      />
      {/* Overlay escuro elegante */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#0b0b0b]/95 via-[#0b0b0b]/80 to-[#0b0b0b]/40"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-transparent to-[#0b0b0b]/60"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-28 pb-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary"
          >
            Tecnologia em automação de portões
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl"
          >
            Automação inteligente para{' '}
            <span className="gold-gradient-text">seu portão</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground"
          >
            Controles remotos, centrais eletrônicas e acessórios com qualidade
            profissional e envio para todo o Brasil.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#produtos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-secondary/70 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-all duration-300 hover:border-primary/50 hover:text-primary"
            >
              Ver Produtos
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href={CATALOG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full gold-gradient-bg px-7 py-3.5 text-sm font-semibold text-[color:var(--preto-premium)] shadow-[0_8px_30px_rgba(212,175,55,0.3)] transition-transform duration-300 hover:scale-[1.04]"
            >
              <ShoppingCart className="size-4" aria-hidden="true" />
              Comprar no Mercado Livre
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-primary" /> Produtos originais
            </span>
            <span className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-primary" /> Envio para todo o Brasil
            </span>
            <span className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-primary" /> Compra segura
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

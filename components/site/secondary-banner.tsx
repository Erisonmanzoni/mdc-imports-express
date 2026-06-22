'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const CATALOG_URL = 'https://lista.mercadolivre.com.br/_CustId_3292895120'

export function SecondaryBanner() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/banner-control.png)' }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#0b0b0b]/95 via-[#0b0b0b]/85 to-[#0b0b0b]/50"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
            Controle total na palma da{' '}
            <span className="gold-gradient-text">sua mão</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-pretty text-muted-foreground">
            Produtos selecionados para residências, condomínios e empresas.
            Praticidade, segurança e tecnologia para o seu dia a dia.
          </p>
          <a
            href={CATALOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full gold-gradient-bg px-7 py-3.5 text-sm font-semibold text-[color:var(--preto-premium)] shadow-[0_8px_30px_rgba(212,175,55,0.3)] transition-transform duration-300 hover:scale-[1.04]"
          >
            Explorar produtos
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

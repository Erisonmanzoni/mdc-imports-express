'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { categories } from '@/lib/products'

const CATALOG_URL = 'https://lista.mercadolivre.com.br/_CustId_3292895120'

export function Categories() {
  return (
    <section id="categorias" className="bg-[#0e0e0e] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-[0.3em] text-primary"
          >
            Navegue por
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-balance text-foreground sm:text-4xl"
          >
            Categorias
          </motion.h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.name}
              href={CATALOG_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-border"
            >
              <Image
                src={cat.image || '/placeholder.svg'}
                alt={cat.name}
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-[#0b0b0b]/40 to-transparent transition-opacity duration-300 group-hover:from-[#0b0b0b]/95" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4">
                <div>
                  <h3 className="font-heading text-base font-bold leading-tight text-foreground">
                    {cat.name}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {cat.description}
                  </p>
                </div>
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-[color:var(--preto-premium)]">
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

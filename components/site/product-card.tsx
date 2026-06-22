'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ShoppingCart, Star } from 'lucide-react'
import type { Product } from '@/lib/products'

export function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
    >
      <div className="relative aspect-square overflow-hidden bg-[color:var(--cinza-claro)]">
        {product.badge && (
          <span className="absolute left-3 top-3 z-10 inline-flex items-center gap-1 rounded-full gold-gradient-bg px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[color:var(--preto-premium)] shadow-md">
            <Star className="size-3 fill-current" aria-hidden="true" />
            {product.badge}
          </span>
        )}
        <Image
          src={product.image || '/placeholder.svg'}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="text-xs font-medium uppercase tracking-wider text-primary">
          {product.category}
        </span>
        <h3 className="mt-2 font-heading text-lg font-bold leading-snug text-foreground">
          {product.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>

        <a
          href={product.mercadoLivreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-full gold-gradient-bg px-5 py-3 text-sm font-semibold text-[color:var(--preto-premium)] transition-transform duration-300 hover:scale-[1.03]"
          onClick={() => { if (typeof window !== \"undefined\" && (window as any).fbq) { (window as any).fbq(\"track\", \"InitiateCheckout\"); } }}
        >
          <ShoppingCart className="size-4" aria-hidden="true" />
          Comprar no Mercado Livre
        </a>
      </div>
    </motion.article>
  )
}

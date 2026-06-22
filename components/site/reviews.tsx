'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'Carlos M.',
    location: 'São Paulo, SP',
    text: 'Produto excelente e entrega rápida. Os controles funcionaram de primeira, recomendo demais!',
  },
  {
    name: 'Fernanda R.',
    location: 'Belo Horizonte, MG',
    text: 'Funcionou perfeitamente no meu motor. Atendimento atencioso e tudo certo com o envio.',
  },
  {
    name: 'Roberto A.',
    location: 'Curitiba, PR',
    text: 'Loja confiável e produto original. Já é a segunda vez que compro e nunca tive problema.',
  },
]

export function Reviews() {
  return (
    <section className="bg-[#0e0e0e] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Depoimentos
          </span>
          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-balance text-foreground sm:text-4xl">
            O que dizem nossos clientes
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass relative flex flex-col gap-4 rounded-2xl p-7"
            >
              <Quote
                className="size-8 text-primary/40"
                aria-hidden="true"
              />
              <div className="flex gap-0.5" aria-label="5 de 5 estrelas">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="size-4 fill-primary text-primary"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="text-sm leading-relaxed text-foreground">
                {r.text}
              </blockquote>
              <figcaption className="mt-auto">
                <span className="block text-sm font-semibold text-foreground">
                  {r.name}
                </span>
                <span className="text-xs text-muted-foreground">
                  {r.location}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { Reveal } from './reveal'

const faqs = [
  {
    q: 'Os produtos são originais?',
    a: 'Sim. Trabalhamos exclusivamente com produtos originais das principais marcas do mercado, como Peccinin, Nice, Linear, PPA, Acton e RCG. Nada de réplicas ou itens paralelos.',
  },
  {
    q: 'Vocês entregam para todo o Brasil?',
    a: 'Sim, realizamos envios para todas as regiões do Brasil através do Mercado Envios, com código de rastreamento e prazos calculados pelo seu CEP.',
  },
  {
    q: 'A compra é segura?',
    a: 'Totalmente. Todas as vendas são processadas pelo Mercado Livre, que oferece o Mercado Pago e a garantia de compra protegida. Seu dinheiro só é liberado após a confirmação do recebimento.',
  },
  {
    q: 'Como funciona a garantia?',
    a: 'Todos os produtos possuem garantia. Em caso de qualquer problema, basta acionar nosso atendimento pelo Mercado Livre que cuidamos da troca ou solução o mais rápido possível.',
  },
]

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <Reveal delay={index * 0.06}>
      <div className="overflow-hidden rounded-2xl border border-border bg-card">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        >
          <span className="font-heading text-base font-semibold text-foreground sm:text-lg">
            {q}
          </span>
          <span
            className={`flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 ${
              open ? 'rotate-45' : ''
            }`}
          >
            <Plus className="size-4" aria-hidden="true" />
          </span>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                {a}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  )
}

export function Faq() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Dúvidas
          </span>
          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-balance text-foreground sm:text-4xl">
            Perguntas frequentes
          </h2>
        </div>
        <div className="mt-12 flex flex-col gap-4">
          {faqs.map((f, i) => (
            <FaqItem key={f.q} q={f.q} a={f.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import {
  Truck,
  ShieldCheck,
  BadgeCheck,
  Headphones,
  CreditCard,
} from 'lucide-react'

const benefits = [
  { icon: Truck, title: 'Entrega para Todo Brasil', text: 'Enviamos para todas as regiões' },
  { icon: ShieldCheck, title: 'Compra Segura', text: 'Pagamento protegido pelo ML' },
  { icon: BadgeCheck, title: 'Produtos Originais', text: 'Marcas líderes do mercado' },
  { icon: Headphones, title: 'Atendimento Especializado', text: 'Suporte técnico de verdade' },
  { icon: CreditCard, title: 'Parcelamento Facilitado', text: 'Em até 12x no cartão' },
]

export function Benefits() {
  return (
    <section className="relative z-10 -mt-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group glass flex flex-col items-center gap-3 rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-[color:var(--preto-premium)]">
                <b.icon className="size-6" aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold leading-snug text-foreground">
                {b.title}
              </span>
              <span className="text-xs text-muted-foreground">{b.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

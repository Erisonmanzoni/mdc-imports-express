import { ShieldCheck, Award, Package, Users } from 'lucide-react'
import { Reveal } from './reveal'

const stats = [
  { icon: Package, value: '+5.000', label: 'Pedidos enviados' },
  { icon: Users, value: '+4.900', label: 'Clientes satisfeitos' },
  { icon: Award, value: '100%', label: 'Produtos originais' },
  { icon: ShieldCheck, value: '5★', label: 'Reputação no ML' },
]

export function About() {
  return (
    <section id="sobre" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Quem somos
          </span>
          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-balance text-foreground sm:text-4xl">
            Sobre a MDC IMPORTS EXPRESS
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              A MDC IMPORTS EXPRESS é especializada em automação de portões,
              controles remotos, centrais de comando, travas eletromagnéticas e
              acessórios para motores. Trabalhamos apenas com produtos originais
              das principais marcas do mercado, garantindo qualidade e
              durabilidade em cada item.
            </p>
            <p>
              Nossa missão é oferecer soluções confiáveis para residências,
              condomínios e empresas, com atendimento especializado e suporte
              técnico de verdade. Da escolha do produto à instalação, nosso time
              está pronto para ajudar você a encontrar exatamente o que precisa.
            </p>
            <p>
              Com envio para todo o Brasil e compra 100% segura através do
              Mercado Livre, unimos a praticidade da maior plataforma de
              e-commerce do país à confiança de uma loja especializada.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass flex flex-col gap-3 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <s.icon className="size-6" aria-hidden="true" />
                </span>
                <span className="font-heading text-3xl font-extrabold gold-gradient-text">
                  {s.value}
                </span>
                <span className="text-sm text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

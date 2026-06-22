import { Mail, MapPin, ShoppingBag } from 'lucide-react'
import { Logo } from './logo'

const CATALOG_URL = 'https://lista.mercadolivre.com.br/_CustId_3292895120'

const quickLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Categorias', href: '#categorias' },
  { label: 'Sobre', href: '#sobre' },
]

export function Footer() {
  return (
    <footer id="contato" className="border-t border-border bg-[#080808]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Automação de portões, controles, centrais e acessórios com
              qualidade profissional e envio para todo o Brasil.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground">
              Links rápidos
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground">
              Institucional
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              <li>
                <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a
                  href={CATALOG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Mercado Livre Oficial
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground">
              Contato
            </h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-primary" aria-hidden="true" />
                contato@mdcimportsexpress.com.br
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="size-4 text-primary" aria-hidden="true" />
                Envio para todo o Brasil
              </li>
            </ul>
            <a
              href={CATALOG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full gold-gradient-bg px-5 py-2.5 text-sm font-semibold text-[color:var(--preto-premium)] transition-transform duration-300 hover:scale-[1.04]"
            >
              <ShoppingBag className="size-4" aria-hidden="true" />
              Ver Catálogo
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} MDC IMPORTS EXPRESS. Todos os
            direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Vitrine digital · Vendas realizadas via Mercado Livre
          </p>
        </div>
      </div>
    </footer>
  )
}

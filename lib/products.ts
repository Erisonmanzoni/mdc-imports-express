export type Product = {
  id: string
  name: string
  description: string
  badge?: string
  image: string
  mercadoLivreUrl: string
  category: string
}

export const products: Product[] = [
  {
    id: 'kit-3-controles-peccinin',
    name: 'Kit 3 Controles Peccinin 3C',
    description:
      'Conjunto com 3 controles remotos Peccinin 3C para portão eletrônico. Compatível com a maioria dos motores do mercado.',
    badge: 'Mais Vendido',
    image: '/images/produto-kit-3-controles.png',
    mercadoLivreUrl:
      'https://www.mercadolivre.com.br/kit-3-controles-peccinin-3c-para-porto-eletrnico/p/MLB49352438',
    category: 'Controles Remotos',
  },
  {
    id: 'kit-5-controles-nice-tx3c',
    name: 'Kit 5 Controles Nice TX-3C',
    description:
      'Kit com 5 controles remotos Peccinin Nice TX-3C 433 MHz. Ideal para condomínios e empresas com múltiplos usuários.',
    badge: 'Mais Vendido',
    image: '/images/produto-kit-5-controles.png',
    mercadoLivreUrl:
      'https://www.mercadolivre.com.br/kit-5-controle-remoto-peccinin-nice-tx-3c-433-mhz-motor-de-porto/p/MLB31807807',
    category: 'Controles Remotos',
  },
  {
    id: 'kit-10-controles-nice-linear',
    name: 'Kit 10 Controles Nice Linear',
    description:
      'Kit com 10 controles remotos Nice Linear 3TB de 3 botões, 433.92 MHz e alcance de até 100m. Perfeito para grandes condomínios.',
    badge: 'Mais Vendido',
    image: '/images/produto-kit-10-controles.png',
    mercadoLivreUrl:
      'https://www.mercadolivre.com.br/kit-10-controles-remotos-nice-linear-3tb-3-botoes-43392mhz-alcance-100m/p/MLB42846332',
    category: 'Controles Remotos',
  },
  {
    id: 'central-ac4-fit-up',
    name: 'Central de Comando AC4 Fit UP',
    description:
      'Central de comando AC4 Fit UP GU Acton para motor de portão, 433.92 MHz. Tecnologia confiável e fácil instalação.',
    badge: 'Mais Vendido',
    image: '/images/produto-central-ac4.png',
    mercadoLivreUrl:
      'https://www.mercadolivre.com.br/central-de-comando-ac4-fit-up-gu-acton-para-motor-porto-43392-mhz/p/MLB31039158',
    category: 'Centrais de Comando',
  },
  {
    id: 'central-acton-encoder',
    name: 'Central Acton AC4 Fit Encoder',
    description:
      'Central Acton AC4 Fit com freio motor PPA digital encoder, 433.92 MHz. Controle preciso e parada suave do portão.',
    badge: 'Mais Vendido',
    image: '/images/produto-central-encoder.png',
    mercadoLivreUrl:
      'https://www.mercadolivre.com.br/central-acton-ac4-fit-freio-motor-ppa-digital-encoder-43392mhz/p/MLB52367755',
    category: 'Centrais de Comando',
  },
  {
    id: 'trava-eletromagnetica-rcg',
    name: 'Trava Eletromagnética RCG Gate Lock',
    description:
      'Trava eletromagnética RCG Gate Lock 220V para portão automático. Mais segurança e travamento firme do portão.',
    badge: 'Mais Vendido',
    image: '/images/produto-trava-eletromagnetica.png',
    mercadoLivreUrl:
      'https://www.mercadolivre.com.br/trava-eletromagnetica-rcg-gate-lock-220v-para-porto-automatico/p/MLB35951309',
    category: 'Travas Eletromagnéticas',
  },
]

export type Category = {
  name: string
  description: string
  image: string
}

export const categories: Category[] = [
  {
    name: 'Controles Remotos',
    description: 'Peccinin, Nice, Linear e mais',
    image: '/images/categoria-controles.png',
  },
  {
    name: 'Centrais de Comando',
    description: 'Placas e centrais eletrônicas',
    image: '/images/categoria-centrais.png',
  },
  {
    name: 'Travas Eletromagnéticas',
    description: 'Mais segurança para o portão',
    image: '/images/categoria-travas.png',
  },
  {
    name: 'Automação de Portões',
    description: 'Kits e motores completos',
    image: '/images/categoria-automacao.png',
  },
  {
    name: 'Acessórios',
    description: 'Sensores, antenas e suportes',
    image: '/images/categoria-acessorios.png',
  },
]

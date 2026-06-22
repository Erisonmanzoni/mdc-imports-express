import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const playfair = Playfair_Display({
  variable: '--font-heading-sans',
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
})

const siteUrl = 'https://mdcimportsexpress.com.br'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'MDC IMPORTS EXPRESS | Automação de Portões, Controles e Centrais',
    template: '%s | MDC IMPORTS EXPRESS',
  },
  description:
    'Controles remotos, centrais eletrônicas, travas eletromagnéticas e acessórios para automação de portões com qualidade profissional e envio para todo o Brasil.',
  keywords: [
    'controle para portão',
    'controle remoto peccinin',
    'controle nice',
    'central ac4',
    'automação de portões',
    'trava eletromagnética',
    'motor de portão',
    'MDC Imports Express',
  ],
  authors: [{ name: 'MDC IMPORTS EXPRESS' }],
  creator: 'MDC IMPORTS EXPRESS',
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'MDC IMPORTS EXPRESS',
    title: 'MDC IMPORTS EXPRESS | Automação Inteligente para seu Portão',
    description:
      'Controles remotos, centrais eletrônicas e acessórios para automação de portões com qualidade profissional e envio para todo o Brasil.',
    images: [{ url: '/images/hero-gate.png', width: 1200, height: 630, alt: 'MDC Imports Express' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MDC IMPORTS EXPRESS | Automação Inteligente para seu Portão',
    description:
      'Controles remotos, centrais eletrônicas e acessórios para automação de portões.',
    images: ['/images/hero-gate.png'],
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0B0B0B',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1333393018753051');
fbq('track', 'PageView');`}
        </Script>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

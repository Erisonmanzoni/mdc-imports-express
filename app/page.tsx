import { Header } from '@/components/site/header'
import { Hero } from '@/components/site/hero'
import { Benefits } from '@/components/site/benefits'
import { MercadoLivreCatalog } from '@/components/site/mercadolivre-catalog'
import { Categories } from '@/components/site/categories'
import { SecondaryBanner } from '@/components/site/secondary-banner'
import { About } from '@/components/site/about'
import { Reviews } from '@/components/site/reviews'
import { Faq } from '@/components/site/faq'
import { Footer } from '@/components/site/footer'

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <MercadoLivreCatalog />
        <Categories />
        <SecondaryBanner />
        <About />
        <Reviews />
        <Faq />
      </main>
      <Footer />
    </>
  )
}

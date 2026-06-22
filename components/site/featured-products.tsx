import { products } from '@/lib/products'
import { ProductCard } from './product-card'
import { Reveal } from './reveal'

export function FeaturedProducts() {
  return (
    <section id="produtos" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Catálogo
          </span>
          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-balance text-foreground sm:text-4xl">
            Produtos em destaque
          </h2>
          <p className="mt-4 text-base leading-relaxed text-pretty text-muted-foreground">
            Os itens mais procurados para automação de portões, com a qualidade e
            a confiança que você precisa.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

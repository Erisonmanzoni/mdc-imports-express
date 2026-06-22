import { fetchSellerProducts } from '@/services/mercadolivre'

export async function MercadoLivreCatalog() {
 const products = await fetchSellerProducts()
 return (<section className="px-4 py-24 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><div className="text-center"><h2 className="mt-4 text-4xl font-bold">Todos os Produtos da MDC IMPORTS EXPRESS</h2></div><div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{products.map((product)=>(<div key={product.id} className="overflow-hidden rounded-2xl border border-yellow-600 bg-card"><img src={product.thumbnail} alt={product.title} className="h-64 w-full object-cover"/><div className="p-5"><h3 className="font-semibold">{product.title}</h3><p className="mt-3 text-2xl font-bold text-primary">R$ {product.price}</p><a href={product.permalink} target="_blank" rel="noopener noreferrer" className="mt-4 block rounded-xl bg-primary px-4 py-3 text-center font-bold text-black">Comprar no Mercado Livre</a></div></div>))}</div></div></section>)
}

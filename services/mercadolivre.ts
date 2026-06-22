export type MercadoLivreItem = {
  id: string
  title: string
  price: number
  permalink: string
  thumbnail: string
}

export async function fetchSellerProducts(): Promise<MercadoLivreItem[]> {
  const response = await fetch(
    'https://api.mercadolibre.com/sites/MLB/search?seller_id=3292895120',
    { next: { revalidate: 3600 } }
  )
  if (!response.ok) return []
  const data = await response.json()
  return data.results.map((item:any)=>({id:item.id,title:item.title,price:item.price,permalink:item.permalink,thumbnail:item.thumbnail}))
}

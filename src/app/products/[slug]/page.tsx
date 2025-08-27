"use client"
import products from "../../../../db.json"
import Product from "@/components/Product"

export default async function Products({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const product = products.filter(item => {
    if (item.id === slug) {
      return item
    }
  })
  return (
    <>
      {
        product.map(item => <Product key={item.id} product={item} />)
      }
    </>
  )
}

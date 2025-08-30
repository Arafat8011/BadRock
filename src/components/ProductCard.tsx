
'use client'
import Link from 'next/link'
import { ProductTypes } from "@/types/index"
import { useCartActions } from "@/context/Cart";

export default function ProductCard({ product }: { product: ProductTypes }) {
  const { handleAddToCart } = useCartActions();
  return (
    <div className="bg-color-card-bg text-color-primary rounded-sm shadow shadow-color-card-shadow overflow-hidden transition hover:scale-105">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="font-bold text-lg"> <Link href={`/products/${product.id}`} > {product.name} </Link> </h2>
        <p className='text-color-muted'>{product.brand}</p>
        <p className="text-color-accent">${product.price}</p>
        <div className="flex gap-2 mt-2">
          <button 
            onClick={() => handleAddToCart(product)}
            className="w-full py-2 rounded  bg-color-primary text-color-primary-fg cursor-pointer  hover:bg-color-button-hover active:bg-color-button-active  transition">
            Add to Cart
          </button>
          <Link href={`/products/item/${product.id}`} className="w-full py-2 rounded border border-color-primary text-center  text-color-primary cursor-pointer  hover:bg-color-button-hover active:bg-color-button-active  transition">
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}


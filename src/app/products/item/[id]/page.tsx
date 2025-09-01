'use client'
import Product from "@/components/Product";
import products from "../../../../../db.json";
import { ProductTypes } from "@/types";

export default function Page({ params }: { params: { id: string } }) {
  const product = products.find((p) => p?.id === params?.id) as ProductTypes | undefined;
  console.log(product);

  if (!product) {
    return <div className="text-color-error">Product not found</div>;
  }

  return <Product product={product} />;
}

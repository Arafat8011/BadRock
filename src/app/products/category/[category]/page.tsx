import ProductCard from "@/components/ProductCard";
import products from "../../../../../db.json";

export default async function Page({ params }: { params: { category: string } }) {
  const filteredProducts = products.filter(
    (p) => p.category?.toLowerCase() === params.category.toLowerCase()
  );

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">{params.category}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProducts.length === 0 ? (
          <p className="text-center text-color-fg text-xl col-span-full">No products found in this category.</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
}
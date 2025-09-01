import ProductCard from "@/components/ProductCard";
import products from "../../../../../../db.json";

export default async function Page({
  params,
}: {
  params: { category: string; subcategory: string };
}) {
  const filteredProducts = products.filter(
    (p) =>
      p.category?.toLowerCase() === params.category.toLowerCase() &&
      p.subCategory?.toLowerCase() === params.subcategory.toLowerCase()
  );

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-xl text-color-primary font-semibold capitalize mb-4 bg-color-surface p-2 rounded-md">
        {params.category} &gt; {params.subcategory}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProducts.length === 0 ? (
          <p className="text-center text-color-fg text-xl col-span-full">No products found in this subcategory.</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
}
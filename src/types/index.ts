export interface ProductTypes {
  id: string,
  name: string,
  brand: string,
  price: number,
  currency: string,
  stock: number,
  category: string,
  subCategory: string,
  rating: number,
  description: string,
  image: string,
  specifications: ProductSpecifications,
  quantity: number,
}
export interface ProductSpecifications {
  processor: string,
  ram: string,
  storage: string,
  display: string,
  graphics: string,
}

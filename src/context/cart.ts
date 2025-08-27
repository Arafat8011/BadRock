import products from "../../db.json"
export function contextCart(id: string) {
  const product =  products.filter(product => product.id === id);
  console.log(product);
}

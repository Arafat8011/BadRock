import { contextCart } from "@/context/cart";
import { ProductTypes } from "@/types"
import ReactStars from "react-rating-stars-component";
const Product = ({ product }: { product: ProductTypes }) => {
  return (
    <div className="flex items-left text-left">
      <div key={product.id} className="container mx-auto my-2 ">
        <div className=" md:flex gap-2  justify-between">
          <div className="w-3/5  bg-surface ">
            <div className="max-w-2xl overflow-hidden">
              <img className="object-cover" src={product?.image} alt={product?.name} />
            </div>
          </div>
          <div className="w-2/5 bg-surface mt-2 md:mt-0" >
            <div className="p-4">
              <h2 className="font-bold text-2xl mb-4">{product?.name}</h2>
              <div className="font-bold flex items-center">
                <h3>

                  <ReactStars count={5}
    size={24}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  />,
               2 reviews</h3>
              </div>
              <div className="bg-surface my-2 max-w-fit py-2 pr-5">
                <p>Special Price</p>
                <h2 className="font-bold text-xl">Tk {product?.price}</h2>
              </div>
              <h3 className="font-bold text-md bg-success max-w-fit p-2 my-4">In Stock</h3>
              <div className="">
                <h2 className="text-xl font-bold">Quick Overview</h2>
                <div className="mx-3">
                  <li>{product?.specifications?.display}</li>
                  <li>{product?.specifications?.ram}</li>
                  <li>{product?.specifications?.storage}</li>
                  <li>{product?.specifications?.processor}</li>
                </div>
                <form method="post" className="flex gap-2 py-2">
                  <input className="bg-input-bg rounded px-2 font-semibold" type="number" defaultValue={0} />
                  <button
                    onClick={() => contextCart(product?.id)}
                    className="bg-button-bg p-2 cursor-pointer rounded-md font-bold text-primary-fg hover:bg-button-hover active:bg-button-active">Add to Cart</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/*NOTE: Products specifications */}
        <div className="md:flex gap-2 my-2 ">
          <div className="md:w-2/3 bg-surface">
            <div className="flex justify-start  font-bold light:shadow-sm light:shadow-accent">
              <button className="bg-primary text-primary-fg px-4 py-2 cursor-pointer">Specifications</button>
              <button className="border-primary border-2 px-4 py-2 cursor-pointer">Details</button>
              <button className="border-primary border-2 px-4 py-2 cursor-pointer">Q&A</button>
              <button className="border-primary border-2 px-4 py-2 cursor-pointer">Review</button>
            </div>
            <div className="px-4">
              <h2 className="text-2xl font-bold my-4">Specifications</h2>
              <div>
                <div className="flex">
                  <div className="w-1/2 "><span className="font-bold">Brand</span></div>
                  <div className="w-1/2 "><span>{product?.brand}</span></div>
                </div>
                <div className="container flex">
                  <div className="w-1/2 "><span className="font-bold">Display</span></div>
                  <div className="w-1/2 "><span>{product?.specifications.display}</span></div>
                </div>
                <div className="container flex">
                  <div className="w-1/2 "><span className="font-bold">Storage</span></div>
                  <div className="w-1/2 "><span>{product?.specifications.storage}</span></div>
                </div>
                <div className="container flex">
                  <div className="w-1/2 "><span className="font-bold">RAM</span></div>
                  <div className="w-1/2 "><span>{product?.specifications.ram}</span></div>
                </div>
                <div className="container flex">
                  <div className="w-1/2 "><span className="font-bold">Processor</span></div>
                  <div className="w-1/2 "><span>{product?.specifications.processor}</span></div>
                </div>
                <div className="container flex">
                  <div className="w-1/2 "><span className="font-bold">Graphics</span></div>
                  <div className="w-1/2 "><span>{product?.specifications.graphics}</span></div>
                </div>
              </div>
            </div>
            <div className="py-4 px-4">
              <h2 className="text-2xl font-bold ">Details</h2>
              <div>{product?.description}</div>
            </div>
          </div>
          <div className="md:w-1/3 my-2 md:my-0 bg-surface">
            <div className="">
              <h2 className="py-1.5 border-b border-b-primary light:shadow-sm light:shadow-accent">
                <span className="bg-primary  py-2 pr-9 pl-2.5 text-primary-fg font-semibold " style={{ clipPath: "polygon(0 0,85% 0,95% 100%,0% 100%)" }}>Similar Products</span>
              </h2>
            </div>
            <div className="px-4 my-4">
              Similar Products
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Product;

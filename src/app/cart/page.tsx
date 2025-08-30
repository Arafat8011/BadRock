'use client'

import { useCart } from "@/context/Cart";
import { ProductTypes } from "@/types";
import Link from "next/link";

const CartPage = () => {
  const { cart, quantity, removeFromCart, updateQuantity, getCartTotal } = useCart();

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link href="/" className="text-color-primary">Continue shopping</Link></p>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              {cart.map((product: ProductTypes) => (
                <div key={product.id} className="flex items-center border-b border-color-input-border py-4">
                  <img src={product.image} alt={product.name} className="w-24 h-24 object-cover mr-4" />
                  <div className="flex-grow">
                    <h2 className="font-bold">{product.name}</h2>
                    <p>${product.price}</p>
                    <div className="flex items-center mt-2">
                      <button onClick={() => updateQuantity(product.id, product.quantity - 1)} className="px-2 py-1 bg-color-surface">-</button>
                      <span className="mx-2">{product.quantity}</span>
                      <button onClick={() => updateQuantity(product.id, product.quantity + 1)} className="px-2 py-1 bg-color-surface">+</button>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(product.id)} className="text-color-error">Remove</button>
                </div>
              ))}
            </div>
            <div className="md:col-span-1 bg-color-surface p-4">
              <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${getCartTotal()}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>$5.00</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${getCartTotal() + 5}</span>
              </div>
              <button className="bg-color-primary text-color-primary-fg w-full py-2 mt-4">Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;

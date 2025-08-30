import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" bg-color-surface text-color-primary mt-8 shadow-color-card-shadow">
    <div className="container mx-auto py-6 px-4 text-center">
      <div className="md:flex">
        <div className="md:w-1/2 py-3">
        <h3 className="py-2 font-bold md:text-left">Shop</h3>
                    <ul className="md:text-left">
                        <li><Link className="hover:underline" href="/products">All Products</Link></li>
                        <li><Link className="hover:underline" href="#">Featured Items</Link></li>
                        <li><Link className="hover:underline" href="#">New Arrivals</Link></li>
                        <li><Link className="hover:underline" href="#">On Sale</Link></li>
                        <li><Link className="hover:underline" href="#">Gift Cards</Link></li>
                    </ul>
        </div>
        <div  className="md:w-1/2 py-3">
             <h3 className="py-2 font-bold md:text-left">Information</h3>
                    <ul className="md:text-left">
                        <li><Link className="hover:underline" href="/about">About Us</Link></li>
                        <li><Link className="hover:underline" href="/contact">Contact Us</Link></li>
                        <li><Link className="hover:underline" href="/privacy-policy">Privacy Policy</Link></li>
                        <li><Link className="hover:underline" href="/terms-conditions">Terms & Conditions</Link></li>
                        <li><Link className="hover:underline" href="/shipping-policy">Shipping Policy</Link></li>
                    </ul>
        </div>
        <div className="md:w-1/2 py-3">
           <h3 className="py-2 font-bold md:text-left">Customer Service</h3>
                    <ul className="md:text-left">
                        <li><Link className="hover:underline" href="#">My Account</Link></li>
                        <li><Link className="hover:underline" href="#">Track Your Order</Link></li>
                        <li><Link className="hover:underline" href="#">Returns & Exchanges</Link></li>
                        <li><Link className="hover:underline" href="#">Warranty Information</Link></li>
                        <li><Link className="hover:underline" href="#">FAQ</Link></li>
                    </ul>
        </div>
        <div className="md:w-1/2 py-3">
                    <h3 className="py-2 font-bold md:text-left">Contact Info</h3>
                    <ul className="md:text-left">
                        <li><i className="fas fa-map-marker-alt"></i> 123 Tech Street, San Francisco</li>
                        <li><i className="fas fa-phone"></i> (555) 123-4567</li>
                        <li><i className="fas fa-envelope"></i> support@techshop.com</li>
                    </ul>
        </div>
        </div>
      </div>
    </footer>
  );
}

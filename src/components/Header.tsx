'use client'
import Link from 'next/link'
import { useCart } from '@/context/Cart'
import Dropdown from './Dropdown'
import { useState } from 'react';
import { Menu, X, User, Info, Mail, Sun, Moon } from 'lucide-react';
import { categories } from "@/data/menuItems"
import { useTheme } from '@/context/ThemeContext';

const Header = () => {
  const { cart } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <div className="bg-color-primary text-color-primary-fg p-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* Hamburger icon for mobile */}
          <div className="md:hidden mr-4">
            <button onClick={toggleMobileMenu} className="text-color-primary-fg focus:outline-none">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <Link href="/" className="text-2xl font-bold">BadRock</Link>
        </div>
        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/about" className="flex items-center hover:underline">
            <Info size={20} className="mr-1" /> About
          </Link>
          <Link href="/contact" className="flex items-center hover:underline">
            <Mail size={20} className="mr-1" /> Contact
          </Link>
          <Link href="/login" className="flex items-center hover:underline">
            <User size={20} className="mr-1" /> Login/Register
          </Link>
        </nav>
        <div className="flex items-center">
          {/* Theme Toggle Button */}
          <button onClick={toggleTheme} className="text-color-primary-fg focus:outline-none mr-4">
            {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
          </button>
          <Link href="/cart" className="relative ml-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-color-error text-color-primary-fg rounded-full px-2 py-1 text-xs">{cart.length}</span>
            )}
          </Link>
        </div>
      </div>
      {/* Desktop Dropdown */}
      <div className="hidden md:block">
        <Dropdown />
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-color-primary bg-opacity-95 z-40 flex flex-col items-center justify-center">
          <button onClick={toggleMobileMenu} className="absolute top-4 right-4 text-color-primary-fg focus:outline-none">
            <X size={30} />
          </button>
          <ul className="text-color-primary-fg text-xl flex flex-col gap-4">
            <li className="py-2"><Link href="/about" onClick={toggleMobileMenu} className="flex items-center"><Info size={24} className="mr-2" /> About</Link></li>
            <li className="py-2"><Link href="/contact" onClick={toggleMobileMenu} className="flex items-center"><Mail size={24} className="mr-2" /> Contact</Link></li>
            <li className="py-2"><Link href="/login" onClick={toggleMobileMenu} className="flex items-center"><User size={24} className="mr-2" /> Login/Register</Link></li>
            <li className="py-2">
              <button onClick={toggleTheme} className="flex items-center text-color-primary-fg focus:outline-none w-full">
                {theme === 'light' ? <Moon size={24} className="mr-2" /> : <Sun size={24} className="mr-2" />}
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
              </button>
            </li>
            {categories.map((menu, index) => (
              <li key={index} className="py-2">
                <Link href={`/products/category/${menu.name.toLowerCase()}`} onClick={toggleMobileMenu}>
                  {menu.name}
                </Link>
                {menu.sub && menu.sub.length > 0 && (
                  <ul className="ml-4 mt-2 text-lg">
                    {menu.sub.map((item, subIndex) => (
                      <li key={subIndex} className="py-1">
                        <Link href={item.href as string} onClick={toggleMobileMenu}>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header;



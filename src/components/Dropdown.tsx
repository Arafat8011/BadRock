"use client";
import { categories } from "@/data/menuItems"
import Link from "next/link";

export default function CategoryDropdown() {
    return (
        <div className="w-full text-left bg-color-primary text-color-primary-fg hidden md:block shadow-color-card-shadow" >
            <ul className="containe flex justify-center text-center">
                {categories.map((menu, index) => (
                    <li key={index} className="py-1 w-56 text-color-primary-fg  hover:bg-color-primary/80 group relative">
                        <Link href={`/products/category/${menu.name.toLowerCase()}`}>
                            {menu.name}
                        </Link>
                        <ul className="absolute hidden group-hover:block bg-color-primary text-color-primary-fg text-center w-full rounded-md z-50 shadow-md">
                            {menu.sub.map((item, index) => (
                                <li key={index} className=" flex items-center hover:bg-color-surface hover:text-color-primary rounded-md px-2 py-1 ">
                                    <Link href={item.href as string} className="">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div >
    );
}



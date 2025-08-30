
type SubCategory =  {name: String, href: String};
type Category = {name: String, sub: SubCategory[]}


export const categories: Category[] = [
  {
    name: "Laptops",
    sub: [
      { name: "Apple", href: "/products/category/laptops/apple" },
      { name: "Asus", href: "/products/category/laptops/asus" },
      { name: "Dell", href: "/products/category/laptops/dell" },
      { name: "Lenovo", href: "/products/category/laptops/lenovo" },
    ],
  },
  {
    name: "Desktop",
    sub: [
      { name: "Apple", href: "/products/category/desktop/apple" },
      { name: "Asus", href: "/products/category/desktop/asus" },
      { name: "Dell", href: "/products/category/desktop/dell" },
      { name: "Lenovo", href: "/products/category/desktop/lenovo" },
    ],
  },
  {
    name: "Tablet PC",
    sub: [
      { name: "Lenovo", href: "/products/category/tablet/lenovo" },
      { name: "Samsung", href: "/products/category/tablet/samsung" },
      { name: "Honor", href: "/products/category/tablet/honor" },
      { name: "Apple", href: "/products/category/tablet/apple" },
    ],
  },
  {
    name: "Camera",
    sub: [
      { name: "DSLR Camera", href: "/products/category/camera/dslr" },
      { name: "Compact Camera", href: "/products/category/camera/compact" },
      { name: "Action Camera", href: "/products/category/camera/action" },
      { name: "Mirror Camera", href: "/products/category/camera/mirror" },
    ],
  },
  {
    name: "Network",
    sub: [
      { name: "Network Router", href: "/products/category/network/router" },
      { name: "Access Pointer", href: "/products/category/network/access-pointer" },
      { name: "D-Link", href: "/products/category/network/dlink" },
    ],
  },
];

(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/ProductCard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>ProductCard
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$Cart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/Cart.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ProductCard(param) {
    let { product } = param;
    _s();
    const { handleAddToCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$Cart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartActions"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-color-card-bg text-color-primary rounded-sm shadow shadow-color-card-shadow overflow-hidden transition hover:scale-105",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: product.image,
                alt: product.name,
                className: "w-full h-48 object-cover"
            }, void 0, false, {
                fileName: "[project]/src/components/ProductCard.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-bold text-lg",
                        children: [
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/products/".concat(product.id),
                                children: [
                                    " ",
                                    product.name,
                                    " "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProductCard.tsx",
                                lineNumber: 13,
                                columnNumber: 44
                            }, this),
                            " "
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-color-muted",
                        children: product.brand
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-color-accent",
                        children: [
                            "$",
                            product.price
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 mt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleAddToCart(product),
                                className: "w-full py-2 rounded  bg-color-primary text-color-primary-fg cursor-pointer  hover:bg-color-button-hover active:bg-color-button-active  transition",
                                children: "Add to Cart"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductCard.tsx",
                                lineNumber: 17,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/products/item/".concat(product.id),
                                className: "w-full py-2 rounded border border-color-primary text-center  text-color-primary cursor-pointer  hover:bg-color-button-hover active:bg-color-button-active  transition",
                                children: "View Details"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductCard.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProductCard.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProductCard.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_s(ProductCard, "65cIFa9GGVgQTlXTMlbf2VKfTXE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$Cart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartActions"]
    ];
});
_c = ProductCard;
var _c;
__turbopack_context__.k.register(_c, "ProductCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/db.json (json)": ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"id\":\"lap_apple_1\",\"name\":\"MacBook Air M2\",\"brand\":\"Apple\",\"price\":1199.99,\"currency\":\"USD\",\"stock\":50,\"category\":\"Laptops\",\"subCategory\":\"Apple\",\"rating\":4.8,\"description\":\"13.6-inch Liquid Retina display, M2 chip, 8GB RAM, 256GB SSD.\",\"image\":\"/images/laptops/apple/macbook_air_m2.webp\",\"specifications\":{\"processor\":\"Apple M2\",\"ram\":\"8GB\",\"storage\":\"256GB SSD\",\"display\":\"13.6-inch Liquid Retina\"}},{\"id\":\"lap_apple_2\",\"name\":\"MacBook Pro 14 M1 Pro\",\"brand\":\"Apple\",\"price\":1999.99,\"currency\":\"USD\",\"stock\":30,\"category\":\"Laptops\",\"subCategory\":\"Apple\",\"rating\":4.9,\"description\":\"14-inch Liquid Retina XDR, M1 Pro chip, 16GB RAM, 512GB SSD.\",\"image\":\"/images/laptops/apple/macbook_pro_m1.webp\",\"specifications\":{\"processor\":\"Apple M1 Pro\",\"ram\":\"16GB\",\"storage\":\"512GB SSD\",\"display\":\"14-inch Liquid Retina XDR\"}},{\"id\":\"lap_apple_3\",\"name\":\"MacBook Air M1\",\"brand\":\"Apple\",\"price\":999.99,\"currency\":\"USD\",\"stock\":70,\"category\":\"Laptops\",\"subCategory\":\"Apple\",\"rating\":4.7,\"description\":\"13.3-inch Retina display, M1 chip, 8GB RAM, 256GB SSD.\",\"image\":\"/images/laptops/apple/macbook_air_m1.jpg\",\"specifications\":{\"processor\":\"Apple M1\",\"ram\":\"8GB\",\"storage\":\"256GB SSD\",\"display\":\"13.3-inch Retina\"}},{\"id\":\"lap_apple_4\",\"name\":\"MacBook Pro 16 M2 Max\",\"brand\":\"Apple\",\"price\":3499.99,\"currency\":\"USD\",\"stock\":20,\"category\":\"Laptops\",\"subCategory\":\"Apple\",\"rating\":4.9,\"description\":\"16-inch Liquid Retina XDR, M2 Max chip, 32GB RAM, 1TB SSD.\",\"image\":\"/images/laptops/apple/macbook_pro_16_m2.jpg\",\"specifications\":{\"processor\":\"Apple M2 Max\",\"ram\":\"32GB\",\"storage\":\"1TB SSD\",\"display\":\"16-inch Liquid Retina XDR\"}},{\"id\":\"lap_apple_5\",\"name\":\"MacBook Air M2 15-inch\",\"brand\":\"Apple\",\"price\":1299.99,\"currency\":\"USD\",\"stock\":40,\"category\":\"Laptops\",\"subCategory\":\"Apple\",\"rating\":4.8,\"description\":\"15.3-inch Liquid Retina display, M2 chip, 8GB RAM, 512GB SSD.\",\"image\":\"/images/laptops/apple/macbook_air_m2_15.jpg\",\"specifications\":{\"processor\":\"Apple M2\",\"ram\":\"8GB\",\"storage\":\"512GB SSD\",\"display\":\"15.3-inch Liquid Retina\"}},{\"id\":\"lap_asus_1\",\"name\":\"Asus ZenBook 14\",\"brand\":\"Asus\",\"price\":899.99,\"currency\":\"USD\",\"stock\":60,\"rating\":4.6,\"category\":\"Laptop\",\"subCategory\":\"Asus\",\"description\":\"14-inch OLED, Intel Core i5, 16GB RAM, 512GB SSD.\",\"image\":\"/images/laptops/asus/zenbook_14.png\",\"specifications\":{\"processor\":\"Intel Core i5-1240P\",\"ram\":\"16GB\",\"storage\":\"512GB SSD\",\"display\":\"14-inch OLED\"}},{\"id\":\"lap_asus_2\",\"name\":\"Asus ROG Zephyrus G14\",\"brand\":\"Asus\",\"price\":1499.99,\"currency\":\"USD\",\"stock\":25,\"rating\":4.7,\"category\":\"Laptop\",\"subCategory\":\"Asus\",\"description\":\"14-inch QHD, AMD Ryzen 9, 16GB RAM, 1TB SSD, RTX 3060.\",\"image\":\"/images/laptops/asus/rog_zephyrus_g14.jpg\",\"specifications\":{\"processor\":\"AMD Ryzen 9 5900HS\",\"ram\":\"16GB\",\"storage\":\"1TB SSD\",\"display\":\"14-inch QHD\"}},{\"id\":\"lap_asus_3\",\"name\":\"Asus VivoBook 15\",\"brand\":\"Asus\",\"price\":599.99,\"currency\":\"USD\",\"stock\":80,\"rating\":4.4,\"category\":\"Laptop\",\"subCategory\":\"Asus\",\"description\":\"15.6-inch FHD, Intel Core i3, 8GB RAM, 256GB SSD.\",\"image\":\"/images/laptops/asus/vivobook_15.webp\",\"specifications\":{\"processor\":\"Intel Core i3-1115G4\",\"ram\":\"8GB\",\"storage\":\"256GB SSD\",\"display\":\"15.6-inch FHD\"}},{\"id\":\"lap_asus_4\",\"name\":\"Asus TUF Gaming A15\",\"brand\":\"Asus\",\"price\":1099.99,\"currency\":\"USD\",\"stock\":35,\"rating\":4.5,\"category\":\"Laptop\",\"subCategory\":\"Asus\",\"description\":\"15.6-inch FHD 144Hz, AMD Ryzen 7, 16GB RAM, 512GB SSD, RTX 3050.\",\"image\":\"/images/laptops/asus/tuf_gaming_a15.webp\",\"specifications\":{\"processor\":\"AMD Ryzen 7 4800H\",\"ram\":\"16GB\",\"storage\":\"512GB SSD\",\"display\":\"15.6-inch FHD 144Hz\"}},{\"id\":\"lap_asus_5\",\"name\":\"Asus ExpertBook B9\",\"brand\":\"Asus\",\"price\":1399.99,\"currency\":\"USD\",\"stock\":20,\"rating\":4.6,\"category\":\"Laptop\",\"subCategory\":\"Asus\",\"description\":\"14-inch FHD, Intel Core i7, 16GB RAM, 1TB SSD.\",\"image\":\"/images/laptops/asus/expertbook_b9.webp\",\"specifications\":{\"processor\":\"Intel Core i7-1255U\",\"ram\":\"16GB\",\"storage\":\"1TB SSD\",\"display\":\"14-inch FHD\"}},{\"id\":\"lap_dell_1\",\"name\":\"Dell XPS 13\",\"brand\":\"Dell\",\"price\":1299.99,\"currency\":\"USD\",\"stock\":45,\"rating\":4.8,\"category\":\"Laptop\",\"subCategory\":\"Dell\",\"description\":\"13.4-inch 4K UHD, Intel Core i7, 16GB RAM, 512GB SSD.\",\"image\":\"/images/laptops/dell/xps_13.jpg\",\"specifications\":{\"processor\":\"Intel Core i7-1250U\",\"ram\":\"16GB\",\"storage\":\"512GB SSD\",\"display\":\"13.4-inch 4K UHD\"}},{\"id\":\"lap_dell_2\",\"name\":\"Dell Inspiron 15\",\"brand\":\"Dell\",\"price\":699.99,\"currency\":\"USD\",\"stock\":65,\"rating\":4.5,\"category\":\"Laptop\",\"subCategory\":\"Dell\",\"description\":\"15.6-inch FHD, Intel Core i5, 8GB RAM, 256GB SSD.\",\"image\":\"/images/laptops/dell/inspiron_15.jpg\",\"specifications\":{\"processor\":\"Intel Core i5-1135G7\",\"ram\":\"8GB\",\"storage\":\"256GB SSD\",\"display\":\"15.6-inch FHD\"}},{\"id\":\"lap_dell_3\",\"name\":\"Dell Alienware m15\",\"brand\":\"Dell\",\"price\":1899.99,\"currency\":\"USD\",\"stock\":20,\"rating\":4.7,\"category\":\"Laptop\",\"subCategory\":\"Dell\",\"description\":\"15.6-inch FHD 165Hz, Intel Core i7, 16GB RAM, 1TB SSD, RTX 3070.\",\"image\":\"/images/laptops/dell/alienware_m15.webp\",\"specifications\":{\"processor\":\"Intel Core i7-12700H\",\"ram\":\"16GB\",\"storage\":\"1TB SSD\",\"display\":\"15.6-inch FHD 165Hz\"}},{\"id\":\"lap_dell_4\",\"name\":\"Dell Latitude 7430\",\"brand\":\"Dell\",\"price\":1099.99,\"currency\":\"USD\",\"stock\":30,\"rating\":4.6,\"category\":\"Laptop\",\"subCategory\":\"Dell\",\"description\":\"14-inch FHD, Intel Core i5, 16GB RAM, 512GB SSD.\",\"image\":\"/images/laptops/dell/latitude_7430.png\",\"specifications\":{\"processor\":\"Intel Core i5-1245U\",\"ram\":\"16GB\",\"storage\":\"512GB SSD\",\"display\":\"14-inch FHD\"}},{\"id\":\"lap_dell_5\",\"name\":\"Dell XPS 15\",\"brand\":\"Dell\",\"price\":1799.99,\"currency\":\"USD\",\"stock\":25,\"rating\":4.8,\"category\":\"Laptop\",\"subCategory\":\"Dell\",\"description\":\"15.6-inch 4K OLED, Intel Core i7, 32GB RAM, 1TB SSD.\",\"image\":\"/images/laptops/dell/xps_15.jpg\",\"specifications\":{\"processor\":\"Intel Core i7-12700H\",\"ram\":\"32GB\",\"storage\":\"1TB SSD\",\"display\":\"15.6-inch 4K OLED\"}},{\"id\":\"lap_lenovo_1\",\"name\":\"Lenovo ThinkPad X1 Carbon\",\"brand\":\"Lenovo\",\"price\":1399.99,\"currency\":\"USD\",\"stock\":40,\"rating\":4.7,\"category\":\"Laptops\",\"subCategory\":\"Lenovo\",\"description\":\"14-inch WQHD, Intel Core i7, 16GB RAM, 512GB SSD.\",\"image\":\"/images/laptops/lenovo/thinkpad_x1.jpg\",\"specifications\":{\"processor\":\"Intel Core i7-1260P\",\"ram\":\"16GB\",\"storage\":\"512GB SSD\",\"display\":\"14-inch WQHD\"}},{\"id\":\"lap_lenovo_2\",\"name\":\"Lenovo IdeaPad 3\",\"brand\":\"Lenovo\",\"price\":549.99,\"currency\":\"USD\",\"stock\":75,\"rating\":4.4,\"category\":\"Laptops\",\"subCategory\":\"Lenovo\",\"description\":\"15.6-inch FHD, AMD Ryzen 5, 8GB RAM, 256GB SSD.\",\"image\":\"/images/laptops/lenovo/ideapad_3.jpg\",\"specifications\":{\"processor\":\"AMD Ryzen 5 5500U\",\"ram\":\"8GB\",\"storage\":\"256GB SSD\",\"display\":\"15.6-inch FHD\"}},{\"id\":\"lap_lenovo_3\",\"name\":\"Lenovo Legion 5\",\"brand\":\"Lenovo\",\"price\":1299.99,\"currency\":\"USD\",\"stock\":30,\"rating\":4.6,\"category\":\"Laptops\",\"subCategory\":\"Lenovo\",\"description\":\"15.6-inch FHD 165Hz, AMD Ryzen 7, 16GB RAM, 512GB SSD, RTX 3060.\",\"image\":\"/images/laptops/lenovo/legion_5.jpg\",\"specifications\":{\"processor\":\"AMD Ryzen 7 5800H\",\"ram\":\"16GB\",\"storage\":\"512GB SSD\",\"display\":\"15.6-inch FHD 165Hz\"}},{\"id\":\"lap_lenovo_4\",\"name\":\"Lenovo Yoga 7i\",\"brand\":\"Lenovo\",\"price\":999.99,\"currency\":\"USD\",\"stock\":50,\"rating\":4.5,\"category\":\"Laptops\",\"subCategory\":\"Lenovo\",\"description\":\"14-inch 2.8K OLED, Intel Core i5, 16GB RAM, 512GB SSD.\",\"image\":\"/images/laptops/lenovo/yoga_7i.jpg\",\"specifications\":{\"processor\":\"Intel Core i5-1240P\",\"ram\":\"16GB\",\"storage\":\"512GB SSD\",\"display\":\"14-inch 2.8K OLED\"}},{\"id\":\"lap_lenovo_5\",\"name\":\"Lenovo ThinkBook 14s\",\"brand\":\"Lenovo\",\"price\":849.99,\"currency\":\"USD\",\"stock\":60,\"rating\":4.5,\"category\":\"Laptops\",\"subCategory\":\"Lenovo\",\"description\":\"14-inch FHD, AMD Ryzen 5, 16GB RAM, 512GB SSD.\",\"image\":\"/images/laptops/lenovo/thinkbook_14s.jpg\",\"specifications\":{\"processor\":\"AMD Ryzen 5 5600U\",\"ram\":\"16GB\",\"storage\":\"512GB SSD\",\"display\":\"14-inch FHD\"}},{\"id\":\"desk_apple_1\",\"name\":\"iMac 24-inch\",\"brand\":\"Apple\",\"price\":1299.99,\"currency\":\"USD\",\"stock\":30,\"rating\":4.8,\"category\":\"Desktop\",\"subCategory\":\"Apple\",\"description\":\"24-inch 4.5K Retina, M1 chip, 8GB RAM, 256GB SSD.\",\"image\":\"/images/desktop/apple/imac_24.jpg\",\"specifications\":{\"processor\":\"Apple M1\",\"ram\":\"8GB\",\"storage\":\"256GB SSD\",\"display\":\"24-inch 4.5K Retina\"}},{\"id\":\"desk_apple_2\",\"name\":\"Mac Studio\",\"brand\":\"Apple\",\"price\":1999.99,\"currency\":\"USD\",\"stock\":20,\"rating\":4.9,\"category\":\"Desktop\",\"subCategory\":\"Apple\",\"description\":\"M1 Max chip, 32GB RAM, 512GB SSD, compact design.\",\"image\":\"/images/desktop/apple/mac_studio.webp\",\"specifications\":{\"processor\":\"Apple M1 Max\",\"ram\":\"32GB\",\"storage\":\"512GB SSD\",\"display\":\"N/A\"}},{\"id\":\"desk_apple_3\",\"name\":\"Mac Mini M2\",\"brand\":\"Apple\",\"price\":599.99,\"currency\":\"USD\",\"stock\":50,\"rating\":4.7,\"category\":\"Desktop\",\"subCategory\":\"Apple\",\"description\":\"M2 chip, 8GB RAM, 256GB SSD, compact form factor.\",\"image\":\"/images/desktop/apple/mac_mini_m2.jpg\",\"specifications\":{\"processor\":\"Apple M2\",\"ram\":\"8GB\",\"storage\":\"256GB SSD\",\"display\":\"N/A\"}},{\"id\":\"desk_apple_4\",\"name\":\"iMac 27-inch\",\"brand\":\"Apple\",\"price\":1799.99,\"currency\":\"USD\",\"stock\":25,\"rating\":4.8,\"category\":\"Desktop\",\"subCategory\":\"Apple\",\"description\":\"27-inch 5K Retina, Intel Core i5, 16GB RAM, 512GB SSD.\",\"image\":\"/images/desktop/apple/imac_27.jpg\",\"specifications\":{\"processor\":\"Intel Core i5\",\"ram\":\"16GB\",\"storage\":\"512GB SSD\",\"display\":\"27-inch 5K Retina\"}},{\"id\":\"desk_apple_5\",\"name\":\"Mac Pro\",\"brand\":\"Apple\",\"price\":5999.99,\"currency\":\"USD\",\"stock\":10,\"rating\":4.9,\"category\":\"Desktop\",\"subCategory\":\"Apple\",\"description\":\"Intel Xeon W, 32GB RAM, 256GB SSD, modular design.\",\"image\":\"/images/desktop/apple/mac_pro.jpg\",\"specifications\":{\"processor\":\"Intel Xeon W\",\"ram\":\"32GB\",\"storage\":\"256GB SSD\",\"display\":\"N/A\"}},{\"id\":\"desk_asus_1\",\"name\":\"Asus ROG Strix G15\",\"brand\":\"Asus\",\"price\":1299.99,\"currency\":\"USD\",\"stock\":30,\"rating\":4.6,\"category\":\"Desktop\",\"subCategory\":\"Asus\",\"description\":\"AMD Ryzen 7, 16GB RAM, 1TB SSD, RTX 3060.\",\"image\":\"/images/desktop/asus/rog_strix_g15.jpg\",\"specifications\":{\"processor\":\"AMD Ryzen 7 5800X\",\"ram\":\"16GB\",\"storage\":\"1TB SSD\",\"graphics\":\"NVIDIA RTX 3060\"}},{\"id\":\"desk_asus_2\",\"name\":\"Asus TUF Gaming GT501\",\"brand\":\"Asus\",\"price\":1599.99,\"currency\":\"USD\",\"stock\":20,\"rating\":4.7,\"category\":\"Desktop\",\"subCategory\":\"Asus\",\"description\":\"Intel Core i7, 32GB RAM, 1TB SSD, RTX 3070.\",\"image\":\"/images/desktop/asus/tuf_gaming_gt501.jpg\",\"specifications\":{\"processor\":\"Intel Core i7-12700F\",\"ram\":\"32GB\",\"storage\":\"1TB SSD\",\"graphics\":\"NVIDIA RTX 3070\"}},{\"id\":\"desk_asus_3\",\"name\":\"Asus VivoPC\",\"brand\":\"Asus\",\"price\":499.99,\"currency\":\"USD\",\"stock\":60,\"rating\":4.4,\"description\":\"Intel Core i3, 8GB RAM, 256GB SSD, compact design.\",\"image\":\"/images/desktop/asus/vivopc.webp\",\"specifications\":{\"processor\":\"Intel Core i3-12100\",\"ram\":\"8GB\",\"storage\":\"256GB SSD\",\"graphics\":\"Integrated\"}},{\"id\":\"desk_asus_4\",\"name\":\"Asus ProArt Station\",\"brand\":\"Asus\",\"price\":1999.99,\"currency\":\"USD\",\"stock\":15,\"rating\":4.8,\"category\":\"Desktop\",\"subCategory\":\"Asus\",\"description\":\"Intel Core i9, 32GB RAM, 1TB SSD, RTX 3060.\",\"image\":\"/images/desktop/asus/proart_station.jpg\",\"specifications\":{\"processor\":\"Intel Core i9-12900K\",\"ram\":\"32GB\",\"storage\":\"1TB SSD\",\"graphics\":\"NVIDIA RTX 3060\"}},{\"id\":\"desk_asus_5\",\"name\":\"Asus Mini PC PN51\",\"brand\":\"Asus\",\"price\":649.99,\"currency\":\"USD\",\"stock\":50,\"rating\":4.5,\"category\":\"Desktop\",\"subCategory\":\"Asus\",\"description\":\"AMD Ryzen 5, 16GB RAM, 512GB SSD, compact form factor.\",\"image\":\"/images/desktop/asus/mini_pc_pn51.jpg\",\"specifications\":{\"processor\":\"AMD Ryzen 5 5500U\",\"ram\":\"16GB\",\"storage\":\"512GB SSD\",\"graphics\":\"Integrated\"}},{\"id\":\"desk_dell_1\",\"name\":\"Dell XPS Desktop\",\"brand\":\"Dell\",\"price\":1399.99,\"currency\":\"USD\",\"stock\":35,\"rating\":4.7,\"category\":\"Dell\",\"subCategory\":\"Desktop\",\"description\":\"Intel Core i7, 16GB RAM, 512GB SSD, RTX 3060.\",\"image\":\"/images/desktop/dell/xps_desktop.png\",\"specifications\":{\"processor\":\"Intel Core i7-12700\",\"ram\":\"16GB\",\"storage\":\"512GB SSD\",\"graphics\":\"NVIDIA RTX 3060\"}},{\"id\":\"desk_dell_2\",\"name\":\"Dell Inspiron Desktop\",\"brand\":\"Dell\",\"price\":599.99,\"currency\":\"USD\",\"stock\":70,\"rating\":4.4,\"category\":\"Dell\",\"subCategory\":\"Desktop\",\"description\":\"Intel Core i5, 8GB RAM, 256GB SSD, integrated graphics.\",\"image\":\"/images/desktop/dell/inspiron_desktop.png\",\"specifications\":{\"processor\":\"Intel Core i5-12400\",\"ram\":\"8GB\",\"storage\":\"256GB SSD\",\"graphics\":\"Integrated\"}},{\"id\":\"desk_dell_3\",\"name\":\"Dell Alienware Aurora R13\",\"brand\":\"Dell\",\"price\":2199.99,\"currency\":\"USD\",\"stock\":15,\"rating\":4.8,\"category\":\"Dell\",\"subCategory\":\"Desktop\",\"description\":\"Intel Core i9, 32GB RAM, 1TB SSD, RTX 3080.\",\"image\":\"/images/desktop/dell/alienware_aurora_r13.jpg\",\"specifications\":{\"processor\":\"Intel Core i9-12900F\",\"ram\":\"32GB\",\"storage\":\"1TB SSD\",\"graphics\":\"NVIDIA RTX 3080\"}},{\"id\":\"desk_dell_4\",\"name\":\"Dell OptiPlex 7090\",\"brand\":\"Dell\",\"price\":899.99,\"currency\":\"USD\",\"stock\":50,\"rating\":4.5,\"category\":\"Dell\",\"subCategory\":\"Desktop\",\"description\":\"Intel Core i5, 16GB RAM, 512GB SSD, integrated graphics.\",\"image\":\"/images/desktop/dell/optiplex_7090.jpg\",\"specifications\":{\"processor\":\"Intel Core i5-11500\",\"ram\":\"16GB\",\"storage\":\"512GB SSD\",\"graphics\":\"Integrated\"}},{\"id\":\"desk_dell_5\",\"name\":\"Dell Precision 3660\",\"brand\":\"Dell\",\"price\":1699.99,\"currency\":\"USD\",\"stock\":25,\"rating\":4.7,\"category\":\"Dell\",\"subCategory\":\"Desktop\",\"description\":\"Intel Core i7, 32GB RAM, 1TB SSD, NVIDIA T1000.\",\"image\":\"/images/desktop/dell/precision_3660.jpg\",\"specifications\":{\"processor\":\"Intel Core i7-12700\",\"ram\":\"32GB\",\"storage\":\"1TB SSD\",\"graphics\":\"NVIDIA T1000\"}},{\"id\":\"desk_lenovo_1\",\"name\":\"Lenovo Legion Tower 5\",\"brand\":\"Lenovo\",\"price\":1299.99,\"currency\":\"USD\",\"stock\":30,\"rating\":4.6,\"category\":\"Desktop\",\"subCategory\":\"Lenovo\",\"description\":\"AMD Ryzen 7, 16GB RAM, 512GB SSD, RTX 3060.\",\"image\":\"/images/desktop/lenovo/legion_tower_5.jpg\",\"specifications\":{\"processor\":\"AMD Ryzen 7 5800\",\"ram\":\"16GB\",\"storage\":\"512GB SSD\",\"graphics\":\"NVIDIA RTX 3060\"}},{\"id\":\"desk_lenovo_2\",\"name\":\"Lenovo IdeaCentre 5\",\"brand\":\"Lenovo\",\"price\":599.99,\"currency\":\"USD\",\"stock\":60,\"rating\":4.4,\"category\":\"Desktop\",\"subCategory\":\"Lenovo\",\"description\":\"Intel Core i5, 8GB RAM, 256GB SSD, integrated graphics.\",\"image\":\"/images/desktop/lenovo/ideacentre_5.png\",\"specifications\":{\"processor\":\"Intel Core i5-12400\",\"ram\":\"8GB\",\"storage\":\"256GB SSD\",\"graphics\":\"Integrated\"}},{\"id\":\"desk_lenovo_3\",\"name\":\"Lenovo ThinkStation P360\",\"brand\":\"Lenovo\",\"price\":1699.99,\"currency\":\"USD\",\"stock\":20,\"rating\":4.7,\"category\":\"Desktop\",\"subCategory\":\"Lenovo\",\"description\":\"Intel Core i7, 32GB RAM, 1TB SSD, NVIDIA T1000.\",\"image\":\"/images/desktop/lenovo/thinkstation_p360.jpg\",\"specifications\":{\"processor\":\"Intel Core i7-12700\",\"ram\":\"32GB\",\"storage\":\"1TB SSD\",\"graphics\":\"NVIDIA T1000\"}},{\"id\":\"desk_lenovo_4\",\"name\":\"Lenovo Yoga AIO 7\",\"brand\":\"Lenovo\",\"price\":1499.99,\"currency\":\"USD\",\"stock\":25,\"rating\":4.8,\"category\":\"Desktop\",\"subCategory\":\"Lenovo\",\"description\":\"27-inch 4K, AMD Ryzen 7, 16GB RAM, 512GB SSD.\",\"image\":\"/images/desktop/lenovo/yoga_aio_7.jpg\",\"specifications\":{\"processor\":\"AMD Ryzen 7 5800H\",\"ram\":\"16GB\",\"storage\":\"512GB SSD\",\"display\":\"27-inch 4K\"}},{\"id\":\"desk_lenovo_5\",\"name\":\"Lenovo ThinkCentre M70q\",\"brand\":\"Lenovo\",\"price\":699.99,\"currency\":\"USD\",\"stock\":50,\"rating\":4.5,\"category\":\"Desktop\",\"subCategory\":\"Lenovo\",\"description\":\"Intel Core i5, 16GB RAM, 512GB SSD, compact design.\",\"image\":\"/images/desktop/lenovo/thinkcentre_m70q.jpg\",\"specifications\":{\"processor\":\"Intel Core i5-12400\",\"ram\":\"16GB\",\"storage\":\"512GB SSD\",\"graphics\":\"Integrated\"}}]"));}),
"[project]/src/components/Product.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$Cart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/Cart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProductCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$db$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/db.json (json)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const Product = (param)=>{
    let { product } = param;
    var _product_specifications, _product_specifications1, _product_specifications2, _product_specifications3;
    _s();
    const { handleAddToCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$Cart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartActions"])();
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const similarProducts = __TURBOPACK__imported__module__$5b$project$5d2f$db$2e$json__$28$json$29$__["default"].filter((p)=>p.id !== product.id && (p.category === product.category || p.brand === product.brand)).slice(0, 3); // Get up to 3 similar products
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-left text-left",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto my-2 ",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: " md:flex gap-2  justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full md:w-3/5   bg-color-surface ",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-2xl overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    className: "object-cover",
                                    src: product === null || product === void 0 ? void 0 : product.image,
                                    alt: product === null || product === void 0 ? void 0 : product.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Product.tsx",
                                    lineNumber: 25,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Product.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Product.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:w-2/5 bg-color-surface mt-2 md:mt-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-bold text-2xl mb-4",
                                        children: product === null || product === void 0 ? void 0 : product.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Product.tsx",
                                        lineNumber: 30,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-bold flex items-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: " 2 reviews"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Product.tsx",
                                            lineNumber: 32,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Product.tsx",
                                        lineNumber: 31,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-color-surface my-2 max-w-fit py-2 pr-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Special Price"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Product.tsx",
                                                lineNumber: 35,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "font-bold text-xl",
                                                children: [
                                                    "Tk ",
                                                    product === null || product === void 0 ? void 0 : product.price
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Product.tsx",
                                                lineNumber: 36,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Product.tsx",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-md bg-color-success max-w-fit p-2 my-4",
                                        children: "In Stock"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Product.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-bold",
                                                children: "Quick Overview"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Product.tsx",
                                                lineNumber: 40,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mx-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: product === null || product === void 0 ? void 0 : (_product_specifications = product.specifications) === null || _product_specifications === void 0 ? void 0 : _product_specifications.display
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Product.tsx",
                                                        lineNumber: 42,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: product === null || product === void 0 ? void 0 : (_product_specifications1 = product.specifications) === null || _product_specifications1 === void 0 ? void 0 : _product_specifications1.ram
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Product.tsx",
                                                        lineNumber: 43,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: product === null || product === void 0 ? void 0 : (_product_specifications2 = product.specifications) === null || _product_specifications2 === void 0 ? void 0 : _product_specifications2.storage
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Product.tsx",
                                                        lineNumber: 44,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: product === null || product === void 0 ? void 0 : (_product_specifications3 = product.specifications) === null || _product_specifications3 === void 0 ? void 0 : _product_specifications3.processor
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Product.tsx",
                                                        lineNumber: 45,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Product.tsx",
                                                lineNumber: 41,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2 py-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "bg-color-input-bg rounded px-2 font-semibold text-color-primary",
                                                        type: "number",
                                                        value: quantity,
                                                        onChange: (e)=>setQuantity(parseInt(e.target.value)),
                                                        min: 1
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Product.tsx",
                                                        lineNumber: 48,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleAddToCart({
                                                                ...product,
                                                                quantity
                                                            }),
                                                        className: "bg-color-button-bg p-2 cursor-pointer rounded-md font-bold text-color-primary-fg hover:bg-color-button-hover active:bg-color-button-active",
                                                        children: "Add to Cart"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Product.tsx",
                                                        lineNumber: 55,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Product.tsx",
                                                lineNumber: 47,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Product.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Product.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Product.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Product.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:flex gap-2 my-2 ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:w-2/3 bg-color-surface",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-start  font-bold shadow-color-card-shadow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "bg-color-primary text-color-primary-fg px-4 py-2 cursor-pointer",
                                            children: "Specifications"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Product.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "border-color-primary border-2 px-4 py-2 cursor-pointer",
                                            children: "Details"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Product.tsx",
                                            lineNumber: 68,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "border-color-primary border-2 px-4 py-2 cursor-pointer",
                                            children: "Q&A"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Product.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "border-color-primary border-2 px-4 py-2 cursor-pointer",
                                            children: "Review"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Product.tsx",
                                            lineNumber: 70,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Product.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold my-4",
                                            children: "Specifications"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Product.tsx",
                                            lineNumber: 73,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-1/2 ",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold",
                                                                children: "Brand"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Product.tsx",
                                                                lineNumber: 76,
                                                                columnNumber: 43
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Product.tsx",
                                                            lineNumber: 76,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-1/2 ",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: product === null || product === void 0 ? void 0 : product.brand
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Product.tsx",
                                                                lineNumber: 77,
                                                                columnNumber: 43
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Product.tsx",
                                                            lineNumber: 77,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Product.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "container flex",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-1/2 ",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold",
                                                                children: "Display"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Product.tsx",
                                                                lineNumber: 80,
                                                                columnNumber: 43
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Product.tsx",
                                                            lineNumber: 80,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-1/2 ",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: product === null || product === void 0 ? void 0 : product.specifications.display
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Product.tsx",
                                                                lineNumber: 81,
                                                                columnNumber: 43
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Product.tsx",
                                                            lineNumber: 81,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Product.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "container flex",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-1/2 ",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold",
                                                                children: "Storage"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Product.tsx",
                                                                lineNumber: 84,
                                                                columnNumber: 43
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Product.tsx",
                                                            lineNumber: 84,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-1/2 ",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: product === null || product === void 0 ? void 0 : product.specifications.storage
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Product.tsx",
                                                                lineNumber: 85,
                                                                columnNumber: 43
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Product.tsx",
                                                            lineNumber: 85,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Product.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "container flex",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-1/2 ",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold",
                                                                children: "RAM"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Product.tsx",
                                                                lineNumber: 88,
                                                                columnNumber: 43
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Product.tsx",
                                                            lineNumber: 88,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-1/2 ",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: product === null || product === void 0 ? void 0 : product.specifications.ram
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Product.tsx",
                                                                lineNumber: 89,
                                                                columnNumber: 43
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Product.tsx",
                                                            lineNumber: 89,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Product.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "container flex",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-1/2 ",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold",
                                                                children: "Processor"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Product.tsx",
                                                                lineNumber: 92,
                                                                columnNumber: 43
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Product.tsx",
                                                            lineNumber: 92,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-1/2 ",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: product === null || product === void 0 ? void 0 : product.specifications.processor
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Product.tsx",
                                                                lineNumber: 93,
                                                                columnNumber: 43
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Product.tsx",
                                                            lineNumber: 93,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Product.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "container flex",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-1/2 ",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold",
                                                                children: "Graphics"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Product.tsx",
                                                                lineNumber: 96,
                                                                columnNumber: 43
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Product.tsx",
                                                            lineNumber: 96,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-1/2 ",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: product === null || product === void 0 ? void 0 : product.specifications.graphics
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Product.tsx",
                                                                lineNumber: 97,
                                                                columnNumber: 43
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Product.tsx",
                                                            lineNumber: 97,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Product.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Product.tsx",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Product.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-4 px-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold ",
                                            children: "Details"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Product.tsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: product === null || product === void 0 ? void 0 : product.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Product.tsx",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Product.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Product.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:w-1/3 my-2 md:my-0 bg-color-surface",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "py-1.5 border-b border-b-color-primary shadow-color-card-shadow",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-color-primary  py-2 pr-9 pl-2.5 text-color-primary-fg font-semibold ",
                                            style: {
                                                clipPath: "polygon(0 0,85% 0,95% 100%,0% 100%)"
                                            },
                                            children: "Similar Products"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Product.tsx",
                                            lineNumber: 109,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Product.tsx",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Product.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-4 my-4 grid grid-cols-1 gap-4",
                                    children: similarProducts.length > 0 ? similarProducts.map((similarProduct)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            product: similarProduct
                                        }, similarProduct.id, false, {
                                            fileName: "[project]/src/components/Product.tsx",
                                            lineNumber: 115,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "No similar products found."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Product.tsx",
                                        lineNumber: 118,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Product.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Product.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Product.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, product.id, true, {
            fileName: "[project]/src/components/Product.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Product.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Product, "NOUHq2EEljruQHmm7RCK6jrDum8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$Cart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartActions"]
    ];
});
_c = Product;
const __TURBOPACK__default__export__ = Product;
var _c;
__turbopack_context__.k.register(_c, "Product");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/products/item/[id]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>Page
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Product$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Product.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$db$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/db.json (json)");
'use client';
;
;
;
function Page(param) {
    let { params } = param;
    const product = __TURBOPACK__imported__module__$5b$project$5d2f$db$2e$json__$28$json$29$__["default"].find((p)=>p.id === params.id);
    console.log(product);
    if (!product) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-color-error",
            children: "Product not found"
        }, void 0, false, {
            fileName: "[project]/src/app/products/item/[id]/page.tsx",
            lineNumber: 11,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Product$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        product: product
    }, void 0, false, {
        fileName: "[project]/src/app/products/item/[id]/page.tsx",
        lineNumber: 14,
        columnNumber: 10
    }, this);
}
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_956384ff._.js.map
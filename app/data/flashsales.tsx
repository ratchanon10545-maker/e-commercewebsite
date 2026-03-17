import { Products } from "./products"

export type Flashsales = {
    product: Products[]
    targetDate: string
}

export const flashsales: Flashsales = {
    product : [
        {
        id: 1,
        name: "Product A",
        image: "/images/a.png",
        href: "/product/a",
        price: 160,
        discount: 40,
        review: [
            { star: 5, count: 50 },
            { star: 4, count: 50 },
            { star: 3, count: 20 },
            { star: 2, count: 10 },
            { star: 1, count: 5 },
        ],
    },
    {
        id: 2,
        name: "Product B",
        image: "/images/b.png",
        href: "/product/b",
        price: 1160,
        discount: 35,
        review: [
            { star: 5, count: 100 },
            { star: 4, count: 50 },
            { star: 3, count: 20 },
            { star: 2, count: 10 },
            { star: 1, count: 5 },
        ],
    },
    {
        id: 3,
        name: "Product C",
        image: "/images/c.png",
        href: "/product/c",
        price: 400,
        discount: 30,
        review: [
            { star: 5, count: 100 },
            { star: 4, count: 50 },
            { star: 3, count: 20 },
            { star: 2, count: 10 },
            { star: 1, count: 5 },
        ],
    },
    {
        id: 4,
        name: "Product d",
        image: "/images/d.png",
        href: "/product/d",
        price: 400,
        discount: 10,
        review: [
            { star: 5, count: 100 },
            { star: 4, count: 50 },
            { star: 3, count: 20 },
            { star: 2, count: 10 },
            { star: 1, count: 5 },
        ],
    },
    {
        id: 5,
        name: "Product d",
        image: "/images/d.png",
        href: "/product/d",
        price: 400,
        discount: 10,
        review: [
            { star: 5, count: 100 },
            { star: 4, count: 50 },
            { star: 3, count: 20 },
            { star: 2, count: 10 },
            { star: 1, count: 5 },
        ],
    },
    {
        id: 6,
        name: "Product d",
        image: "/images/d.png",
        href: "/product/d",
        price: 400,
        discount: 10,
        review: [
            { star: 5, count: 100 },
            { star: 4, count: 50 },
            { star: 3, count: 20 },
            { star: 2, count: 10 },
            { star: 1, count: 5 },
        ],
    },
    ],
    targetDate : "2026-3-20"
}
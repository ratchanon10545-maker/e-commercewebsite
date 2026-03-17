export type Products = {
  id : number
  name: string
  image: string
  href: string
  price: number
  discount: number
  review: {
    star: number
    count: number
  }[]
  averageRating?: number;
}

export const products = [
    {
        id: 1,
        name: "HAVIT HV-G92 Gamepad",
        price: 120,
        image: "/images/products/1.png",
        href: "/product/1",
        discount: 0,
        review:[
            { star: 5, count: 50 },
            { star: 4, count: 50 },
            { star: 3, count: 20 },
            { star: 2, count: 10 },
            { star: 1, count: 5 },
        ],
    },
    {
        id: 2,
        name: "HAVIT HV-G92 Gamepad",
        price: 120,
        image: "/images/products/2.png",
        href: "/product/2",
        discount: 0,
        review:[
            { star: 5, count: 50 },
            { star: 4, count: 50 },
            { star: 3, count: 20 },
            { star: 2, count: 10 },
            { star: 1, count: 5 },
        ],
    },
    {
        id: 3,
        name: "HAVIT HV-G92 Gamepad",
        price: 120,
        image: "/images/products/3.png",
        href: "/product/3",
        discount: 0,
        review:[
            { star: 5, count: 50 },
            { star: 4, count: 50 },
            { star: 3, count: 20 },
            { star: 2, count: 10 },
            { star: 1, count: 5 },
        ],
    },
    {
        id: 4,
        name: "HAVIT HV-G92 Gamepad",
        price: 120,
        image: "/images/products/4.png",
        href: "/product/4",
        discount: 0,
        review:[
            { star: 5, count: 50 },
            { star: 4, count: 50 },
            { star: 3, count: 20 },
            { star: 2, count: 10 },
            { star: 1, count: 5 },
        ],
    },
    {
        id: 5,
        name: "HAVIT HV-G92 Gamepad",
        price: 120,
        image: "/images/products/5.png",
        href: "/product/5",
        discount: 0,
        review:[
            { star: 5, count: 50 },
            { star: 4, count: 50 },
            { star: 3, count: 20 },
            { star: 2, count: 10 },
            { star: 1, count: 5 },
        ],
    },
    {
        id: 6,
        name: "HAVIT HV-G92 Gamepad",
        price: 120,
        image: "/images/products/6.png",
        href: "/product/6",
        discount: 0,
        review:[
            { star: 5, count: 50 },
            { star: 4, count: 50 },
            { star: 3, count: 20 },
            { star: 2, count: 10 },
            { star: 1, count: 5 },
        ],
    },
    {
        id: 7,
        name: "HAVIT HV-G92 Gamepad",
        price: 120,
        image: "/images/products/7.png",
        href: "/product/7",
        discount: 0,
        review:[
            { star: 5, count: 50 },
            { star: 4, count: 50 },
            { star: 3, count: 20 },
            { star: 2, count: 10 },
            { star: 1, count: 5 },
        ],
    },
    {
        id: 8,
        name: "HAVIT HV-G92 Gamepad",
        price: 120,
        image: "/images/products/8.png",
        href: "/product/8",
        discount: 0,
        review:[
            { star: 5, count: 50 },
            { star: 4, count: 50 },
            { star: 3, count: 20 },
            { star: 2, count: 10 },
            { star: 1, count: 5 },
        ],
    },
    {
        id: 9,
        name: "The north coat",
        image: "/images/bestsell/a.png",
        href: "/product/a",
        price: 360,
        discount: 0,
       review: [
            { star: 5, count: 200 },
            { star: 4, count: 50 },
            { star: 3, count: 20 },
            { star: 2, count: 10 },
            { star: 1, count: 5 },
        ],
    },
    {
        id: 10,
        name: "Gucci duffle bag",
        image: "/images/bestsell/b.png",
        href: "/product/b",
        price: 1160,
        discount: 0,
       review: [
            { star: 5, count: 500 },
            { star: 4, count: 50 },
            { star: 3, count: 20 },
            { star: 2, count: 10 },
            { star: 1, count: 5 },
        ],
    },
    {
        id: 11,
        name: "RGB liquid CPU Cooler",
        image: "/images/bestsell/c.png",
        href: "/product/c",
        price: 170,
        discount: 0,
       review: [
            { star: 5, count: 350 },
            { star: 4, count: 50 },
            { star: 3, count: 20 },
            { star: 2, count: 10 },
            { star: 1, count: 5 },
        ],
    },
    {
        id: 12,
        name: "Small BookSelf",
        image: "/images/bestsell/d.png",
        href: "/product/d",
        price: 360,
        discount: 0,
       review: [
            { star: 5, count: 600 },
            { star: 4, count: 50 },
            { star: 3, count: 20 },
            { star: 2, count: 10 },
            { star: 1, count: 5 },
        ],
    },
    {
        id: 13,
        name: "Small BookSelf",
        image: "/images/bestsell/d.png",
        href: "/product/d",
        price: 360,
        discount: 0,
       review: [
            { star: 5, count: 600 },
            { star: 4, count: 50 },
            { star: 3, count: 20 },
            { star: 2, count: 10 },
            { star: 1, count: 5 },
        ],
    },
]
    
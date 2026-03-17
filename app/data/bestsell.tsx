type CardProps = {
  name: string
  image: string
  href: string
  price: number
  discount: number
  review: {
    star: number
    count: number
  }[]
}

export const bestsell = [
    {
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 5,
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
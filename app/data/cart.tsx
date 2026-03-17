type Cart = {
    id: number;
    uid: number;
    pid: number;
    quantity: number;
}   

export const cart: Cart[] = [
    {
        id: 1,
        uid: 1,
        pid: 1,
        quantity: 1,
    },
    {
        id: 1,
        uid: 2,
        pid: 1,
        quantity: 1,
    }
]

export const addToCart = (uid: number, pid: number, quantity: number) => {
    const newCart = {
        id: (cart.length + 1),
        uid,
        pid,
        quantity,
    }
    cart.push(newCart)
}

export const removeFromCart = (id: number) => {
    cart.splice(cart.findIndex((item) => item.id === id), 1)
}
import { createContext, useState, useMemo } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider =({ children }) => {
    const [cart, setCart]=useState([])

    // Agregar un producto al carrito
    const addItem = (item,quantity) => {
        if(!isInCart(item.id)){
            setCart(prev => [...prev, {...item,quantity}])
        }else{
            console.error(`El producto con ID ${item.id} ya fue agregado al carrito`)
        }
    }

    // Remover un producto por ID
    const removeItem =(itemId) => {
        const cartUpdated =cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    // Vaciar el carrito
    const clearCart = () =>{
        setCart([])
    }

    // Verificar si un producto está en el carrito
    const isInCart =(itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    // Calcular la cantidad total de productos
    const totalQuantity = useMemo(
        () => cart.reduce((acc, prod) => acc + prod.quantity, 0),
        [cart]
    );

    // Calcular el precio total
    const total = useMemo(
        () => cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0),
        [cart]
    );

    return(
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, isInCart, totalQuantity, total}}>
            {children}
        </CartContext.Provider>
    )
}
import React, { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0,
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {}
});

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart((prev) => [...prev, { ...item, quantity }]);
        } else {
            console.error("El producto ya fue agregado");
        }
    };

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter((prod) => prod.id !== itemId);
        setCart(cartUpdated);
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (itemId) => {
        return cart.some((prod) => prod.id === itemId);
    };

    useEffect(() => {
        setTotalQuantity(cart.length);
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, totalQuantity, addItem, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

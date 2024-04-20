import {createContext, useEffect, useState} from "react";
import { getCartItems, addToCart, removeFromCart, updateItemQuantity } from '../utils/cartUtils';
import PropTypes from "prop-types";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        loadCart();
    }, []);

    const loadCart = () => {
        const cart = getCartItems();
        setCart(cart);
    }

    const handleAddToCart = (itemId) => {
        addToCart(itemId);
        // refresh the cart
        loadCart();
    }

    const handleRemoveFromCart = (itemId) => {
        removeFromCart(itemId);
        loadCart();
    }

    const handleUpdateQuantity = (itemId, quantity) => {
        updateItemQuantity(itemId, quantity);
        loadCart();
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart: handleAddToCart,
            removeFromCart: handleRemoveFromCart,
            updateItemQuantity, handleUpdateQuantity
        }}>
            { children }
        </CartContext.Provider>
    )
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired
}
import {createContext, useEffect, useState} from "react";
import { getItems, addItem, removeFromCart, updateItemQuantity, saveCart} from '../utils/cartUtils';
import PropTypes from "prop-types";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        loadCart();
    }, []);

    const loadCart = () => {
        const cart = getItems();
        setCart(cart);
    }

    const handleAddToCart = (item) => {
        addItem(item);
        // refresh the cart
        loadCart();
    }

    const handleRemoveFromCart = (itemId) => {
        removeFromCart(itemId);
        // refresh the cart
        loadCart();
    }

    // Inside your CartContext
    const clearCart = () => {
        setCart([]);
        saveCart([]);
    };


    const handleUpdateQuantity = (itemId, quantity) => {
        updateItemQuantity(itemId, quantity);
        loadCart();
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart: handleAddToCart,
            removeFromCart: handleRemoveFromCart,
            updateItemQuantity: handleUpdateQuantity,
            clearCart: clearCart
        }}>
            { children }
        </CartContext.Provider>
    )
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired
}
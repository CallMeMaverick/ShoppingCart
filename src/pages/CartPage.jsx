import { useContext } from 'react';
import {CartContext} from "../context/CartContext.jsx";
import Header from "../components/Header.jsx";

export default function CartPage() {
    const { cart, removeFromCart, updateItemQuantity } = useContext(CartContext);

    const handleRemoveItem = (itemId) => {
        removeFromCart(itemId);
    };

    const handleQuantityChange = (itemId, newQuantity) => {
        updateItemQuantity(itemId, newQuantity);
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <>
            <Header/>
            <div className="cart">
                <h1>Your Cart</h1>
                {cart.map((item) => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.title} className="item-image"/>

                        <div className="item-details">
                            <h3>{item.title}</h3>
                            <p>${item.price}</p>
                        </div>

                        <div className="item-actions">
                            <input
                                type="number"
                                value={item.quantity}
                                className="item-quantity"
                                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 0)}
                            />
                            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                        </div>
                    </div>
                ))}
                <h2>Total: ${calculateTotal()}</h2>
            </div>

        </>
    );
}


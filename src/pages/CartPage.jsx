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
            <Header />
            <div>
                <h1>Your Cart</h1>
                {cart.map((item) => (
                    <div key={item.id} className={"cart-item"}>
                        <img src={item.image} style={{width: "100px", height: "100px"}}/>
                        <h3>{item.title}</h3>
                        <p>${item.price}</p>
                        <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                        />
                        <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                    </div>
                ))}
                <h2>Total: ${calculateTotal()}</h2>
            </div>
        </>
    );
}


function getCart() {
    const cart = localStorage.get("cart");
    return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

export function addItem(item) {
    const cart = getCart();
    const itemIndex = cart.findIndex((prod) => prod.id === item.id);

    if (itemIndex > -1) {
        cart[itemIndex].quantity++;
    } else {
        const newItem = {...item, quantity: 1};
        cart.push(newItem);
    }

    saveCart(cart);
}

export function removeFromCart(itemId) {
    let cart = getCart();
    cart = cart.filter((item) => item.id !== itemId);
    saveCart(cart);
}

export function updateItemQuantity(itemId, quantity) {
    const cart = getCart();
    const itemIndex = cart.findIndex((item) => item.id === itemId);

    if (itemIndex <= 0) {
        removeFromCart(itemId);
    } else {
        cart[itemIndex].quantity = quantity;
    }

    saveCart(cart);
}

export function getItems() {
    return getCart();
}
import { Order } from "../models/Order.js";
export function updateAmount(orderId, amount) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]'); 
    const cartMap = new Map(cart);
    let order = cartMap.get(orderId);
    order.amount += amount;
    localStorage.setItem('cart', JSON.stringify([...cartMap])); 
}
export function addItem(product) {
    // Recuperar o cart do localStorage e converter para Map
    let cart = JSON.parse(localStorage.getItem('cart') || '[]'); 
    const cartMap = new Map(cart);
    try {
        let order = cartMap.get(product.id);
        if (order) {
            order.amount++;
        } else {
            throw new Error("Produto não encontrado no carrinho");
        }
    } catch (error) {
        let order = new Order(product, 1);
        cartMap.set(product.id, order);
    }

    localStorage.setItem('cart', JSON.stringify([...cartMap])); 
}

export function getOrders () {
    let cart = JSON.parse(localStorage.getItem('cart'));
    const cartMap = new Map(cart);
    return Array.from(cartMap.values());
}

export function getCartLength() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    const cartMap = new Map(cart);
    return Array.from(cartMap.values()) 
    .reduce((total, order) => total + order.amount, 0)
}
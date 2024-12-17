import { createOrderCard } from "./orderCard.js";

export function createOrderList(orders) {
    let orderList = document.createElement("div");
    orderList.className = "d-flex flex-column row-gap-5 justify-content-center align-items-center order-list";
    for(let order of orders) {
        let card = createOrderCard(order);
        orderList.appendChild(card);
    }
    return orderList;
}
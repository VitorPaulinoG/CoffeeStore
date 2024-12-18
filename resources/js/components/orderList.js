import { createOrderCard } from "./orderCard.js";

export function createOrderList(orders) {
    let orderList = document.createElement("div");
    orderList.className = "d-flex flex-column row-gap-5 justify-content-center align-items-center h-auto order-list pb-4";
    for(let order of orders) {
        let card = createOrderCard(order);
        orderList.appendChild(card);
    }
    return orderList;
}
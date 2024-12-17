import { createOrderList } from "../components/orderList.js";
import { getOrders } from "../services/cartService.js";


export function createCartPage() {
    let cartPage = document.createElement("div");
    cartPage.className = "d-flex justify-content-center w-100 cartPage h-auto";
    
    let div = document.createElement("div");
    div.className = "d-flex flex-column align-items-center rounded shadow w-100 h-100 pb-5";
    div.innerHTML = 
        `
        <span class="khandi-font fs-2">
            Cart
        </span>
        `;

    div.appendChild(createOrderList(getOrders()));
    cartPage.appendChild(div);
    return cartPage;
}
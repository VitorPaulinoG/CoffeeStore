import { OrderAddedOrUpdatedEvent } from "../events/OrderAddedOrUpdatedEvent.js";
import { updateAmount, getCartLength } from "../services/cartService.js";


export function createOrderCard (order) {

    let card = document.createElement('div');
    card.id = `order${order.product.id}`;
    card.className = "d-flex shadow rounded border border-0 order-card";
    card.innerHTML = 
        `
            <div class="col-md-4">
                <img src="${order.product.image}" 
                    class="img-fluid" alt="...">
            </div>
            <div class="order-card-content inter-font">
                <div class="d-flex">
                    <div class="d-flex flex-column card-body row-gap-2 px-4 order-main-content">
                        <h5 class="card-title fw-semibold fs-4">
                            ${order.product.title}
                        </h5>
                        <div class="hstack">
                            <span class="align-self-start fs-small fw-semibold pt-1">R$</span>
                            <span class="fs-4 fw-semibold">${order.product.price.toFixed(2)}</span>
                        </div>
                    </div>
                    <div class="d-flex flex-row column-gap-2">
                        <div class="d-flex order-badge-container">
                            <div id="amount-badge-${order.product.id}" class="d-flex fw-medium justify-content-center align-items-center 
                                inter-font badge rounded-1 inn-shadow text-dark fs-4 order-badge w-100">
                                ${order.amount}
                            </div>
                        </div>
                        <div class="btn-group-vertical" role="group" aria-label="Basic outlined example">
                            <button type="button" class="plus btn rounded-top-1 btn-outline-primary order-spinner text-dark inter-font fw-medium">+</button>
                            <button type="button" class="minus btn rounded-bottom-1 btn-outline-primary order-spinner text-dark inter-font fw-medium">-</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        `;
    const plus = card.querySelector(".plus");
    plus.addEventListener("click", () => {
        
        let amountBadge = card.querySelector(`#amount-badge-${order.product.id}`);
        
        amountBadge.innerText = updateAmount (order.product.id, 1);
        window.dispatchEvent(new OrderAddedOrUpdatedEvent());
    });

    const minus = card.querySelector(".minus");
    minus.addEventListener("click", () => {
        let amountBadge = card.querySelector(`#amount-badge-${order.product.id}`);
        // if(parseInt(amountBadge.innerText) <= 0) 
        //     return;
        amountBadge.innerText = updateAmount (order.product.id, -1);
        window.dispatchEvent(new OrderAddedOrUpdatedEvent());
    });

    return card;
}
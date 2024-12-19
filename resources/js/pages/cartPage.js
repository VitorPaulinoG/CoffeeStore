import { createOrderList } from "../components/orderList.js";
import { FinishPurchaseClickedEvent } from "../events/FinishPurchaseClickedEvent.js";
import { Order } from "../models/Order.js";
import { getOrders, getTotalCost, removeOrder } from "../services/cartService.js";


export function createCartPage() {
    let cartPage = document.createElement("div");
    cartPage.className = "d-flex flex-column align-items-center w-100 cartPage h-auto min-h-100";
    
    let div = document.createElement("div");
    div.className = "d-flex flex-column align-items-center rounded shadow w-100 h-100 overflow-hidden";
    div.innerHTML = 
        `
        <span class="khandi-font fs-2">
            Cart
        </span>
        <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Remover Pedido?</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div id="modal-description" class="modal-body">
                        
                    </div>
                    <div class="modal-footer">
                        <button id="no-btn" type="button" class="btn btn-secondary">Não</button>
                        <button id="yes-btn" type="button" class="btn btn-dark">Sim</button>
                    </div>
                </div>
            </div>
        </div>  
        `;
    let orders = getOrders().map(order => new Order(order.product, order.amount));
    let orderList = createOrderList(orders);
    div.appendChild(orderList);

    let totalCost = getTotalCost();
    let total = document.createElement("div");
    total.className = "d-flex w-100 h-auto mt-auto";
    total.innerHTML = 
        `
        <span class="d-flex w-100 min-w-100 bg-dark text-white total-price">
            <span class="d-flex total-price-label justify-content-center align-items-center khand-font fs-4 fw-medium">
                Total
            </span>
            <span class="d-flex flex-column badge p-3 order-badge text-dark rounded-0 w-100 justify-content-center align-items-center inter-font">
                <div class="hstack w-100 justify-content-center">
                    <span class="align-self-start fs-small fw-semibold">R$</span>
                    <span id="total-cost" class="fs-4 fw-semibold">${totalCost.toFixed(2)}</span>
                </div>
            </span>
        </span>
        `;
    div.appendChild(total);
    cartPage.appendChild(div);
    let finishPurchase = document.createElement("button");
    finishPurchase.className = "btn btn-light w-100 shadow mt-3";
    finishPurchase.innerText = "Finalizar Compra";
    finishPurchase.addEventListener('click', (e) => {
        window.dispatchEvent(new FinishPurchaseClickedEvent(getOrders().map(order => new Order(order.product, order.amount)), getTotalCost()));
    });

    cartPage.appendChild(div);
    cartPage.appendChild(finishPurchase);


    let noButton = div.querySelector('#no-btn');
    noButton.addEventListener('click', (e) => {
        let modalElement = document.getElementById('myModal');
        let modalInstance = bootstrap.Modal.getInstance(modalElement);
    
        if (modalInstance) {
            modalInstance.hide();
        }

        let backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
            backdrop.remove();
        }
        document.body.classList.remove('modal-open');
        document.body.style.overflow = ''; 
    });

    window.addEventListener('orderAmountCleared', (e) => {
        let modalElement = document.getElementById('myModal');
        let description = modalElement.querySelector('#modal-description');
        description.innerText = `O pedido ${e.detail.order.product.title} foi zerado. Quer removê-lo?`;
        var myModal = new bootstrap.Modal(modalElement);
        let yesButton = modalElement.querySelector('#yes-btn');
        yesButton.addEventListener('click', (e2) => {
            removeOrder(e.detail.order.product.id);
            myModal.hide();
            let backdrop = document.querySelector('.modal-backdrop');
            if (backdrop) {
                backdrop.remove();
            }
            document.body.classList.remove('modal-open');
            document.body.style.overflow = ''; 
            div.removeChild(orderList);
            div.removeChild(total);
            orderList = createOrderList(getOrders());
            div.appendChild(orderList);
            div.appendChild(total);
        });
        myModal.show();
    });
    
    window.addEventListener('orderAdded', (e) => {
        let totalCost = total.querySelector("#total-cost");
        totalCost.innerText = `${getTotalCost().toFixed(2)}`;
    })    
    return cartPage;
}
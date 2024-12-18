import { createOrderList } from "../components/orderList.js";
import { getOrders, removeOrder } from "../services/cartService.js";


export function createCartPage() {
    let cartPage = document.createElement("div");
    cartPage.className = "d-flex justify-content-center w-100 cartPage h-auto min-h-100";
    
    let div = document.createElement("div");
    div.className = "d-flex flex-column align-items-center rounded shadow w-100 h-100 pb-5";
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
                        O item $
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Não</button>
                        <button id="yes-btn" type="button" class="btn btn-dark">Sim</button>
                    </div>
                </div>
            </div>
        </div>  
        `;
    let orderList = createOrderList(getOrders());
    div.appendChild(orderList);
    cartPage.appendChild(div);
    window.addEventListener('orderAmountCleared', (e) => {
        let modalElement = document.getElementById('myModal');
        let description = modalElement.querySelector('#modal-description');
        description.innerText = `O pedido ${e.detail.order.product.title} foi zerado. Quer removê-lo?`;
        var myModal = new bootstrap.Modal(modalElement);
        let yesButton = modalElement.querySelector('#yes-btn');
        yesButton.addEventListener('click', (e2) => {
            removeOrder(e.detail.order.product.id);
            myModal.hide();
            div.removeChild(orderList);
            orderList = createOrderList(getOrders());
            div.appendChild(orderList);
        });
        myModal.show();
    });
    
    
    return cartPage;
}
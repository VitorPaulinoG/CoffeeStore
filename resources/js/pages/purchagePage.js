import { CartButtonClickedEvent } from "../events/CartButtonClickedEvent.js";
import { orderAddedOrUpdatedEvent } from "../events/OrderAddedOrUpdatedEvent.js";
import { removeOrders } from "../services/cartService.js";

export function createPurchasePage(orders, totalCost) {
    let purchasePage = document.createElement("div");
    purchasePage.className = "d-flex flex-column align-items-center w-100 cartPage h-auto min-h-100";
    
    let div = document.createElement("div");
    div.className = "d-flex flex-column align-items-center rounded shadow w-100 h-auto overflow-hidden px-4 pt-4 pb-10";
    let tableRows = "";
    for (let order of orders) {
        tableRows += 
            `<tr>
                <td>${order.product.title}</td>
                <td>${order.amount}</td>
                <td>${order.getTotalCost().toFixed(2)}</td>
            </tr>
            `;
    }
    
    div.innerHTML = 
        `
        <span class="khandi-font fs-2">
            Finalizar Compra
        </span>
        <span class="text-start align-self-start">Pedidos</span>
        <table id="purchase-table" class="table table-bordered inter-font">
            <thead>
                <tr>
                    <th>Produto</th>
                    <th>Qtd.</th>
                    <th>Valor (R$)</th>
                </tr>
            </thead>
            <tbody>
                ${tableRows}
                <tr>
                    <td colspan="2" class="text-center fw-bold">Total</td>
                    <td>${totalCost.toFixed(2)}</td>
                </tr>
            </tbody>
        </table>
        `;

    purchasePage.appendChild(div);
    let form = document.createElement("div");
    form.className = "align-self-start w-100 inter-font";
    form.innerHTML = 
        `
        
        <div class="d-flex w-100 column-gap-2">
            <div class="d-flex flex-column address-input">
                <span>
                    Endereço
                </span>
                <input class="form-control" placeholder="R. do Alvoredo, 200 - Campina Grande/PB"/>
            </div>
            <div class="d-flex flex-column paymentMethodDropDown">
                <span>
                    Forma de Pagamento
                </span>
                <div class="btn-group">
                    <button id="paymentMethodDropDownButton" type="button" 
                        class="d-flex justify-content-between gap-3 align-items-center btn btn-dark dropdown-toggle text-start w-100" data-bs-toggle="dropdown" aria-expanded="false">
                        Selecione
                    </button>
                    <ul class="dropdown-menu w-100" aria-labelledby="paymentMethodDropDownButton">
                        <li><a class="dropdown-item" href="#" data-value="1">Débito</a></li>
                        <li><a class="dropdown-item" href="#" data-value="2">Crédito</a></li>
                        <li><a class="dropdown-item" href="#" data-value="3">Boleto</a></li>
                        <li><a class="dropdown-item" href="#" data-value="4">Pix</a></li>
                    </ul>
                </div> 
            </div>
        </div>
        `;

    form.querySelectorAll(".dropdown-item").forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const button = form.querySelector('#paymentMethodDropDownButton');
            button.textContent = item.innerText;
        })
    });

    let buttons = document.createElement("div");
    buttons.className = "d-flex w-100 column-gap-4";
    buttons.innerHTML = 
        `
            <button id="back-to-cart-btn" class="btn btn-white w-100 shadow mt-3">
                Voltar
            </button>
            <button id="confirm-purchase-btn" class="btn btn-dark w-100 shadow mt-3">
                Confirmar
            </button>
        `;

    let backButton = buttons.querySelector("#back-to-cart-btn");
    backButton.addEventListener('click', (e) => {
        window.dispatchEvent(new CartButtonClickedEvent());
    });
    let confirmButton = buttons.querySelector("#confirm-purchase-btn");
    confirmButton.addEventListener('click', (e) => {
        const addressInput = form.querySelector('.address-input input');
        const paymentMethod = form.querySelector('#paymentMethodDropDownButton');

        if (!addressInput.value.trim()) {
            alert('Por favor, preencha o endereço.');
            return; 
        }

        if (paymentMethod.textContent.trim() === 'Selecione') {
            alert('Por favor, selecione uma forma de pagamento.');
            return;
        }

        alert('Compra confirmada!');
        removeOrders();
        window.dispatchEvent(new orderAddedOrUpdatedEvent());

    });

    div.appendChild(form);
    purchasePage.appendChild(div);
    purchasePage.appendChild(buttons);
    return purchasePage;
}
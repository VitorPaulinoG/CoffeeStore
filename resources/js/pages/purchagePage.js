
export function createPurchasePage(orders, totalCost) {
    let purchasePage = document.createElement("div");
    purchasePage.className = "d-flex flex-column align-items-center w-100 cartPage h-auto min-h-100";
    
    let div = document.createElement("div");
    div.className = "d-flex flex-column align-items-center rounded shadow w-100 h-100 overflow-hidden p-4";
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
        <table id="purchase-table" class="table table-bordered">
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
    form.className = "align-self-start address-input";
    form.innerHTML = 
        `
        <span>
            Endereço
        </span>
        <div class="hstack">
            <input class="form-control" placeholder="R. do Alvoredo, 200 - Campina Grande/PB"/>
            <div class="btn-group">
                <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Action
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div> 
        </div>
        `;
    let finishPurchase = document.createElement("button");
    finishPurchase.className = "btn btn-light w-100 shadow mt-3";
    finishPurchase.innerText = "Finalizar Compra";


    div.appendChild(form);
    purchasePage.appendChild(div);
    purchasePage.appendChild(finishPurchase);
    return purchasePage;
}
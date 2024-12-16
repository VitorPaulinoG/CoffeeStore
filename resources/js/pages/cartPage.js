

export function createCartPage() {
    let cartPage = document.createElement("div");
    cartPage.className = "d-flex justify-content-center w-100 cartPage";
    
    let div = document.createElement("div");
    div.className = "d-flex flex-column align-items-center rounded shadow w-100 h-100";
    
    let orderList = document.createElement("div");
    orderList.className = "d-flex flex-column row-gap-5 justify-content-center align-items-center order-list";
    orderList.innerHTML = 
        `
        <div class="d-flex flex-row shadow rounded border border-0 order-card">
            <div class="col-md-4">
                <img src="https://images.unsplash.com/photo-1517775587378-db68ff39502f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    class="img-fluid" alt="...">
            </div>
            <div class="d-flex flex-row justify-content-start align-items-center inter-font">
                <div class="d-flex">
                    <div class="d-flex flex-column card-body row-gap-2 px-4 order-main-content">
                        <h5 class="card-title fw-semibold fs-4">
                            Black Coffee
                        </h5>
                        <div class="hstack">
                            <span class="align-self-start fs-small fw-semibold pt-1">R$</span>
                            <span class="fs-4 fw-semibold">12.00</span>
                        </div>
                    </div>
                    <div class="d-flex flex-row column-gap-2">
                        <div class="d-flex order-badge-container">
                            <div class="d-flex fw-medium justify-content-center align-items-center 
                                inter-font badge rounded-1 inn-shadow text-dark fs-4 order-badge w-100">
                                2
                            </div>
                        </div>
                        <div class="btn-group-vertical" role="group" aria-label="Basic outlined example">
                            <button type="button" class="btn rounded-top-1 btn-outline-primary order-spinner text-dark inter-font fw-medium">+</button>
                            <button type="button" class="btn rounded-bottom-1 btn-outline-primary order-spinner text-dark inter-font fw-medium">-</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        `;
    div.innerHTML = 
        `
        <span class="khandi-font fs-2">
            Cart
        </span>
        `;
    div.appendChild(orderList);
    cartPage.appendChild(div);
    // cartPage.innerHTML = 
    //     `
        
    //     `;
    
    return cartPage;
}
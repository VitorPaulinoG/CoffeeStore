import { addItem, getCartLength } from "../services/cartService.js";

export function createProductCard (product) {
    let card = document.createElement("div");
    
    card.className = "card shadow border border-0 rounded-3 product-card flex-grow-0";
    card.innerHTML = 
        `
        <div class="card-img-container">
            <img src="${product.image}" class="card-img-top rounded-top-3" alt="...">
        </div>
        <div class="card-body vstack justify-content-between gap-4 inter-font">
            <div>
                <h5 class="card-title fs-3 fw-semibold">${product.title}</h5>
                <p class="card-text">${product.description}</p>
                <p class="card-text">Ingredientes: ${product.ingredients.join(", ")}</p>
            </div>
            <div class="hstack justify-content-between">
                <button type="button" class="btn btn-outline-dark px-3 fw-semibold">Add to Cart</button>
                <div class="hstack">
                    <span class="align-self-start fs-small fw-semibold pt-1">R$</span>
                    <span class="fs-4 fw-semibold">${product.price.toFixed(2)}</span>
                </div>
            </div>
        </div>
        `;

    const button = card.querySelector("button");
    button.addEventListener("click", () => {
        addItem (product);
        window.dispatchEvent(new CustomEvent('orderAdded', {
            detail: {
                cartLength: () => getCartLength()
            }
        }));
    })
    return card;
}
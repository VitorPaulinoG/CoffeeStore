export const cartButton = document.createElement("button");
export function createCartButton (productCount) {
    cartButton.type = "button";
    cartButton.className = "btn btn-dark rounded-3 py-0 d-flex gap-3 align-items-center";
    cartButton.innerHTML = 
        `
        <i class="bi bi-cart4 fs-2"></i> 
        <span class="badge text-bg-light">
            <span class="text-bg-light px-1 fs-6 fw-semibold inter-font">${productCount}</span>
        </span>
        `;
    return cartButton;
}

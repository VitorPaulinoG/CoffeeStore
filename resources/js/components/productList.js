import { createProductCard } from "./productCard.js";

export const productList = document.createElement("div");
export async function createProductList (products){
    // productList.className = "d-flex flex-wrap row-gap-5 align-content-start product-list";
    productList.replaceChildren();
    productList.className = "d-grid product-list m-w-100";
    for (let product of products) {
        let card = createProductCard(product);
        productList.appendChild(card);
    }

    return productList;
}
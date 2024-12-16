import { createCartButton } from "./cartButton.js";
import { getCartLength } from "../services/cartService.js";
import { createLogo } from "./logo.js";

export const header = document.createElement("header");

export function createHeader () {
    header.className = "w-100 px-5 border shadow d-flex justify-content-between align-items-center";
    
    
    let nav = document.createElement("nav");
    nav.appendChild(createCartButton(getCartLength()));
    header.appendChild(createLogo());
    header.appendChild(nav);
    return header;
}
import { HomePageRequestedEvent } from "../events/HomePageRequestedEvent.js";

export const logo = document.createElement("span");
export function createLogo() {
    logo.title = "Início";
    logo.className = "fs-1 khandi-font pointer";
    logo.innerHTML = 
        `
        Coffee Store
        <i class="bi bi-cup-hot-fill position-relative"></i>
        `;

    logo.addEventListener('click', (e) => {
        window.dispatchEvent(new HomePageRequestedEvent());
    })
    return logo;
}
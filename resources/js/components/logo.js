export const logo = document.createElement("span");
export function createLogo() {
 
    logo.className = "fs-1 khandi-font";
    logo.innerHTML = 
        `
        Coffee Store
        <i class="bi bi-cup-hot-fill position-relative"></i>
        `;
    return logo;
}
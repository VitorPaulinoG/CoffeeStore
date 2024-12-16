export const footer = document.createElement("footer");
export function createFooter () {
    footer.className = "w-100 d-flex justify-content-center align-items-center shadow-lg bg-dark text-white";
    footer.innerText = "Powered By Vitor Paulino";
    return footer;
}
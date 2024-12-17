import { createFooter } from "./components/footer.js";
import { createHeader } from "./components/header.js";
import { createCartPage } from "./pages/cartPage.js";
import { createShoppingPage } from "./pages/shoppingPage.js";

const root = document.getElementById("root");
if (localStorage.getItem('cart') === null) {
    localStorage.setItem('cart', JSON.stringify([])); // Inicializa como um array vazio
}

root.className = "vstack align-items-center overflow-scroll";
let mainContent = await createShoppingPage();

let main = document.createElement("main");
main.className = "d-flex min-w-100 min-h-100 w-100 flex-grow-1 justify-content-center";
main.appendChild(mainContent);

// PÁGINA
root.appendChild(createHeader());
root.appendChild(main);
root.appendChild(createFooter());

window.addEventListener('cartButtonClick', (e) => {
    console.log("PASSOU AQUI");
    main.innerHTML = " ";

    main.className = "d-flex min-w-100 min-h-100 w-100 flex-grow-1 justify-content-center my-5 h-100";
    main.appendChild(createCartPage());
});


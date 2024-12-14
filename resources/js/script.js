import { createBanner } from "./components/banner.js";
import { createCartButton } from "./components/cartButton.js";
import { createLogo } from "./components/logo.js";
import { createProductList } from "./components/productList.js";
import { getCoffees } from "./services/coffeeService.js";

const root = document.getElementById("root");

// const createHeader = () => {

// };
root.className = "vstack align-items-center";
let header = document.createElement("header");
header.className = "w-100 px-5 border shadow d-flex justify-content-between align-items-center";


let nav = document.createElement("nav");
nav.appendChild(createCartButton(0));
header.appendChild(createLogo());
header.appendChild(nav);


let main = document.createElement("main");
main.className = "w-100 h-100 main-padding py-2 vstack";

let coffees = await getCoffees();
main.appendChild(createBanner());
main.appendChild(await createProductList(coffees));


// PÁGINA
root.appendChild(header);
root.appendChild(main);

import { createBanner } from "./components/banner.js";
import { createCartButton } from "./components/cartButton.js";
import { createLogo } from "./components/logo.js";

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

let productList = document.createElement("div");
productList.className = "d-flex flex-wrap justify-content-between row-gap-5";


/// REMOVER POSTERIORMENTE
let productName = "Black Coffee";
let productImageSource = "./resources/images/capuccino-example.jpg";
let productDescription = "Café preto puro, feito apenas com grãos moídos e água quente. É simples e para apreciar o sabor natural do café.";
let productIngredients = "Café";
let productPrice = 12.99;

// productList.innerHTML +=
//     `
//     <div class="card shadow border border-0 rounded-3" style="width: 22rem;">
//         <div class="card-img-container">
//             <img src="${productImageSource}" class="card-img-top rounded-top-3" alt="...">
//         </div>
//         <div class="card-body inter-font">
//             <h5 class="card-title fs-3 fw-semibold">${productName}</h5>
//             <p class="card-text">${productDescription}</p>
//             <p class="card-text">Ingredientes: ${productIngredients}</p>
//             <div class="hstack justify-content-between">
//                 <button type="button" class="btn btn-outline-dark px-3 fw-semibold">Add to Cart</button>
//                 <div class="hstack">
//                     <span class="align-self-start fs-small fw-semibold pt-1">R$</span>
//                     <span class="fs-4 fw-semibold">${productPrice}</span>
//                 </div>
//             </div>
//         </div>
//     </div>
//     `;

for (let i = 0; i < 4; i++) {

    productList.innerHTML +=
    `
    <div class="card shadow border border-0 rounded-3" style="width: 22rem;">
        <div class="card-img-container">
            <img src="${productImageSource}" class="card-img-top rounded-top-3" alt="...">
        </div>
        <div class="card-body inter-font">
            <h5 class="card-title fs-3 fw-semibold">${productName}</h5>
            <p class="card-text">${productDescription}</p>
            <p class="card-text">Ingredientes: ${productIngredients}</p>
            <div class="hstack justify-content-between">
                <button type="button" class="btn btn-outline-dark px-3 fw-semibold">Add to Cart</button>
                <div class="hstack">
                    <span class="align-self-start fs-small fw-semibold pt-1">R$</span>
                    <span class="fs-4 fw-semibold">${productPrice}</span>
                </div>
            </div>
        </div>
    </div>
    `;
}



let main = document.createElement("main");
main.className = "w-100 h-100 main-padding py-2 vstack";

main.appendChild(createBanner());
main.appendChild(productList);


// PÁGINA
root.appendChild(header);
root.appendChild(main);

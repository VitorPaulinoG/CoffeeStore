import { createBanner } from "../components/banner.js";
import { createProductList } from "../components/productList.js";
import { getCoffees } from "../services/coffeeService.js";

export async function createShoppingPage() {
    let div = document.createElement("div");
    div.className = "w-100 min-h-100 shopping-page-padding py-2 vstack mb-5";

    let coffees = await getCoffees();
    div.appendChild(createBanner());
    div.appendChild(await createProductList(coffees));
    
    
    return div;
}

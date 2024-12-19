export const banner = document.createElement("div");
export function createBanner () {
    banner.className = "banner hstack banner-color mb-4 rounded banner-justification inn-shadow ps-5 pt-5 ";
    banner.innerHTML = 
        `
            <h2 class="inter-font fw-bold fs-2rem text-wrap w-auto align-self-start">Sinta o sabor suave do nosso café</h2>
            <span class="banner-img-container overflow-hidden">
                <img class="img-fluid w-25rem object-fit-cover me-5 align-self-start position-relative bottom-25 " src="./resources/images/drinking-coffee.png"/>
            </span>
        `;
    return banner;
}

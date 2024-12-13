export const banner = document.createElement("div");
export function createBanner () {
    banner.className = "banner min-h-15rem h-15rem hstack banner-color mb-4 rounded justify-content-between inn-shadow ps-5 pt-5 ";
    banner.innerHTML = 
        `
            <h2 class="inter-font fw-bold fs-2rem text-wrap w-25rem align-self-start">Sinta o sabor suave do nosso café</h2>
            <img class="img-fluid w-25rem object-fit-cover me-5 align-self-start position-relative bottom-25 " src="./resources/images/drinking-coffee.png"/>
        `;
    return banner;
}

export async function getCoffees () {
    let response = await fetch("http://localhost:3000/coffee");
    let coffees = await response.json();
    return coffees;
}
export class Product {
    constructor(title, description, ingredients, price, image, id) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.ingredients = ingredients;
        this.price = price;
        this.image = image;
    }
}
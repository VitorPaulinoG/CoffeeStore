export class Order {
    constructor(product, amount) {
        this.product = product;
        this.amount = amount;
    }

    getTotalCost () {
        return this.product.price * this.amount;
    }
}
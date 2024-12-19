import { getCartLength } from "../services/cartService.js";

export class OrderAddedOrUpdatedEvent extends CustomEvent {
    constructor () {
        super('orderAdded', {
            detail: {
                cartLength: () => getCartLength()
            }
        });
    }

}
import { getCartLength } from "../services/cartService.js";

export class orderAddedOrUpdatedEvent extends CustomEvent {
    constructor () {
        super('orderAdded', {
            detail: {
                cartLength: () => getCartLength()
            }
        });
    }

}
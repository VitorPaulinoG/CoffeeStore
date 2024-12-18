


export class OrderAmountClearedEvent extends CustomEvent {
    constructor (order) {
        super('orderAmountCleared', {
            detail: {
                order: order
            }
        })
    }


}

export class FinishPurchaseClickedEvent extends CustomEvent {
    constructor (orders, totalCost) {
        super ('finishPurchaseClicked', {
            detail: {
                orders: orders,
                totalCost: totalCost
            }
        })
    }
}
export class HomePageRequestedEvent extends CustomEvent {
    constructor() {
        super('homePageRequested', {
            detail: {
                
            }
        })
    }
}
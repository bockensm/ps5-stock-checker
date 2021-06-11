import Retailer from "./Retailer"

export default class extends Retailer {

    constructor() {
        super(
            "Target",
            "https://www.target.com/p/playstation-5-console/-/A-81114595",
        )
    }


    determineIfProductIsAvailable( $: any ): boolean {
        const orderPickupButton = $( "[data-test='orderPickupButton']" )

        if ( orderPickupButton.length ) {
            return true
        }

        return false
    }

}
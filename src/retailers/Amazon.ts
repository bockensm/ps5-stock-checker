import Retailer from "./Retailer"

export default class extends Retailer {

    constructor() {
        super(
            "Amazon",
            "https://www.amazon.com/PlayStation-5-Console/dp/B08FC5L3RG",
        )
    }


    determineIfProductIsAvailable( $: any ): boolean {
        const orderPickupButton = $( "#add-to-cart-button" )

        if ( orderPickupButton.length ) {
            return true
        }

        return false
    }

}
import Retailer from "./Retailer"

export default class extends Retailer {

    constructor() {
        super(
            "Best Buy",
            "https://www.bestbuy.com/site/sony-playstation-5-console/6426149.p?skuId=6426149",
        )
    }


    determineIfProductIsAvailable( $: any ): boolean {
        const addToCartButton = $( ".add-to-cart-button" )
        const disabledStatus = addToCartButton.attr( "disabled" )

        if (
            disabledStatus === undefined
            || disabledStatus === ""
        ) {
            return true
        }

        return false
    }

}
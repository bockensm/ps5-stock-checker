import Retailer from "./Retailer"

export default class extends Retailer {
    constructor() {
        super(
            "GameStop",
            "https://www.gamestop.com/video-games/playstation-5/consoles/products/playstation-5/11108140.html",
        )
    }

    determineIfProductIsAvailable( $: any ): boolean {
        const addToCartButton = $( ".add-to-cart" )
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
import axios from "axios"
import cheerio from "cheerio"
import sendNotification from "../notifications"

export default class Retailer {
    retailer: string
    url: string

    constructor( retailer: string, url: string ) {
        this.retailer = retailer
        this.url = url
    }

    async check() {
        console.log( `Checking ${ this.retailer } for stock...` )

        return axios.get( this.url )
            .then( response => {
                if ( response.status !== 200 ) {
                    throw( `Invalid response received from ${ this.retailer }: ${ response.status }` )
                }

                return response.data
            } )
            .then( this.parseResponseDataToNodes )
            .then( this.determineIfProductIsAvailable )
            .then( itemIsInStock => {
                if ( itemIsInStock ) {
                    this.sendStockAlert()
                }
                else {
                    console.log( `${ this.retailer } does not appear to have any items in stock` )
                }
            } )
            .catch( error => {
                console.log( error )
            } )
    }

    parseResponseDataToNodes( html: string ) {
        return cheerio.load( html )
    }

    determineIfProductIsAvailable( $: any ): boolean {
        throw( "You must override checkItemAvailability for each retailer" )
    }

    sendStockAlert(): void {
        const message = `${ this.retailer } appears to have a PS5 in stock\n${ this.url }`
        sendNotification( message )
    }
}
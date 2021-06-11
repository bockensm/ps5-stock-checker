import axios from "axios"
import BestBuy from "./retailers/BestBuy"
import GameStop from "./retailers/GameStop"
import Target from "./retailers/Target"
// import Amazon from "./retailers/Amazon"
import sendNotification from "./notifications"

async function run() {
    await new GameStop().check()
    await new BestBuy().check()
    await new Target().check()
    // new Amazon().check()

    console.log( "Sending HealthCheck ping" )
    axios.get( "https://hc-ping.com/02aef50d-48b3-4682-8b74-6b9c227eba50" )
}

async function notificationTest() {
    await sendNotification( "test 3" )
}

run()
// notificationTest()
process.exit()
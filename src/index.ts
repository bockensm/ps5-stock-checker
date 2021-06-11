import * as Sentry from "@sentry/node"

Sentry.init( {
    dsn: "https://9a44a44a04944f26b1e917f3da0aff6e@o591106.ingest.sentry.io/5811348",
    tracesSampleRate: 1.0,
} )

import axios from "axios"
import * as cron from "node-cron"
import BestBuy from "./retailers/BestBuy"
import GameStop from "./retailers/GameStop"
import Target from "./retailers/Target"
// import Amazon from "./retailers/Amazon"

async function run() {
    await new GameStop().check()
    await new BestBuy().check()
    await new Target().check()
    // new Amazon().check()

    console.log( "Sending HealthCheck ping" )
    axios.get( "https://hc-ping.com/02aef50d-48b3-4682-8b74-6b9c227eba50" )
}

cron.schedule( "*/5 * * * *", run )

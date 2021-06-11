import axios from "axios"
import BestBuy from "./retailers/BestBuy"
import GameStop from "./retailers/GameStop"
import Target from "./retailers/Target"
// import Amazon from "./retailers/Amazon"

async function run() {
    await new GameStop().check()
    await new BestBuy().check()
    await new Target().check()
    // new Amazon().check()
}

run()
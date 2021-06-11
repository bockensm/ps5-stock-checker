import { config } from "dotenv"
config()

import * as TelegramBot from "node-telegram-bot-api"

export default function ( message: string ) {
    const bot = new TelegramBot( process.env.TELEGRAM_BOT_TOKEN, {
        polling: true,
    } )

    const chatId = process.env.TELEGRAM_CHAT_ID

    bot.sendMessage( chatId, message )
    process.exit()
}
const TG = require('telegram-bot-api');
require('dotenv').config();

// Define your API object
const api = new TG({
    token: process.env.TELEGRAM_SECRET
})

// Define your message provider
const mp = new TG.GetUpdateMessageProvider()

// Set message provider and start API
api.setMessageProvider(mp)
api.start()
    .then(() => {
        console.log('API is started')
    })
    .catch(console.err)
// Receive messages via event callback
api.on('update', update => {

    // update object is defined at
    // https://core.telegram.org/bots/api#update
    console.log(update)
})
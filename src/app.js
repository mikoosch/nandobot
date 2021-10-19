import tmi from 'tmi.js'
import { BOT_USERNAME, OAUTH_TOKEN } from './constants'
require ('dotenv').config()

// prefix
var prefix = ''

// connection
const options = {
    options: { debug: true },
    connection: { reconnect: true },
    identity: {
        username: process.env.BOT_USERNAME,
        password: process.env.OAUTH_TOKEN
    },
    channels: ["mikoosch"]
}

const client = new tmi.Client(options)

client.connect();


client.on('message', (channel, user, message, self) => {
    // ignore echoed msgs.
    if(self) return;

    const args = message.slice(prefix.length).trim().split(/ +/g)
    const cmd = args.shift().toLowerCase()

    try {
        let commandFile = require(`./commands/${cmd}.js`)
        commandFile.run(client, message, args, user, channel, self)
    } catch (err) {
        // client.say(channel, `${user.username} command doesn't exist.`)
        return
    }

})



// Template

// const { client } = require("tmi.js")

// exports.run = (client, message, args , user , channel , self) => {
// }
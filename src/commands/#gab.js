const { client } = require("tmi.js")

exports.run = (client, message, args , user , channel , self) => {
    client.say(channel, "/me Gab Creates Music Library dropping soon")
}



const { client } = require("tmi.js")

exports.run = (client, message, args , user , channel , self) => {
    client.say(channel, "Go check out Gabcreates: https://sptfy.com/gab")
}



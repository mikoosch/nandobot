const { client } = require("tmi.js")

exports.run = (client, message, args , user , channel , self) => {
    client.say(channel, "My guy really thought he could skip like that KEKW")
}
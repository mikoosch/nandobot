const { client } = require("tmi.js")

exports.run = (client, message, args , user , channel , self) => {
    client.say(channel, "All my homies hate Jae")
}
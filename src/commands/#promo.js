const { client } = require("tmi.js")

exports.run = (client, message, args , user , channel , self) => {
    client.say(channel, "Go listen to whatever tf this is: https://wtk.fanlink.to/takethelead")
}
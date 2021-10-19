const { client } = require("tmi.js")

exports.run = (client, message, args , user , channel , self) => {
    client.say(channel, "Y'all need to stop being assholes. Go put your head up your ass my guy")
}
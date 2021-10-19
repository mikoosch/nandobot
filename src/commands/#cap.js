const { client } = require("tmi.js")

exports.run = (client, message, args, user, channel, self) => {
    const cap = [
        "fucking cap my guy :billed_cap",
        "straight fax :100:"
    ]

    const random = Math.floor(Math.random() * phrases.length);
    client.say(channel, `That's ${cap[random]}`)
}
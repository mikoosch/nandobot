const { client } = require("tmi.js")

exports.run = (client, message, args, user, channel, self) => {
    const phrases = [
        "That's fucking cap :billed_cap: my guy",
        "That's fucking :billed_cap: my guy",
        "That's fucking cap :billed_cap: my guy",
        "That's fucking :billed_cap: my guy",
        "That's fucking cap :billed_cap: my guy",
        "That's fucking :billed_cap: my guy",
        "I ain't never seen anybody :billed_cap: this much",
        "That's straight fax :100:",
        "That's straight fax :100:",
        "That's straight fax :100:"
        ]

    const random = Math.floor(Math.random() * phrases.length);
    client.say(channel, phrases[random])
}
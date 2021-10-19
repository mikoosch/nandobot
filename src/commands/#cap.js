const { client } = require("tmi.js")

exports.run = (client, message, args, user, channel, self) => {
    const phrases = [
        "fucking :billed_cap: my guy",
        "fucking :billed_cap: my guy",
        "fucking :billed_cap: my guy",
        "fucking :billed_cap: my guy",
        "fucking :billed_cap: my guy",
        "I aint never seen anybody :billed_cap: this much",
        "straight fax :100:",
        "straight fax :100:",
        "straight fax :100:"
    ]

    const random = Math.floor(Math.random() * phrases.length);
    client.say(channel, `Thats ${phrases[random]}`)
}
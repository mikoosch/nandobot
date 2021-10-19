const { client } = require("tmi.js")

exports.run = (client, message, args, user, channel, self) => {
    const cap = [
        "Thats fucking :billed_cap: my guy",
        "Thats fucking :billed_cap: my guy",
        "Thats fucking :billed_cap: my guy",
        "Thats fucking :billed_cap: my guy",
        "I aint never seen anybody :billed_cap: this much",
        "Thats straight fax :100:",
        "Thats straight fax :100:",
        "Thats straight fax :100:"
    ]

    const random = Math.floor(Math.random() * phrases.length);
    client.say(channel, cap[random])
}
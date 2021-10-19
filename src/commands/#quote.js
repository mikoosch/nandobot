const { client } = require("tmi.js")

exports.run = (client, message, args, user, channel, self) => {
    const phrases = [
        "你吃错药了吗",
        "闭嘴",
        "废话",
        "二百五",
        "笨蛋",
        "他妈的",
        "吃醋"
    ]

    const random = Math.floor(Math.random() * phrases.length);
    client.say(channel, `/me ${phrases[random]}`)
}
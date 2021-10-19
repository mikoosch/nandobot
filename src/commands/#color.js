const { client } = require("tmi.js")

exports.run = (client, message, args, user, channel, self) => {
    const colors = [
        "Blue",
        "Coral",
        "DodgerBlue",
        "SpringGreen",
        "YellowGreen",
        "Green",
        "OrangeRed",
        "Red",
        "GoldenRod",
        "HotPink",
        "CadetBlue",
        "SeaGreen",
        "Chocolate",
        "BlueViolet",
        "Firebrick"
    ]

    const random = Math.floor(Math.random() * colors.length);
    client.color(colors[random])
}
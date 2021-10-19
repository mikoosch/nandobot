const { client } = require("tmi.js")

exports.run = (client, message, args, user, channel, self) => {
    client.ping().then(function(data) {
        const shit = 100
        let weeb = Math.floor(Math.random(data * 100) * shit) + 1
        client.say(channel, `${user.username} is ${weeb}% a weeb`)
    })
}
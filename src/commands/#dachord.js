const { client } = require("tmi.js")

exports.run = (client, message, args , user , channel , self) => {
    if(user.username == jae_with_a_lowercase_j) {
        client.say(channel, "Dominant 7 #9 #11 b5 b13 b9 with a tritone sub but played in the Phrygian b2 b5 scale and its in drop 2 voicing and the b7 is 38.4 cents flat")
    } else {
        console.log("Not the right user")
    }
}

module.exports = {
    name: 'where',
    call: '-where',
    description: "get your floor fellow's location",
    execute(message, floof){
        message.channel.send(`${floof.name} is in/at 🎉 ${floof.location} 🎉\nLast updated: ${floof.locationUpdated}`);
    }
}
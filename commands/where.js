module.exports = {
    name: 'where',
    description: "bot replies with floof's location",
    execute(message, floof){
        message.channel.send(`${floof.name} is in/at 🎉 ${floof.location} 🎉\nLast updated: ${floof.locationUpdated}`);
    }
}
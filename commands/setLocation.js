module.exports = {
    name: 'set location',
    description: "Update the floof's location and mark the time the change was made",
    execute(message, location, floof){
        // Find an easy way for the floof to find their ID
        try {
            if(message.author.id === floof.userID){
                floof.location = location;
                const today = new Date();
                const date = `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`;
                const time = `${today.getHours()}:${today.getMinutes()}`;
                floof.locationUpdated = `${date} ${time}`;
                message.channel.send(`You got it boss! Location set to ${location} at ${floof.locationUpdated} 😊`);
            } else {
                message.channel.send(`Sorry! this command is reserved for ${floof.name}`)
            }
    
        } catch(e){
            message.channel.send('There was an issue validating your ID!')
        }

    }
}
module.exports = {
    name: 'set location',
    call: '-setloc [location]',
    description: "set your floor fellow's location. This command is reserved for floor fellows!",
    execute(message, args, floof){
        try {
            if(message.author.id === floof.userID){
                location = args.join(' ');
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
            message.channel.send('There was an issue validating your ID!');
        }

    }
}
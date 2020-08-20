module.exports = {
    name: 'set duty',
    call: '-setduty (cutie) [hours]',
    description: "update cutie on duty and duty hours. Cutie is required, hours are optional (no spaces)",
    execute(message, args, floof, building){
        try{
            // Validate user is the floor fellow
            if(message.author.id === floof.userID){
                // Check if args has incorrect length
                if(args.length > 2 || args.length < 1){
                    message.channel.send(`Please enter the cutie on duty and the new hours. Use a space to separate the two! (ie. ${floof.name} 9pm-2am)`);
                } else {
                    // Set cutie on duty regardless of if second arg exists
                    building.onDuty = args[0];

                    // Check if the optional second argument exists
                    if(args.length === 2){
                        building.dutyHours = args[1];
                    }
                    // Sent confirmation message
                    const today = new Date();
                    const date = `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`;
                    const time = `${today.getHours()}:${today.getMinutes()}`;
                    building.dutyUpdated = `${date} ${time}`;
                    message.channel.send(`Cutie on duty: ${building.onDuty}\nDuty hours: ${building.dutyHours}\nUpdated at ${building.dutyUpdated}`);
                }

            } else{
                message.channel.send(`Sorry! this command is reserved for ${floof.name}`)
            }
        } catch(e){
            message.channel.send('Oops! Something went wrong 😢');
        }
    }
}
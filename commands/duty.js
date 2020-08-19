module.exports = {
    name: 'duty',
    call: '-duty',
    description: "Get the duty number and hours of operation",
    execute(message, building){
        message.channel.send(`The duty number is: 🤙 ${building.dutyNum} 🤙 \nDuty is Thurs-Sat from 7pm-11pm`);
    }
}
module.exports = {
    name: 'duty',
    call: '-duty',
    description: "Get the duty number and hours of operation",
    execute(message, building){
        message.channel.send(`Cutie on duty: ${building.onDuty} 🥰\nDuty number: 🤙 ${building.dutyNum} 🤙 \nDuty is Thurs-Sat from ${building.dutyHours}`);
    }
}
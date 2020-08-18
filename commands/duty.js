module.exports = {
    name: 'duty',
    description: "bot replies the duty number and hours of operation",
    execute(message, floof){
        message.channel.send(`The duty number is: 🤙 ${floof.dutyNum} 🤙 \nDuty is Thurs-Sat from 9pm-2am`);
    }
}
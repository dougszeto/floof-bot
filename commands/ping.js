module.exports = {
    name: 'ping',
    description: 'bot replies pong',
    execute(message){
        message.channel.send('pong!');
    }
}
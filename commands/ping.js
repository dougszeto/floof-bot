module.exports = {
    name: 'ping',
    call: '-ping',
    description: 'bot replies pong',
    execute(message){
        message.channel.send('pong!');
    }
}
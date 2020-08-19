module.exports = {
    name: 'mention',
    call: '@BOT_NAME',
    description: "replies with list of commands when mentioned",
    execute(message, cmds, embed){
        embed.setTitle('Commands');
        for(let i=0; i<cmds.length; i++){
            embed.addField('**'+cmds[i].call+'**', cmds[i].description+'\n');
        }
        message.channel.send(embed);
    }
}
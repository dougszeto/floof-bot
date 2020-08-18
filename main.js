const Discord = require('discord.js');

const client = new Discord.Client();

// EDIT THIS TO PERSONALIZE YOUR BOT!
floof = {
    name: 'ENTER YOUR NAME',
    userID: 'ENTER YOUR USER ID',
    token: 'ENTER YOUR BOT TOKEN',
    location:'',
    locationUpdated:'Never',

}

// Loads the command files from the commands directory and stores them in client.commands collection
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}


// This prefix will be needed before a command to alert the bot
const prefix = '-';

// Prints when the bot is online
client.once('ready', () => {
    console.log(`${floof.name} Bot is online!`);
});


client.on('message', message => {
    // Ignore messages that do not have prefix or are from the bot
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();
    
    if (command === 'ping'){
        client.commands.get('ping').execute(message);
    }
    else if(command === 'where'){
        client.commands.get('where').execute(message, floof);
    }
    else if(command === 'setloc'){
        client.commands.get('set location').execute(message, args[0], floof)
    }
});


client.login(floof.token);

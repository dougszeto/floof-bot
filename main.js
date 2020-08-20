const Discord = require('discord.js');
const config = require('./config.json');


const client = new Discord.Client();

// Pull out the object data stored in config.json
const floof = config.floof;
const building = config.building;
const token = config.bot.token;
const prefix = config.bot.prefix;
const cmds = [];


// Loads the command files from the commands directory and stores them in client.commands collection
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
    cmds.push(command);
}

// Prints when the bot is online
client.once('ready', () => {
    console.log(`${floof.name}'s Bot is online!`);
    client.user.setActivity(`@${client.user.username} for help!`);
});


client.on('message', message => {
    // Ignore messages that do not have prefix or are from the bot
    if(message.mentions.has(client.user)){
        const embed = new Discord.MessageEmbed();
        client.commands.get('mention').execute(message, cmds, embed);
    }
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
        client.commands.get('set location').execute(message, args, floof);
    }
    else if(command === 'duty'){
        client.commands.get('duty').execute(message, building);
    }
    else if(command === 'setduty'){
        client.commands.get('set duty').execute(message, args, floof, building);
    }
});


client.login(token);

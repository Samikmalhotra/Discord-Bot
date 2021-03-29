const discord = require('discord.js');
const client = new discord.Client();
const {prefix, token} = require('./config.json');


client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'args-info') {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
        else if (args[0] === 'foo') {
            return message.channel.send('bar');
        }
    
        message.channel.send(`Command name: ${command}\nArguments: ${args}`);
        }
    if (message.content === prefix+'ping') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Pong.');
    }else if (message.content === `${prefix}beep`) {
        message.channel.send('Boop.');
    }else if (message.content === `${prefix}server`) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    }else if (message.content === `${prefix}user-info`) {
        message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
    }
});

client.login(token);



const discord = require('discord.js');
const client = new discord.Client();
const {prefix, token} = require('./config.json');


client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	console.log(message.content);
    if (message.content === prefix+'ping') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Pong.');
    }else if (message.content === `${prefix}beep`) {
        message.channel.send('Boop.');
    }else if (message.content === `${prefix}server`) {
        message.channel.send(`This server's name is: ${message.guild.name}`);
    }
});

client.login(token);



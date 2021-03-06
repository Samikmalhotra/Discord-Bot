
const Discord = require('discord.js');
const Canvas = require('canvas');
const { prefix } = require('../config.json');
const { Users, CurrencyShop } = require('../dbObjects');
const { Op } = require('sequelize');

module.exports = {
	name: 'message',
	execute(message, client, Tags, currency) {
		console.log(message.guild.channels.cache)
		if (message.author.bot) return;
		currency.add(message.author.id, 1);
		if (!message.content.startsWith(prefix) || message.author.bot) return;

		const args = message.content.slice(prefix.length).trim().split(/ +/);
		const commandName = args.shift().toLowerCase();
		const commandArgs = args.join(' ');

		// Checking for aliases
		const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

		if (!command) return;

		
		// Guild only
		if (command.guildOnly && message.channel.type === 'dm') {
			return message.reply('I can\'t execute that command inside DMs!');
		}

		// Permissions
		if (command.permissions) {
			const authorPerms = message.channel.permissionsFor(message.author);
			if (!authorPerms || !authorPerms.has(command.permissions)) {
				return message.reply('You can not do this!');
			}
		}

		// Args needed
		if (command.args && !args.length) {
			let reply = `You didn't provide any arguments, ${message.author}!`;

			if (command.usage) {
				reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
			}

			return message.channel.send(reply);		
		}

		const { cooldowns } = client;

		// Cooldown
		if (!cooldowns.has(command.name)) {
			cooldowns.set(command.name, new Discord.Collection());
		}
		const now = Date.now();
		const timestamps = cooldowns.get(command.name);
		const cooldownAmount = (command.cooldown || 3) * 1000;

		if (timestamps.has(message.author.id)) {
			const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
		
			if (now < expirationTime) {
				const timeLeft = (expirationTime - now) / 1000;
				return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
			}
		}

		timestamps.set(message.author.id, now);
		setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);


		try {
			command.execute(message, args, client, Tags, currency);
		} catch (error) {
			console.error(error);
			message.reply('there was an error trying to execute that command!');
	}
	},
};
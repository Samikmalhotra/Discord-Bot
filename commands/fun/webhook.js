const Discord = require('discord.js');


module.exports = {
	name: 'ping',
	description: 'Ping!',
	async execute(message, args, client) {
		const embed = new Discord.MessageEmbed()
			.setTitle('Some Title')
			.setColor('#0099ff');
			
			const channel = client.channels.cache.get('827172583840677889');
			try {
				const webhooks = await channel.fetchWebhooks();
				const webhook = webhooks.first();
		
				await webhook.send('Webhook test', {
					username: 'some-username',
					avatarURL: 'https://i.imgur.com/wSTFkRM.png',
					embeds: [embed],
				});
			} catch (error) {
				console.error('Error trying to send: ', error);
			}
	},
};
const Discord = require('discord.js');
const config = require('../config.json');

module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {
		console.log('Ready! Logged in as '+client.user.tag);
        client.user.setAvatar('./img/avatar.jpeg');
        client.user.setStatus('online');
        client.user.setActivity('with Zindagi', { type: 'PLAYING' });
		const embed = new Discord.MessageEmbed()
			.setTitle('Some Title')
			.setColor('#0099ff');
			// console.log(client.channels)
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
		}}

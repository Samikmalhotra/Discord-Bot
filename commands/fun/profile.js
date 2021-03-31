const Discord = require('discord.js');

module.exports = {
	name: 'profile',
	description: 'Shows you the profile',
	execute(message, args, client) {
		const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(message.author.username)
            .setURL(message.author.displayAvatarURL({ format: "png", dynamic: true }))
            .setAuthor('Bot', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
            .setDescription(message.author.role.name)
            .setThumbnail(message.author.displayAvatarURL({ format: "png", dynamic: true }))
            .addFields(
                { name: 'Regular field title', value: 'Some value here' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Inline field title', value: 'Some value here', inline: true },
                { name: 'Inline field title', value: 'Some value here', inline: true },
            )
            .addField('Inline field title', 'Some value here', true)
            .setImage('https://i.imgur.com/wSTFkRM.png')
            .setTimestamp()
            .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

        message.channel.send(exampleEmbed);
	},
};
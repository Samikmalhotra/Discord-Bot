const Discord = require('discord.js');

module.exports = {
	name: 'profile',
	description: 'Shows you the profile',
	execute(message, args, client) {
		const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(message.author.username)
            .setURL(message.author.displayAvatarURL({ format: "png", dynamic: true }))
            .setAuthor('Sataniel: ')
            .setDescription(message.guild.region)
            .setThumbnail(message.author.displayAvatarURL({ format: "png", dynamic: true }))
            .setTimestamp()
            .setFooter(message.guild, 'https://i.imgur.com/wSTFkRM.png');
        message.channel.send(exampleEmbed);
        
    },
};
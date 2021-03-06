const Discord = require('discord.js');
const Canvas = require('canvas');


module.exports = {
	name: 'profile',
	description: 'Shows you the profile',
	async execute(message, args, client) {
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
    
        const canvas = Canvas.createCanvas(700, 250);
        const ctx = canvas.getContext('2d');
    
        const background = await Canvas.loadImage('');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    
        ctx.strokeStyle = '#74037b';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
    
        // Slightly smaller text placed above the member's display name
        ctx.font = '28px sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.fillText('Welcome to the server,', canvas.width / 2.5, canvas.height / 3.5);
    
        // Add an exclamation point here and below
        ctx.font = applyText(canvas, `${member.displayName}!`);
        ctx.fillStyle = '#ffffff';
        ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);
    
        ctx.beginPath();
        ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();
    
        const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
        ctx.drawImage(avatar, 25, 25, 200, 200);
    
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
    
        message.channel.send(`Welcome to the server, ${member}!`, attachment);
        
    },
};
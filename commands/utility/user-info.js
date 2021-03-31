module.exports = {
	name: 'user-info',
	description: 'Information about the user',
    cooldown: 5,
	execute(message, args) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	},
};
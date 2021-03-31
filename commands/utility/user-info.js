module.exports = {
	name: 'args-info',
	description: 'Information about the arguments provided.',
    cooldown: 5,
	execute(message, args) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	},
};
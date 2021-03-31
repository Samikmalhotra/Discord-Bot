module.exports = {
	name: 'message',
	execute(message, client) {
		console.log(`${message.author.tag} in #${message.channel.name} sent: ${message.content}`);
	},
};
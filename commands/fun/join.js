module.exports = {
	name: 'join',
	description: 'Ping!',
	execute(message, args, client) {
        client.emit('guildMemberAdd', message.member);
    },
};
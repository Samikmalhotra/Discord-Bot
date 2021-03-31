module.exports = {
	name: 'kick',
	description: 'Kick!',
    guildOnly: true,
    permissions: 'KICK_MEMBERS',
	execute(message, args) {
        if (!message.mentions.users.size) {
            return message.reply('you need to tag a user in order to kick them!');
        }
            const taggedUser = message.mentions.users.first();
    
        taggedUser.kick();
	},
};
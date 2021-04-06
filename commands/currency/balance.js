
module.exports = {
	name: 'balance',
	description: 'Displays balance!',
	execute(message, args, client, Tags, currency) {
        

        const target = message.mentions.users.first() || message.author;
        return message.channel.send(`${target.tag} has ${currency.getBalance(target.id)}💰`);
	},
};
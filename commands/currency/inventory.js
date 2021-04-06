const { Users, CurrencyShop } = require('../../dbObjects');

module.exports = {
	name: 'inventory',
	description: 'Displays inventory!',
	async execute(message, args, client,Tags, currency) {
        const target = message.mentions.users.first() || message.author;
		const user = await Users.findOne({ where: { user_id: target.id } });
		const items = await user.getItems();
        
        if (!items.length) return message.channel.send(`${target.tag} has nothing!`);
		return message.channel.send(`${target.tag} currently has ${items.map(t => `${t.amount} ${t.item.name}`).join(', ')}`);
	},
};
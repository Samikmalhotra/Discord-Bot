const { Users, CurrencyShop } = require('../../dbObjects');

module.exports = {
	name: 'shop',
	description: 'Displays shop!',
	async execute(message, args, client, Tags, currency) {
        

        const items = await CurrencyShop.findAll();
		return message.channel.send(items.map(i => `${i.name}: ${i.cost}💰`).join('\n'), { code: true });

	},
};
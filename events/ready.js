const { Users, CurrencyShop } = require('./dbObjects');

module.exports = {
	name: 'ready',
	once: true,
	async execute(client, currency) {
		console.log('Ready! Logged in as '+client.user.tag);
        client.user.setAvatar('./img/avatar.jpeg');
        client.user.setStatus('online');
        client.user.setActivity('with Zindagi', { type: 'PLAYING' });
		const storedBalances = await Users.findAll();
		storedBalances.forEach(b => currency.set(b.user_id, b));
		
		}}

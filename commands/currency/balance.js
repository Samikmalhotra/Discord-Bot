
module.exports = {
	name: 'balance',
	description: 'Displays balance!',
	execute(message, args, client, currency) {


        Reflect.defineProperty(currency, 'add', {
            /* eslint-disable-next-line func-name-matching */
            value: async function add(id, amount) {
                const user = currency.get(id);
                if (user) {
                    user.balance += Number(amount);
                    return user.save();
                }
                const newUser = await Users.create({ user_id: id, balance: amount });
                currency.set(id, newUser);
                return newUser;
            },
        });
        
        Reflect.defineProperty(currency, 'getBalance', {
            /* eslint-disable-next-line func-name-matching */
            value: function getBalance(id) {
                const user = currency.get(id);
                return user ? user.balance : 0;
            },
        });
        

		const target = message.mentions.users.first() || message.author;
        return message.channel.send(`${target.tag} has ${currency.getBalance(target.id)}💰`);
	},
};
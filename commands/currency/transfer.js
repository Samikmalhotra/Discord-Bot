module.exports = {
	name: 'transfer',
	description: 'transfers currency!',
	execute(message, args, client, Tags, currency) {
        const commandArgs = args.join(' ');
        const currentAmount = currency.getBalance(message.author.id);
		const transferAmount = commandArgs.split(/ +/).find(arg => !/<@!?\d+>/.test(arg));
		const transferTarget = message.mentions.users.first();

		if (!transferAmount || isNaN(transferAmount)) return message.channel.send(`Sorry ${message.author}, that's an invalid amount`);
		if (transferAmount > currentAmount) return message.channel.send(`Sorry ${message.author} you don't have that much.`);
		if (transferAmount <= 0) return message.channel.send(`Please enter an amount greater than zero, ${message.author}`);

		currency.add(message.author.id, -transferAmount);
		currency.add(transferTarget.id, transferAmount);

        return message.channel.send(`Successfully transferred ${transferAmount}💰 to ${transferTarget.tag}. Your current balance is ${currency.getBalance(message.author.id)}💰`);

	},
};
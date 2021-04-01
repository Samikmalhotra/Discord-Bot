module.exports = {
	name: 'deletetag',
	description: 'Delete a tag!',
	async execute(message, args, client, Tags) {
		const commandArgs = args.join(' ');
        const tagName = commandArgs;
        // equivalent to: DELETE from tags WHERE name = ?;
        const rowCount = await Tags.destroy({ where: { name: tagName } });
        if (!rowCount) return message.reply('That tag did not exist.');

        return message.reply('Tag deleted.');
	},
};
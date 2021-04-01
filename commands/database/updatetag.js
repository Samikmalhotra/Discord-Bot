module.exports = {
	name: 'updatetag',
	description: 'Updating a tag!',
	async execute(message, args, client, Tags) {
		const commandArgs = args.join(' ');
		const splitArgs = commandArgs.split(' ');
        const tagName = splitArgs.shift();
        const tagDescription = splitArgs.join(' ');

        // equivalent to: UPDATE tags (description) values (?) WHERE name='?';
        const affectedRows = await Tags.update({ description: tagDescription }, { where: { name: tagName } });
        if (affectedRows > 0) {
            return message.reply(`Tag ${tagName} was edited.`);
        }
        return message.reply(`Could not find a tag with name ${tagName}.`);
	},
};
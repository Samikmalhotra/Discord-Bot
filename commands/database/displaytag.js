module.exports = {
	name: 'displaytag',
	description: 'Display    a tag!',
	async execute(message, args, client, Tags) {
		const commandArgs = args.join(' ');
		const tagName = commandArgs;

        // equivalent to: SELECT * FROM tags WHERE name = 'tagName' LIMIT 1;
        const tag = await Tags.findOne({ where: { name: tagName } });
        if (tag) {
            return message.channel.send(`${tagName} was created by ${tag.username} at ${tag.createdAt} and has been used ${tag.usage_count} times.`);
        }
        return message.reply(`Could not find tag: ${tagName}`);
	},
};
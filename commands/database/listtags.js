module.exports = {
	name: 'listtags',
	description: 'List all tags!',
	async execute(message, args, client, Tags) {

        const tagList = await Tags.findAll({ attributes: ['name'] });
        const tagString = tagList.map(t => t.name).join(', ') || 'No tags set.';
        return message.channel.send(`List of tags: ${tagString}`);
	},
};
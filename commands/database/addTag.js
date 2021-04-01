module.exports = {
	name: 'addTag',
	description: 'Add a tag',
	async execute(message, args, client) {
		const splitArgs = commandArgs.split(' ');
        const tagName = splitArgs.shift();
        const tagDescription = splitArgs.join(' ');

        try {
            // equivalent to: INSERT INTO tags (name, description, username) values (?, ?, ?);
            const tag = await Tags.create({
                name: tagName,
                description: tagDescription,
                username: message.author.username,
            });
            return message.reply(`Tag ${tag.name} added.`);
        }
        catch (e) {
            if (e.name === 'SequelizeUniqueConstraintError') {
                return message.reply('That tag already exists.');
            }
            return message.reply('Something went wrong with adding a tag.');
        }

	},
};
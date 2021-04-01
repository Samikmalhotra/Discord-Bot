module.exports = {
	name: 'kick',
	description: 'Kick!',
    guildOnly: true,
    permissions: 'KICK_MEMBERS',
	execute(message, args) {
        if (!message.mentions.users.size) {
            return message.reply('you need to tag a user in order to kick them!');
        }

        const taggedUser = message.mentions.users.first();
        const user = message.guild.member(taggedUser);
    
        user.kick().then((user)=>{
            message.channel.send(":wave: " + user.displayName + " has been successfully banned https://gfycat.com/playfulfittingcaribou :point_right: ");
        }).catch((e)=>{
            message.channel.send("Access Denied");        });
        
        //     .catch(() => {
        //         message.channel.send("Access Denied");
        // })
    }
}
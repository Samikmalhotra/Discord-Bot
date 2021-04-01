
module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {
		console.log('Ready! Logged in as '+client.user.tag);
        client.user.setAvatar('./img/avatar.jpeg');
        client.user.setStatus('online');
        client.user.setActivity('with Zindagi', { type: 'PLAYING' });
		
		}}

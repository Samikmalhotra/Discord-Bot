module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message, args, client) {
		message.channel.send('Pong.');
		message.channel.send(`Websocket heartbeat: ${client.ws.ping}ms.`);
	},
};
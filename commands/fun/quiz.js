const request = require('request')

module.exports = {
	name: 'quiz',
	description: 'Play quiz',
	execute(message, args, client) {

        const options = {
            method: 'GET',
            url: 'https://opentdb.com/api.php?amount=20&type=multiple&difficulty=easy',
            qs: {fragment: 'true', notfound: 'floor', json: 'true'},
            json: true
          };
          
          request(options, function (error, response, body) {
            if (error) throw new Error(error);
            
            const item = body.results[Math.floor(Math.random() * 20)];
            console.log(item.correct_answer)
            const answers = item.correct_answer;
            const filter = response => {
                return answers
            };
            message.channel.send(item.question).then(() => {
                message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
                    .then(collected => {
                        message.channel.send(`${collected.first().author} got the correct answer!`);
                    })
                    .catch(collected => {
                        message.channel.send('Looks like nobody got the answer this time.');
                    });
          });
        });
	},
};
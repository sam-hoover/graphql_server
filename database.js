const {Quote} = require('./graph-objects.js');

let fakeDatabase = {
	quotes: [],
	users: {
		admin: 'admin',
		sam: 'sam'
	}
};

const seedDatabase = () => {
	fakeDatabase.quotes.push(new Quote({quote: 'Don\'t take life too seriously, you\'ll never get out alive.', author: 'Elbert Hubbard'}));
	fakeDatabase.quotes.push(new Quote({quote: 'Have no fear of perfection, you\'ll never reach it.', author: 'Salvador Dali'}));
	fakeDatabase.quotes.push(new Quote({quote:'If I had asked people what they wanted, they would have said faster horses.', author: 'Henry Ford'}));
	fakeDatabase.quotes.push(new Quote({quote:'The perfect is the enemy of the good.', author: 'Voltaire'}));
	fakeDatabase.quotes.push(new Quote({quote:'An idea that isn\'t dangerous is unworthy of being called an idea at all.', author: 'Oscar Wilde'}));
	fakeDatabase.quotes.push(new Quote({quote:'Fake quote.', author: 'Oscar Wilde'}));
	fakeDatabase.quotes.push(new Quote({quote:'Fake quote number two.', author: 'Oscar Wilde'}));
};

const isAuthorizedUser = (user, pass) => {
	return fakeDatabase.users.hasOwnProperty(user) && fakeDatabase.users[user] === pass;
}

module.exports.fakeDatabase = fakeDatabase;
module.exports.seedDatabase = seedDatabase;
module.exports.isAuthorizedUser = isAuthorizedUser;

const {buildSchema} = require('graphql');
const {Quote} = require('./graph-objects.js');
const {fakeDatabase} = require('./database.js');

module.exports.schema = buildSchema(`
	input QuoteInput {
		quote: String
		author: String
	}

	type Quote {
		quote: String
		author: String
	}

	type Query {
		getFirstQuote: Quote
		getLastQuote: Quote
		getRandomQuote: Quote
		getRandomQuoteList(count: Int!): [Quote]
		getAllQuotes: [Quote]
		getAllQuotesBy(author: String!): [Quote]
	}

	type Mutation {
		addQuote(input: QuoteInput): Quote
	}
`);

module.exports.root = {
	getFirstQuote: () => {
		return fakeDatabase.quotes[0];
	},
	getLastQuote: () => {
		return fakeDatabase.quotes[fakeDatabase.quotes.length - 1];
	},
	getRandomQuote: () => {
		const randomNum = Math.floor(Math.random() * fakeDatabase.quotes.length);
		return fakeDatabase.quotes[randomNum];
	},
	getRandomQuoteList: ({count}) => {
		const startIndex = fakeDatabase.quotes.length - 1 - count;
		const endIndex = fakeDatabase.quotes.length - 1;
		return fakeDatabase.quotes.slice(startIndex, endIndex);
	},
	getAllQuotes: () => {
		return fakeDatabase.quotes;
	},
	getAllQuotesBy: ({author}) => {
		return fakeDatabase.quotes.filter((quote) => {
			return quote.author === author;
		});
	},
	addQuote: ({input}) => {
		const quote = new Quote(input);
		fakeDatabase.quotes.push(quote);
		return quote;
	}
};

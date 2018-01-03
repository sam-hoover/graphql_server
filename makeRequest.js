var request = require("request");

const makeGraphqlRequest = (query, variables) => {

	if(typeof variables === 'object') {
		variables = JSON.stringify(variables);
	}

	const options = {
		method: 'POST',
	 	url: 'http://localhost:4000/graphql',
	  	form: {
			query: query,
			variables: variables
		},
	  	headers: {
			'content-type': 'application/json',
	   		'accept': 'application/json'
		}
	};

	request(options, (error, response, body) => {
	  if (error) throw new Error(error);
	  console.log(body);
	});
};

//let query = 'query { getRandomQuote {quote author}}';
const quote = 'Very cool.';
const author = 'me';

let query = `mutation AddQuote($input: QuoteInput) {
	addQuote(input: $input) {
		quote
		author
	}
}`;

let variables = {
	input: {
		quote: quote,
		author: author
	},
	user: 'admin',
	pass: 'admin'
};

//makeGraphqlRequest(query, variables);


composeFns = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args));
printOne = () => { console.log(1); }
printTwo = () => { console.log(2); }
printThree = () => { console.log(3); }
printNumber = (number) => {console.log(number);}

//composeFns(printNumber(1), printNumber(2), printNumber(3));
composeFns(printOne, printTwo, printThree);

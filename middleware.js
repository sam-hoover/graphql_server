const {isAuthorizedUser} = require('./database.js');

module.exports.loggingMiddleware = (req, res, next) => {
	console.log(`ip: ${req.ip}`);
	next();
}

module.exports.authMiddleware = (req, res, next) => {
	let body;
	let variables;

	if(typeof req.body === 'string') {
		body = JSON.stringify(req.body);
	} else {
		body = req.body;
	}

	if(typeof body.variables === 'string') {
		variables = JSON.parse(body.variables);
	} else {
		variables = body.variables;
	}

	const user = variables.user;
	const pw = variables.pass;

	if(!isAuthorizedUser(user, pw)) {
		next(new Error('User Not Authenticated'));
	} else {
		next();
	}
}

module.exports.errorHandlingMiddleware = (err, req, res, next) => {
	res.status(500).send({ errors: [{message: err.message}] });
}

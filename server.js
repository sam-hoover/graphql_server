const app = require('express')();
const graphqlHTTP = require('express-graphql');
const bodyParser = require('body-parser');
const {loggingMiddleware, authMiddleware, errorHandlingMiddleware} = require('./middleware.js');
const {schema, root} = require('./graph-schema.js');
const {seedDatabase} = require('./database.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(loggingMiddleware);
app.use(authMiddleware);
app.use(errorHandlingMiddleware);

app.use('/graphql', graphqlHTTP({
	schema: schema,
	rootValue: root,
	graphiql: true
}));

app.listen(4000);

console.log('Running a GraphQL API server at localhost:4000/graphql');

seedDatabase();

const express = require('express');
const graphqlHTTP = require('express-graphql');
var cors = require('cors')
const { schema, root } = require("./schema")

const app = express();

app.use(cors())

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: false,
  }),
);

app.use(
  '/graphiql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }),
);

const port = 3000;
app.listen(port);
console.log(`Running a GraphQL API server at http://localhost:${port}/graphql`);

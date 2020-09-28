const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, (_) => {
  console.log(`Server is listening on port ${PORT}`);
});
import express_graphql from "express-graphql";
import schema from "./config/schema";
import rootValue from "./config/rootValue";

const gql = express_graphql({
  schema: schema,
  rootValue: rootValue,
  graphiql: true
});

export default gql;

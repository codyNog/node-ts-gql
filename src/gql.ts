import * as Express from "express";
import * as express_graphql from "express-graphql";
import { buildSchema } from "graphql";

const dummy = [
  {
    id: 321,
    name: "Jeff"
  },
  {
    id: 245,
    name: "kawagoe"
  }
];

const gql = () => {
  const app = Express();
  const schema = buildSchema(
    `type Query {
    message: String
    object: [dummy]}
    type dummy{
        id: Int
        name: String
    }
    
`
  );
  const root = { message: () => "hey", object: () => dummy };
  const port = 3000;

  app.use(
    "/",
    express_graphql({ schema: schema, rootValue: root, graphiql: true })
  );
  app.listen(port, () => console.log(`http://localhost:${port}/`));
};

export default gql;

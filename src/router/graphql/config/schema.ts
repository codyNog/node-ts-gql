import { buildSchema } from "graphql";

const schema = buildSchema(
  `type Query{
        user: String
        room: Room
    }
    type Room{
      roomId: ID
      log: [String]
      status: Status
    }
    type Status{
      value: Int
    }
    `
);

export default schema;

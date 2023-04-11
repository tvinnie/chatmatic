const { GraphQLServer } = require('graphql-yoga')

const messages = []; //stores all the messages sent

const typeDefs = `
  type Message {
    id: ID!
    user: String!
    content: String!
  }
  type Query {
    messages: [Message!]
  }
  type Mutation {
    postMessage(user: String!, content: String!): ID!
  }
  type Subscription {
    messages: [Message!]
  }
`;


//getting the data
const resolvers = {
    Query: { //gets all messages
        messages: () => messages, //returns the messages array
      },
      Mutation: {
        postMessage: (parent, {user, content}) => {
            const id = messages.length;
            messages.push({
                id,
                user,
                content,
            });
            return id;
        }
      }
}

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(({ port }) => {
  console.log(`Server stated on: http://localhost:${port}/`);
});
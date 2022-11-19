//gql apollo
const { gql } = require("apollo-server-express");

//typeDefs = gql
const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }
  # type Auth
  type Auth {
    token: ID!
    user: User
  }
`;

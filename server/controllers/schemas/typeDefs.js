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
  #   type book
  type Book {
    bookId: ID!
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }
  #   inputBook
  input inputBook {
    bookId: String
    authors: [String]
    title: String
    description: String
    image: String
    link: String
  }
  #   type Query
  type Query {
    me: User
  }

  #   type Mutation
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(newBook: InputBook!): User
    removeBook(bookId: ID!): User
  }
`;

// module.exports

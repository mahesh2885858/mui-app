// import { gql } from "apollo-server-micro";
export const typeDef = `#graphql
  type user {
    name: String
    email: String
  }
  type unique_user {
    name: String
    email: String
    password: String
  }

  type Query {
    findUser(email: String): unique_user!
  }

  type Mutation {
    createUser(name: String, email: String, password: String): user!
    removeUser(email: String): unique_user!
    loginUser(email: String!, password: String!): unique_user!
  }
`;

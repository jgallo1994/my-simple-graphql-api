import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Comment {
    id: ID!
    author: String!
    content: String!
    createdAt: String!
  }

  type Query {
    comments: [Comment!]!
  }

  type Mutation {
    addComment(author: String!, content: String!): Comment!
  }
`;

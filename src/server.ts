import express, {Application} from "express";
import {ApolloServer} from "apollo-server-express";
import {typeDefs} from "./schema";
import {resolvers} from "./resolvers";

const app: Application = express();
const server = new ApolloServer({ typeDefs, resolvers });

server.start().then(() => {
    server.applyMiddleware({ app });

    app.listen({ port: 4000 }, () => {
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
    });
});

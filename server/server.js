const express = require("express");
const path = require("path");
const db = require("./config/connection");
const routes = require("./routes");
//require ApolloServer
const { ApolloServer } = require("apollo-server-express");

const app = express();
const PORT = process.env.PORT || 3001;
//add ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.use(routes);

//startApolloServer
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () =>
      console.log(`🌍 Now listening on localhost:${PORT}`)
    );
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
};

//call the async function
startApolloServer(typeDefs, resolvers);

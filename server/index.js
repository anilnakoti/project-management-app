const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");

const schema = require("./schema/schema");
const connectDb = require("./config/db");

require("dotenv").config();
const app = express();

app.use(cors());
// Connect to MongoDB
connectDb();

const port = process.env.PORT || 3000;

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const {
  graphqlHTTP
} = require('express-graphql');
const schema = require('./schema/schema');

dotenv.config();

const {
  MONGODB_URI
} = process.env;

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV === 'development',
}));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const colors = require('colors')
const cors = require('cors');
const dotenv = require('dotenv');
const {
  graphqlHTTP
} = require('express-graphql');
const schema = require('./schema/schema');
const dbConnection = require('./config/db')

dotenv.config();

const PORT = process.env.PORT || 5000;

dbConnection();

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

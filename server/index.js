const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const {
  MONGODB_URI
} = process.env;

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

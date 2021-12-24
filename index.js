require('dotenv').config();

const express = require('express');
const sequlize = require('./db');
const PORT = process.env.PORT || PORT;
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const start = async () => {
  try {
    await sequlize.authenticate();
    await sequlize.sync();
    app.listen(5000, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();

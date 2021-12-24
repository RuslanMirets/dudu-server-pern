require('dotenv').config();

const express = require('express');

const PORT = process.env.PORT || PORT;

const app = express();

app.listen(5000, () => console.log(`Server started on port ${PORT}`));

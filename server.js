const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
 
const connectToDb = require('./db/db');
connectToDb();
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
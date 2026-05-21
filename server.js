//DEPENDENCIES----------------------------------------------------------------------------------------
const express = require('express');
const app = express();
const mongodb = require('mongodb')
require('dotenv').config();
const PORT = process.env.PORT;

//MongoDB
const MongoClient = mongodb.MongoClient;
const URI = process.env.MONGO_URI;


//MIDDLEWARE----------------------------------------------------------------------------------------




//ROUTES----------------------------------------------------------------------------------------




//PORT----------------------------------------------------------------------------------------
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
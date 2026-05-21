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
app.get('/test', (req, res) => {
    res.send('Testing...')
})

app.get('/', async (req, res) => {

    const client = new MongoClient(URI)

    try {

      

    } catch (error) {

       
    } finally {

       
    }
})



//PORT----------------------------------------------------------------------------------------
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
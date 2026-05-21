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

    const client = new MongoClient(URI);

    try {
        //try to connect
        await client.connect();

        //success resonse json
        res.json({ message: 'Successful Database Connection' });

    } catch (error) {

        console.log(error)
        //catch response json
        res.status(500).json({
            message: 'Failed to connect to the database.'
        });
    } finally {
        // close connection
        await client.close();


    }
})



//PORT----------------------------------------------------------------------------------------
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
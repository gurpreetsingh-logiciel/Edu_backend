// Packages
const express = require('express');
const bodyParser = require('body-parser');

// ENV VARIABLE
require('dotenv').config();

// Helper
const app = express();

// DB Connection
const CONNECTION = require('./MongoDB/connection.js');

const Mongo_DB_Connection = CONNECTION.createConnection();

// App Listen at port
const port = process.env.PORT;

// Parse JSON requests
app.use(bodyParser.json());

// Handle POST requests to /api/post
app.post('/api/post', (req, res) => {
    // Access the posted data in the request body
    const postData = req.body;

    // Do something with the data (e.g., save it to a database)
    console.log('Received POST data:', postData);

    // Send a response
    res.json({ message: 'Data received successfully!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
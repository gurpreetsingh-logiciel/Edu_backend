// Packages
const express = require('express');
const bodyParser = require('body-parser');

// ENV VARIABLE
require('dotenv').config();

// Helper
const app = express();

// DB Connection
require('./MongoDB/connection.js');

// App Listen at port
const port = process.env.PORT || 8080;

// Parse JSON requests
app.use(bodyParser.json());

// Routes
app.use(require("./Routes/index"));

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
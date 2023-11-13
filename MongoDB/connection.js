// ENV VARIABLE
require('dotenv').config();

// Packages
const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.CONNECTION_USER_NAME}:${process.env.CONNECTION_PASSWORD}@cluster0.qbnwag1.mongodb.net/Edu?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = mongoose;
// ENV VARIABLE
require('dotenv').config();

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.CONNECTION_USER_NAME}:${process.env.CONNECTION_PASSWORD}@cluster0.qbnwag1.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

/**
 * Create Mongo DB Connection
 */
const createConnection = async () => {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        
        // Send a ping to confirm a successful connection
        const data = await client.db("admin").command({ ping: 1 });

        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        return data;
    } catch (error) {
        console.log(error);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
};

// Export the functions
module.exports = { createConnection };

const express = require('express');
const mongoose = require('./database/mongoose');

const app = express();
const port = 3000;



const Schema = mongoose.Schema;

const testSchema = new Schema({
    name: String,  // Define your schema fields
    age: Number
});

const Test = mongoose.model('Test', testSchema);

// Middleware to parse JSON bodies
app.use(express.json());

// Route to insert a document
app.post('/insert', async (req, res) => {
    try {
        const test = new Test(req.body); // Create a new document
        const result = await test.save(); // Save the document to MongoDB
        res.status(201).json({ message: 'Document inserted', id: result._id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Route to get all documents
app.get('/', async (req, res) => {
    try {
        const data = await Test.find({}); // Retrieve all documents
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

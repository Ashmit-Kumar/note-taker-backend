// index.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db/notesDb');  // MongoDB connection
const noteRoutes = require('./routes/noteRoutes');  // Routes for notes

// Initialize dotenv to load .env variables
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const dbName= process.env.dbName;
// Connect to MongoDB
connectDB(dbName);

// Middleware
app.use(express.json()); // Parse JSON data
app.use(cors()); // Enable CORS

// Routes
app.use('/api/notes', noteRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


// db/notesDb.js
const mongoose = require('mongoose');
require('dotenv').config();  // Load environment variables

// MongoDB URI from .env file
const mongoURI = process.env.MONGO_URI;

const connectDB = async (dbName) => {
  try {
    await mongoose.connect(mongoURI, {
     dbName : dbName,
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);  // Exit process with failure
  }
};

module.exports = connectDB;


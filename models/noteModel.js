// models/noteModel.js
const mongoose = require('mongoose');

// Define a schema for the Note
const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
}, { timestamps: true });  // Timestamps will add createdAt and updatedAt

// Create a model based on the schema
const Note = mongoose.model('Note', noteSchema);

module.exports = Note;

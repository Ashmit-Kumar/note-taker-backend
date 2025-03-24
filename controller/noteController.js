// controller/noteController.js
const Note = require('../models/noteModel');

// Get all notes from the database
const getNotes = async (req, res) => {
  try {
    const notes = await Note.find();  // Fetch all notes from the MongoDB
    res.json(notes);
  } catch (err) {
    console.error('Error fetching notes:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Add a new note to the database
const createNote = async (req, res) => {
  const { title, content } = req.body;
  
  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }

  try {
    const newNote = new Note({
      title,
      content,
    });

    await newNote.save();  // Save the new note to MongoDB
    res.status(201).json(newNote);
  } catch (err) {
    console.error('Error creating note:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a note by ID from the database
const deleteNote = async (req, res) => {
  const { id } = req.params;

  try {
    const note = await Note.findByIdAndDelete(id);  // Delete the note by ID
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.status(200).json({ message: 'Note deleted successfully' });
  } catch (err) {
    console.error('Error deleting note:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getNotes,
  createNote,
  deleteNote,
};


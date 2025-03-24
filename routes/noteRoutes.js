// routes/noteRoutes.js
const express = require('express');
const router = express.Router();
const noteController = require('../controller/noteController');

// Route to get all notes
router.get('/', noteController.getNotes);

// Route to create a new note
router.post('/', noteController.createNote);

// Route to delete a note by ID
router.delete('/:id', noteController.deleteNote);

module.exports = router;

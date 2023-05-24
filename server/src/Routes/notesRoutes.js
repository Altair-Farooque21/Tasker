const express = require('express');

const {
    createNote,
    getNote,
    updateNote,
    deleteNote
  } = require('../Controllers/noteController.js');

const noteRouter = express.Router();

noteRouter.get('/',getNote);

noteRouter.post('/',createNote);

noteRouter.put('/:noteID',updateNote);

noteRouter.delete('/:noteID',deleteNote);

module.exports = noteRouter;
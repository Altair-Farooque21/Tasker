const express = require('express');

const {
    createNote,
    getNote,
    getNoteByID,
    updateNote,
    deleteNote
  } = require('../Controllers/noteController.js');

const noteRouter = express.Router();

noteRouter.get('/:userID',getNote);

noteRouter.get('/Note/:noteID',getNoteByID);

noteRouter.post('/',createNote);

noteRouter.put('/:noteID',updateNote);

noteRouter.delete('/:noteID',deleteNote);

module.exports = noteRouter;
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

noteRouter.put('/:Id',updateNote);

noteRouter.delete('/:Id',deleteNote);

module.exports = noteRouter;
const express = require('express');
const taskRouter = express.Router();
const {
    createTask,
    getTask,
    getNote,
    deleteTask,
    updateTask
} = require('../Controllers/taskController');


taskRouter.get('/gettasks/:userID',getTask);

taskRouter.get('/gettasks/notes/:taskID',getNote);

taskRouter.post('/addTask',createTask);

taskRouter.put('/:taskID',updateTask);

taskRouter.delete('/:taskID',deleteTask);

module.exports = taskRouter;
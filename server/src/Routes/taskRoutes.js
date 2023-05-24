const express = require('express');
const taskRouter = express.Router();
const {
    createTask,
    getTask,
    deleteTask,
    updateTask
} = require('../Controllers/taskController');


taskRouter.get('/',getTask);

taskRouter.post('/',createTask);

taskRouter.put('/:taskID',updateTask);

taskRouter.delete('/:taskID',deleteTask);

module.exports = taskRouter;
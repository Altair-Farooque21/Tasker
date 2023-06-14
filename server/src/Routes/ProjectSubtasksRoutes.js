const express = require('express');
const projectSubtaskRouter = express.Router();

const {
    createSubTasks,
    getSubTasks,
    UpdateSubTasks,
    DeleteSubTasks
} = require('../Controllers/projectSubtasksContoller');


// subtasks routes
projectSubtaskRouter.get("/:projectID",getSubTasks)

projectSubtaskRouter.post("/",createSubTasks)

projectSubtaskRouter.put("/:subtaskID",UpdateSubTasks)

projectSubtaskRouter.delete("/:subtaskID",DeleteSubTasks)

module.exports =  projectSubtaskRouter;



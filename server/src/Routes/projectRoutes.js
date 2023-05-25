const express = require('express');
const projectRouter = express.Router();
const {
    createProject,
    getProjects,
    deleteProject,
    updateProject
} = require("../Controllers/projectsController");


projectRouter.get('/',getProjects);

projectRouter.post('/',createProject);

projectRouter.put('/:Id',updateProject);

projectRouter.delete('/:Id',deleteProject);

module.exports = projectRouter;
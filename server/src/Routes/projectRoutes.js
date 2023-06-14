const express = require('express');
const projectRouter = express.Router();
const {
    createProject,
    getProjects,
    getProjectByID,
    deleteProject,
    updateProject,
} = require("../Controllers/projectsController");


projectRouter.get('/:userID', getProjects);

projectRouter.get('/project/:projectID', getProjectByID);

projectRouter.post('/', createProject);

projectRouter.put('/:projectID', updateProject);

projectRouter.delete('/:projectID',deleteProject);


module.exports = projectRouter;
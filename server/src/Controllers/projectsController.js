const projectModel = require('../Models/projects');

// API end point checked ✅ successfully
const createProject = async (req,res) =>{
    const {userID,title,description,deadline,priority,subtasks,teams} = req.body;
    const project = new projectModel({

        userID: userID, // user id assigned for project
        title: title,   // project title
        description : description,  // project description
        deadline : deadline,        // project deadline
        priority:priority,          // project priority
        subtasks:subtasks,          // sub tasks in project
        teams:teams                 // team usernames or emails used for retrival of user info and profile pic
    })
    try {
        await project.save();
        res.status(201).json({projectID :project._id,project});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something Went Wrong"});
    }
}

// API end point checked ✅ successfully
const getProjects = async (req,res) =>{
    const userID = req.body.userID; // needs to update once the middlewares are implemented
    try {
        const projects = await projectModel.find({userID : userID});
        res.status(200).json(projects);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something Went Wrong"});
    }
}

// API end point checked ✅ successfully
const updateProject = async (req,res) =>{
    const updateData = req.body;
    const projectID = req.params.trackID;
    try {
        const UpdateProject = await projectModel.findByIdAndUpdate({ _id : projectID},
                                        updateData,
                                        {new:true});
        res.status(200).json(UpdateProject);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something Went Wrong"});
    }
}

// API end point checked ✅ successfully
const deleteProject = async (req,res) =>{
    const projectID = req.params.projectID;
    try {
        await projectModel.findByIdAndDelete({_id:projectID});
        res.status(200).json({
            message:"Deleted Project"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something Went Wrong"});
    }
}

// All end-points are working fine 
// thoroughly checked every step 😎
// Feel free to add middlewares🕸️ for extra security

// modules checked ✅ successfully
module.exports = {
    createProject,
    getProjects,
    deleteProject,
    updateProject
};
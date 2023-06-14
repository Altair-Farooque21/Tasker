const projectSubtasksModel = require("../Models/projectSubtasks")

const createSubTasks = async (req,res) =>{
    const {projectID , title ,deadline}  = req.body;
    const Subtasks = new projectSubtasksModel({
         projectID : projectID,
         title : title,
         deadline: deadline
    })
    try {
        await Subtasks.save()
        res.status(201).json({message : " this is a message from server Code 200"});
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Something Went Wrong"});
    }
}


const getSubTasks = async (req,res) =>{
    const projectID  = req.params.projectID;
    try {
        const subtasks = await projectSubtasksModel.find({projectID : projectID})
        res.status(201).json(subtasks);
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Something Went Wrong"});
    }
}

const UpdateSubTasks = async (req,res) =>{
    const subTaskID = req.params.subtaskID
    const updateData  = req.body;
    try {
        const Updatesubtasks = await projectSubtasksModel.findByIdAndUpdate({_id : subTaskID},
                                                                            updateData,
                                                                            {new:true})
        res.status(201).json("Update 200");
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Something Went Wrong"});
    }
}

const DeleteSubTasks = async (req,res) =>{
    const subtaskID= req.params.subtaskID;
    try {
        await projectSubtasksModel.findByIdAndDelete({_id:subtaskID});
        res.status(200).json({
            message:"Deleted Project"
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Something Went Wrong"});
    }
}


module.exports = {createSubTasks,
    getSubTasks,
    UpdateSubTasks,
    DeleteSubTasks
}
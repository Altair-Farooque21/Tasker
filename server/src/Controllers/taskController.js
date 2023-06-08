const taskModel = require('../Models/task');

// API end point checked ✅ successfully
const createTask = async (req,res) =>{
    const {userID,title,description,subTasks,colorCode,startDate,createDate,dueDate} = req.body;
    const task = new taskModel({
        userID: userID,
        title: title,
        description:description,
        subTasks:subTasks,
        createDate:createDate,
        startDate :startDate,
        dueDate:dueDate,
        colorCode : colorCode

    })
    try {
        await task.save();
        res.status(201).json({taskID :task._id,task});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something Went Wrong"});
    }
}

// API end point checked ✅ successfully
const getTask = async (req,res) =>{
    const userId = req.params.userID; // needs to update once the middlewares are implemented
    try {
        const tasks = await taskModel.find({userID : userId});
        res.status(200).json({tasks : tasks,message : "this message from server"});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something Went Wrong"});
    }
}


const getNote = async (req,res) =>{
    const taskId = req.params.taskID; // needs to update once the middlewares are implemented
    try {
        const tasks = await taskModel.find({ _id : taskId});
        res.status(200).json({tasks : tasks,message : "this message from server"});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something Went Wrong"});
    }
}

// API end point checked ✅ successfully
const updateTask = async (req,res) =>{
    const updateData = req.body;
    const taskID = req.params.taskID;
    // const Updatenote = {
    //     title:title,
    //     description:description,
    //     colorCode:colorCode,
    //     creatDate:creatDate,
    // }
    try {
        const Updatetask = await taskModel.findByIdAndUpdate({ _id : taskID},
                                        updateData,
                                        {new:true});
        res.status(200).json(Updatetask);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something Went Wrong"});
    }
}

// API end point checked ✅ successfully
const deleteTask = async (req,res) =>{
    const taskID = req.params.taskID;
    try {
        await taskModel.findByIdAndDelete({_id:taskID});
        res.status(200).json({
            message:"Deleted Task"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something Went Wrong"});
    }
}

// All end-points are working fine 
// thoroughly checked every step 😎
// Feel free to add middlewares for extra security

// modules checked ✅ successfully
module.exports = {
    createTask,
    getTask,
    getNote,
    deleteTask,
    updateTask
}
const noteModel = require('../Models/notes');

// API end point checked ✅ successfully
const createNote = async (req,res) =>{
    const {userID,title,description,colorCode,creatDate} = req.body;
    const note = new noteModel({
        userID: userID,
        title: title,
        description:description,
        colorCode:colorCode,
        creatDate:creatDate,
    })
    try {
        await note.save();
        res.status(201).json({noteID :note._id,note});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something Went Wrong"});
    }
}

// API end point checked ✅ successfully
const getNote = async (req,res) =>{
    const userID = req.body.userID; // needs to update once the middlewares are implemented
    try {
        const notes = await noteModel.find({userID : userID});
        res.status(200).json(notes);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something Went Wrong"});
    }
}

// API end point checked ✅ successfully
const updateNote = async (req,res) =>{
    const updateData = req.body;
    const noteID = req.params.noteID;
    // const Updatenote = {
    //     title:title,
    //     description:description,
    //     colorCode:colorCode,
    //     creatDate:creatDate,
    // }
    try {
        const Updatenote = await noteModel.findByIdAndUpdate({ _id : noteID},
                                        updateData,
                                        {new:true});
        res.status(200).json(Updatenote);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something Went Wrong"});
    }
}

// API end point checked ✅ successfully
const deleteNote = async (req,res) =>{
    const noteID = req.params.noteID;
    try {
        await noteModel.findByIdAndDelete({_id:noteID});
        res.status(200).json({
            message:"Deleted Note"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something Went Wrong"});
    }
}

// modules checked ✅ successfully
module.exports = {
    createNote,
    getNote,
    deleteNote,
    updateNote
}

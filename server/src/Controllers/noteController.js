const noteModel = require('../Models/notes');


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
        res.status(201).json(note);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something Went Wrong"+ID});
    }
}

const getNote = async (req,res) =>{
    const userID = req.body.Id; // needs to update once the middlewares are implemented
    try {
        const notes = await noteModel.findById(userID);
        res.status(200).json(notes);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something Went Wrong"});
    }
}

const updateNote = async (req,res) =>{
    const {title,description,colorCode,creatDate} = req.body;
    const userID = req.params.Id;
    const Updatenote = {
        title:title,
        description:description,
        colorCode:colorCode,
        creatDate:creatDate,
    }
    try {

        await noteModel.findByIdAndUpdate({userID:userID},
                                     Updatenote,
                                     {new:true});
        res.status(200).json(Updatenote);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something Went Wrong"});
    }
}

const deleteNote = async (req,res) =>{
    const userID = req.params.Id;
    try {
        await noteModel.findByIdAndDelete({userID:userID});
        res.status(200).json({
            message:"Deleted Note"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something Went Wrong"});
    }
}

module.exports = {
    createNote,
    getNote,
    deleteNote,
    updateNote
}
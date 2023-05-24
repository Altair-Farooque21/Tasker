const trackModel = require('../Models/track');

// API end point checked ✅ successfully
const createEvent = async (req,res) =>{
    const {userID,event,startDate,endDate} = req.body;
    const track = new trackModel({
        userID: userID,
        event: event,
        startDate : startDate,
        endDate : endDate
    })
    try {
        await track.save();
        res.status(201).json({trackID :track._id,track});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something Went Wrong"});
    }
}

// API end point checked ✅ successfully
const getEvent = async (req,res) =>{
    const userID = req.body.userID; // needs to update once the middlewares are implemented
    try {
        const track = await trackModel.find({userID : userID});
        res.status(200).json(track);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something Went Wrong"});
    }
}

// API end point checked ✅ successfully
const updateEvent = async (req,res) =>{
    const updateData = req.body;
    const trackID = req.params.trackID;
    // const Updatenote = {
    //     title:title,
    //     description:description,
    //     colorCode:colorCode,
    //     creatDate:creatDate,
    // }
    try {
        const Updatetrack = await trackModel.findByIdAndUpdate({ _id : trackID},
                                        updateData,
                                        {new:true});
        res.status(200).json(Updatetrack);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something Went Wrong"});
    }
}

// API end point checked ✅ successfully
const deleteEvent = async (req,res) =>{
    const trackID = req.params.trackID;
    try {
        await trackModel.findByIdAndDelete({_id:trackID});
        res.status(200).json({
            message:"Deleted Event"
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
    createEvent,
    getEvent,
    deleteEvent,
    updateEvent
};
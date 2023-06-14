const EventModel = require("../Models/Events")


const CreateEvent = async (req,res) =>{
    const {userID,Event,start,end,eventColor} = req.body;
    const event = new EventModel({
        userID: userID,
        Event: Event,
        start: start,
        end: end,
        eventColor:eventColor,
    })
    try {
        await event.save()
        res.status(201).json({data: event,message : "this message from server with code 200"});
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Something Went Wrong",error : error});
    }
}


const getEvents = async (req,res) =>{
      const userID = req.params.userID;
      try {
          const Eventsdata = await EventModel.find({userID : userID})
          res.status(201).json(Eventsdata);
      } catch (error) {
        console.log(error)
        res.status(500).json({message: "Something Went Wrong"});
      }
}

const updateEvent = async (req,res) =>{
    const eventID = req.params.eventID;
    const updateData = req.body;
    try {
        const res = await EventModel.findByIdAndUpdate({ _id : eventID},
            updateData,
            {new:true});
        res.status(200).json({data: res,message :"Update 200"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Something Went Wrong"});
    }
}

module.exports = {
    CreateEvent,
    getEvents,
    updateEvent
}
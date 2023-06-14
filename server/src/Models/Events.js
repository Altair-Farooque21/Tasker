const moongese = require("mongoose");

const EventSchema = moongese.Schema({

     userID :{ 
        type:  moongese.Schema.Types.ObjectId,
        ref : "User",
        required : true
     },
     Event : {
        type :String,
        required : true
     },
     start : {
        type: String,
        required : true
     },
     end : {
        type: String,
        required : true
     },
     eventColor : {
        type: String,
        required : true
     }
})

module.exports = moongese.model("Events",EventSchema);
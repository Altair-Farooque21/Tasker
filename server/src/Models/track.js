const moongose = require('mongoose');

const trackSchema = moongose.Schema({

    // this ID is assigned using User generated ID 
    // now this model belongs to user ID 
    trackID :{
        type:moongose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    title: {
        type:String,
        require: true
    },
    startDate: {
        type:String,
        require: true
    },
    endDate: {
        type:String,
        require: true
    }
    
})

module.exports = moongose.model('Track',noteSchema);
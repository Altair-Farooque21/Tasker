const moongose = require('mongoose');

const projectSchema = moongose.Schema({

    // this ID is assigned using User generated ID 
    // now this model belongs to user ID 
    userID :{
        type:moongose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    title: {
        type:String,
        require: true
    },
    description: {
        type:String,
        require: true
    },
    dueDate:{
        type: String,
        required:true
    },
    startDate:{
        type: String,
        required:true
    },
    priority: {
        type:String,
    },
    teams: {
        type: [String]
    }

})

module.exports = moongose.model('Project',projectSchema);
const moongose = require('mongoose');

const projectSchema = moongose.Schema({

    // this ID is assigned using User generated ID 
    // now this model belongs to user ID 
    projectID :{
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
    deadline:{
        type: String,
        required:true
    },
    priority: {
        type:String,
    },
    subtasks:{
        type: [String],
    },
    teams: {
        type: [String]
    }

})

module.exports = moongose.model('Project',projectSchema);
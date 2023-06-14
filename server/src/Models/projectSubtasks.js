const moongose = require('mongoose');

const projectSubtasksSchema = moongose.Schema({

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
    deadline: {
        type:String,
        require: true
    }

})

module.exports = moongose.model('ProjectSubtasks',projectSubtasksSchema);
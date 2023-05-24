const moongose = require('mongoose');

const taskSchema = moongose.Schema({

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
    subtasks:{
        type: [String]
    },
    colorCode:{
        type: String,
        required:true
    },
    creatDate:{
        type: String,
        required:true
    },
    deadLine:{
        type: String,
        required:true
    }
})

module.exports = moongose.model('Task',taskSchema);
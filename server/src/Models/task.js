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
        required: true
    },
    description: {
        type:String,
    },
    subTasks:{
        type: [String]
    },
    colorCode:{
        type: String,
        required:true
    },
    createDate:{
        type: String,
        required:true
    },
    startDate :{
        type: String,
    },
    dueDate:{
        type: String,
    }
})

module.exports = moongose.model('Task',taskSchema);
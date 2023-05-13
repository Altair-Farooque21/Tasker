const moongose = require('mongoose');

const noteSchema = moongose.Schema({

    // this ID is assigned using User generated ID 
    // now this model belongs to user ID
    userID :{
        type: moongose.Schema.Types.ObjectId,
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
    colorCode:{
        type: String,
        required:true
    },
    creatDate:{
        type: String,
        required:true
    }

})

module.exports = moongose.model('Note',noteSchema);
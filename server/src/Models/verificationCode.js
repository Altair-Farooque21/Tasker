const mongoose = require('mongoose');

const VerfiyCodeSchema = mongoose.Schema({

    code : {
        type: String,
        required : true
    },
    email : {
        type: String,
        required : true
    },
    expirationTimestamp: { 
        type: Date,
        expires: '10m' 
    }

}, { timestamps : true });

module.exports = mongoose.model("VerifyCode",VerfiyCodeSchema);
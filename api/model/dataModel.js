const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    username : {
        type : String, 
        required : true,
        unique : true
    },

    email : {
        type : String,
        required : true,
        unique : true
    },

    password : {
        type : String,
        required : true
    },

    createdOn : {
        type : Date,
        default : Date.now()
    },

    activated : {
        type : Number,
        default : 1
    }
});

module.exports = mongoose.model('userSchema' , userSchema);
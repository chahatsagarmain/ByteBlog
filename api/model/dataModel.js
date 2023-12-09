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
        type : Boolean,
        default : true
    },

    author : {
        type : mongoose.Schema.Types.ObjectId
    },

    liked : {
        type : mongoose.Schema.Types.ObjectId
    }
});

module.exports = mongoose.model('userSchema' , userSchema);
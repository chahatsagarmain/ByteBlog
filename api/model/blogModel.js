const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    title : {
        type : String, 
        required : true,
    },
    summary : {
        type : String, 
        required : true
    },
    image : {
        type : String,

    },

    author : {
        type : String,
        required : true
    },

    createdOn : {
        type : Date, 
        default : Date.now()
    },

    image : {
        type : String
    },

    description : {
        type : String,
        required : true
    },

    likes : {
        type : Number,
        default : 0
    },

    dislikes : {
        type : Number,
        default : 0
    },
});

const postModel = mongoose.model('post' , postSchema);

module.exports = postModel;
const mongoose = require('mongoose');
const { Schema } = mongoose;

const authorSchema = Schema({
    name : {
        type : String, 
        required : true
    },

    blogs : {
        type : [mongoose.Schema.Types.ObjectId],
        ref : 'post'
    },

    createdOn : {
        type : Date,
        default : Date.now()
    },

    activated : {
        type : Boolean,
        default : true
    }
});

const authorModel = mongoose.model('author' , authorSchema);

module.exports = authorModel;
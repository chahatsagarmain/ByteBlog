const express = require('express');
const userRouter = require('./routes/userRoutes');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");
const multer = require('multer');
const postRouter = require('./routes/postRoutes');

const storage = multer.diskStorage(
    {
        destination : function (req , file , cb) {
            cb(null , 'imageUploads');
        },
        filename : function(req , file , cb ) {
            const uniqueFileName = file.fieldname + Date.now();
            cb(null , uniqueFileName);
        }
    }
)

const upload = multer({storage : storage});

function connect(){
    try{
        mongoose.connect('mongodb://127.0.0.1:27017/blog');
        console.log("Connection Established");
    }
    catch(error){
        console.log(error);
    }
}

connect();

app.use(cookieParser());
app.use(cors({
    credentials : true,
    origin : "http://localhost:3000"
}));
app.use(express.json());
app.use("/api" , postRouter);
app.use("/api" , userRouter);


module.exports = {app , upload};

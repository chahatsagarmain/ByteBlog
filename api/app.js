const express = require('express');
const userRouter = require('./routes/userRoutes');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");
const postRouter = require('./routes/postRoutes');

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
app.use(cors({
    credentials : true,
    origin : "http://localhost:3000"
}));
app.use(cookieParser());
app.use("/static" , express.static('imageUploads'));
app.use(express.json());
app.use("/api" , postRouter);
app.use("/api" , userRouter);


module.exports = {app};

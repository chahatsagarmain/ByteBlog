const postModel = require('./../model/blogModel');
const jwt = require('jsonwebtoken');
const authorModel = require('./../model/authorModel');
const userModel = require("./../model/dataModel");
const mongoose = require("mongoose");

async function createPost(req, res) {
    try {
        const { title, summary, description } = req.body;
        const token = req.cookies.token;

        const decodedData = await jwt.decode(token);
        const username = decodedData.username;

        //Creating a blog 
        const blog = new postModel({ title: title, summary: summary, description: description, author: decodedData.username , image : req.files[0].filename});
        await blog.save();

        //Finding the user to create/update the author model 
        const user = await userModel.findOne({username : username});
        console.log(username);
        if(!user.author){
            const blogs = [blog._id];
            const author = new authorModel({name : username , blogs : blogs});

            await author.save();
            user.author = author._id;
            await user.save();

        }      
        
        else{
            const authorFound = await authorModel.findOne({name : username});

            const blogs = authorFound.blogs;
            blogs.push(blogs._id)

            authorFound.blogs = blogs;

            await authorFound.save();
        }

        console.log(blog);

        return res.status(200).json({ "message": "blog created" });
    }

    catch (error) {
        console.log(error);
        return res.status(400);
    }
}

async function mainPagePosts(req , res) {

    try{
        const posts = await postModel.find().sort({createdOn : -1});

        console.log(posts);

        return res.status(200).json(posts);
    }

    catch(error){
        console.log(error);

        return res.status(400);
    }
}

async function postRetreival(req , res){
    try{

        const id = req.params;
        const objectId = mongoose.Types.ObjectId;
        const validId = new objectId(id);
        const post = await postModel.findById({_id : validId});
        if(!post){
            return res.status(404).json({message : "Post not found"});
        }

        else{
            return res.status(200).json(post);
        }


    }
    catch(error){
        console.log(error);
        return res.status(400);
    }
}


module.exports = { createPost , mainPagePosts , postRetreival};
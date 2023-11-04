const postModel = require('./../model/blogModel');
const jwt = require('jsonwebtoken');


async function createPost(req, res) {
    try {
        console.log(req.body);

        const { title, summary, description } = req.body;
        console.log(req.files);
        const token = req.cookies.token;

        const decodedData = await jwt.decode(token);

        const blog = new postModel({ title: title, summary: summary, description: description, author: decodedData.username , image : req.files[0].filename});

        await blog.save();

        console.log(blog);

        return res.status(200).json({ "message": "blog created" });
    }

    catch (error) {
        console.log(error);
        return res.status(400);
    }
}

module.exports = { createPost };
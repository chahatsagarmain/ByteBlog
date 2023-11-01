const postController = require("./../controllers/postController");
const express = require('express');
const router = express.Router();
const { upload } = require('../app');

router.post('/postblog' , upload.single('image') , postController.createPost);

module.exports = router;
const postController = require("./../controllers/postController");
const express = require('express');
const router = express.Router();
const multer = require('multer');

// const storage = multer.diskStorage(
//     {
//         destination: function (req, file, cb) {
//             cb(null, 'imageUploads');
//         },
//         filename: function (req, file, cb) {
//             const uniqueFileName = file.fieldname + Date.now();
//             cb(null, uniqueFileName);
//         }
//     }
// )

const upload = multer({ dest : "./imageUploads"});

router.post('/postblog' , upload.any(),postController.createPost);
router.post('/test' , (req , res) => {
    console.log(req.body);
    return res.status(200);
})

module.exports = router;
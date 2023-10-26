const express = require('express');
const userController = require('./../controllers/userControllers');
const router = express.Router();

router.post("/login" , userController.login);
router.post("/register" , userController.register);
router.get("/check",userController.checkCookie);


module.exports = router;
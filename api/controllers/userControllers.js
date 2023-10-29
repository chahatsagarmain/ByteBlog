const userSchema = require('./../model/dataModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function login(req , res){
    
    try{
        const {email , password} = req.body;
        
        const found = await userSchema.findOne({email});
        if(found){
            const result = await bcrypt.compare(password , found.password);
            //console.log(result);
            if(result){
                const username = found.username;
                const token = jwt.sign({username : username , auth : 1} , process.env.JWTSECRETKEY);
                return res.cookie('token' , token).status(200).json(
                    {
                        message : "User Logged In",
                        auth : "1"
                    }
                )
            }
            else{
                return res.status(400).json({
                    message : "Wrong Credentials",
                    auth : "0"
                })
            }
        }
    }
    catch(error){
        console.log(error);
        return res.status(500).json({message : "error"});
    }

}

async function register(req , res){

    try{
        const {username , email , password} = req.body;
        console.log({username , email , password});

        const found = await userSchema.findOne({username , email});

        if(found){
            const result = await bcrypt.compare(password , found.password).catch(err => console.log(err));

            if(result){
            
                const token = jwt.sign({username : username , auth : 1} , process.env.JWTSECRETKEY);
                return res.cookie('token' , token).status(200).json({
                    message : "User already registered",
                    auth : "1"
                })
            }
            else{

                return res.status(400).json({
                    message : "User already registered but wrong credentials",
                    auth : "0"
                })
            }
            
        }

        await bcrypt.hash(password , 10).then(
            async (encryptedPassword) => {
                
                const token = jwt.sign({username : username, auth : 1} , process.env.JWTSECRETKEY);
                const user = new userSchema({username , email , password : encryptedPassword});
                await user.save().catch(error => console.log(error));
                return res.cookie('token' , token).status(200).json({message : "User registered" , "auth" : 1});
            
            }
        ).catch(err => console.log(err));



    }
    catch(error){
        console.log(error);

        return res.status(400).json({message : "Error occured"});
    }

}

async function checkCookie(req , res){
    //check if cookie is valid for frontend , comparing it with the secret key

    try{
        const cookie = req.cookies;
    const result = await jwt.verify(cookie.token , process.env.JWTSECRETKEY);
    if(result || result.length > 0){
        const decodedPayload = jwt.decode(cookie.token);
        console.log(decodedPayload);
        return res.status(200).json({username : decodedPayload.username});
    }

    return res.status(400).json({message : "Not Found"});
    }
    catch(error){
        console.log("error");

        return res.status(500);
    }

}

function logout(req , res) {
    console.log("CLearning cookie");
    const cookie = req.cookies;
    console.log(cookie);
    return res.status(200).cookie('token','');

}

module.exports = {login , register , checkCookie , logout};
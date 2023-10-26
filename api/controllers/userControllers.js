const userSchema = require('./../model/dataModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function login(req , res){
    
    try{
        const {email , password} = req.body;
        
        const found = await userSchema.find({email});

        if(found){
            const result = bcrypt.compare(password , found.password);

            if(result){
                const username = found.username;
                const token = jwt.sign({username , auth : 1} , process.env.JWTSECRETKEY);
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
            
                const token = jwt.sign({username , auth : 1} , process.env.JWTSECRETKEY);
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
                
                const token = jwt.sign({username , auth : 1} , process.env.JWTSECRETKEY);
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
}


module.exports = {login , register , checkCookie};
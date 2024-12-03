const users = require("../models/user.model");

const signup = async(req, res)=>{
    
    try {
        const {fullName, userName, email, password, confirmPassword} = req.body;
        if (password!==confirmPassword) {
            res.send("Password does not match!")
        }
        else{
            const saveNewUser = new users({
                fullName : fullName,
                userName : userName,
                email : email,
                password : password
            })
            const newUserInfo = await saveNewUser.save();
            res.status(200).send({
                message: "User Created",
                data : newUserInfo
            });
        }
    } catch (error) {
        res.status(500).send({
            message: error.message
        });
    }
    
}

const login = async(req,res) =>{
    try {
        const {userName, password} = req.body;
        const user = await users.findOne({userName});
        if(!user){
            res.status(404).send({
                message : "No such username"
            });
        }
        else if(password!=user.password){
            res.status(404).send({
                message : "Password does not match"
            });
        }
        else{
            res.status(200).json({
                message : `Welcome ${user.fullName}` 
                    });
        }

    } catch (error) {
        console.log("Error in login controller",error.message);
        res.status(500).json({error: "Internal Server Error"});
    }    
};

const logout = (req,res) =>{
    try{
        res.status(200).json({message: "Logged Out successfully"});
    } catch(error){
        console.log("Error in logout controller",error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
};

module.exports = {signup, logout, login};
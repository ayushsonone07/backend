const user = require("../models/userModel");
const bcrypt = require("bcryptjs");

// a "CONTROLLER" refers to a part of your code that is responsible for handeling the application's logic.

//---------HOME route------
const home = async (req, res) => {
    try {
        res.status(200).json({message : "Controller home route"});
    } catch (error) {
        console.log("error : ",error);
    }
}

//---------Register route------
const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;
        const userExist = await user.findOne({email});
        if(userExist){
            return res.status(400).json({ message : "user already exists" });    
        }
        const salt = 10;
        const hashedPassword = await bcrypt.hash(password, salt);  // Apllied Hashing (Encryption) to secure password
        console.log(hashedPassword);
        const userCreated = await user.create({ username, email, phone, password:hashedPassword })

        res.status(201).json(
            {
                message : userCreated,  
                token: await userCreated.generateToken(),
                userdId : userCreated._id.toString()
            });   
    } catch (error) {
        // res.status(500).json({message : "Something went wrong!"});
        next(error);
    }
}

//----------LOGIN route--------
const login = async(req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = await user.findOne({email});
        if(!userExist){
            return res.status(400).json({ message : "Invalid credentials" });    
        }

        const userValid = await bcrypt.compare(password, userExist.password);

        if (userValid) {
            res.status(200).json(
                {
                    message : "Login Successfull",  
                    token: await userExist.generateToken(),
                    userdId : userExist._id.toString()
                });
        } else {
            return res.status(401).json({ message : "Invalid email or password" });    
        }

    } catch (error) {
        res.status(400).json({message : "Something went wrong!"})
    }
}

const User = (req, res) => {
    try {
        const userData = req.user;
        console.log(userData);
        return res.status(200).json({ userData })
    } catch (error) {
        console.log(`error from the user route ${error}`);       
    }
}

module.exports = { home, register, login, User }
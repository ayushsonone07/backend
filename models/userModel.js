const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
});

//Created json web token (JWT) Method
userSchema.methods.generateToken = async function(){
    try {
        return jwt.sign({
            userId : this._id.toString(),
            email : this.email,
            isAdmin : this.isAdmin
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn : "30d"
        }
    );
    } catch (error) {
        console.log(error);
    }
};

//define the model or the collection name
const user = new mongoose.model("User", userSchema);

module.exports = user;

// Authentication : verifying the identity of user.  
// Authorization : giving access to users.

//Components of JWT : 
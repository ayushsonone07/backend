const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

const connnectDB = async() => {
    try {
        await mongoose.connect(URI);
        console.log("DB Connected successfully");
    } catch (error) {
        console.log("DB Connection Failed");
        process.exit(0);
    }
}

module.exports = connnectDB;
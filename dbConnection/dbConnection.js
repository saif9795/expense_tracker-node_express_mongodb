const { default: mongoose } = require("mongoose");

const dotenv = require("dotenv").config();

const dbConnection = async ()=>{
    try {
        await mongoose.connect(process.env.db_url);
        console.log("MongoDB is connected");
    } catch (error) {
        console.log("Connection unsuccessful");
        console.log(error);
    }
}

module.exports = dbConnection;
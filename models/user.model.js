const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName:{
        type:  String,
        required: true
    },
    userName: {
        type: String,
        required: true,
        unique: [true, "Try another Username"]
    },
    email: {
        type: String,
        required: true,
        unique :[true, "Try another Email"]
    },
    password: {
        type: String,
        min: [8, 'Password must contain 8 characters'],
        max: [12, 'Password must not exceed 12 characters'],
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const users = mongoose.model("userInfo",userSchema);

module.exports = users;
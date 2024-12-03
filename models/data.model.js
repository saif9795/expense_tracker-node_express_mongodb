const { default: mongoose } = require("mongoose");


const dataSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        ref: "userInfo"
    },
    category: {
        type: String,
        required: true,
        enum: ["education", "transportation", "food", "misc"]
    },
    description: {
        type: String,
    },
    expenditure: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const expenseData = mongoose.model("expenseData",dataSchema);

module.exports = expenseData;
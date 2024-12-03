const express = require("express");
const dbConnection = require("./dbConnection/dbConnection.js");
const dotenv = require("dotenv").config();
const authRouter = require("./routes/auth.route.js")
const expenseDataRouter = require("./routes/expenseData.route.js")
const app = express();

const PORT = process.env.PORT || 5001;

app.use(express.json());

//Authentication Route
app.use("/api/auth", authRouter);

//Expense Data Tracking Route
app.use("/api/user", expenseDataRouter)

//For Dealing Wrong URL
app.use("*", (req, res)=>{
    res.send("<h1>404! Not a valid URL</h1>");
})

//Home Route
app.get("/", (req, res)=>{
    res.send("<h1>Welcome to the App!</h1>");
});

app.listen(PORT, async()=>{
    await dbConnection();
    console.log(`Server is running at PORT http://localhost:${PORT}`);
})
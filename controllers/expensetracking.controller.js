const expenseData = require("../models/data.model");

const newRecord = async(req, res) =>{
    
    try {
        const userName = req.params.userName;
        const {category, description, expenditure} = req.body;

            const saveNewRecord = new expenseData({
                userName : userName,
                category : category,
                description : description,
                expenditure : expenditure
            })
            const newRecord = await saveNewRecord.save();
            res.status(200).send({
                message: "Record Created",
                data : newRecord
            });

        }catch (error) {
        res.status(500).send({
            message: error.message
        });
    }
    
}

const getRecord = async(req, res) =>{
    try {
        const userName = req.params.userName;
        const id = req.query.id;
        if(id==null){
            const record = await expenseData.find({userName : userName});
            res.status(200).send(record);
        }
        else if(id){
            const record = await expenseData.findOne({_id: id});
            if(record == null){
                res.status(404).send({
                    message : "No such record"
                });
            }
            else{
                res.status(200).send({
                    message : record
                });
            }
        }

        }catch (error) {
        console.log("Error in login controller",error.message);
        res.status(500).json({error: "Internal Server Error"});
    }   
}

const modifyRecord = async(req, res) =>{
    try {
        const {userName, id} = req.params;
        const {category, description, expenditure} = req.body;
        const record = await expenseData.findByIdAndUpdate({_id: id}, {
            userName : userName,
            category : category,
            description : description,
            expenditure : expenditure},
            {
        new: true
    });
            res.status(200).send({
                message : "Record updated",
                data :  record
    });
        }catch (error) {
        console.log("Error in login controller",error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}

const deleteRecord = async(req, res) =>{
    try {
        const {userName, id} = req.params;
        const record = await expenseData.findByIdAndDelete({_id: id});
            res.status(200).send({
                message : "Record Removed",
    });
        }catch (error) {
        console.log("Error in login controller",error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}

module.exports = {newRecord, getRecord, modifyRecord, deleteRecord};
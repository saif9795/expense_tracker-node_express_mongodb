const express = require("express");
const {newRecord, getRecord, modifyRecord, deleteRecord} = require("../controllers/expensetracking.controller");
const router = express.Router();

router.post("/record/:userName", newRecord);

router.get("/record/:userName", getRecord);

router.put("/record/:userName/:id", modifyRecord)

router.delete("/record/:userName/:id", deleteRecord)

module.exports = router;
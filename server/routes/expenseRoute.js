const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

try {
  mongoose.connect("mongodb://127.0.0.1:27017/ExpenseDB", {
    useNewUrlParser: true,
  });
} catch (err) {
  console.log(err);
}

const expense_db = require("../models/expense_schema");
const user_db = require("../models/user_schema");
const info_db = require("../models/info_schema");

//username
//revenue
//expense
//date

router.post("/add_expense", async (req, res) => {
  try {
    result = await expense_db.find({ username: req.body.username });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: false,
      action: "failed to fetch",
    });
    return;
  }
  let today_expense = {
    date: req.body.date,
    revenue: req.body.revenue,
    expense: req.body.expense,
  };
  result[0].expense_info.push(today_expense);
  try {
    await expense_db.replaceOne({ username: req.body.username }, result[0], {
      upsert: true,
    });
    res.status(200).send({
      action: "updated",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      action: "not updated",
      success: false,
    });
    return;
  }
});

module.exports = router;

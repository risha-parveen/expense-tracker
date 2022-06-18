const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const auth = require("../middleware/auth");

try {
  mongoose.connect("mongodb://127.0.0.1:27017/ExpenseDB", {
    useNewUrlParser: true,
  });
} catch (err) {
  console.log(err);
}

const expense_db = require("../models/expense_schema");
const user_db = require("../models/user_schema");
const info_db = require("../models/info_schema.js");

const currency_symbol = {
  dollar: "$",
  euro: "€",
  rupee: "₹",
};

//revenue
//expense
//date
//currency

router.post("/add_expense", auth, async (req, res) => {
  try {
    result = await expense_db.find({ _id: req.user.user_id });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: false,
      action: "failed to fetch",
    });
    return;
  }
  let rev = req.body.revenue + currency_symbol[req.body.currency];
  let exp = req.body.expense + currency_symbol[req.body.currency];
  let length = result[0].expense_info.length;
  //we are storing only the data of one month
  //so deleting the older data
  if (length > 31) {
    console.log(result[0].expense_info.shift());
  }

  let today_expense = result[0].expense_info.pop();
  if (today_expense === undefined || today_expense.date !== req.body.date) {
    //if the expense is newly added for the day
    if (today_expense != undefined) {
      result[0].expense_info.push(today_expense);
    }

    let new_expense = {
      date: req.body.date,
      revenue: rev,
      expense: exp,
    };
    result[0].expense_info.push(new_expense);
    try {
      await expense_db.replaceOne({ username: req.user.username }, result[0], {
        upsert: true,
      });
      res.status(200).send({
        action: "added todays expense",
        success: true,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        action: "not added",
        success: false,
      });
      return;
    }
  } else {
    //if the expense for today is to be edited
    today_expense.revenue = rev;
    today_expense.expense = exp;
    result[0].expense_info.push(today_expense);
    try {
      await expense_db.replaceOne({ username: req.user.username }, result[0], {
        upsert: true,
      });
      res.status(200).send({
        action: "edited todays expense",
        success: true,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        action: "not edited",
        success: false,
      });
      return;
    }
  }
});

module.exports = router;

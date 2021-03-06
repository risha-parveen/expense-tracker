const express = require("express");
const mongoose = require("mongoose");
const auth = require("../middleware/auth");

const router = express.Router();

//currency
//initialAmount
//weeklyPlan

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

//initial_amount
//weekly_plan
//currency

router.post("/edit", auth, async (req, res) => {
  try {
    result = await info_db.find({ _id: req.user.user_id });
  } catch (error) {
    res.status(500).send({
      action: "failed to edit",
      success: false,
    });
    return;
  }

  let initial = req.body.initial_amount + currency_symbol[req.body.currency];
  let weekly = req.body.weekly_plan + currency_symbol[req.body.currency];

  let new_data = {
    username: req.user.username,
    currency: req.body.currency,
    initial_amount: initial,
    weekly_plan: weekly,
  };
  try {
    await info_db.replaceOne({ username: req.user.username }, new_data, {
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

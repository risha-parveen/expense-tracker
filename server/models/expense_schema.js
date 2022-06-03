const mongoose = require("mongoose");

const expense_schema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  initial_amount: {
    type: String,
    required: true,
  },
  weekly_plan: {
    type: String,
    required: true,
  },
  today: {
    revenue: {
      type: Number,
      required: true,
    },
    expense: {
      type: Number,
      required: true,
    },
  },
});

module.exports = mongoose.model("expense_db", expense_schema);

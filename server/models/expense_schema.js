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
  currency: {},
  initial_amount: {},
  weekly_plan: {},
  this_week: {
    sunday: {
      date: {
        type: Date,
        required: true,
      },
      revenue: {},
    },
  },
});

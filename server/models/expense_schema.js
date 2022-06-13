const mongoose = require("mongoose");

const expense_schema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  current_date: {
    type: Date,
    required: true,
  },
  revenue: {
    type: Number,
    required: true,
  },
  expense: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("expense_db", expense_schema);

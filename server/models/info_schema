const mongoose = require("mongoose");

const info_schema = mongoose.Schema({
  username: {
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
});

module.exports = mongoose.model("info_db", info_schema);

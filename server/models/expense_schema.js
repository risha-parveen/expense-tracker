const mongoose = require("mongoose");

const expense_schema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  expense_info: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("expense_db", expense_schema);


/*
[
  username,
  expense_info:[   
    {
      date,
      revenue,
      expense
    }
    {
      date,
      revenue,
      expense
    }
    .
    .
    .
  ]
]

*/
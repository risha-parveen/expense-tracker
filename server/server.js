const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();

try {
  mongoose.connect("mongodb://127.0.0.1:27017/ExpenseDB", {
    useNewUrlParser: true,
  });
} catch (err) {
  console.log(err);
}

const expense_db = require("./models/expense_schema");
const user_db = require("./models/user_schema");

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.get();

app.get("/get_data", async (req, res) => {
  try {
    result = await expense_db.find({});
    res.json(result);
  } catch (error) {
    res.status(500).send({
      success: false,
    });
  }
});

app.listen(6000, () => {
  console.log("server listening");
});

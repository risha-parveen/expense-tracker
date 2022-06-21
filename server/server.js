const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const accountRoute = require("./routes/accountRoute");
const expenseRoute = require("./routes/expenseRoute");
const loginRoute = require("./routes/loginRoute");
const auth = require("./middleware/auth");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

try {
  mongoose.connect("mongodb://127.0.0.1:27017/ExpenseDB", {
    useNewUrlParser: true,
  });
} catch (err) {
  console.log(err);
}

const expense_db = require("./models/expense_schema");
const user_db = require("./models/user_schema");
const info_db = require("./models/info_schema.js");

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use("/login", loginRoute);

app.use("/expense", expenseRoute);

app.use("/account", accountRoute);

app.get("/get_info", auth, async (req, res) => {
  try {
    result = await info_db.find({ _id: req.user.user_id });
    res.json(result);
  } catch (error) {
    res.status(500).send({
      success: false,
    });
  }
});

app.get("/get_expense", auth, async (req, res) => {
  try {
    result = await expense_db.find({ _id: req.user.user_id });
    res.json(result[0].expense_info);
  } catch (error) {
    res.status(500).send({
      success: false,
    });
  }
});

app.listen(5000, () => {
  console.log("server listening");
});

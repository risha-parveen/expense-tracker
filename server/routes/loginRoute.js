const express = require("express");
const mongoose = require("mongoose");
const registerValidation = require("../validation");
const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");

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
const info_db = require("../models/info_schema.js");

//username
//password

router.post("/sign_up", async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  const { error } = registerValidation(req.body);
  if (error) {
    const messageWithoutQuotes = error.details[0].message.replaceAll('"', "");
    return res.status(400).send({
      success: false,
      message: messageWithoutQuotes,
    });
  }

  try {
    result = await user_db.find({ username: username });
    if (result.length !== 0) {
      res.status(400).send({
        success: false,
        message: "username already exist",
      });
    } else {
      const hashedPassword = bcrypt.hashSync(password, 10);
      const newUser = {
        username: username,
        password: hashedPassword,
      };
      try {
        let user = await user_db.insertMany(newUser);
        let user_id = user[0]._id;
        if (user) {
          try {
            let new_info = {
              _id: user_id,
              username: username,
              currency: "dollar",
              initial_amount: "0$",
              weekly_plan: "0$",
            };
            let new_expense = {
              _id: user_id,
              username: username,
              expense_info: [],
            };
            await info_db.insertMany(new_info);
            await expense_db.insertMany(new_expense);
            res.status(200).send({
              success: true,
              user_id: user[0]._id,
              username: username,
              message: "user registered successfully",
            });
          } catch (error) {
            console.log(error);
            res.status(500).send({
              success: false,
              message: "error occured",
            });
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  } catch (error) {
    console.log(error);
  }
});

const privateKey = fs.readFileSync(
  path.join(__dirname, "..", "keys", "privateKey.txt")
);

router.post("/sign_in", async (req, res) => {
  try {
    user = await user_db.find({ username: req.body.username });
    if (user.length === 0) {
      return res.status(400).send({
        success: false,
        message: "username doesnt exist",
      });
    }
    const validPass = bcrypt.compareSync(req.body.password, user[0].password);

    if (!validPass)
      return res.status(400).send({
        success: false,
        message: "password incorrect",
      });
    const payload = {
      user_id: user[0]._id,
      username: req.body.username,
    };
    const token = jwt.sign(payload, privateKey, {
      expiresIn: "12h",
      algorithm: "RS256",
    });

    console.log(token);

    res.status(200).send({
      success: true,
      message: "logged in",
      token: token,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

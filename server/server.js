import express from "express";
import fs from "fs";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const jwt = require("jsonwebtoken");

const app = express();

try {
  mongoose.connect("mongodb://127.0.0.1:27017/ExpenseDB", {
    useNewUrlParser: true,
  });
} catch (err) {
  console.log(err);
}

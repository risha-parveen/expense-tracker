import mongoose from "mongoose";

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
  this_week: {
    sunday: {
      type: Array,
      required: true,
    },
    monday: {
      type: Array,
      required: true,
    },
    tueday: {
      type: Array,
      required: true,
    },
    wednesday: {
      type: Array,
      required: true,
    },
    thursday: {
      type: Array,
      required: true,
    },
    friday: {
      type: Array,
      required: true,
    },
    saturday: {
      type: Array,
      required: true,
    },
  },
});

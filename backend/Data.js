const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      enum: ["Pending", "Submitted", "Cleared"],
      required: true,
    },
    type: {
      type: String,
      enum: ["Expense", "Income"],
      required: true,
    },
  },
  { timestamps: true }
);

const Data = mongoose.model("Data", dataSchema);

module.exports = Data;

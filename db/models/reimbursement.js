const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reimbursmentSchema = new Schema(
  {
    typeReimbursement: {
      type: String,
      required: true,
    },
    expenseDate: {
        type: Date,
        require: true,
    },
    anyDetail: {
        type: String,
        require: true,
    },
    amount: {
        type: Number,
        required: true,
      },
    document: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("reimbursment", reimbursmentSchema);

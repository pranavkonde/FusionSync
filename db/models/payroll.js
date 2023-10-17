const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const payrollSchema = new Schema(
  {
    employeeName: {
      type: String,
      required: true,
    },
    employeeEmailId: {
        type: String,
        required: true,
        unique: true,
    },
    employeePosition: {
      type: String,
      required: true,
    },
    employeeId: {
      type: String,
      required: true,
      unique: true,
    },
    joiningDate: {
      type: Date,
      require: true,
    },
    accountNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    pfAn: {
      type: Number,
      required: true,
      unique: true,
    },
    uan: {
      typr: String,
      required: true,
    },
    paidDays: {
      type: Number,
      required: true,
    },
    lop: {
      type: Number,
      required: true,
    },
    earningsName: {
      type: String,
      required: true,
    },
    earningsAmount: {
      type: Number,
      required: true,
    },
    duductionName: {
      type: String,
      required: true,
    },
    deductionAmount: {
      type: Number,
      required: true,
    },
    reimbursmentName: {
        type: String,
        required: true,
    },
    reimbursmentAmount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("payroll", payrollSchema);

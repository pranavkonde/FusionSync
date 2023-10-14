const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema(
  {
    shopId: {
      type: String,
    },
    empId: {
      type: Number,
      default: 23240,
    },
    emailId: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
    },
    contactDetails: {
      type: Number,
    },
    gender: {
      typr: String,
    },
    role: {
      type: String,
      required: true,
    },
    panCard: {
      type: String,
    },
    address: {
      type: String,
    },
    dob: {
      type: Date,
    },
    dateOfJoining: {
      type: Date,
    },
    fatherName: {
      type: String,
    },
    bankDetails: {
      accNumber: {
        type: Number,
      },
      accHolderName: {
        type: String,
      },
      bankIFSC: {
        type: String,
      },
    },
    aadharCard: {
      type: Number,
    },
    department: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("employee", employeeSchema);

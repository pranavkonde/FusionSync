const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const deductionSchema = new Schema(
  {
    leaveTravelAmount: {
      type: Number,
      required: true,
    },
    leaveTravelOrigin: {
        type: Date,
        require: true,
    },
    leaveTravelDestination: {
        type: Date,
        require: true,
    },
    LTAexemption: {
        type: Number,
        required: true,
      },
    travelStartDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("deduction", deductionSchema);

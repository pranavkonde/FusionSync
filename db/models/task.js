const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    taskName: {
      type: String,
      required: true,
    },
    fromDate: {
        type: Date,
        require: true,
    },
    toDate: {
        type: Date,
        require: true,
    },
    assignedBy: {
        type: String,
        required: true,
      },
    status: {
      type: String,
      required: true,
    },
    importanceLevel: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("task", taskSchema);

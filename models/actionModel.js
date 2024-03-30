const mongoose = require("mongoose");

const actionSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter title."],
    },
    description: {
      type: String,
      requred: [true, "Please enter description."],
    },
  },
  {
    timestamps: true,
  }
);

const Action = mongoose.model("Action", actionSchema);
module.exports = Action;

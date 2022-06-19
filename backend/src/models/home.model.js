const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    name: { type: String, required: true }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("home", homeSchema);
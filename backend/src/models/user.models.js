const { NumberInput } = require("@chakra-ui/react");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: false },
    email: { type: String, required: true },
    password: { type: Number, required: true },
    mobile: { type: Number, required: false },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = new mongoose.model("user", userSchema);

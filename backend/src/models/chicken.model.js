const mongoose = require("mongoose");

const chickenSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    name: { type: String, required: true },
    des: { type: String, required: true },
    price: { type: Number, required: true }

  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("chicken", chickenSchema);
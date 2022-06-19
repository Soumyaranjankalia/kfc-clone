const mongoose = require("mongoose");
module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://Soumya:Soumya@cluster0.jdiio.mongodb.net/?retryWrites=true&w=majority"
  );
};
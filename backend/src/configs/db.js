const mongoose = require("mongoose");
require("dotenv").config();

module.exports = () => {
  return mongoose.connect(
    process.env.mongo_url ,
    {useNewUrlParser: true}
  );
};
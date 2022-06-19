const express = require("express");
const User = require("../models/user.models");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const register = await User.find().lean().exec();
    return res.status(200).send(register);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("", (req, res) => {
    const { name, email, password, mobile } = req.body;
    User.findOne({ email: email }, (err, user) => {
      if (user) {
        res.send({ message: "User already registered" });
      }else{
        const user = new User({
          name,
          email,
          mobile,
          password,
        });
        user.save((err) => {
          if (err) {
            res.send(err);
          } else {
            res.send({ message: "Successfully Registered" });
          }
        });
      }
    });
});

module.exports = router;
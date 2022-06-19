const express = require("express");
const User = require("../models/user.models");

const router = express.Router();

router.get("", async (req, res) => {
    try {
      const login = await User.find().lean().exec();
      return res.status(200).send(login);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  router.post("", (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email: email }, (err, user) => {
      if (user) {
        if (Number(password) === user.password) {
          res.send({ message: "Login Successfull" , user: user });
        } else {
          res.send({ message: "Password didn't match" });
        }
      } else {
        res.send({message: "User not registered"});
      }
    });
  });
  
  module.exports = router;
  
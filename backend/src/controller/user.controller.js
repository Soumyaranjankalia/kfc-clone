import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const User = require("../models/user.models");

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email: email }, (err, user) => {
      if (user) {
        if (password === user.password) {
          res.send({ message: "Login Successfull" , user: user });
        } else {
          res.send({ message: "Password didn't match" });
        }
      } else {
        res.send({message: "User not registered"});
      }
    });
  });
  
  app.post("/register", (req, res) => {
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

  module.exports = app;
const express = require("express");
const Chicken = require("../models/chicken.model");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const chicken = await Chicken.find().lean().exec();
    return res.status(200).send(chicken);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("", async (req, res) => {
  try {
    const chicken = await Chicken.create(req.body);
    return res.status(200).send(chicken);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
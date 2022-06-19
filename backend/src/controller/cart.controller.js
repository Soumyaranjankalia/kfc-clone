const express = require("express");
const Cart = require("../models/cart.model");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const cart = await Cart.find().lean().exec();
    return res.status(200).send(cart);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("", async (req, res) => {
  try {
    const cart = await Cart.create(req.body);
    return res.status(200).send(cart);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
    
  try {
    const cart = await Cart.findByIdAndDelete(req.params.id)
    return res.status(200).send(cart);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;

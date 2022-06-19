const express = require("express");
const connect = require("./configs/db");

const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

// const user = require("./controller/user.controller");
// app.use("/register", user);
// app.use("/login", user);

const chicken = require("./controller/chicken.controller");
app.use("/chickendata", chicken);

const cart = require("./controller/cart.controller");
app.use("/cart", cart);

const home = require("./controller/home.controller");
app.use("/homedata", home);

const register = require("./controller/register.controller");
app.use("/register", register);

const login = require("./controller/login.controller");
app.use("/login", login);

module.exports = app;
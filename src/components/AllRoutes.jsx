import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Cart } from "../pages/Cart";
import { ChickenBuckets } from "../pages/ChickenBuckets";
import { Footer } from "../pages/Footer";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Navbar } from "./Navbar";
import { AuthWrapper } from "./AuthWrapper";
import { Checkout } from "../pages/Checkout";
import { Register } from "../pages/Register";


export const AllRoutes = () => {
  const [user, setLoginUser] = useState({});

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/menu" element={<ChickenBuckets />} />
        {/* <Route path="/cart" element={user && user._id ? <Cart /> : <Login />}></Route> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setLoginUser={setLoginUser}/>} ></Route>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

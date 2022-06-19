import { Box, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChickenToCart } from "../Redux/ChickenBucket/action";

export const Price = () => {
  const cart = useSelector((store) => store.chickenBucketData.cart);
  const [cartprice, setCartPrice] = useState(0)

  const dispatch = useDispatch();
  useEffect(() => {
    if (cart[0]?.length === 0) {
      dispatch(getChickenToCart());
    }else if(cart[0]){
       let e=cart[0].reduce((ac,cv)=> {
            return (ac+Number(cv.price))
        },0)
        setCartPrice(e)
    }
  },[cart[0]?.length, dispatch]);

  return (
    <Text
    >
      {cartprice}
    </Text>
  );
};
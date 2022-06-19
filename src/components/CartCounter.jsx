import { Box, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChickenToCart } from "../Redux/ChickenBucket/action";

export const CartCounter = () => {
  const cart = useSelector((store) => store.chickenBucketData.cart);
 console.log("counter:", cart[0])
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (cart[0]?.length === 0) {
  //     dispatch(getChickenToCart());
  //   }
  // },[cart[0]?.length, dispatch]);

  return (
    <Box
    right="120"
    top="9"
    fontWeight="bold"
  >
    {cart[0]?.length ? cart[0].length : 0}
  </Box>
  );
};


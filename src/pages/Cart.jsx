import { Box, Flex, Text, Image, Button, Checkbox } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import React, { useEffect } from "react";
import {
  getChickenToCart,
  removeChickenToCart,
} from "../Redux/ChickenBucket/action";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartCounter } from "../components/CartCounter";
import { Price } from "../components/Price";

export const Cart = () => {
  const dispatch = useDispatch();
  const [cartItem, setCartItem] = useState([]);
  const { cart } = useSelector((state) => state.chickenBucketData);
  console.log(cart);

  useEffect(() => {
    dispatch(getChickenToCart());
  }, []);
  console.log(cart);

  useEffect(() => {
    if (cart.length != 0) {
      setCartItem(cart[0]);
    }
  }, [cart]);

  return (
    <Box>
      <Flex>
        <Box>
          <Box marginLeft="100px">
            <Flex gap="10px">
              <Box h="40px" w="15px" backgroundColor="red"></Box>
              <Box h="40px" w="15px" backgroundColor="red"></Box>
              <Box h="40px" w="15px" backgroundColor="red"></Box>
            </Flex>
            <Box marginTop="10px">
              <Text
                textAlign="left"
                marginBottom="30px"
                fontSize="40px"
                fontFamily="fantasy"
                letterSpacing="2px"
                lineHeight="43px"
              >
                MY CART
              </Text>
            </Box>
          </Box>
          {cartItem.map((e) => (
            <Flex>
              <Box
                marginLeft="100px"
                w={"800px"}
                backgroundColor="rgb(248,247,245)"
              >
                <Flex justify={"space-between"}>
                  <Box>
                    <Image w="150px" src={e.image} />
                  </Box>
                  <Box marginLeft="20px">
                    <Text
                      fontSize="20px"
                      fontWeight="bold"
                      color="rgb(73,73,111)"
                    >
                      {e.name}
                    </Text>
                    <Box>
                      <Button
                        onClick={() =>
                          window.location.reload()(
                            dispatch(removeChickenToCart(e))
                          )
                        }
                        backgroundColor="transparent"
                        marginTop="40px"
                      >
                        Remove
                      </Button>
                    </Box>
                  </Box>
                  <Box  marginLeft="200px">
                    <Flex>
                      <Box>
                        <Flex gap="20px" marginTop="15px">
                          <Button borderRadius="20px">
                            <MinusIcon />
                          </Button>
                          <Text marginTop="7px" fontWeight={"bold"}>
                            1
                          </Text>
                          <Button borderRadius="20px">
                            <AddIcon />
                          </Button>
                          <Text marginTop="7px" fontWeight={"bold"}>
                            ₹{e.price}.00
                          </Text>
                        </Flex>
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          ))}
        </Box>
        <Box
          w="400px"
          marginLeft="50px"
          marginTop="120px"
          boxShadow="xl"
        >
          <Box
            textAlign={"left"}
            w={"350px"}
            marginLeft="25px"
          >
            <Flex>
              <Text fontWeight={"bold"}>
                <CartCounter />
              </Text>
              <Text fontWeight={"bold"}>ITEMS</Text>
            </Flex>

            <Box
              marginLeft={"45px"}
              h="50px"
              border="1px solid green"
              w="250px"
              backgroundColor="rgb(248,247,245)"
              marginTop="30px"
            >
              <Flex gap={"10px"} marginTop="10px">
                <Image
                  marginLeft={"30px"}
                  src="https://online.kfc.co.in/static/media/Offers_Coupon_Icon.72b94c41.svg"
                />
                <Text fontWeight={"semibold"} color="red">
                  Apply Offer & Deals
                </Text>
              </Flex>
            </Box>
            <Box marginTop="30px">
              <Flex justify="space-between">
                <Text>SubTotal</Text>
                <Flex>
                  <Price />
                  <Text>.00</Text>
                </Flex>
              </Flex>
              <Flex justify="space-between">
                <Text>GST</Text>
                <Text>0.00</Text>
              </Flex>
            </Box>
            <Box  marginTop="30px">
              <Flex gap="20px">
                <Checkbox />
                <Text>₹6.00 Tick to add a large carry bag.</Text>
              </Flex>
            </Box>
            <Box  marginTop="30px">
              <Flex gap="20px">
                <Checkbox />
                <Text>Donate ₹5.00 Tick to Add Hope.</Text>
              </Flex>
            </Box>
            <Link to="/checkout">
              <Button
                marginTop="30px"
                backgroundColor="red"
                borderRadius="10px"
                w="300px"
                marginLeft="20px"
                marginBottom="30px"
                color="white"
              >
                Checkout
              </Button>
            </Link>
          </Box>
        </Box>
      </Flex>
      <Box  h="500px" marginTop="50px">
        <Box  h="400px" w="1100px" marginLeft="90px">
          <Flex gap="100px">
            <Box w="500px">
              <Text textAlign="left" fontWeight="bold" fontSize="2xl">
                FAQ
              </Text>
              <Box
                borderTop="1px solid gray"
                w={"350px"}
                marginLeft="50px"
                textAlign={"left"}
                marginTop="20px"
              >
                <Text marginTop="20px">
                  How can I change the information for my credit/debit card or
                  select a different default payment method?
                </Text>
              </Box>
              <Box
                borderTop="1px solid gray"
                w={"350px"}
                marginLeft="50px"
                textAlign="left"
                marginTop="20px"
              >
                <Text marginTop="20px">What to expect for delivery?</Text>
              </Box>
              <Box
                borderTop="1px solid gray"
                marginBottom={"20px"}
                borderBottom="px solid gray"
                w="350px"
                marginLeft={"50px"}
                textAlign="left"
                marginTop="20px"
              >
                <Text marginTop="20px">
                  How do I change or cancel my pickup order once I’ve placed my
                  order?
                </Text>
              </Box>
            </Box>
            <Box  w="500px">
              <Text textAlign={"left"} fontWeight="bold" fontFamily="2xl">
                STILL HAVE A QUESTION?
              </Text>
              <Box marginTop="20px" borderTop="1px solid gray">
                <Flex gap="20px" marginTop="20px">
                  <Button
                    gap={"10px"}
                    borderRadius="20px"
                    border="1px solid black"
                    w="150px"
                    backgroundColor="transparent"
                    _hover={{
                      background: "black",
                      color: "white",
                    }}
                  >
                    <Image src="https://online.kfc.co.in/static/media/Call_Icon.95900156.svg" />
                    Call Us
                  </Button>
                  <Button
                    gap="10px"
                    borderRadius="20px"
                    border="1px solid black"
                    w="150px"
                    backgroundColor="transparent"
                    _hover={{
                      background: "black",
                      color: "white",
                    }}
                  >
                    {" "}
                    <Image src="https://online.kfc.co.in/static/media/Mail_Icon.3eaa02d7.svg" />{" "}
                    Contact Us
                  </Button>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

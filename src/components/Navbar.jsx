import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { CartCounter } from "./CartCounter";
import { useSelector } from "react-redux";
import { Price } from "./Price";

export const Navbar = () => {
  const cart = useSelector((store) => store.chickenBucketData.cart);
  console.log("counter:", cart[0]);
  const navigate = useNavigate();
  return (
    <>
      <Box border={"1px solid red"} h="100px">
        <Flex justify={"space-between"} marginTop="20px">
          <Flex gap="40px">
            <Flex marginLeft={"100px"}>
              <Image src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg" />
            </Flex>
            <Flex>
              <Text fontWeight={"bold"} marginTop="13px">
                Menu
              </Text>
            </Flex>
            <Flex>
              <Text fontWeight={"bold"} marginTop="13px">
                Deals
              </Text>
            </Flex>
          </Flex>
          <Flex marginRight="100px">
            <Flex>
              <Image src="https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg" />
            </Flex>
            <Flex marginLeft="10px">
              <Link to={"/login"}>
                <Text fontWeight={"bold"} marginTop="11px">
                  Sign In
                </Text>
              </Link>
            </Flex>
            <Flex
              borderLeft={"1px solid gray"}
              marginLeft="20px"
              marginTop="13px"
            >
              {<Price />}
            </Flex>
            <Box
              borderRadius="50%"
              width="20px"
              height="20px"
              textAlign="center"
              paddingBottom="20px"
              position="fixed"
              right="120"
              top="9"
              fontWeight="bold"
            >
              {cart[0]?.length ? cart[0].length : 0}
            </Box>
            <Flex>
              <Link to={"/cart"}>
                <Image
                  h={"50px"}
                  w="60px"
                  src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg"
                />
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <Box h="70px" backgroundColor="black" margin="auto">
        <Flex gap="10px" justify="center">
          <Text color="white" fontWeight="bold" marginTop="20px">
            LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN
          </Text>
          <Button
            marginTop="15px"
            borderRadius="10px"
            backgroundColor="red"
            color="white"
          >
            Start Order
          </Button>
        </Flex>
      </Box>
    </>
  );
};

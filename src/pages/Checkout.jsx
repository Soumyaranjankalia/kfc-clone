import {
  Box,
  Button,
  Checkbox,
  Flex,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { CartCounter } from "../components/CartCounter";
import {useNavigate} from "react-router-dom"

export const Checkout = () => {
  const navigate = useNavigate()
  const handelPayment=() => {
  alert("order Success")
  navigate("/")
  }
  return (
    <Box>
      <Box textAlign="left" marginLeft={"100px"}>
        <Box h={"80px"}>
          <Flex gap="10px">
            <Box h="40px" w="15px" backgroundColor={"red"}></Box>
            <Box h="40px" w="15px" backgroundColor={"red"}></Box>
            <Box h="40px" w="15px" backgroundColor={"red"}></Box>
          </Flex>
        </Box>
        <Box>
          <Text
            marginBottom="30px"
            fontSize="40px"
            fontFamily="fantasy"
            letterSpacing="2px"
            lineHeight="43px"
          >
            CHECKOUT
          </Text>
        </Box>
      </Box>
      <Flex>
        <Box marginLeft={"100px"} marginTop="50px" marginBottom="200px">
          <Text
            marginBottom="30px"
            fontSize="30px"
            fontFamily="fantasy"
            letterSpacing="2px"
            lineHeight="43px"
            textAlign={"left"}
          >
            Contact Info
          </Text>
          <Input
            type="text"
            borderBottom="1px solid gray"
            marginBottom="20px"
            placeholder="Full Name"
          />
          <Input
            type="Number"
            borderBottom="1px solid gray"
            marginBottom="20px"
            placeholder="Phone Number"
          />
          <Input
            type="text"
            borderBottom="1px solid gray"
            marginBottom="20px"
            placeholder="Address"
          />
          <Text
            marginBottom="30px"
            fontSize="30px"
            fontFamily="fantasy"
            letterSpacing="2px"
            lineHeight="43px"
            textAlign={"left"}
            marginTop="50px"
          >
            Payment Info
          </Text>
          <Input
            type="text"
            borderBottom="1px solid gray"
            marginBottom="20px"
            placeholder="Card Holder Name"
          />
          <Input
            type="Number"
            borderBottom="1px solid gray"
            marginBottom="20px"
            placeholder="Card Number"
          />
          <Input
            type="Number"
            borderBottom="1px solid gray"
            marginBottom="20px"
            placeholder="Cvv"
          />
        </Box>
        <Box
          marginLeft="150px"
          marginTop="50px"
          boxShadow="2xl"
          h="300px"
          borderRadius="10px"
        >
          <Box
            textAlign={"left"}
            w={"350px"}
            marginLeft="20px"
            marginRight="20px"
          >
            <Flex>
              <Text
                marginBottom="30px"
                fontSize="25px"
                fontFamily="fantasy"
                letterSpacing="2px"
                lineHeight="43px"
                textAlign={"left"}
              >
                <CartCounter />
              </Text>
              <Text
                marginBottom="30px"
                fontSize="25px"
                fontFamily="fantasy"
                letterSpacing="2px"
                lineHeight="43px"
                textAlign={"left"}
              >
                ITEMS
              </Text>
            </Flex>
            <Box
              marginLeft={"45px"}
              h="50px"
              w="250px"
              backgroundColor="rgb(248,247,245)"
              marginTop="30px"
            >
              <Flex gap={"10px"} marginTop="10px">
                <Image
                  marginLeft={"30px"}
                  marginTop="15px"
                  src="https://online.kfc.co.in/static/media/Offers_Coupon_Icon.72b94c41.svg"
                />
                <Text fontWeight={"semibold"} color="red" marginTop="15px">
                  Apply Offer & Deals
                </Text>
              </Flex>
            </Box>
            <Box marginTop="30px">
              <Flex justify="space-between">
                <Text>SubTotal</Text>
                <Text>0.00</Text>
              </Flex>
              <Flex justify="space-between">
                <Text>GST</Text>
                <Text>0.00</Text>
              </Flex>
            </Box>
            <Button
              marginTop="30px"
              backgroundColor="red"
              borderRadius="10px"
              w="300px"
              marginLeft="20px"
              marginBottom="30px"
              color="white"
              onClick={handelPayment}
            >
              Payment
            </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

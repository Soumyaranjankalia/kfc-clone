import React, { useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  Image,
  Center,
  useColorModeValue,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {  addChickenToCart, fetchChickenData } from "../Redux/ChickenBucket/action";

export const ChickenBuckets = () => {
  const dispatch = useDispatch();
  const { chickendata } = useSelector((state) => state.chickenBucketData);
  console.log(chickendata);

  useEffect(() => {
    dispatch(fetchChickenData());
  }, []);
  console.log(chickendata);

console.log(addChickenToCart());

  return (
    <Box>
      <Flex>
        <Box border="1px solid red" textAlign="left" marginLeft={"100px"}>
          <Box h={"80px"}>
            <Flex gap="10px">
              <Box h="40px" w="15px" backgroundColor={"red"}></Box>
              <Box h="40px" w="15px" backgroundColor={"red"}></Box>
              <Box h="40px" w="15px" backgroundColor={"red"}></Box>
            </Flex>
          </Box>
          <Text
            marginBottom="30px"
            fontSize="40px"
            fontFamily="fantasy"
            letterSpacing="2px"
            lineHeight="43px"
          >
            KFC MENU
          </Text>
          <Text
            marginBottom="30px"
            fontSize={"17px"}
            fontWeight="610"
            color={"rgb(84,84,84)"}
            lineHeight="24px"
          >
            CHICKEN BUCKETS
          </Text>
          <Text
            marginBottom="30px"
            fontSize={"17px"}
            fontWeight="610"
            color={"rgb(84,84,84)"}
            lineHeight="24px"
          >
            NEW LUNCH
          </Text>
          <Text
            marginBottom="30px"
            fontSize={"17px"}
            fontWeight="610"
            color={"rgb(84,84,84)"}
            lineHeight="24px"
          >
            BIRIYANI BUCKETS
          </Text>
          <Text
            marginBottom="30px"
            fontSize={"17px"}
            fontWeight="610"
            color={"rgb(84,84,84)"}
            lineHeight="24px"
          >
            DEALS
          </Text>
          <Text
            marginBottom="30px"
            fontSize={"17px"}
            fontWeight="610"
            color={"rgb(84,84,84)"}
            lineHeight="24px"
          >
            BOX MEALS
          </Text>
          <Text
            marginBottom="30px"
            fontSize={"17px"}
            fontWeight="610"
            color={"rgb(84,84,84)"}
            lineHeight="24px"
          >
            BURGER
          </Text>
          <Text
            marginBottom="30px"
            fontSize={"17px"}
            fontWeight="610"
            color={"rgb(84,84,84)"}
            lineHeight="24px"
          >
            STAY HOME SPECIAL
          </Text>
          <Text
            marginBottom="30px"
            fontSize={"17px"}
            fontWeight="610"
            color={"rgb(84,84,84)"}
            lineHeight="24px"
          >
            SNACKS
          </Text>
          <Text
            fontSize={"17px"}
            fontWeight="610"
            color={"rgb(84,84,84)"}
            lineHeight="24px"
          >
            BEVERAGES
          </Text>
        </Box>
        <Box border="1px solid black" marginLeft="100px" w="900px">
          <Box>
            <Flex marginTop="80px">
              <Box>
                <Input placeholder="Search Our Menu" />
              </Box>
              <Box>
                <Button />
              </Box>
            </Flex>
          </Box>
          <Box>
            <Box border="1px solid black" marginTop="50px"></Box>
          </Box>
          <Box border="1px solid blue" backgroundColor={"rgb(248,247,245)"}>
            <Box>
              <Text fontFamily={"fantasy"} fontSize="30px" textAlign={"left"}>
                CHICKN BUCKETS
              </Text>
            </Box>
            <Box>
              <Center py={11} flexWrap="wrap" gap={"20px"}>
                {chickendata.map((e) => (
                  <Box
                    role={"group"}
                    p={4}
                    maxW={"400px"}
                    w={"full"}
                    bg={useColorModeValue("white", "gray.800")}
                    rounded={"lg"}
                    pos={"relative"}
                    zIndex={1}
                    border="1px solid red"
                    backgroundColor={"rgb(248,247,245)"}
                  >
                    <Box>
                      <Image
                        rounded={"lg"}
                        height={300}
                        width={400}
                        objectFit={"full"}
                        src={e.image}
                      />
                    </Box>
                    <Stack pt={13} align={"left"}>
                      <Heading
                        fontSize={"18px"}
                        fontFamily={"National 2 Condensed"}
                        fontWeight={700}
                        lineHeight="25px"
                        letterSpacing=".5px"
                        textAlign={"left"}
                      >
                        {e.name}
                      </Heading>
                      <Stack>
                        <Text
                          textAlign={"left"}
                          fontWeight={700}
                          fontSize={"xl"}
                        >
                          ₹{e.price}
                        </Text>
                      </Stack>
                      <Stack>
                        <Text
                          color={"gray.500"}
                          fontSize={"sm"}
                          textTransform={"uppercase"}
                          textAlign="left"
                        >
                          {e.des}
                        </Text>
                      </Stack>
                      <Stack>
                        <Button
                          borderRadius={"20px"}
                          w={"200px"}
                          backgroundColor="rgb(228,0,43)"
                          color={"white"}
                          gap="10px"
                          onClick={()=>dispatch(addChickenToCart(e))}
                        >
                          Add to Cart{" "}
                          <Image src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg" />
                        </Button>
                      </Stack>
                    </Stack>
                  </Box>
                ))}
              </Center>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

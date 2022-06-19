import {
  Box,
  Flex,
  Image,
  Text,
  Center,
  useColorModeValue,
  Heading,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "../components/Navbar";
import { fetchData } from "../Redux/Home/action";

export const Home = () => {
  const dispatch = useDispatch();
  const { homedata } = useSelector((state) => state.homepageData);
  console.log(homedata);

  useEffect(() => {
    dispatch(fetchData());
  }, []);
  console.log(homedata);
  return (
    
    <Box>
      <Box>
        <Image src="https://images.ctfassets.net/wtodlh47qxpt/2cKs5e17FbKIE7Dza5ZlNM/996c91ae970f53a25b6bba8036f97aff/Biryani_Banner_1440x396px.jpg?w=1366&fit=fill&fm=webp" />
      </Box>
      <Box backgroundColor="rgb(248,247,245)" h="110px">
        <Text
          fontWeight="700"
          fontSize="44px"
          lineHeight="58px"
          marginTop="29px"
          marginLeft="-600px"
        >
          WELCOME TO KFC!
        </Text>
      </Box>
      <Box width="1100px" marginLeft="120px" marginTop="100px">
        <Flex gap="50px">
          <Flex>
            <Text
              fontWeight="700"
              fontSize="38px"
              lineHeight="43px"
              letterSpacing="1px"
            >
              BROWSE CATEGORIES
            </Text>
          </Flex>
          <Flex>
            <Box
              border="1px solid gray"
              w="630px"
              height="0"
              marginTop="22px"
            ></Box>
          </Flex>
        </Flex>
        <Box>
          <Center py={11} flexWrap="wrap" justifyContent="space-between">
            {homedata.map((e) => (
              <Box
                role={"group"}
                p={4}
                maxW={"250px"}
                w={"full"}
                bg={useColorModeValue("white", "gray.800")}
                rounded={"lg"}
                pos={"relative"}
                zIndex={1}
              >
                <Box>
                  <Image
                    rounded={"lg"}
                    height={200}
                    width={300}
                    objectFit={"contain"}
                    src={e.image}
                  />
                </Box>
                <Stack pt={13} align={"center"}>
                  <Heading
                    fontSize={"18px"}
                    fontFamily={"National 2 Condensed"}
                    fontWeight={700}
                    lineHeight="25px"
                    letterSpacing=".5px"
                  >
                    {e.name}
                  </Heading>
                </Stack>
              </Box>
            ))}
          </Center>
        </Box>
      </Box>
      <Box border="1px solid red" backgroundColor="rgb(32,33,36)" >
        <Flex border="1px solid white" width="1100px" marginLeft="120px" marginTop="100px" marginBottom="50px" justify={"space-between"}>
          <Flex>
            <Text color="white" fontFamily="National 2 Condensed" fontSize="38px" fontWeight="700" lineHeight="43px" letterSpacing="1px">
              OFFERS & DEALS
            </Text>
          </Flex>
          <Flex>
            <Text marginTop="10px" color="white" fontFamily="National 2 Condensed" fontSize="14px" fontWeight="500" lineHeight="24px">
              View All Deals
            </Text>
          </Flex>
        </Flex>
        <Flex gap={"30px"} justify="center" >
          <Flex>
            <Box w="250px" border="1px solid white" backgroundColor="white" borderRadius={"10px"}>
              <Image rounded={"lg"} src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/CHKZINGER.jpg" />
              <Text>
              1 Pc free Chicken Zinger on a cart value of 399 or above on first order. Only for registered users.
              </Text>
            </Box>
          </Flex>
          <Flex>
            <Box w="250px" h={"300px"} border="1px solid white" backgroundColor="white" borderRadius={"10px"} textOverflow="ellipsis" >
            <Image rounded={"lg"} src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/CHKZINGER.jpg" />
              <Text>
              1 Pc free Chicken Zinger on a cart value of 399 or above on first order. Only for registered users.
              </Text>
            </Box>
          </Flex>
          <Flex>
            <Box w="250px" border="1px solid white" backgroundColor="white" borderRadius={"10px"}>
            <Image rounded={"lg"} src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/CHKZINGER.jpg" />
              <Text>
              1 Pc free Chicken Zinger on a cart value of 399 or above on first order. Only for registered users.
              </Text>
            </Box>
          </Flex>
          <Flex>
            <Box w="250px" border="1px solid white" backgroundColor="white" borderRadius={"10px"}>
            <Image rounded={"lg"} src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/CHKZINGER.jpg" />
              <Text>
              1 Pc free Chicken Zinger on a cart value of 399 or above on first order. Only for registered users.
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

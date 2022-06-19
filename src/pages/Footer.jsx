import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box backgroundColor="rgb(32,33,36)" color="white">
      <Box p="100px">
        <Flex gap="45px">
          <Flex>
            <Box>
              <Image src="https://images.ctfassets.net/wtodlh47qxpt/25FSYFuEtGct8NSrtpKe6d/b602f6fe0bf294e6a6dff5d7648bf594/KFC_Logo.svg" />
            </Box>
          </Flex>
          <Flex>
            <Box textAlign="left">
              <Text>KFC Food</Text>
              <Text>Menu</Text>
              <Text>Orde Lookup</Text>
              <Text>Gift ard</Text>
            </Box>
          </Flex>
          <Flex>
            <Box textAlign="left">
              <Text>Support</Text>
              <Text>Get Help</Text>
              <Text>Contact Us</Text>
              <Text>KFC Feedback</Text>
              <Text>Privacy Policy</Text>
            </Box>
          </Flex>
          <Flex>
            <Box textAlign="left">
              <Text>Legal</Text>
              <Text>Term and Conditions</Text>
              <Text>Privacy Policy</Text>
              <Text>Disclaimer</Text>
              <Text>Caution Notice</Text>
            </Box>
          </Flex>
          <Flex>
            <Box textAlign="left">
              <Text>KFC India</Text>
              <Text>About KFC</Text>
              <Text>KFC Care</Text>
              <Text>Careers</Text>
              <Text>Our Golden Pasty</Text>
            </Box>
          </Flex>
          <Flex gap="3px">
            <Image
              w="12px"
              h="15px"
              marginTop="5px"
              src="https://images.ctfassets.net/wtodlh47qxpt/6qgKpWUOIsrIiazhk3cdmF/d60b4c20be69bab1f939bf33348b67e9/Find_KFC.svg"
            />
            <Text>Find a KFC</Text>
          </Flex>
          <Flex h="50px" w="130px" gap="20px">
            <Image
              src="https://images.ctfassets.net/wtodlh47qxpt/6BdZsyjLn64c06uCIE73d1/fb530f5d5231533b049463f6c7e8a2b1/google_play.svg"
              alt="google play"
            />
            <Image
              src="https://images.ctfassets.net/wtodlh47qxpt/em3mcMuAdXWlgucSJiTbS/d3ae7e51ed101d829e459355e255c47f/apple.svg"
              alt="app store"
            />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

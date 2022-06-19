import { Box, Flex, Text, Input, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const login = async () => {
    axios.post("https://evening-meadow-93654.herokuapp.com/login", user)
    .then((res) => {
      alert(res.data.message)
      console.log(res.data.user)
      setLoginUser(res.data.user);
      let msg = res.data.message
      if(msg === "Login Successfull"){
        navigate("/");
      }else{
        navigate("/login");
      }
      
    });
  };

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
            LOGIN
          </Text>
        </Box>
      </Box>
      <Box marginLeft="250px" w="500px">
        <Input
          type="text"
          borderBottom="1px solid gray"
          marginBottom="20px"
          placeholder="Email"
          name="email"
          value={user.email}
          onChange={handlechange}
        />

        <Input
          type="Number"
          borderBottom="1px solid gray"
          marginBottom="20px"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={handlechange}
        />
        <Flex gap="20px" justify="center" marginTop="20px">
          <Button
            borderRadius={"20px"}
            w="200px"
            backgroundColor="red"
            color="white"
            onClick={login}
          >
            Login
          </Button>
        </Flex>
        <Box marginTop="20px" marginBottom="100px">
          <Text fontSize="20px" marginTop="20px">
            New to KFC ?
          </Text>
          <Button
            onClick={() => navigate("/register")}
            marginTop="20px"
            borderRadius={"20px"}
            w="200px"
            backgroundColor="red"
            color="white"
          >
            Register
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

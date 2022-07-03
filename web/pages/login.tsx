import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAuth } from "../hooks/auth";
import Layout from "../components/UI/Layout";
import { Spinner } from "native-base";

const Login = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const { user, login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handelSubmit = async (e: any) => {
    e.preventDefault();

    console.log(user);
    try {
      setIsLoading(true);
      await login(loginData.email, loginData.password);
      router.push("/dashboard");
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout title="MHM | Login">
      <Flex minH={"100vh"} align={"center"} justify={"center"}>
        <Stack
          spacing={8}
          mx={"auto"}
          maxW={"lg"}
          py={12}
          px={12}
          bg={useColorModeValue("white", "#242526")}
          boxShadow={"lg"}
          rounded={"lg"}
        >
          <Stack align={"center"}>
            <Heading
              fontSize={"4xl"}
              textAlign={"center"}
              bgGradient="linear(310deg,#FF4331,#D31A50)"
              bgClip="text"
              fontWeight="bold"
              textTransform={"uppercase"}
            >
              {"Login"}
            </Heading>
          </Stack>
          <Box rounded={"lg"} p={8}>
            <Stack spacing={4}>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  onChange={(e) =>
                    setLoginData({
                      ...loginData,
                      email: e.target.value,
                    })
                  }
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    onChange={(e) =>
                      setLoginData({
                        ...loginData,
                        password: e.target.value,
                      })
                    }
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"#FF4331"}
                  color={"white"}
                  _hover={{
                    bg: "#9d271c",
                  }}
                  _focus={{
                    bg:"#9d271c"
                  }}
                  _active={{
                    bg:"#9d271c"
                  }}
                  disabled={isLoading}
                  onClick={handelSubmit}
                >
                  {"Login"}
                  {isLoading && <Spinner ml={2} color="white" />}
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  {"Don't have an account? "}
                  <Button
                    color={"#FF4331"}
                    variant="link"
                    _focus={{
                      bg:"#9d271c"
                    }}
                    _active={{
                      bg:"#9d271c"
                    }}
                    onClick={() => router.push("/signup")}
                  >
                    {"Sign Up"}
                  </Button>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Layout>
  );
};

export default Login;

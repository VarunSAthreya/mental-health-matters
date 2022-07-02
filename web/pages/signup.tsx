import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
    FormLabel,
    Stack,
    InputRightElement,
    Box,
    Flex,
    useColorModeValue,
    Heading,
    Button,
    Text,
    HStack,
    FormControl,
    Input,
    InputGroup,
} from "@chakra-ui/react";
import { setDoc, doc } from "firebase/firestore";
import { Spinner, useToast } from "native-base";

import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Layout from "../components/UI/Layout";
import { useAuth } from "../hooks/auth";
import { db } from "../lib/firebase";

const SignUp: NextPage = () => {
    const router = useRouter();
    const toast = useToast();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setConfirmShowPassword] = useState(false);
    const { user, signup } = useAuth();
    const [isLoading, setIsLoading] = useState(false);

    const [signupData, setSignupData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstname: "",
        lastname: "",
        age: "",
        phone: "",
    });

    const handelSubmit = async (e: any) => {
        e.preventDefault();
        if (
            signupData.password === "" ||
            signupData.confirmPassword === "" ||
            signupData.firstname === "" ||
            signupData.age === "" ||
            signupData.phone === ""
        ) {
            return;
        }
        if (signupData.password !== signupData.confirmPassword) {
            alert("Password does not match");
            return;
        }

        // console.log(user);
        console.log(signupData);

        try {
            setIsLoading(true);
            await signup(signupData.email, signupData.password);
            await setDoc(doc(db, "users", user.uid), {
                firstname: signupData.firstname,
                lastname: signupData.lastname,
                age: signupData.age,
                phone: signupData.phone,
                email: signupData.email,
                id: user.uid,
                type: "user",
            });

            router.push("/dashboard");
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Layout title="MHM | Sign Up">
            <Flex
                minH={"100vh"}
                align={"center"}
                justify={"center"}
                bg={useColorModeValue("gray.50", "gray.800")}
            >
                <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                    <Stack align={"center"}>
                        <Heading fontSize={"4xl"} textAlign={"center"}>
                            {"Sign Up"}
                        </Heading>
                        <Text fontSize={"lg"} color={"gray.600"}>
                            to enjoy all of our cool features ✌️
                        </Text>
                    </Stack>
                    <Box
                        rounded={"lg"}
                        bg={useColorModeValue("white", "gray.700")}
                        boxShadow={"lg"}
                        p={8}
                    >
                        <Stack spacing={4}>
                            <HStack>
                                <Box>
                                    <FormControl id="firstName" isRequired>
                                        <FormLabel>First Name</FormLabel>
                                        <Input
                                            type="text"
                                            onChange={(e) =>
                                                setSignupData({
                                                    ...signupData,
                                                    firstname: e.target.value,
                                                })
                                            }
                                        />
                                    </FormControl>
                                </Box>
                                <Box>
                                    <FormControl id="lastName">
                                        <FormLabel>Last Name</FormLabel>
                                        <Input
                                            type="text"
                                            onChange={(e) =>
                                                setSignupData({
                                                    ...signupData,
                                                    lastname: e.target.value,
                                                })
                                            }
                                        />
                                    </FormControl>
                                </Box>
                            </HStack>
                            <FormControl id="phone" isRequired>
                                <FormLabel>Phone</FormLabel>
                                <Input
                                    type="number"
                                    onChange={(e) =>
                                        setSignupData({
                                            ...signupData,
                                            phone: e.target.value,
                                        })
                                    }
                                />
                            </FormControl>
                            <FormControl id="age" isRequired>
                                <FormLabel>Age</FormLabel>
                                <Input
                                    type="number"
                                    onChange={(e) =>
                                        setSignupData({
                                            ...signupData,
                                            age: e.target.value,
                                        })
                                    }
                                />
                            </FormControl>
                            <FormControl id="email" isRequired>
                                <FormLabel>Email address</FormLabel>
                                <Input
                                    type="email"
                                    onChange={(e) =>
                                        setSignupData({
                                            ...signupData,
                                            email: e.target.value,
                                        })
                                    }
                                />
                            </FormControl>
                            <FormControl id="password" isRequired>
                                <FormLabel>Password</FormLabel>
                                <InputGroup>
                                    <Input
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        onChange={(e) =>
                                            setSignupData({
                                                ...signupData,
                                                password: e.target.value,
                                            })
                                        }
                                    />
                                    <InputRightElement h={"full"}>
                                        <Button
                                            variant={"ghost"}
                                            onClick={() =>
                                                setShowPassword(
                                                    (showPassword) =>
                                                        !showPassword
                                                )
                                            }
                                        >
                                            {showPassword ? (
                                                <ViewIcon />
                                            ) : (
                                                <ViewOffIcon />
                                            )}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <FormControl id="ConfirmPassword" isRequired>
                                <FormLabel>Confirm Password</FormLabel>
                                <InputGroup>
                                    <Input
                                        type={
                                            showConfirmPassword
                                                ? "text"
                                                : "password"
                                        }
                                        onChange={(e) =>
                                            setSignupData({
                                                ...signupData,
                                                confirmPassword: e.target.value,
                                            })
                                        }
                                    />
                                    <InputRightElement h={"full"}>
                                        <Button
                                            variant={"ghost"}
                                            onClick={() =>
                                                setConfirmShowPassword(
                                                    (showConfirmPassword) =>
                                                        !showConfirmPassword
                                                )
                                            }
                                        >
                                            {showConfirmPassword ? (
                                                <ViewIcon />
                                            ) : (
                                                <ViewOffIcon />
                                            )}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <Stack spacing={10} pt={2}>
                                <Button
                                    loadingText="Submitting"
                                    size="lg"
                                    bg={"blue.400"}
                                    color={"white"}
                                    _hover={{
                                        bg: "blue.500",
                                    }}
                                    onClick={handelSubmit}
                                    disabled={isLoading}
                                >
                                    {"Sign Up"}
                                    {isLoading && (
                                        <Spinner ml={2} color="white" />
                                    )}
                                </Button>
                            </Stack>
                            <Stack pt={6}>
                                <Text align={"center"}>
                                    Already have an account?{" "}
                                    <Button
                                        color={"blue.400"}
                                        onClick={() => router.push("/login")}
                                    >
                                        {"Login"}
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

export default SignUp;

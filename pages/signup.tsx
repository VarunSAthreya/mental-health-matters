import { setDoc, doc } from "firebase/firestore";
import {
    Box,
    Button,
    Center,
    FormControl,
    Heading,
    Input,
    VStack,
} from "native-base";
import React, { useState } from "react";
import { useAuth } from "../hooks/auth";
import { db } from "../lib/firebase";

const Signup = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        age: "",
        phone: "",
        profession: "",
    });
    const { user, signup } = useAuth();

    const handleSignup = async (e: any) => {
        e.preventDefault();
        console.log("HEYY");

        console.log({ data });

        try {
            await signup(data.email, data.password);
            console.log(user.uid);

            await setDoc(doc(db, "users", user.uid), data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Center w="100%">
            <Box safeArea p="2" w="90%" maxW="290" py="8">
                <Heading
                    size="lg"
                    color="coolGray.800"
                    _dark={{
                        color: "warmGray.50",
                    }}
                    fontWeight="semibold"
                >
                    Welcome
                </Heading>
                <Heading
                    mt="1"
                    color="coolGray.600"
                    _dark={{
                        color: "warmGray.200",
                    }}
                    fontWeight="medium"
                    size="xs"
                >
                    Sign up to continue!
                </Heading>
                <VStack space={3} mt="5">
                    <FormControl isRequired>
                        <FormControl.Label>Name</FormControl.Label>
                        <Input
                            type="text"
                            onChange={(e) =>
                                setData({ ...data, name: e.target.value })
                            }
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormControl.Label>Phone number</FormControl.Label>
                        <Input
                            keyboardType="numeric"
                            onChange={(e) =>
                                setData({ ...data, phone: e.target.value })
                            }
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormControl.Label>Age</FormControl.Label>
                        <Input
                            keyboardType="numeric"
                            onChange={(e) =>
                                setData({ ...data, age: e.target.value })
                            }
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormControl.Label>Profession</FormControl.Label>
                        <Input
                            type="text"
                            onChange={(e) =>
                                setData({ ...data, profession: e.target.value })
                            }
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormControl.Label>Email</FormControl.Label>
                        <Input
                            type="text"
                            onChange={(e) =>
                                setData({ ...data, email: e.target.value })
                            }
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input
                            type="password"
                            onChange={(e) =>
                                setData({ ...data, password: e.target.value })
                            }
                        />
                        <FormControl.ErrorMessage>
                            Wrong password
                        </FormControl.ErrorMessage>
                    </FormControl>
                    <FormControl isRequired>
                        <FormControl.Label>Confirm Password</FormControl.Label>
                        <Input
                            type="password"
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    confirmPassword: e.target.value,
                                })
                            }
                        />
                    </FormControl>
                    <Button mt="2" colorScheme="indigo" onPress={handleSignup}>
                        Sign up
                    </Button>
                </VStack>
            </Box>
        </Center>
    );
};

export default Signup;

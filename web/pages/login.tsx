import {
    Box,
    Button,
    Center,
    FormControl,
    Heading,
    HStack,
    Input,
    Link,
    Text,
    VStack,
} from "native-base";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAuth } from "../hooks/auth";

const Login = () => {
    const router = useRouter();
    const { user, login } = useAuth();
    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const handleLogin = async (e: any) => {
        e.preventDefault();

        console.log(user);
        try {
            await login(data.email, data.password);
            router.push("/dashboard");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Center w="100%">
            <Box safeArea p="2" py="8" w="90%" maxW="290">
                <Heading
                    size="lg"
                    fontWeight="600"
                    color="coolGray.800"
                    _dark={{
                        color: "warmGray.50",
                    }}
                >
                    Welcome
                </Heading>
                <Heading
                    mt="1"
                    _dark={{
                        color: "warmGray.200",
                    }}
                    color="coolGray.600"
                    fontWeight="medium"
                    size="xs"
                >
                    Sign in to continue!
                </Heading>

                <VStack space={3} mt="5">
                    <FormControl>
                        <FormControl.Label>Email ID</FormControl.Label>
                        <Input
                            onChange={(e) =>
                                setData({ ...data, email: e.target.value })
                            }
                        />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input
                            type="password"
                            onChange={(e) =>
                                setData({ ...data, password: e.target.value })
                            }
                        />
                        <Link
                            _text={{
                                fontSize: "xs",
                                fontWeight: "500",
                                color: "indigo.500",
                            }}
                            alignSelf="flex-end"
                            mt="1"
                        >
                            Forget Password?
                        </Link>
                    </FormControl>
                    <Button mt="2" colorScheme="indigo" onPress={handleLogin}>
                        Sign in
                    </Button>
                    <HStack mt="6" justifyContent="center">
                        <Text
                            fontSize="sm"
                            color="coolGray.600"
                            _dark={{
                                color: "warmGray.200",
                            }}
                        >
                            I&apos;m a new user.{" "}
                        </Text>
                        <Link
                            _text={{
                                color: "indigo.500",
                                fontWeight: "medium",
                                fontSize: "sm",
                            }}
                            href="#"
                        >
                            Sign Up
                        </Link>
                    </HStack>
                </VStack>
            </Box>
        </Center>
    );
};

export default Login;

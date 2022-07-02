import {
    Avatar,
    Box,
    Button,
    Flex,
    Text,
    Grid,
    GridItem,
    useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { Use } from "react-native-svg";
import Separator from "../Separator/Separator";

type Props = {
    User: {
        firstname: string;
        lastname: string;
        email: string;
        phone: string;
        age: number;
        id: string;
    };
};

const UserProfileCard: FC<Props> = ({ User }) => {
    const router = useRouter();

    return (
        <Grid
            templateColumns={{ sm: "1fr", md: "repeat(4, 1fr)" }}
            gap="22px"
            templateRows="repeat(2, 1fr)"
            mt={8}
        >
            <GridItem colSpan={1}>
                <Box
                    display={"flex"}
                    h={"100%"}
                    flexDirection={"column"}
                    bg={useColorModeValue("white", "#242526")}
                    borderRadius={8}
                    justifyContent="center"
                    alignItems={"center"}
                    p={8}
                >
                    <Avatar
                        name={User.firstname ?? ""}
                        color={"white"}
                        bg={"linear-gradient(310deg, #2980B9 0%, #6DD5FA 100%)"}
                        w="150px"
                        h="150px"
                        borderRadius={"100%"}
                    />
                    <Flex direction="column" my={{ sm: "14px" }}>
                        <Text
                            fontSize={{ sm: "lg", lg: "2.3rem" }}
                            color={useColorModeValue("black", "white")}
                            fontWeight="bold"
                            ms={{ sm: "8px", md: "0px" }}
                        >
                            {User.firstname} {User.lastname}
                        </Text>
                    </Flex>
                </Box>
            </GridItem>
            <GridItem colSpan={3}>
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    p={8}
                    borderRadius={8}
                    bg={useColorModeValue("white", "#242526")}
                >
                    <Box p="12px 5px" mb="12px">
                        <Text
                            bgGradient="linear(310deg, #2980B9 0%, #6DD5FA 100%)"
                            bgClip="text"
                            fontSize="2xl"
                            fontWeight="extrabold"
                            textTransform={"uppercase"}
                        >
                            GENERAL INFORMATION
                        </Text>
                        <Text
                            fontSize={{ base: "md", lg: "lg" }}
                            color={"gray.500"}
                            mt={3}
                        >
                            This Quiz is conducted in order to understand your
                            metal health status. So we can treat you better!
                        </Text>
                    </Box>
                    <Flex
                        align="center"
                        justifyContent="space-between"
                        mb="12px"
                        borderRadius={8}
                        bg={"#f8f9fa"}
                        p={3}
                    >
                        <Text
                            fontSize="md"
                            color={"gray.500"}
                            me="10px"
                            fontWeight={"semibold"}
                        >
                            First Name
                        </Text>
                        <Text
                            fontSize="md"
                            color="black"
                            fontWeight={"semibold"}
                        >
                            {User.firstname}
                        </Text>
                    </Flex>
                    <Flex
                        align="center"
                        justifyContent="space-between"
                        mb="12px"
                        borderRadius={8}
                        bg={"#f8f9fa"}
                        p={3}
                    >
                        <Text
                            fontSize="md"
                            color={"gray.500"}
                            me="10px"
                            fontWeight={"semibold"}
                        >
                            Last Name
                        </Text>
                        <Text
                            fontSize="md"
                            color="black"
                            fontWeight={"semibold"}
                        >
                            {User.lastname}
                        </Text>
                    </Flex>
                    <Flex
                        align="center"
                        justifyContent="space-between"
                        mb="12px"
                        borderRadius={8}
                        bg={"#f8f9fa"}
                        p={3}
                    >
                        <Text
                            fontSize="md"
                            color={"gray.500"}
                            me="10px"
                            fontWeight={"semibold"}
                        >
                            Email
                        </Text>
                        <Text
                            fontSize="md"
                            color="black"
                            fontWeight={"semibold"}
                        >
                            {User.email}
                        </Text>
                    </Flex>
                    <Flex
                        align="center"
                        justifyContent="space-between"
                        mb="12px"
                        borderRadius={8}
                        bg={"#f8f9fa"}
                        p={3}
                    >
                        <Text
                            fontSize="md"
                            color={"gray.500"}
                            me="10px"
                            fontWeight={"semibold"}
                        >
                            Age
                        </Text>
                        <Text
                            fontSize="md"
                            color="black"
                            fontWeight={"semibold"}
                        >
                            {User.age}
                        </Text>
                    </Flex>
                </Box>
            </GridItem>
            <GridItem colSpan={4}>
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    bg={useColorModeValue("white", "#242526")}
                    borderRadius={8}
                    justifyContent="center"
                    alignItems={"center"}
                    p={8}
                >
                    <Box p="12px 5px" mb="12px">
                        <Text
                            bgGradient="linear(310deg, #2980B9 0%, #6DD5FA 100%)"
                            bgClip="text"
                            fontSize="2xl"
                            fontWeight="extrabold"
                            textTransform={"uppercase"}
                        >
                            OTHER INFORMATION
                        </Text>
                        <Text
                            fontSize={{ base: "md", lg: "lg" }}
                            color={"gray.500"}
                            mt={3}
                        >
                            This Quiz is conducted in order to understand your
                            metal health status. So we can treat you better!
                        </Text>
                    </Box>
                </Box>
            </GridItem>
        </Grid>
    );
};

export default UserProfileCard;

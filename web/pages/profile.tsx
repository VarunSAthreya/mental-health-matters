import React, { useEffect, useState } from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Flex,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import SideBar from "../components/Sidebar/Sidebar";
import UserProfileCard from "../components/Card/UserProfileCard";
import { getUserDetails } from "../function";
import { useAuth } from "../hooks/auth";

const UserDetails: NextPage = () => {
    const primaryBG = useColorModeValue("#f8f9fa", "#18191A");
    const secondaryBG = useColorModeValue("white", "#242526");

    const { user } = useAuth();
    const [userDetails, setUserDetails] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        age: 0,
        id: "",
    });

    useEffect(() => {
        getData();
    }, [user.uid]);

    const getData = async () => {
        getUserDetails(user.uid).then((res) => {
            return setUserDetails(res as any);
        });
    };

    return (
        <Flex flexDirection={"row"} bg={primaryBG}>
            <SideBar />
            <Flex
                flexDirection="column"
                pt={{ base: "120px", md: "25px" }}
                marginLeft={"290px"}
                width={"100%"}
                px={4}
            >
                <Box mb="22px" overflowX={{ sm: "scroll", xl: "hidden" }}>
                    <Box pb={"25px"}>
                        <Flex
                            direction="column"
                            bg={secondaryBG}
                            p={4}
                            borderRadius={8}
                            pb="1.5rem"
                        >
                            <Text
                                bgGradient="linear-gradient(310deg, #2980B9 0%, #6DD5FA 100%)"
                                bgClip="text"
                                fontSize="4xl"
                                fontWeight="extrabold"
                                textTransform={"uppercase"}
                            >
                                USER PROFILE
                            </Text>
                            <Breadcrumb
                                separator={
                                    <ChevronRightIcon color="gray.500" />
                                }
                            >
                                <BreadcrumbItem>
                                    <BreadcrumbLink
                                        href="/"
                                        color="gray.500"
                                        _hover={{
                                            textDecoration: "none",
                                            color: "#FF0080",
                                        }}
                                        _focus={{ outline: "none" }}
                                    >
                                        Dashboard
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbItem isCurrentPage>
                                    <BreadcrumbLink
                                        href="#"
                                        color="gray.500"
                                        _hover={{
                                            textDecoration: "none",
                                            color: "#FF0080",
                                        }}
                                        _focus={{ outline: "none" }}
                                    >
                                        User Details
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            </Breadcrumb>
                        </Flex>
                    </Box>
                    <Box borderRadius={8}>
                        <UserProfileCard User={userDetails} />
                    </Box>
                </Box>
            </Flex>
        </Flex>
    );
};

export default UserDetails;

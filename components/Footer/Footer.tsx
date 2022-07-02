import {
    Box,
    Container,
    Flex,
    Icon,
    Link,
    SimpleGrid,
    Button,
    Stack,
    Text,
    useColorModeValue,
} from "native-base";
import React, { FunctionComponent } from "react";
import {
    BsFacebook,
    BsGithub,
    BsInstagram,
    BsLinkedin,
    BsTwitter,
    BsYoutube,
} from "react-icons/bs";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { ISocialMedia } from "../../@types";
import SocialMedia from "../UI/SocialMedia";
import Logo from "../Logo/Logo";

const Footer: FunctionComponent = () => {
    const varun: ISocialMedia[] = [
        {
            icon: BsGithub,
            url: "https://github.com/VarunSAthreya",
            text: "GitHub",
        },
        {
            icon: BsLinkedin,
            url: "https://www.linkedin.com/in/varunsathreya/",
            text: "LinkedIn",
        },
    ];
    const sandeep: ISocialMedia[] = [
        {
            icon: BsGithub,
            url: "https://github.com/Sandeep-M23",
            text: "GitHub",
        },
        {
            icon: BsLinkedin,
            url: "https://www.linkedin.com/in/sandeep-m-4a599a1a4/",
            text: "LinkedIn",
        },
    ];

    return (
        <Box
            bg={useColorModeValue("gray.50", "gray.900")}
            color={useColorModeValue("gray.700", "gray.200")}
        >
            <Container maxW={"6xl"} py={10}>
                <Box py={10}>
                    <Flex align={"center"}>
                        <Logo />
                    </Flex>
                </Box>
                <SimpleGrid columns={4} space={8}>
                    <Stack alignSelf={"flex-start"}>
                        <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
                            Services
                        </Text>
                        <Text>Depression therapy</Text>
                        <Text>Individual therapy</Text>
                        <Text>Couples therapy</Text>
                        <Text>Children therapy</Text>
                        <Text>Anti-Stress therapy</Text>
                    </Stack>
                    <Stack alignSelf={"flex-start"}>
                        <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
                            Contact Us
                        </Text>
                        <Button
                            fontSize="md"
                            display="flex"
                            alignItems="center"
                            _hover={{
                                color: "#521262",
                            }}
                        >
                            <Icon boxSize={5} m={{ base: 2 }} as={MdPhone} />
                            <Link
                                href="tel:+918088611802"
                                // target="_blank"
                                // rel="noreferrer"
                                _hover={{
                                    textDecoration: "none",
                                }}
                                // _focus={{ outline: 'none' }}
                            >
                                +91 80 8861 1802
                            </Link>
                        </Button>
                        <Button
                            fontSize="md"
                            display="flex"
                            alignItems="center"
                            _hover={{
                                color: "#521262",
                            }}
                        >
                            <Icon boxSize={5} m={{ base: 2 }} as={MdEmail} />
                            <Link
                                href="mailto:HmH@gmail.com"
                                // target="_blank"
                                // rel="noreferrer"
                                _hover={{
                                    textDecoration: "none",
                                }}
                                // _focus={{ outline: 'none' }}
                            >
                                HmH@gmail.com
                            </Link>
                        </Button>
                        <Text
                            fontSize="md"
                            display="flex"
                            alignItems="flex-start"
                        >
                            <Icon
                                boxSize={5}
                                m={{ base: 1 }}
                                as={MdLocationOn}
                            />
                            2231 Sycamore Lake Road Green Bay, WI 54304
                        </Text>
                    </Stack>
                    <Stack alignSelf={"flex-start"}>
                        <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
                            Follow Us
                        </Text>
                        <Button
                            fontSize="md"
                            display="flex"
                            alignItems="center"
                            _hover={{
                                color: "#521262",
                                textDecoration: "none",
                            }}
                        >
                            <Icon boxSize={5} m={{ base: 2 }} as={BsFacebook} />
                            <Link
                                href="https://www.facebook.com/"
                                // target="_blank"
                                // rel="noreferrer"
                                _hover={{
                                    textDecoration: "none",
                                }}
                                // _focus={{ outline: 'none' }}
                            >
                                FaceBook
                            </Link>
                        </Button>
                        <Button
                            fontSize="md"
                            display="flex"
                            alignItems="center"
                            _hover={{
                                color: "#521262",
                            }}
                        >
                            <Icon
                                boxSize={5}
                                m={{ base: 2 }}
                                as={BsInstagram}
                            />
                            <Link
                                href="https://www.instagram.com/"
                                // target="_blank"
                                // rel="noreferrer"
                                _hover={{
                                    textDecoration: "none",
                                }}
                                // _focus={{ outline: 'none' }}
                            >
                                Instagram
                            </Link>
                        </Button>
                        <Button
                            fontSize="md"
                            display="flex"
                            alignItems="center"
                            _hover={{
                                color: "#521262",
                            }}
                        >
                            <Icon boxSize={5} m={{ base: 2 }} as={BsTwitter} />
                            <Link
                                href="https://twitter.com/?lang=en"
                                // target="_blank"
                                // rel="noreferrer"
                                _hover={{
                                    textDecoration: "none",
                                }}
                                // _focus={{ outline: 'none' }}
                            >
                                Twitter
                            </Link>
                        </Button>
                        <Button
                            fontSize="md"
                            display="flex"
                            alignItems="center"
                            _hover={{
                                color: "#521262",
                            }}
                        >
                            <Icon boxSize={5} m={{ base: 2 }} as={BsYoutube} />
                            <Link
                                href="https://www.youtube.com/"
                                // target="_blank"
                                // rel="noreferrer"
                                _hover={{
                                    textDecoration: "none",
                                }}
                                // _focus={{ outline: 'none' }}
                            >
                                Youtube
                            </Link>
                        </Button>
                    </Stack>
                    <Stack alignSelf={"flex-start"}>
                        <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
                            Designed And Developed By:
                        </Text>
                        <Text fontWeight={"500"} fontSize={"md"} mb={2}>
                            Varun S Athreya
                        </Text>
                        {varun.map((data, index) => (
                            <SocialMedia data={data} key={index} />
                        ))}
                        <Text fontWeight={"500"} fontSize={"md"} mb={2}>
                            Sandeep M
                        </Text>
                        {sandeep.map((data, index) => (
                            <SocialMedia data={data} key={index} />
                        ))}
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default Footer;

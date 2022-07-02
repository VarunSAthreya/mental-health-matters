import React, { useEffect, useState } from "react";
import {
    Box,
    Flex,
    Grid,
    Stack,
    Heading,
    Select,
    Text,
    Center,
    useColorModeValue,
    useBreakpointValue,
    Button,
    HStack,
    List,
    ListIcon,
    ListItem,
    VStack,
} from "@chakra-ui/react";
import SideBar from "../components/Sidebar/Sidebar";
import { FaCheckCircle } from "react-icons/fa";
import PriceCard from "../components/Card/PriceCard";
import { getUserDetails } from "../function";
import { useAuth } from "../hooks/auth";

const Dashboard = () => {
    const primaryBG = useColorModeValue("#f8f9fa", "#18191A");
    const secondaryBG = useColorModeValue("white", "#242526");
    const textHeight = useBreakpointValue({ base: "20%", md: "30%" });

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
                marginLeft={"295px"}
                width={"100%"}
                p={4}
            >
                <Stack
                    direction={{ base: "column", md: "row" }}
                    bg={secondaryBG}
                    borderRadius={8}
                >
                    <Flex
                        p={6}
                        flexDir={"column"}
                        justifyContent={"flex-start"}
                    >
                        <Heading fontSize={{ base: "3xl" }}>
                            <Text
                                as={"span"}
                                position={"relative"}
                                mr={2}
                                _after={{
                                    content: "''",
                                    width: "full",
                                    height: textHeight,
                                    position: "absolute",
                                    bottom: 0,
                                    left: 0,
                                    zIndex: -1,
                                }}
                            >
                                WELCOME
                            </Text>
                            <Text
                                as={"span"}
                                bgGradient="linear(310deg, #2980B9 0%, #6DD5FA 100%)"
                                bgClip="text"
                                fontSize="4xl"
                                fontWeight="extrabold"
                                textTransform={"uppercase"}
                            >
                                {userDetails.firstname} {userDetails.lastname}
                            </Text>{" "}
                        </Heading>
                        <Text
                            fontSize={{ base: "md", lg: "lg" }}
                            color={"gray.500"}
                            mt={3}
                        >
                            Here You get all the details about the doctor&apos;
                            Schedule,Meeting schedule and all the payment plans
                            and other important details.
                        </Text>
                    </Flex>
                </Stack>
                {/* <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing={12} mb={4}>
          <StatsCard title={"No.of Students"} count={5} icon={BsPeople} />
          <StatsCard title={"No.of Companies"} count={5} icon={BsBuilding} />

          <StatsCard
            title={"No.of Applications"}
            count={5}
            icon={BsFillPersonLinesFill}
          />
          <StatsCard
            title={"No.of Offers Given"}
            count={5}
            icon={BsPersonPlus}
          />
        </SimpleGrid> */}
                <Grid templateColumns={{ sm: "1fr" }} gap="22px" mt={8}>
                    <Box
                        p="16px"
                        my={{ sm: "24px", xl: "0px" }}
                        bg={secondaryBG}
                        borderRadius={8}
                    >
                        <Box p="12px 5px" mb="12px">
                            <Text
                                bgGradient="linear(310deg, #2980B9 0%, #6DD5FA 100%)"
                                bgClip="text"
                                fontSize="2xl"
                                fontWeight="extrabold"
                                textTransform={"uppercase"}
                            >
                                Schedule an Appointment
                            </Text>
                        </Box>
                        <Box display={"flex"} justifyContent="center" px="5px">
                            <Select
                                placeholder="Select time"
                                variant="filled"
                                mr={2}
                            >
                                <option value="option1">10 - 11</option>
                                <option value="option2">11 - 12</option>
                                <option value="option3">1 - 2</option>
                                <option value="option4">2 - 3</option>
                                <option value="option5">6 - 7</option>
                                <option value="option6">7 - 8</option>
                                <option value="option7">8 - 9</option>
                            </Select>
                        </Box>
                        <Box
                            display={"flex"}
                            justifyContent="center"
                            px="5px"
                            my={4}
                        >
                            <Button>SET APPOINTMENT</Button>
                        </Box>
                    </Box>
                    <Box
                        p="16px"
                        my={{ sm: "24px", xl: "0px" }}
                        bg={secondaryBG}
                        borderRadius={8}
                    >
                        <Box p="12px 5px" mb="12px">
                            <Text
                                bgGradient="linear(310deg, #2980B9 0%, #6DD5FA 100%)"
                                bgClip="text"
                                fontSize="2xl"
                                fontWeight="extrabold"
                                textTransform={"uppercase"}
                            >
                                Take a Quiz
                            </Text>
                            <Text
                                fontSize={{ base: "md", lg: "lg" }}
                                color={"gray.500"}
                                mt={3}
                            >
                                This Quiz is conducted in order to understand
                                your metal health status. So we can treat you
                                better!
                            </Text>
                        </Box>
                        <Box display={"flex"} justifyContent="center" px="5px">
                            <Button>CLICK HERE</Button>
                        </Box>
                    </Box>
                    <Box
                        p="16px"
                        my={{ sm: "24px", xl: "0px" }}
                        bg={secondaryBG}
                        borderRadius={8}
                    >
                        <Box p="12px 5px" my="12px">
                            <Text
                                bgGradient="linear(310deg, #2980B9 0%, #6DD5FA 100%)"
                                bgClip="text"
                                fontSize="2xl"
                                fontWeight="extrabold"
                                textTransform={"uppercase"}
                            >
                                Payment Plans Offered
                            </Text>
                            <Text
                                fontSize={{ base: "md", lg: "lg" }}
                                color={"gray.500"}
                                mt={3}
                            >
                                Start with 14-day free trial. No credit card
                                needed. Cancel at anytime.
                            </Text>
                        </Box>
                        <Box px="5px">
                            <Flex direction="column">
                                <Center>
                                    <Box pb={12}>
                                        <Stack
                                            direction={{
                                                base: "column",
                                                md: "row",
                                            }}
                                            textAlign="center"
                                            justify="center"
                                            spacing={{ base: 4, lg: 10 }}
                                            py={10}
                                        >
                                            <PriceCard>
                                                <Box py={4} px={12}>
                                                    <Text
                                                        fontWeight="500"
                                                        fontSize="2xl"
                                                    >
                                                        Individual Therapy
                                                    </Text>
                                                    <HStack justifyContent="center">
                                                        <Text
                                                            fontSize="3xl"
                                                            fontWeight="600"
                                                        >
                                                            $
                                                        </Text>
                                                        <Text
                                                            fontSize="5xl"
                                                            fontWeight="900"
                                                        >
                                                            79
                                                        </Text>
                                                        <Text
                                                            fontSize="3xl"
                                                            color="gray.500"
                                                        >
                                                            /month
                                                        </Text>
                                                    </HStack>
                                                </Box>
                                                <VStack
                                                    bg={useColorModeValue(
                                                        "gray.50",
                                                        "gray.700"
                                                    )}
                                                    py={4}
                                                    borderBottomRadius={"xl"}
                                                >
                                                    <List
                                                        spacing={3}
                                                        textAlign="start"
                                                        px={12}
                                                    >
                                                        <ListItem>
                                                            <ListIcon
                                                                as={
                                                                    FaCheckCircle
                                                                }
                                                                color="cyan.500"
                                                            />
                                                            Anxiety Therapy
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListIcon
                                                                as={
                                                                    FaCheckCircle
                                                                }
                                                                color="cyan.500"
                                                            />
                                                            Depression Therapy
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListIcon
                                                                as={
                                                                    FaCheckCircle
                                                                }
                                                                color="cyan.500"
                                                            />
                                                            Personal Coaching
                                                        </ListItem>
                                                    </List>
                                                    <Box w="80%" pt={7}>
                                                        <Button
                                                            w="full"
                                                            colorScheme="cyan"
                                                            variant="outline"
                                                        >
                                                            Start trial
                                                        </Button>
                                                    </Box>
                                                </VStack>
                                            </PriceCard>

                                            <PriceCard>
                                                <Box position="relative">
                                                    <Box
                                                        position="absolute"
                                                        top="-16px"
                                                        left="50%"
                                                        style={{
                                                            transform:
                                                                "translate(-50%)",
                                                        }}
                                                    >
                                                        <Text
                                                            textTransform="uppercase"
                                                            bg={"#2980B9"}
                                                            px={3}
                                                            py={1}
                                                            color={"white"}
                                                            fontSize="sm"
                                                            fontWeight="600"
                                                            rounded="xl"
                                                        >
                                                            Most Popular
                                                        </Text>
                                                    </Box>
                                                    <Box py={4} px={12}>
                                                        <Text
                                                            fontWeight="500"
                                                            fontSize="2xl"
                                                        >
                                                            Marriage Therapy
                                                        </Text>
                                                        <HStack justifyContent="center">
                                                            <Text
                                                                fontSize="3xl"
                                                                fontWeight="600"
                                                            >
                                                                $
                                                            </Text>
                                                            <Text
                                                                fontSize="5xl"
                                                                fontWeight="900"
                                                            >
                                                                149
                                                            </Text>
                                                            <Text
                                                                fontSize="3xl"
                                                                color="gray.500"
                                                            >
                                                                /month
                                                            </Text>
                                                        </HStack>
                                                    </Box>
                                                    <VStack
                                                        bg={useColorModeValue(
                                                            "gray.50",
                                                            "gray.700"
                                                        )}
                                                        py={4}
                                                        borderBottomRadius={
                                                            "xl"
                                                        }
                                                    >
                                                        <List
                                                            spacing={3}
                                                            textAlign="start"
                                                            px={12}
                                                        >
                                                            <ListItem>
                                                                <ListIcon
                                                                    as={
                                                                        FaCheckCircle
                                                                    }
                                                                    color="cyan.500"
                                                                />
                                                                Anxiety Therapy
                                                            </ListItem>
                                                            <ListItem>
                                                                <ListIcon
                                                                    as={
                                                                        FaCheckCircle
                                                                    }
                                                                    color="cyan.500"
                                                                />
                                                                Lorem, ipsum
                                                                dolor.
                                                            </ListItem>
                                                            <ListItem>
                                                                <ListIcon
                                                                    as={
                                                                        FaCheckCircle
                                                                    }
                                                                    color="cyan.500"
                                                                />
                                                                Family Therapy
                                                            </ListItem>
                                                            <ListItem>
                                                                <ListIcon
                                                                    as={
                                                                        FaCheckCircle
                                                                    }
                                                                    color="cyan.500"
                                                                />
                                                                Personal
                                                                Coaching
                                                            </ListItem>
                                                            <ListItem>
                                                                <ListIcon
                                                                    as={
                                                                        FaCheckCircle
                                                                    }
                                                                    color="cyan.500"
                                                                />
                                                                Psychotherapy
                                                            </ListItem>
                                                        </List>
                                                        <Box w="80%" pt={7}>
                                                            <Button
                                                                w="full"
                                                                colorScheme="cyan"
                                                            >
                                                                Start trial
                                                            </Button>
                                                        </Box>
                                                    </VStack>
                                                </Box>
                                            </PriceCard>
                                            <PriceCard>
                                                <Box py={4} px={12}>
                                                    <Text
                                                        fontWeight="500"
                                                        fontSize="2xl"
                                                    >
                                                        Children Therapy
                                                    </Text>
                                                    <HStack justifyContent="center">
                                                        <Text
                                                            fontSize="3xl"
                                                            fontWeight="600"
                                                        >
                                                            $
                                                        </Text>
                                                        <Text
                                                            fontSize="5xl"
                                                            fontWeight="900"
                                                        >
                                                            249
                                                        </Text>
                                                        <Text
                                                            fontSize="3xl"
                                                            color="gray.500"
                                                        >
                                                            /month
                                                        </Text>
                                                    </HStack>
                                                </Box>
                                                <VStack
                                                    bg={useColorModeValue(
                                                        "gray.50",
                                                        "gray.700"
                                                    )}
                                                    py={4}
                                                    borderBottomRadius={"xl"}
                                                >
                                                    <List
                                                        spacing={3}
                                                        textAlign="start"
                                                        px={12}
                                                    >
                                                        <ListItem>
                                                            <ListIcon
                                                                as={
                                                                    FaCheckCircle
                                                                }
                                                                color="cyan.500"
                                                            />
                                                            Child Therapy
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListIcon
                                                                as={
                                                                    FaCheckCircle
                                                                }
                                                                color="cyan.500"
                                                            />
                                                            Family Therapy
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListIcon
                                                                as={
                                                                    FaCheckCircle
                                                                }
                                                                color="cyan.500"
                                                            />
                                                            Psychotherapy
                                                        </ListItem>
                                                    </List>
                                                    <Box w="80%" pt={7}>
                                                        <Button
                                                            w="full"
                                                            colorScheme="cyan"
                                                            variant="outline"
                                                        >
                                                            Start trial
                                                        </Button>
                                                    </Box>
                                                </VStack>
                                            </PriceCard>
                                        </Stack>
                                    </Box>
                                </Center>
                            </Flex>
                        </Box>
                    </Box>
                </Grid>
            </Flex>
        </Flex>
    );
};

export default Dashboard;

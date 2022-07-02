import React from "react";
import {
    Box,
    Flex,
    Grid,
    SimpleGrid,
    Stack,
    Heading,
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
import {
    BsBuilding,
    BsFillPersonLinesFill,
    BsPeople,
    BsPersonPlus,
} from "react-icons/bs";
import SideBar from "../components/Sidebar/Sidebar";
import StatsCard from "../components/Card/StatsCard";
import { FaCheckCircle } from "react-icons/fa";
import PriceCard from "../components/Card/PriceCard";

const Dashboard = () => {
    const primaryBG = useColorModeValue("#f8f9fa", "#18191A");
    const secondaryBG = useColorModeValue("white", "#242526");
    const textHeight = useBreakpointValue({ base: "20%", md: "30%" });

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
                                WELCOME TO
                            </Text>
                            <br />{" "}
                            <Text
                                as={"span"}
                                bgGradient="linear(to-l, #7928CA, #FF0080)"
                                bgClip="text"
                                fontSize="4xl"
                                fontWeight="extrabold"
                                textTransform={"uppercase"}
                            >
                                Placement Portal
                            </Text>{" "}
                        </Heading>
                        <Text
                            fontSize={{ base: "md", lg: "lg" }}
                            color={"gray.500"}
                            mt={3}
                        >
                            Here You get all the details about the upcoming
                            company&apos;s visting our college and all there
                            package details.
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
                <Grid
                    templateColumns={{ sm: "1fr", xl: "repeat(2, 1fr)" }}
                    gap="22px"
                    mt={8}
                >
                    <Box
                        p="16px"
                        my={{ sm: "24px", xl: "0px" }}
                        bg={secondaryBG}
                        borderRadius={8}
                    >
                        <Box p="12px 5px" mb="12px">
                            <Text
                                bgGradient="linear(to-l, #7928CA, #FF0080)"
                                bgClip="text"
                                fontSize="2xl"
                                fontWeight="extrabold"
                                textTransform={"uppercase"}
                            >
                                Upcoming Company&apos;s
                            </Text>
                        </Box>
                        <Box px="5px">
                            <Center>
                                <Text fontSize="xl" mt={"4"}>
                                    No Upcoming Companies
                                </Text>
                            </Center>
                        </Box>
                    </Box>
                    {/*Applied & Placed*/}
                    <Box
                        p="16px"
                        my={{ sm: "24px", xl: "0px" }}
                        bg={secondaryBG}
                        borderRadius={8}
                    >
                        <Box p="12px 5px" mb="12px">
                            <Text
                                bgGradient="linear(to-l, #7928CA, #FF0080)"
                                bgClip="text"
                                fontSize="2xl"
                                fontWeight="extrabold"
                                textTransform={"uppercase"}
                            >
                                Company&apos;s Applied
                            </Text>
                        </Box>
                        <Box px="5px">
                            <Flex direction="column">
                                <Center>
                                    <Text fontSize="xl" mt={"4"}>
                                        Not Applied to any Company
                                    </Text>
                                </Center>
                            </Flex>
                        </Box>
                        <Box p="12px 5px" my="12px">
                            <Text
                                bgGradient="linear(to-l, #7928CA, #FF0080)"
                                bgClip="text"
                                fontSize="2xl"
                                fontWeight="extrabold"
                                textTransform={"uppercase"}
                            >
                                Company Placed
                            </Text>
                        </Box>
                        <Box px="5px">
                            <Flex direction="column">
                                <Center>
                                    <Box py={12}>
                                        <VStack spacing={2} textAlign="center">
                                            <Heading as="h1" fontSize="4xl">
                                                Plans that fit your need
                                            </Heading>
                                            <Text
                                                fontSize="lg"
                                                color={"gray.500"}
                                            >
                                                Start with 14-day free trial. No
                                                credit card needed. Cancel at
                                                anytime.
                                            </Text>
                                        </VStack>
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
                                                                color="purple.500"
                                                            />
                                                            Anxiety Therapy
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListIcon
                                                                as={
                                                                    FaCheckCircle
                                                                }
                                                                color="purple.500"
                                                            />
                                                            Depression Therapy
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListIcon
                                                                as={
                                                                    FaCheckCircle
                                                                }
                                                                color="purple.500"
                                                            />
                                                            Personal Coaching
                                                        </ListItem>
                                                    </List>
                                                    <Box w="80%" pt={7}>
                                                        <Button
                                                            w="full"
                                                            colorScheme="purple"
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
                                                            bg={"#521262"}
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
                                                                    color="purple.500"
                                                                />
                                                                Anxiety Therapy
                                                            </ListItem>
                                                            <ListItem>
                                                                <ListIcon
                                                                    as={
                                                                        FaCheckCircle
                                                                    }
                                                                    color="purple.500"
                                                                />
                                                                Lorem, ipsum
                                                                dolor.
                                                            </ListItem>
                                                            <ListItem>
                                                                <ListIcon
                                                                    as={
                                                                        FaCheckCircle
                                                                    }
                                                                    color="purple.500"
                                                                />
                                                                Family Therapy
                                                            </ListItem>
                                                            <ListItem>
                                                                <ListIcon
                                                                    as={
                                                                        FaCheckCircle
                                                                    }
                                                                    color="purple.500"
                                                                />
                                                                Personal
                                                                Coaching
                                                            </ListItem>
                                                            <ListItem>
                                                                <ListIcon
                                                                    as={
                                                                        FaCheckCircle
                                                                    }
                                                                    color="purple.500"
                                                                />
                                                                Psychotherapy
                                                            </ListItem>
                                                        </List>
                                                        <Box w="80%" pt={7}>
                                                            <Button
                                                                w="full"
                                                                colorScheme="purple"
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
                                                                color="purple.500"
                                                            />
                                                            Child Therapy
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListIcon
                                                                as={
                                                                    FaCheckCircle
                                                                }
                                                                color="purple.500"
                                                            />
                                                            Family Therapy
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListIcon
                                                                as={
                                                                    FaCheckCircle
                                                                }
                                                                color="purple.500"
                                                            />
                                                            Psychotherapy
                                                        </ListItem>
                                                    </List>
                                                    <Box w="80%" pt={7}>
                                                        <Button
                                                            w="full"
                                                            colorScheme="purple"
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

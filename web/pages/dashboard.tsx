import React, { useEffect, useState } from "react";
import {
    Box,
    Flex,
    Grid,
    Stack,
    Heading,
    Text,
    useColorModeValue,
    useBreakpointValue,
    Button,
} from "@chakra-ui/react";
import SideBar from "../components/Sidebar/Sidebar";
import { getUserDetails, isPaymentDone, getSurvey } from "../function";
import { useAuth } from "../hooks/auth";
import { Loader } from "../components/Loader";
import TotalPricing from "../components/Card/TotalPricing";
import ScheduleAppointment from "../components/ScheduleAppointment";
import { useRouter } from "next/router";
import { ISurvey } from "../@types";

const Dashboard = () => {
    const primaryBG = useColorModeValue("#f8f9fa", "#18191A");
    const secondaryBG = useColorModeValue("white", "#242526");
    const textHeight = useBreakpointValue({ base: "20%", md: "30%" });
    const [isLoading, setIsLoading] = useState(false);
    const [paymentDone, setPaymentDone] = useState(false);

    const { user } = useAuth();
    const router = useRouter();

    const [userDetails, setUserDetails] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        age: 0,
        id: "",
    });
    const [survey, setSurvey] = useState<
        {
            createdAt: string;
            userId: string;
            survey: any[];
        }[]
    >([]);

    useEffect(() => {
        getData();
    }, [user.uid]);

    const getData = async () => {
        try {
            setIsLoading(true);
            getUserDetails(user.uid).then((res) => {
                return setUserDetails(res as any);
            });

            isPaymentDone(user.uid).then((res) => {
                return setPaymentDone(res as any);
            });

            getSurvey(user.uid).then((res) => {
                return setSurvey(res as any);
            });
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return <Loader />;
    }

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
                    {paymentDone && <ScheduleAppointment />}
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
                                Take a Survey
                            </Text>
                            <Text
                                fontSize={{ base: "md", lg: "lg" }}
                                color={"gray.500"}
                                mt={3}
                            >
                                This Survey is conducted in order to understand
                                your metal health status. So we can treat you
                                better!
                            </Text>
                        </Box>
                        <Box display={"flex"} justifyContent="center" px="5px">
                            <Box>
                                {survey.map((item) => (
                                    <Text key={item.createdAt}>
                                        {item.createdAt}
                                    </Text>
                                ))}
                            </Box>
                            <Button onClick={() => router.push("/survey")}>
                                CLICK HERE
                            </Button>
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
                        {paymentDone ? (
                            <Text
                                fontSize={{ base: "md", lg: "lg" }}
                                color={"gray.500"}
                                mt={3}
                            >
                                Payment Done
                            </Text>
                        ) : (
                            <TotalPricing />
                        )}
                    </Box>
                </Grid>
            </Flex>
        </Flex>
    );
};

export default Dashboard;

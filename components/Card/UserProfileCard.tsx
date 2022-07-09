import {
    Avatar,
    Box,
    Flex,
    Grid,
    GridItem,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { IAppointment } from "../../@types";
import { getAppointments } from "../../function";

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
    const [appointments, setAppointments] = useState<IAppointment[]>([]);

    useEffect(() => {
        getAppointments(User.id).then((res) => {
            setAppointments(res as any);
        });
    }, [User.id]);

    return (
        <Grid
            templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
            gap="22px"
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
                        color={"white"}
                        fontSize="2rem !important"
                        bg={"linear-gradient(310deg,#FF4331,#D31A50)"}
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
            <GridItem colSpan={{ base: 1, md: 3 }}>
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    p={8}
                    borderRadius={8}
                    bg={useColorModeValue("white", "#242526")}
                >
                    <Box p="12px 5px" mb="12px">
                        <Text
                            bgGradient="linear-gradient(310deg,#FF4331,#D31A50)"
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
            <GridItem colSpan={{ base: 1, md: 4 }} rowSpan={1}>
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
                            bgGradient="linear-gradient(310deg,#FF4331,#D31A50)"
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
            <GridItem colSpan={{ base: 1, md: 4 }}>
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
                            bgGradient="linear-gradient(310deg,#FF4331,#D31A50)"
                            bgClip="text"
                            fontSize="2xl"
                            fontWeight="extrabold"
                            textTransform={"uppercase"}
                        >
                            Appointments
                        </Text>
                        <Text
                            fontSize={{ base: "md", lg: "lg" }}
                            color={"gray.500"}
                            mt={3}
                        >
                            List of Scheduled Appointments
                        </Text>
                        {appointments.map((appointment) => (
                            <Flex
                                key={appointment.createdAt}
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
                                    Date: {appointment.date}
                                </Text>
                                <Text
                                    fontSize="md"
                                    color="black"
                                    fontWeight={"semibold"}
                                >
                                    Time: {appointment.time}
                                </Text>
                            </Flex>
                        ))}
                    </Box>
                </Box>
            </GridItem>
        </Grid>
    );
};

export default UserProfileCard;

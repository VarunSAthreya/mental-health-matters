import {
    Box,
    Button,
    Center,
    Flex,
    HStack,
    List,
    ListIcon,
    ListItem,
    Stack,
    Text,
    useColorModeValue,
    VStack,
} from "@chakra-ui/react";
import { addDoc, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useAuth } from "../../hooks/auth";
import { db } from "../../lib/firebase";
import { loadScript, showRazorpay } from "../../lib/payment";
import { Loader } from "../Loader";
import PriceCard from "./PriceCard";

const TotalPricing = () => {
    const { user } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const color = useColorModeValue("red.50", "#78393978");

    useEffect(() => {
        loadScript();
    }, []);

    if (isLoading) return <Loader />;

    const handleBuy = async ({
        price,
        type,
    }: {
        price: number;
        type: string;
    }) => {
        console.log({ price });
        try {
            setIsLoading(true);

            const onFinish = async (paymentId: string) => {
                console.log({ paymentId });
                await addDoc(collection(db, "payments"), {
                    userId: user.uid,
                    paymentId: paymentId,
                    amount: price,
                    createdAt: new Date().toISOString(),
                    type: type,
                });
            };

            await showRazorpay({ amount: price, window, onFinish });
        } catch (error) {
            console.log({ error });
        } finally {
            setIsLoading(false);
        }
    };

    return (
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
                                    <Text fontWeight="500" fontSize="2xl">
                                        Individual Therapy
                                    </Text>
                                    <HStack justifyContent="center">
                                        <Text fontSize="3xl" fontWeight="600">
                                            ₹
                                        </Text>
                                        <Text fontSize="5xl" fontWeight="900">
                                            79
                                        </Text>
                                        <Text fontSize="3xl" color="gray.500">
                                            /month
                                        </Text>
                                    </HStack>
                                </Box>
                                <VStack
                                    bg={color}
                                    py={4}
                                    borderBottomRadius={"xl"}
                                >
                                    <List spacing={3} textAlign="start" px={12}>
                                        <ListItem>
                                            <ListIcon
                                                as={FaCheckCircle}
                                                color="red.500"
                                            />
                                            Anxiety Therapy
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon
                                                as={FaCheckCircle}
                                                color="red.500"
                                            />
                                            Depression Therapy
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon
                                                as={FaCheckCircle}
                                                color="red.500"
                                            />
                                            Personal Coaching
                                        </ListItem>
                                    </List>
                                    <Box w="80%" pt={7}>
                                        <Button
                                            w="full"
                                            colorScheme="red"
                                            variant="outline"
                                            onClick={() =>
                                                handleBuy({
                                                    price: 79,
                                                    type: "Individual Therapy",
                                                })
                                            }
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
                                            transform: "translate(-50%)",
                                        }}
                                    >
                                        <Text
                                            textTransform="uppercase"
                                            bg={"#FF4331"}
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
                                        <Text fontWeight="500" fontSize="2xl">
                                            Marriage Therapy
                                        </Text>
                                        <HStack justifyContent="center">
                                            <Text
                                                fontSize="3xl"
                                                fontWeight="600"
                                            >
                                                ₹
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
                                        bg={color}
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
                                                    as={FaCheckCircle}
                                                    color="red.500"
                                                />
                                                Anxiety Therapy
                                            </ListItem>
                                            <ListItem>
                                                <ListIcon
                                                    as={FaCheckCircle}
                                                    color="red.500"
                                                />
                                                Lorem, ipsum dolor.
                                            </ListItem>
                                            <ListItem>
                                                <ListIcon
                                                    as={FaCheckCircle}
                                                    color="red.500"
                                                />
                                                Family Therapy
                                            </ListItem>
                                            <ListItem>
                                                <ListIcon
                                                    as={FaCheckCircle}
                                                    color="red.500"
                                                />
                                                Personal Coaching
                                            </ListItem>
                                            <ListItem>
                                                <ListIcon
                                                    as={FaCheckCircle}
                                                    color="red.500"
                                                />
                                                Psychotherapy
                                            </ListItem>
                                        </List>
                                        <Box w="80%" pt={7}>
                                            <Button
                                                w="full"
                                                colorScheme="red"
                                                onClick={() =>
                                                    handleBuy({
                                                        price: 149,
                                                        type: "Marriage Therapy",
                                                    })
                                                }
                                            >
                                                Start trial
                                            </Button>
                                        </Box>
                                    </VStack>
                                </Box>
                            </PriceCard>
                            <PriceCard>
                                <Box py={4} px={12}>
                                    <Text fontWeight="500" fontSize="2xl">
                                        Children Therapy
                                    </Text>
                                    <HStack justifyContent="center">
                                        <Text fontSize="3xl" fontWeight="600">
                                            ₹
                                        </Text>
                                        <Text fontSize="5xl" fontWeight="900">
                                            249
                                        </Text>
                                        <Text fontSize="3xl" color="gray.500">
                                            /month
                                        </Text>
                                    </HStack>
                                </Box>
                                <VStack
                                    bg={color}
                                    py={4}
                                    borderBottomRadius={"xl"}
                                >
                                    <List spacing={3} textAlign="start" px={12}>
                                        <ListItem>
                                            <ListIcon
                                                as={FaCheckCircle}
                                                color="red.500"
                                            />
                                            Child Therapy
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon
                                                as={FaCheckCircle}
                                                color="red.500"
                                            />
                                            Family Therapy
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon
                                                as={FaCheckCircle}
                                                color="red.500"
                                            />
                                            Psychotherapy
                                        </ListItem>
                                    </List>
                                    <Box w="80%" pt={7}>
                                        <Button
                                            w="full"
                                            colorScheme="red"
                                            variant="outline"
                                            onClick={() =>
                                                handleBuy({
                                                    price: 249,
                                                    type: "Children Therapy",
                                                })
                                            }
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
    );
};

export default TotalPricing;

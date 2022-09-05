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
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import type { RazorpayResponseType } from '../../server/schema/user.schema';
import { loadScript, showRazorpay } from '../../utils/payment';
import { trpc } from '../../utils/trpc';
import { Loader } from '../Loader';
import PriceCard from './PriceCard';

const TotalPricing = () => {
    const [isLoading, setIsLoading] = useState(false);

    const { mutateAsync: generateOrderId } = trpc.useMutation([
        'user.generateRazorpayOrderId',
    ]);
    const { mutateAsync: verifySignature } = trpc.useMutation([
        'user.verifyRazorpayPayment',
    ]);
    const { mutateAsync: finalizePayment } = trpc.useMutation(
        ['user.finalizePayment'],
        {
            onSuccess: () => {
                const utils = trpc.useContext();
                utils.invalidateQueries(['user.allDetails']);
                console.log('Payment done');
            },
        }
    );

    const color = useColorModeValue('red.50', '#78393978');

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

            const paymentData = await generateOrderId({
                amount: price,
            });

            let isPaymentDone = false;
            let paymentId = '';
            let orderId = '';

            const onFinish = async (paymentDetails: RazorpayResponseType) => {
                console.log({ paymentDetails });
                const { verified } = await verifySignature(paymentDetails);
                isPaymentDone = verified;
                paymentId = paymentDetails.razorpay_payment_id;
                orderId = paymentDetails.razorpay_order_id;
            };

            if (isPaymentDone && paymentId && orderId) {
                console.log('payment verified');
                finalizePayment({
                    paymentId: paymentId,
                    orderId: orderId,
                    amount: price,
                    type,
                    currency: paymentData.currency,
                });
            }
            await showRazorpay({ paymentData, window, onFinish });
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
                                base: 'column',
                                md: 'row',
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
                                    borderBottomRadius={'xl'}
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
                                                    type: 'Individual Therapy',
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
                                            transform: 'translate(-50%)',
                                        }}
                                    >
                                        <Text
                                            textTransform="uppercase"
                                            bg={'#FF4331'}
                                            px={3}
                                            py={1}
                                            color={'white'}
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
                                        borderBottomRadius={'xl'}
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
                                                        type: 'Marriage Therapy',
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
                                    borderBottomRadius={'xl'}
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
                                                    type: 'Children Therapy',
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

import {
    Box,
    Button,
    Flex,
    Grid,
    Heading,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
} from '@chakra-ui/react';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import TotalPricing from '../components/Card/TotalPricing';
import { Loader } from '../components/Loader';
import ScheduleAppointment from '../components/ScheduleAppointment';
import SideBar from '../components/Sidebar/Sidebar';
import { trpc } from '../utils/trpc';

const Dashboard = () => {
    const primaryBG = useColorModeValue('#f8f9fa', '#18191A');
    const secondaryBG = useColorModeValue('white', '#242526');
    const textHeight = useBreakpointValue({ base: '20%', md: '30%' });

    const router = useRouter();

    const {
        data: userData,
        isLoading,
        error,
        isError,
    } = trpc.useQuery(['user.allDetails']);

    if (error || isError) {
        return <div>{error.message}</div>;
    }
    if (isLoading) {
        return <Loader />;
    }

    const isPaymentDone = (): boolean => {
        if (
            userData == null ||
            userData == undefined ||
            userData.payments.length == 0
        ) {
            return false;
        }

        const latest = userData.payments[0];
        if (!latest) return false;

        const exp = new Date(
            latest.createdAt.setMonth(latest.createdAt.getMonth() + 1)
        );

        if (exp < new Date()) return false;

        return true;
    };

    return (
        <Flex flexDirection={{ base: 'column', lg: 'row' }} bg={primaryBG}>
            <SideBar />
            <Flex
                flexDirection="column"
                pt={{ base: '120px', md: '25px' }}
                marginLeft={{ base: 0, lg: '295px' }}
                width={'100%'}
                p={4}
            >
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    bg={secondaryBG}
                    borderRadius={8}
                >
                    <Flex
                        p={6}
                        flexDir={'column'}
                        justifyContent={'flex-start'}
                    >
                        <Heading fontSize={{ base: '3xl' }}>
                            <Text
                                as={'span'}
                                position={'relative'}
                                mr={2}
                                _after={{
                                    content: "''",
                                    width: 'full',
                                    height: textHeight,
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    zIndex: -1,
                                }}
                            >
                                WELCOME
                            </Text>
                            <Text
                                as={'span'}
                                bgGradient="linear(310deg,#FF4331,#D31A50)"
                                bgClip="text"
                                fontSize="4xl"
                                fontWeight="extrabold"
                                textTransform={'uppercase'}
                            >
                                {userData?.name}
                            </Text>{' '}
                        </Heading>
                        <Text
                            fontSize={{ base: 'md', lg: 'lg' }}
                            color={'gray.500'}
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
                <Grid templateColumns={{ sm: '1fr' }} gap="22px" mt={8}>
                    {isPaymentDone() && <ScheduleAppointment />}
                    <Box
                        p="16px"
                        my={{ sm: '24px', xl: '0px' }}
                        bg={secondaryBG}
                        borderRadius={8}
                    >
                        <Box p="12px 5px" mb="12px">
                            <Text
                                bgGradient="linear(310deg,#FF4331,#D31A50)"
                                bgClip="text"
                                fontSize="2xl"
                                fontWeight="extrabold"
                                textTransform={'uppercase'}
                            >
                                Take a Survey
                            </Text>
                            <Text
                                fontSize={{ base: 'md', lg: 'lg' }}
                                color={'gray.500'}
                                mt={3}
                            >
                                This Survey is conducted in order to understand
                                your metal health status. So we can treat you
                                better!
                            </Text>
                        </Box>
                        <Box display={'block'} justifyContent="center" px="5px">
                            <Box>
                                {userData?.SurveyResults &&
                                    userData?.SurveyResults.length > 0 &&
                                    userData?.SurveyResults[0] && (
                                        <Flex
                                            align="center"
                                            justifyContent="center"
                                            mb="12px"
                                            borderRadius={8}
                                            bg={'#f8f9fa'}
                                            p={3}
                                        >
                                            <Text
                                                display="block"
                                                fontSize={{
                                                    base: 'md',
                                                    lg: 'lg',
                                                }}
                                                color={'gray.500'}
                                            >
                                                Previous Survey taken at:{' '}
                                                {format(
                                                    userData?.SurveyResults[0]
                                                        .createdAt,
                                                    'dd MMMM yyyy'
                                                )}
                                            </Text>
                                        </Flex>
                                    )}
                            </Box>
                            <Box
                                display={'flex'}
                                justifyContent="center"
                                px="5px"
                            >
                                <Button
                                    display="block"
                                    onClick={() => router.push('/survey')}
                                >
                                    CLICK HERE
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        p="16px"
                        my={{ sm: '24px', xl: '0px' }}
                        bg={secondaryBG}
                        borderRadius={8}
                    >
                        <Box p="12px 5px" my="12px">
                            <Text
                                bgGradient="linear(310deg,#FF4331,#D31A50)"
                                bgClip="text"
                                fontSize="2xl"
                                fontWeight="extrabold"
                                textTransform={'uppercase'}
                            >
                                Payment Plans Offered
                            </Text>
                            <Text
                                fontSize={{ base: 'md', lg: 'lg' }}
                                color={'gray.500'}
                                mt={3}
                            >
                                Start with 14-day free trial. No credit card
                                needed. Cancel at anytime.
                            </Text>
                        </Box>
                        {isPaymentDone() ? (
                            <Text
                                fontSize={{ base: 'md', lg: 'lg' }}
                                color={'gray.500'}
                                mt={3}
                            >
                                {userData && userData.payments[0]?.updatedAt && (
                                    <Flex
                                        align="center"
                                        justifyContent="center"
                                        mb="12px"
                                        borderRadius={8}
                                        bg={'#f8f9fa'}
                                        p={3}
                                    >
                                        <Text
                                            display="block"
                                            fontSize={{
                                                base: 'md',
                                                lg: 'lg',
                                            }}
                                            color={'gray.500'}
                                        >
                                            Payment Done at:{' '}
                                            {format(
                                                userData.payments[0].updatedAt,
                                                'dd MMMM yyyy'
                                            )}
                                        </Text>
                                    </Flex>
                                )}
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

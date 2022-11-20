import {
    Avatar,
    Box,
    Button,
    Flex,
    Grid,
    Heading,
    Highlight,
    Image,
    Stack,
    Text,
    Tag,
    TagLabel,
    useBreakpointValue,
    useColorModeValue,
} from '@chakra-ui/react';
import {ArrowForwardIcon} from '@chakra-ui/icons';
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

    const formatDate = (date) => {
        const monthNames = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ];

        const day = date.getDate();
        const monthIndex = date.getMonth();
        const year = date.getFullYear();

        return day + ' ' + monthNames[monthIndex] + ' ' + year;
    };

    return (
        <Flex flexDirection={{ base: 'column', lg: 'row' }} bg={primaryBG}>
            <SideBar />
            <Flex
                flexDirection="column"
                pt={{ base: '120px', md: '25px' }}
                marginLeft={{ base: 0, lg: '100px' }}
                width={'100%'}
                p={4}
            >
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    bg={secondaryBG}
                    justifyContent={'center'}
                    borderTop={'5px solid #045DE9'}
                    borderRadius={8}
                >
                    <Flex
                        p={12}
                        flexDir={'column'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <Avatar
                            my={2}
                            size="md"
                            name={userData?.name}
                            src={userData?.image}
                        />
                        <Heading
                            fontSize={{ base: '3xl' }}
                            textAlign={'center'}
                        >
                            <Text
                                as={'span'}
                                position={'relative'}
                                fontSize="4xl"
                                mr={2}
                            >
                                WELCOME,
                            </Text>
                            <Text
                                as={'span'}
                                bgGradient="linear(310deg,#09C6F9,#045DE9)"
                                bgClip="text"
                                fontSize="4xl"
                                fontWeight="extrabold"
                                textTransform={'uppercase'}
                            >
                                {userData?.name}.
                            </Text>{' '}
                        </Heading>
                        <Text
                            fontSize={{ base: 'md', lg: 'lg' }}
                            color={'gray.500'}
                            textAlign={'center'}
                            mt={3}
                        >
                            <Highlight
                                query={[
                                    'Meeting schedule',
                                    'payment plans',
                                    'doctor Schedule',
                                ]}
                                styles={{
                                    color: '#045DE9',
                                }}
                            >
                                Here You get all the details about the doctor
                                Schedule,Meeting schedule and all the payment
                                plans and other important details.
                            </Highlight>
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
                        bg={'linear-gradient(310deg, #09C6F9, #045DE9)'}
                    >
                        <Box
                            p="12px 5px"
                            mb="12px"
                            display={'flex'}
                            justifyContent={'center'}
                        >
                            <Text
                                color={'white'}
                                fontSize="4xl"
                                fontWeight="extrabold"
                                textTransform={'uppercase'}
                            >
                                Take a Survey
                            </Text>
                        </Box>
                        <Box
                            display={'flex'}
                            flexDir={'row'}
                            justifyContent={'space-evenly'}
                        >
                            <Box>
                                <Image
                                    boxSize="350px"
                                    objectFit="cover"
                                    src={'/assets/illustrations/survey.svg'}
                                    alt={'survey-image'}
                                />
                            </Box>
                            <Box
                                display={'flex'}
                                flexDir={'column'}
                                justifyContent={'space-between'}
                                p={4}
                                bg={'white'}
                                borderRadius={8}
                                color={'black'}
                            >
                                <Box>
                                    <Text
                                        textAlign={'center'}
                                        color={'black'}
                                        fontSize={{ base: 'md', lg: '1.3rem' }}
                                        fontWeight="light"
                                        textTransform={'uppercase'}
                                    >
                                        This Survey is conducted in order to
                                        understand your metal health status.
                                    </Text>
                                    <Text
                                        textAlign={'center'}
                                        bgGradient="linear(310deg,#09C6F9,#045DE9)"
                                        bgClip="text"
                                        fontSize={{ base: 'md', lg: '1.3rem' }}
                                        fontWeight="extrabold"
                                        textTransform={'uppercase'}
                                    >
                                        So we can treat you better!
                                    </Text>
                                </Box>
                                <Box
                                    display={'flex'}
                                    justifyContent={'center'}
                                    flexDir={'column'}
                                    flexWrap={'wrap'}
                                    alignItems={'center'}
                                >
                                    {userData?.SurveyResults &&
                                    userData?.SurveyResults.length > 0
                                        ? userData?.SurveyResults.map(
                                              (survey, index) => (
                                                  <Tag
                                                      size="lg"
                                                      colorScheme="blue"
                                                      variant="solid"
                                                      borderRadius="full"
                                                      key={index}
                                                      m={1}
                                                  >
                                                      <Avatar
                                                          src={userData?.image}
                                                          size="xs"
                                                          name={userData?.name}
                                                          ml={-1}
                                                          mr={2}
                                                      />

                                                      <TagLabel>
                                                          Previous Survey taken
                                                          at:{' '}
                                                          {formatDate(
                                                              survey.createdAt
                                                          )}
                                                      </TagLabel>
                                                  </Tag>
                                              )
                                          )
                                        : null}
                                </Box>
                                <Box
                                    display={'flex'}
                                    justifyContent="center"
                                    px="5px"
                                >
                                    <Button
                                        onClick={() => router.push('/survey')}
                                        bg={"linear-gradient(310deg, #09C6F9, #045DE9)"}
                                        color={"white"}
                                        variant={"solid"}
                                        _focus={{ outline: 'none' }}
                                        _active={{ bg: 'linear-gradient(310deg, #079bc3, #0349b8)' }}
                                        _hover={{
                                            bg: 'linear-gradient(310deg, #079bc3, #0349b8)',
                                        }}
                                        rightIcon={<ArrowForwardIcon />}
                                    >
                                        CLICK HERE
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        p="16px"
                        my={{ sm: '24px', xl: '0px' }}
                        bg={secondaryBG}
                    >
                        <Box p="12px 5px" my="12px">
                            <Text
                                bgGradient="linear(310deg,#09C6F9,#045DE9)"
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

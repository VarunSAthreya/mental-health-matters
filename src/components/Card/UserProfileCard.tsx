import {
    Box,
    Flex,
    Grid,
    GridItem,
    Icon,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { FC } from 'react';
import { AiFillSchedule } from 'react-icons/ai';
import { BsFillCalendarDateFill } from 'react-icons/bs';
import { RiSurveyFill, RiTimeFill } from 'react-icons/ri';
import type { UserFullData } from '../../../types';
import { formatDate } from '../../../utils/helper';

type Props = {
    user: UserFullData;
};

const UserProfileCard: FC<Props> = ({ user }) => {
    return (
        <Grid
            templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }}
            gap="22px"
            mt={8}
        >
            <GridItem
                colSpan={{ base: 1, md: 4 }}
                rowSpan={1}
                borderRadius={8}
                borderTop={'5px solid #045DE9'}
                bg={useColorModeValue('white', '#242526')}
            >
                <Tabs isFitted variant="enclosed">
                    <TabList mb="1em">
                        <Tab>
                            <Text
                                bgGradient="linear-gradient(310deg,#09C6F9,#045DE9)"
                                bgClip="text"
                                fontSize="2xl"
                                fontWeight="extrabold"
                                textTransform={'uppercase'}
                            >
                                Survey Results
                            </Text>
                        </Tab>
                        <Tab>
                            <Text
                                bgGradient="linear-gradient(310deg,#09C6F9,#045DE9)"
                                bgClip="text"
                                fontSize="2xl"
                                fontWeight="extrabold"
                                textTransform={'uppercase'}
                            >
                                Appointments
                            </Text>
                        </Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Box>
                                {user.SurveyResults.map((survey) => (
                                    <Flex
                                        key={survey.id}
                                        flexDir={'column'}
                                        mb="12px"
                                        borderRadius={8}
                                        bg={'white'}
                                        shadow={
                                            'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px'
                                        }
                                    >
                                        <Text
                                            fontSize="2xl"
                                            p={2}
                                            bg={
                                                'linear-gradient(310deg,#09C6F9,#045DE9)'
                                            }
                                            color={'white'}
                                            borderTopRadius={8}
                                            fontWeight={'bold'}
                                            textTransform={'uppercase'}
                                        >
                                            {survey.Survey.name}
                                        </Text>
                                        <Box
                                            display={'flex'}
                                            justifyContent={'space-between'}
                                            alignItems={'center'}
                                        >
                                            <Box
                                                display={'flex'}
                                                alignItems={'center'}
                                            >
                                                <Icon
                                                    as={BsFillCalendarDateFill}
                                                    w={6}
                                                    h={6}
                                                    m={2}
                                                    color={'gray.500'}
                                                />
                                                <Text
                                                    fontSize="lg"
                                                    color={'gray.500'}
                                                    me="10px"
                                                    fontWeight={'semibold'}
                                                    textTransform={'uppercase'}
                                                >
                                                    {formatDate(
                                                        survey.createdAt
                                                    )}
                                                </Text>
                                            </Box>
                                            <Icon
                                                as={RiSurveyFill}
                                                w={12}
                                                h={12}
                                                m={2}
                                                color={'#09C6F9'}
                                            />
                                        </Box>
                                    </Flex>
                                ))}
                            </Box>
                        </TabPanel>
                        <TabPanel>
                            <Box display={'flex'} flexDirection={'column'}>
                                {user.appointments.map((appointment) => (
                                    <Flex
                                        key={appointment.id}
                                        flexDir={'column'}
                                        mb="12px"
                                        borderRadius={8}
                                        bg={'white'}
                                        shadow={
                                            'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px'
                                        }
                                    >
                                        <Text
                                            fontSize="2xl"
                                            p={2}
                                            bg={
                                                'linear-gradient(310deg,#09C6F9,#045DE9)'
                                            }
                                            color={'white'}
                                            borderTopRadius={8}
                                            fontWeight={'bold'}
                                            textTransform={'uppercase'}
                                        ></Text>
                                        <Box
                                            display={'flex'}
                                            justifyContent={'space-between'}
                                            alignItems={'center'}
                                        >
                                            <Box
                                                display={'flex'}
                                                alignItems={'center'}
                                            >
                                                <Box
                                                    display={'flex'}
                                                    alignItems={'center'}
                                                >
                                                    <Icon
                                                        as={
                                                            BsFillCalendarDateFill
                                                        }
                                                        w={6}
                                                        h={6}
                                                        m={2}
                                                        color={'gray.500'}
                                                    />
                                                    <Text
                                                        fontSize="lg"
                                                        color={'gray.500'}
                                                        me="10px"
                                                        fontWeight={'semibold'}
                                                        textTransform={
                                                            'uppercase'
                                                        }
                                                    >
                                                        {formatDate(
                                                            appointment.date
                                                        )}
                                                    </Text>
                                                </Box>
                                                <Box
                                                    display={'flex'}
                                                    alignItems={'center'}
                                                >
                                                    <Icon
                                                        as={RiTimeFill}
                                                        w={6}
                                                        h={6}
                                                        m={2}
                                                        color={'gray.500'}
                                                    />
                                                    <Text
                                                        fontSize="lg"
                                                        color={'gray.500'}
                                                        me="10px"
                                                        fontWeight={'semibold'}
                                                        textTransform={
                                                            'uppercase'
                                                        }
                                                    >
                                                        {appointment.time}
                                                    </Text>
                                                </Box>
                                            </Box>

                                            <Icon
                                                as={AiFillSchedule}
                                                w={12}
                                                h={12}
                                                m={2}
                                                color={'#09C6F9'}
                                            />
                                        </Box>
                                    </Flex>
                                ))}
                            </Box>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </GridItem>
        </Grid>
    );
};

export default UserProfileCard;

import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Icon,
    Select,
    Spinner,
    Text,
    useColorModeValue,
    useToast,
} from '@chakra-ui/react';
import type { FC } from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { BsCalendar2CheckFill } from 'react-icons/bs';
import { MdArrowDropDown } from 'react-icons/md';
import { trpc } from '../utils/trpc';

const ScheduleAppointment: FC = () => {
    const timings = [
        '10:00 AM - 11:00 AM',
        '11:00 AM - 12:00 PM',
        '12:00 PM - 1:00 PM',
        '2:00 PM - 3:00 PM',
        '3:00 PM - 4:00 PM',
        '4:00 PM - 5:00 PM',
        '5:00 PM - 6:00 PM',
        '6:00 PM - 7:00 PM',
        '7:00 PM - 8:00 PM',
    ];
    const secondaryBG = useColorModeValue('white', '#242526');
    const toast = useToast();
    const [date, setDate] = useState<Date>(new Date());
    const [time, setTime] = useState<string>('');

    const { mutate, isLoading } = trpc.useMutation('appointment.create', {
        onSuccess: () => {
            toast({
                title: 'Appointment scheduled successfully',
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
        },
        onError: (err) => {
            toast({
                title: err.message,
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        },
    });

    return (
        <Box
            p="16px"
            my={{ sm: '24px', xl: '0px' }}
            bg={secondaryBG}
            borderRadius={8}
            display={'flex'}
            flexDirection={{ base: 'column', md: 'row' }}
            border={'3px solid #045DE9'}
        >
            <Box
                p="12px 5px"
                mb="12px"
                display={'flex'}
                flexDir={'column'}
                alignItems={'center'}
                justifyContent={'center'}
                color={'#045DE9'}
            >
                <Icon as={BsCalendar2CheckFill} w={16} h={16} />
                <Text
                    bgGradient="linear(310deg,#09C6F9,#045DE9)"
                    bgClip="text"
                    fontSize="2xl"
                    fontWeight="extrabold"
                    textTransform={'uppercase'}
                    textAlign={'center'}
                    mt={2}
                >
                    Schedule an Appointment
                </Text>
                <Text
                    fontSize={{ base: 'md' }}
                    color={'gray.500'}
                    textAlign={'center'}
                    mt={3}
                >
                    Select the date and time of ur convience to set up
                    appointment with us and get consulted by the finest mental
                    health expert out there
                </Text>
                <Box display={'flex'} justifyContent="center" px="5px" my={4}>
                    <Button
                        disabled={isLoading}
                        onClick={() => mutate({ date, time })}
                        bg={'linear-gradient(310deg,#09C6F9,#045DE9)'}
                        color={'white'}
                        variant={'solid'}
                        _focus={{ outline: 'none' }}
                        _active={{
                            bg: 'linear-gradient(310deg, #079bc3, #0349b8);',
                        }}
                        _hover={{
                            bg: 'linear-gradient(310deg, #079bc3, #0349b8);',
                        }}
                        rightIcon={<ArrowForwardIcon />}
                    >
                        SET APPOINTMENT{' '}
                        {isLoading && <Spinner ml={2} color="white" />}
                    </Button>
                </Box>
            </Box>
            <Box display={'flex'} flexDir={'column'}>
                <Box display={'flex'} justifyContent="center" px="5px" my={4}>
                    <Calendar
                        value={date}
                        onChange={setDate}
                        minDate={new Date()}
                        prev2Label={null}
                        next2Label={null}
                    />
                </Box>
                <Box display={'flex'} justifyContent="center" px="5px">
                    <Select
                        placeholder="Select time"
                        variant="filled"
                        w={'90%'}
                        onChange={(e) => setTime(e.target.value)}
                        bgColor={'white'}
                        color={'black'}
                        borderRadius={8}
                        icon={<MdArrowDropDown />}
                        _hover={{
                            bgColor: 'white',
                        }}
                        _focus={{
                            bgColor: 'white',
                            border: 'none',
                        }}
                        _active={{
                            bgColor: 'white',
                        }}
                    >
                        {timings.map((time) => (
                            <option
                                key={time}
                                value={time}
                                style={{ backgroundColor: 'white' }}
                            >
                                {time}
                            </option>
                        ))}
                    </Select>
                </Box>
            </Box>
        </Box>
    );
};

export default ScheduleAppointment;

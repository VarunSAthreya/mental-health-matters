import {
    Box,
    Button,
    Input,
    Select,
    Spinner,
    Text,
    useColorModeValue,
    useToast,
} from '@chakra-ui/react';
import type { FC } from 'react';
import { useState } from 'react';
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
        >
            <Box p="12px 5px" mb="12px">
                <Text
                    bgGradient="linear(310deg,#FF4331,#D31A50)"
                    bgClip="text"
                    fontSize="2xl"
                    fontWeight="extrabold"
                    textTransform={'uppercase'}
                >
                    Schedule an Appointment
                </Text>
            </Box>
            <Box display={'flex'} justifyContent="center" px="5px" my={4}>
                <Input
                    type="date"
                    value={date.toISOString().slice(0, 10)}
                    onChange={(e) => setDate(new Date(e.target.value))}
                />
            </Box>
            <Box display={'flex'} justifyContent="center" px="5px">
                <Select
                    placeholder="Select time"
                    variant="filled"
                    mr={2}
                    onChange={(e) => setTime(e.target.value)}
                >
                    {timings.map((time) => (
                        <option key={time} value={time}>
                            {time}
                        </option>
                    ))}
                </Select>
            </Box>

            <Box display={'flex'} justifyContent="center" px="5px" my={4}>
                <Button
                    disabled={isLoading}
                    onClick={() => mutate({ date, time })}
                >
                    SET APPOINTMENT{' '}
                    {isLoading && <Spinner ml={2} color="white" />}
                </Button>
            </Box>
        </Box>
    );
};

export default ScheduleAppointment;

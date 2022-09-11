import {
    Box,
    Button,
    Flex,
    Grid,
    Heading,
    Select,
    Spinner,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
    useToast,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import type { ISurvey } from '../../@types';
import SideBar from '../components/Sidebar/Sidebar';
import { trpc } from '../utils/trpc';

const Survey = () => {
    const primaryBG = useColorModeValue('#f8f9fa', '#18191A');
    const secondaryBG = useColorModeValue('white', '#242526');
    const textHeight = useBreakpointValue({ base: '20%', md: '30%' });

    let answers: { question: string; answer: string }[] = [];

    const toast = useToast();
    const router = useRouter();

    const { data, isLoading: fetching } = trpc.useQuery([
        'survey.get',
        { name: 'General Survey' },
    ]);

    const { mutate: submitSurvey, isLoading } = trpc.useMutation(
        'survey.submit',
        {
            onSuccess: () => {
                toast({
                    title: 'Survey submitted successfully',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                });
                router.push('/dashboard');
            },
            onError: (err) => {
                toast({
                    title: 'Error submitting survey',
                    description: err.message,
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                });
            },
        }
    );

    if (fetching) return null;

    const questions: ISurvey[] = data ? JSON.parse(data.questions) : [];

    const handleSubmit = async () => {
        console.log(questions.length, ' ', answers.length);

        if (questions.length !== answers.length) {
            toast({
                title: 'Please answer all the questions!',
                status: 'warning',
                duration: 2000,
            });
            return;
        }

        submitSurvey({
            result: JSON.stringify(answers),
            name: data ? data.name : '',
        });
    };

    const onChange = (question: string, answer: string) => {
        if (answers.find((answer) => answer.question === question)) {
            answers = answers.filter((answer) => answer.question !== question);
        }
        answers.push({
            question,
            answer: answer,
        });
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
                                WELCOME TO
                            </Text>
                            <br />{' '}
                            <Text
                                as={'span'}
                                bgGradient="linear(310deg,#FF4331,#D31A50)"
                                bgClip="text"
                                fontSize="4xl"
                                fontWeight="extrabold"
                                textTransform={'uppercase'}
                            >
                                SURVEY PANEL
                            </Text>{' '}
                        </Heading>
                        <Text
                            fontSize={{ base: 'md', lg: 'lg' }}
                            color={'gray.500'}
                            mt={3}
                        >
                            This Survey is conducted in order to understand your
                            metal health status. So we can treat you better!
                        </Text>
                    </Flex>
                </Stack>
                <Grid templateColumns={{ sm: '1fr' }} gap="22px" mt={8}>
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
                                Survey
                            </Text>
                        </Box>
                        <Box px="5px" my={4} borderRadius={5}>
                            {questions.map((question) => (
                                <React.Fragment key={question.question}>
                                    <Box my={8} borderRadius={'5px'}>
                                        <Text
                                            fontSize={{ base: 'lg', md: 'xl' }}
                                            px={2}
                                            bg={'white'}
                                            color="black"
                                            borderTopRightRadius={'5px'}
                                            borderTopLeftRadius={'5px'}
                                        >
                                            {question.question}
                                        </Text>
                                        <Select
                                            borderTopLeftRadius={0}
                                            borderTopRightRadius={0}
                                            placeholder="Select an option"
                                            variant="filled"
                                            _focus={{ outline: 'none' }}
                                            mr={2}
                                            onChange={(e) =>
                                                onChange(
                                                    question.question,
                                                    e.target.value
                                                )
                                            }
                                        >
                                            {question.options.map(
                                                (option: string) => (
                                                    <option
                                                        key={option}
                                                        value={option}
                                                        style={{
                                                            backgroundColor:
                                                                'white',
                                                            color: 'black',
                                                        }}
                                                    >
                                                        {option}
                                                    </option>
                                                )
                                            )}
                                        </Select>
                                    </Box>
                                </React.Fragment>
                            ))}
                        </Box>
                        <Button disabled={isLoading} onClick={handleSubmit}>
                            Submit Answers{' '}
                            {isLoading && <Spinner ml={2} color="white" />}
                        </Button>
                    </Box>
                </Grid>
            </Flex>
        </Flex>
    );
};

export default Survey;

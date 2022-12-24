import {
    ArrowBackIcon,
    ArrowForwardIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    Flex,
    Grid,
    Heading,
    Icon,
    Radio,
    RadioGroup,
    Spinner,
    Stack,
    Text,
    useColorModeValue,
    useToast,
} from '@chakra-ui/react';
import { Step, Steps, useSteps } from 'chakra-ui-steps';
import { useRouter } from 'next/router';
import { AiOutlineFileDone } from 'react-icons/ai';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';
import type { ISurvey } from '../../types';
import { Separator } from '../components/Separator';
import SideBar from '../components/Sidebar/Sidebar';
import { trpc } from '../utils/trpc';

const Survey = () => {
    const primaryBG = useColorModeValue('#f8f9fa', '#18191A');
    const secondaryBG = useColorModeValue('white', '#242526');

    const { nextStep, prevStep, activeStep } = useSteps({
        initialStep: 0,
    });

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
                marginLeft={{ base: 0, md: '100px' }}
                width={'100%'}
                p={4}
            >
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    bg={secondaryBG}
                    borderTop={'5px solid #045DE9'}
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
                                bgGradient="linear(310deg,#09C6F9,#045DE9)"
                                bgClip="text"
                                fontSize="4xl"
                                fontWeight="extrabold"
                                textTransform={'uppercase'}
                            >
                                {data?.name}
                            </Text>{' '}
                        </Heading>
                        <Breadcrumb
                            mt={3}
                            separator={<ChevronRightIcon color="gray.500" />}
                        >
                            <BreadcrumbItem>
                                <BreadcrumbLink
                                    href="/dashboard"
                                    color="gray.500"
                                    _hover={{
                                        textDecoration: 'none',
                                        color: '#09C6F9',
                                    }}
                                    _focus={{ outline: 'none' }}
                                >
                                    Dashboard
                                </BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink
                                    href="/survey"
                                    color="gray.500"
                                    _hover={{
                                        textDecoration: 'none',
                                        color: '#09C6F9',
                                    }}
                                    _focus={{ outline: 'none' }}
                                >
                                    Survey Panel
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </Flex>
                </Stack>
                <Grid templateColumns={{ sm: '1fr' }} gap="22px" mt={8}>
                    <Box
                        p="16px"
                        my={{ sm: '24px', xl: '0px' }}
                        bg={secondaryBG}
                        borderRadius={8}
                    >
                        <Flex flexDir="column" width="100%">
                            <Steps activeStep={activeStep} colorScheme="blue">
                                {questions.map((q, i) => {
                                    return (
                                        <Step key={i}>
                                            <Box
                                                display={'flex'}
                                                flexDir={'column'}
                                                my={6}
                                                mx={2}
                                                px={3}
                                                py={6}
                                                borderRadius={8}
                                            >
                                                <Heading
                                                    mb={4}
                                                    bgGradient="linear(310deg,#09C6F9,#045DE9)"
                                                    bgClip="text"
                                                    fontSize="2xl"
                                                    fontWeight="extrabold"
                                                    textTransform={'uppercase'}
                                                >
                                                    {q.question}
                                                </Heading>
                                                <Separator />
                                                <RadioGroup
                                                    defaultValue={q.options[0]}
                                                    onChange={(e) =>
                                                        onChange(q.question, e)
                                                    }
                                                >
                                                    <Stack
                                                        direction="column"
                                                        my={7}
                                                        color={'gray.500'}
                                                    >
                                                        {q.options.map(
                                                            (
                                                                option: string
                                                            ) => (
                                                                <Radio
                                                                    size="lg"
                                                                    name="1"
                                                                    key={option}
                                                                    value={
                                                                        option
                                                                    }
                                                                >
                                                                    {option}
                                                                </Radio>
                                                            )
                                                        )}
                                                    </Stack>
                                                </RadioGroup>
                                            </Box>
                                        </Step>
                                    );
                                })}
                            </Steps>
                            {activeStep === questions.length ? (
                                <Flex
                                    p={4}
                                    justifyContent={'center'}
                                    my={4}
                                    flexDir={'column'}
                                    alignItems={'center'}
                                >
                                    <Box
                                        display={'flex'}
                                        flexDirection={'column'}
                                        justifyContent={'center'}
                                        alignItems={'center'}
                                        m={6}
                                    >
                                        <Icon
                                            as={AiOutlineFileDone}
                                            w={12}
                                            h={12}
                                            color={'#D31A50'}
                                        />
                                        <Heading
                                            mb={1}
                                            bgGradient="linear(310deg,#09C6F9,#045DE9)"
                                            bgClip="text"
                                            fontSize="3xl"
                                            fontWeight="extrabold"
                                            textTransform={'uppercase'}
                                        >
                                            Survey Compeleted
                                        </Heading>
                                        <Text
                                            fontSize={{ base: 'md', lg: 'lg' }}
                                            color={'gray.500'}
                                            textAlign={'center'}
                                        >
                                            Once the survey as been evaluated,
                                            You will be notified and Contacted
                                            by our Experts ! Till Then have a
                                            nice Day.
                                        </Text>
                                    </Box>
                                    <Button
                                        disabled={isLoading}
                                        onClick={handleSubmit}
                                        bg={
                                            'linear-gradient(310deg, #09C6F9, #045DE9)'
                                        }
                                        color={'white'}
                                        variant={'solid'}
                                        _focus={{ outline: 'none' }}
                                        _active={{
                                            bg: 'linear-gradient(310deg, #079bc3, #0349b8)',
                                        }}
                                        _hover={{
                                            bg: 'linear-gradient(310deg, #079bc3, #0349b8)',
                                        }}
                                        rightIcon={<IoCheckmarkDoneSharp />}
                                    >
                                        Submit Answers{' '}
                                        {isLoading && (
                                            <Spinner ml={2} color="white" />
                                        )}
                                    </Button>
                                </Flex>
                            ) : (
                                <Flex width="100%" justify="flex-end">
                                    <Button
                                        isDisabled={activeStep === 0}
                                        mr={8}
                                        onClick={prevStep}
                                        bg={
                                            'linear-gradient(310deg, #09C6F9, #045DE9)'
                                        }
                                        color={'white'}
                                        variant={'solid'}
                                        _focus={{ outline: 'none' }}
                                        _active={{
                                            bg: 'linear-gradient(310deg, #079bc3, #0349b8)',
                                        }}
                                        _hover={{
                                            bg: 'linear-gradient(310deg, #079bc3, #0349b8)',
                                        }}
                                        leftIcon={<ArrowBackIcon />}
                                    >
                                        Prev
                                    </Button>
                                    <Button
                                        onClick={nextStep}
                                        bg={
                                            'linear-gradient(310deg, #09C6F9, #045DE9)'
                                        }
                                        color={'white'}
                                        variant={'solid'}
                                        _focus={{ outline: 'none' }}
                                        _active={{
                                            bg: 'linear-gradient(310deg, #079bc3, #0349b8)',
                                        }}
                                        _hover={{
                                            bg: 'linear-gradient(310deg, #079bc3, #0349b8)',
                                        }}
                                        rightIcon={<ArrowForwardIcon />}
                                    >
                                        {activeStep === questions.length - 1
                                            ? 'Finish'
                                            : 'Next'}
                                    </Button>
                                </Flex>
                            )}
                        </Flex>
                    </Box>
                </Grid>
            </Flex>
        </Flex>
    );
};

export default Survey;

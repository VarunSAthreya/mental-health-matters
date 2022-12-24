import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Flex,
    Heading,
    Image,
    SimpleGrid,
    Stack,
    StackDivider,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { MdChildCare, MdEmojiPeople, MdFamilyRestroom } from 'react-icons/md';
import type { IFeature } from '../../types';
import Feature from '../components/UI/Feature';
import Layout from '../components/UI/Layout';

const TalkToExperts: NextPage = () => {
    const featureData1: IFeature[] = [
        {
            icon: MdEmojiPeople,
            text: 'Individual Therapy',
            iconBg: '#c6dcffe8',
            color: '#045DE9',
        },
        {
            icon: MdFamilyRestroom,
            text: 'Family Therapy',
            iconBg: '#c6dcffe8',
            color: '#045DE9',
        },
        {
            icon: MdChildCare,
            text: 'Children Therapy',
            iconBg: '#c6dcffe8',
            color: '#045DE9',
        },
    ];
    const featureData2: IFeature[] = [
        {
            icon: MdEmojiPeople,
            text: 'Individual therapy is one type of psychotherapy in which a trained professional helps a single person work through personal issues they have been facing. It is an effective treatment for a variety of emotional difficulties and mental illnesses.',
            iconBg: useColorModeValue('#045DE9', '#D31A50'),
            color: 'white',
        },
        {
            icon: MdFamilyRestroom,
            text: 'Couples therapy can address a wide range of relationship issues, including recurring conflicts, feelings of disconnection, an affair or difficulties due to external stressors.',
            iconBg: useColorModeValue('#045DE9', '#D31A50'),
            color: 'white',
        },
        {
            icon: MdChildCare,
            text: 'Child counseling is a type of therapy that focuses on young children, teens, and adolescents with one or more mental illnesses. It also provides aid to youths, who have experienced trauma, and/or who are experiencing a dysfunctional or stressful home environment.',
            iconBg: useColorModeValue('#045DE9', '#D31A50'),
            color: 'white',
        },
    ];
    return (
        <Layout title="MHM | Talk to Experts">
            <Flex
                w={'full'}
                h={{ base: '70vh', md: '80vh' }}
                backgroundImage={
                    'url(/assets/Background-Images/talkToExperts.jpg)'
                }
                backgroundSize={'cover'}
                backgroundPosition={'center center'}
            >
                <Stack
                    as={Box}
                    rounded={'lg'}
                    display={'flex'}
                    justifyContent={'center'}
                    spacing={{ base: 2 }}
                    py={{ base: 10 }}
                    pt={{ base: 20, sm: 0 }}
                    bg={'linear-gradient(310deg, #09c6f982, #045de99e)'}
                >
                    <Heading
                        p={3}
                        mb={3}
                        textAlign={'center'}
                        color={'white'}
                        fontWeight="extrabold"
                        textTransform={'uppercase'}
                        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'}
                    >
                        Talk to Experts.
                    </Heading>
                    <Text p={3} color={'#bcd9e1'} textAlign={'center'}>
                        Our mission to make quality healthcare affordable and
                        accessible for over a billion+ Indians. We believe in
                        empowering our users with the most accurate,
                        comprehensive, and curated information and care,
                        enabling them to make better healthcare decisions
                    </Text>
                </Stack>
            </Flex>
            <SimpleGrid
                columns={{ base: 1, md: 2 }}
                spacing={10}
                py={{ base: 16, md: 20 }}
                px={{ base: 12, md: 16 }}
            >
                <Stack spacing={4}>
                    <Text
                        textTransform={'uppercase'}
                        fontWeight={600}
                        fontSize={'sm'}
                        bg={'#c6dcffe8'}
                        color={'#045DE9'}
                        p={2}
                        alignSelf={'flex-start'}
                        rounded={'md'}
                    >
                        Experts
                    </Text>
                    <Heading>Therapy</Heading>
                    <Text color={'gray.500'} fontSize={'lg'}>
                        There might be a lot of issues coming up in the
                        marriage, due to each person’s character being unique
                        and having its own set of emotional triggers.
                    </Text>

                    <Text color={'gray.500'} fontSize={'lg'}>
                        While couples may be arguing, bickering, and constantly
                        fighting with each other, it all is a telling sign of a
                        bigger problem. This may include them losing their
                        communication connection, feeling alone, or going
                        through an anxiety period.
                    </Text>

                    <Text color={'gray.500'} fontSize={'lg'}>
                        One thing that couples seeking counseling typically have
                        in common is that their relationship is no longer a
                        safe, loving, and enjoyable space.
                    </Text>
                    <Stack
                        p={2}
                        spacing={4}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue(
                                    'gray.100',
                                    'gray.700'
                                )}
                            />
                        }
                    >
                        {featureData1.map((data, index) => (
                            <Feature data={data} key={index} />
                        ))}
                    </Stack>
                </Stack>
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={'feature image'}
                        src={
                            'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                        }
                        objectFit={'cover'}
                    />
                </Flex>
            </SimpleGrid>
            <Stack
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 16, md: 20 }}
                px={{ base: 10, md: 16 }}
                direction={{ base: 'column', md: 'row' }}
                bg={'linear-gradient(310deg, #09C6F9, #045DE9)'}
            >
                <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                    <Heading
                        lineHeight={1.1}
                        fontWeight={600}
                        fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
                    >
                        <Text
                            as={'span'}
                            position={'relative'}
                            color={'white'}
                            _after={{
                                content: "''",
                                width: 'full',
                                height: '2%',
                                position: 'absolute',
                                bottom: 1,
                                left: 0,
                                bg: 'white',
                            }}
                        >
                            Zoom Meeting.
                        </Text>
                    </Heading>
                    <Text color={'#bcd9e1'}>
                        Connect instantly with a 24x7 specialist or choose to
                        video visit a particular doctor. Start an instant
                        consultation within 2 minutes or do video consultation
                        at the scheduled time. Be assured that your online
                        consultation will be fully private and secured.
                    </Text>
                    <Button
                        rounded={'full'}
                        size={'lg'}
                        fontWeight={'normal'}
                        px={6}
                        bg={'white'}
                        color={'#045DE9'}
                        variant={'solid'}
                        _focus={{ outline: 'none' }}
                        _active={{
                            bg: '#dfdfdf',
                        }}
                        _hover={{
                            bg: '#dfdfdf',
                        }}
                        rightIcon={<ArrowForwardIcon />}
                    >
                        Schedule a session
                    </Button>
                </Stack>
                <Flex
                    flex={1}
                    justify={'center'}
                    align={'center'}
                    position={'relative'}
                    w={'full'}
                >
                    <Box
                        position={'relative'}
                        height={'300px'}
                        rounded={'2xl'}
                        boxShadow={'2xl'}
                        width={'full'}
                        overflow={'hidden'}
                    >
                        <Image
                            alt={'Zoom Meeting'}
                            fit={'cover'}
                            align={'center'}
                            w={'100%'}
                            h={'100%'}
                            src={
                                'https://g.foolcdn.com/image/?url=https%3A%2F%2Fg.foolcdn.com%2Feditorial%2Fimages%2F577980%2Fgettyimages-1214753465.jpg&w=700&op=resize'
                            }
                        />
                    </Box>
                </Flex>
            </Stack>
        </Layout>
    );
};

export default TalkToExperts;

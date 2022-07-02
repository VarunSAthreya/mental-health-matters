import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Image,
    SimpleGrid,
    Stack,
    Text,
    useBreakpointValue,
    VStack,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { AiFillHeart } from 'react-icons/ai';
import { FaPeopleCarry, FaRunning } from 'react-icons/fa';
import { IBasicCard, IService, ITestimonial } from '../@types';
import BasicCard from '../components/Card/BasicCard';
import ServiceCard from '../components/Card/ServiceCard';
import TestimonialCard from '../components/Card/TestimonialCard';
import Layout from '../components/UI/Layout';

const basicCardData: IBasicCard[] = [
    {
        title: 'Affects Physical Health',
        description:
            'The mind and the body are connected. Many mental ailments cause stress, which lowers the immune system. This means more frequent sickness and inability to cope.Stress and anxiety can take a toll on our physical health.',
        icon: FaRunning,
    },
    {
        title: 'Affects Everything',
        description:
            'Our mental health affects how we cope with life. Lack of treatment leads to hopelessness and sadness, worthlessness, feeling guilty, anxiety and worry, fear, and loss of control.Our relationships may suffer.',
        icon: AiFillHeart,
    },
    {
        title: 'End Stigma and Shame',
        description:
            'When it comes down to it, those who are mentally ill must need treatment. But without awareness and breaking the stigma surrounding their condition, they won’t feel comfortable reaching out to somebody for help.',
        icon: FaPeopleCarry,
    },
];

const testimonialCardData: ITestimonial[] = [
    {
        heading: 'Efficient Collaborating',
        review: 'The people providing the service and technology used is very good and have good collaboration.',
        name: 'Guy Hawkins',
        designation: 'Designer',
        imageUrl:
            'http://webdesign-finder.com/psycheco-psychology/wp-content/uploads/2021/06/img50.jpg',
    },
    {
        heading: 'Good Service',
        review: 'The service provided by the doctors is very good and they have very good knowledge.',
        name: 'Alec Buttons',
        designation: 'Software Engineer',
        imageUrl:
            'https://matar-elementor.42theme.com/wp-content/uploads/2020/05/close-up-cheerful-older-man-standing-isolated-on-w-Z7MW6Q8.jpg',
    },
    {
        heading: 'Friendly Nature',
        review: 'The Doctors are very friendly and understand the problem very quickly.',
        name: 'Kira Rhoades',
        designation: 'CEO',
        imageUrl:
            'https://matar-elementor.42theme.com/wp-content/uploads/2020/05/beautiful-young-woman-standing-outdoors-PDP7Q6B-1.jpg',
    },
];

const serviceData: IService[] = [
    {
        title: 'Individual Therapy',
        description:
            'Individual therapy is one type of psychotherapy in which a trained professional helps a single person work through personal issues they have been facing. It is an effective treatment for a variety of emotional difficulties and mental illnesses.',
        imageUrl:
            'https://matar-elementor.42theme.com/wp-content/uploads/2020/05/interested-young-woman-listening-carefully-to-psyc-4LTTAE3-scaled.jpg',
    },
    {
        title: 'Couples Therapy',
        description:
            'Couples therapy can address a wide range of relationship issues, including recurring conflicts, feelings of disconnection, an affair, stress and no harmony, understanding or difficulties due to external stressors.',
        imageUrl:
            'https://matar-elementor.42theme.com/wp-content/uploads/2020/05/happy-couple-at-successful-therapy-session-with-fa-W9KXY7U-scaled.jpg',
    },
    {
        title: 'Children Therapy',
        description:
            'Child counseling is a type of therapy that focuses on young children and adolescents with one or more mental illnesses. It also provides aid to youths, who have experienced trauma, who are experiencing a dysfunctional or stressful home environment.',
        imageUrl:
            'https://matar-elementor.42theme.com/wp-content/uploads/2020/05/sad-boy-with-teddy-bear-JVSTZXX-scaled.jpg',
    },
];

const Home: NextPage = () => {
    return (
        <Layout title="MHM">
            <Container maxW={'7xl'}>
                {/*Poster*/}
                <Flex
                    w={'full'}
                    h={'80vh'}
                    backgroundImage={
                        'url(https://www.minnpost.com/wp-content/uploads/2020/01/WomanSilhouette640.jpg?strip=all)'
                    }
                    backgroundSize={'cover'}
                    backgroundPosition={'center center'}
                >
                    <VStack
                        w={'full'}
                        justify={'center'}
                        px={useBreakpointValue({ base: 4, md: 8 })}
                        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
                    >
                        <Stack maxW={'2xl'} align={'center'} spacing={3}>
                            <Text color={'purple.400'}>
                                MENTAL HEALTH MATTERS
                            </Text>
                            <Text
                                color={'gray.200'}
                                fontWeight={400}
                                lineHeight={1.2}
                                textAlign={'center'}
                                fontSize={useBreakpointValue({
                                    base: '2xl',
                                    md: '4xl',
                                })}
                            >
                                Covid 19 has intensified and exaggerated fault
                                lines in contemporary socities revealing back to
                                us our ways of dealing with
                            </Text>
                            <Text
                                color={'purple.400'}
                                fontWeight={400}
                                lineHeight={1.2}
                                textAlign={'center'}
                                fontSize={useBreakpointValue({
                                    base: '2xl',
                                    md: '4xl',
                                })}
                            >
                                Mental Health
                            </Text>
                        </Stack>
                    </VStack>
                </Flex>
                {/*Welcome*/}
                <Stack
                    as={Box}
                    textAlign={'center'}
                    spacing={{ base: 6 }}
                    py={{ base: 20, md: 28 }}
                >
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                    >
                        Welcome!
                    </Heading>
                    <Text color={'gray.500'}>
                        The COVID-19 pandemic has likely impacted mental health
                        in many different ways. The pandemic has created an
                        environment where many determinants of mental health are
                        impacted.
                    </Text>
                    <Text color={'gray.500'}>
                        During the COVID-19 pandemic, concerns about mental
                        health and substance use have grown, including concerns
                        about suicidal ideation. In January 2021, 41% of adults
                        reported symptoms of anxiety and/or depressive disorder,
                        a share that has been largely stable since spring 2020.
                        In a survey from June 2020, 13% of adults reported new
                        or increased substance use due to coronavirus-related
                        stress, and 11% of adults reported thoughts of suicide
                        in the past 30 days. Suicide rates have long been on the
                        rise and may worsen due to the pandemic.
                    </Text>
                </Stack>
                {/*Importance*/}
                <Box
                    maxW="6xl"
                    mx={'auto'}
                    textAlign={'center'}
                    pt={5}
                    px={{ base: 2, sm: 12, md: 17 }}
                >
                    <Heading
                        textAlign={'center'}
                        fontSize={'4xl'}
                        py={10}
                        fontWeight={'bold'}
                    >
                        Why is Mental Health So Important ?
                    </Heading>
                    <Text color={'gray.500'}>
                        Mental health matters. Taking care of our mental health
                        aids in our resilience and recovery from anything that
                        happens. Anyone can have a bad day, but it doesn’t mean
                        that it’s a bad life. How we respond to it and take care
                        of our mental health are what’s important.
                    </Text>
                    <SimpleGrid
                        my={6}
                        columns={{ base: 1, md: 3 }}
                        spacing={{ base: 5, lg: 8 }}
                    >
                        {basicCardData.map((data, index) => (
                            <BasicCard data={data} key={index} />
                        ))}
                    </SimpleGrid>
                </Box>
                {/*Service*/}
                <Stack
                    as={Box}
                    textAlign={'center'}
                    spacing={{ base: 8 }}
                    py={{ base: 20, md: 28 }}
                >
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'}
                    >
                        What we can Offer
                    </Heading>
                    <Text color={'gray.500'}>
                        We Are Trained and Professional Councellsor,who
                        understand the issuse faced by our clients and discuss
                        various/topics to resolve problem.
                    </Text>
                    <SimpleGrid
                        columns={{ base: 1, md: 3 }}
                        spacing={{ base: 5, lg: 8 }}
                    >
                        {serviceData.map((data, index) => (
                            <ServiceCard data={data} key={index} />
                        ))}
                    </SimpleGrid>
                </Stack>
                {/*Schedule*/}
                <Stack
                    align={'center'}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 20, md: 28 }}
                    direction={{ base: 'column', md: 'row' }}
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
                                _after={{
                                    content: "''",
                                    width: 'full',
                                    height: '30%',
                                    position: 'absolute',
                                    bottom: 1,
                                    left: 0,
                                    bg: 'purple.700',
                                    zIndex: -1,
                                }}
                            >
                                Zoom Meeting
                            </Text>
                        </Heading>
                        <Text color={'gray.500'}>
                            Connect instantly with a 24x7 specialist or choose
                            to video visit a particular doctor. Start an instant
                            consultation within 2 minutes or do video
                            consultation at the scheduled time. Be assured that
                            your online consultation will be fully private and
                            secured.
                        </Text>
                        <Button
                            rounded={'full'}
                            size={'lg'}
                            fontWeight={'normal'}
                            px={6}
                            colorScheme={'purple'}
                            color={'white'}
                            bg={'purple.700'}
                            _hover={{ bg: 'purple.800' }}
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
                {/*Testimonial */}
                <Stack spacing={6} align={'center'} py={{ base: 20 }}>
                    <Heading>What Our Clients Say</Heading>
                    <Text color={'gray.500'}>
                        We have been working with clients around the world and
                        Here are the few things they say about us.
                    </Text>
                    <Stack
                        direction={{ base: 'column', md: 'row' }}
                        spacing={{ base: 10, md: 4, lg: 10 }}
                        my={10}
                    >
                        {testimonialCardData.map((data, index) => (
                            <TestimonialCard data={data} key={index} />
                        ))}
                    </Stack>
                </Stack>
            </Container>
        </Layout>
    );
};

export default Home;

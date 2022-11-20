import {
    Box,
    Heading,
    Hide,
    SimpleGrid,
    Stack,
    Image,
    Text,
    useBreakpointValue,
    useColorModeValue,
    useColorMode
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import { AiFillHeart } from 'react-icons/ai';
import { FaPeopleCarry, FaRunning } from 'react-icons/fa';
import type { IBasicCard, IService } from '../../@types';
import animationData from '../../public/lotte/brain.json';
import BasicCard from '../components/Card/BasicCard';
import ServiceCard from '../components/Card/ServiceCard';
import LottieView from '../components/Lotte/LotteView';
import Layout from '../components/UI/Layout';

const basicCardData: IBasicCard[] = [
    {
        title: 'Affects Physical Health',
        description:
            'The mind and the body are connected. Many mental ailments cause stress, which lowers the immune system and also Stress and anxiety can take a toll on our physical health.',
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

const serviceData: IService[] = [
    {
        title: 'Individual Therapy',
        description:
            'Individual therapy is one type of psychotherapy in which a trained professional helps a single person work through personal issues they have been facing. It is an effective treatment for a variety of emotional difficulties and mental illnesses.',
        imageUrl:
            'https://matar-elementor.42theme.com/wp-content/uploads/2020/05/interested-young-woman-listening-carefully-to-psyc-4LTTAE3-scaled.jpg',
        direction: 'row',
    },
    {
        title: 'Couples Therapy',
        description:
            'Couples therapy can address a wide range of relationship issues, including recurring conflicts, feelings of disconnection, an affair, stress and no harmony, understanding or difficulties due to external stressors.',
        imageUrl:
            'https://matar-elementor.42theme.com/wp-content/uploads/2020/05/happy-couple-at-successful-therapy-session-with-fa-W9KXY7U-scaled.jpg',
        direction: 'row-reverse',
    },
    {
        title: 'Children Therapy',
        description:
            'Child counseling is a type of therapy that focuses on young children and adolescents with one or more mental illnesses. It also provides aid to youths, who have experienced trauma, who are experiencing a dysfunctional or stressful home environment.',
        imageUrl:
            'https://matar-elementor.42theme.com/wp-content/uploads/2020/05/sad-boy-with-teddy-bear-JVSTZXX-scaled.jpg',
        direction: 'row',
    },
];

const Home: NextPage = () => {
    const {colorMode} = useColorMode();
    return (
        <Layout title="MHM">
            {/*Poster*/}
            <Box
                display={'flex'}
                w={'full'}
                h={'90vh'}
                flexDir={{ base: 'column-reverse', md: 'row' }}
                backgroundImage={'url(/assets/Background-Images/main.jpg)'}
                backgroundSize={'cover'}
                backgroundPosition={'center'}
            >
                <Stack
                    as={Box}
                    p={20}
                    display={'flex'}
                    flexDir={'column'}
                    justifyContent={'center'}
                    bg={'linear-gradient(310deg, #09c6f982, #045de99e)'}
                >
                    <Box w={'45%'} mx={4}>
                        <Text
                            color={'white'}
                            textAlign={{ base: 'center', md: 'start' }}
                            fontSize={{ base: 'xl', md: '7xl' }}
                            textTransform={'uppercase'}
                            fontWeight={600}
                            lineHeight={1.2}
                        >
                            Make your mental Health a Priority.
                        </Text>
                        <Text
                        my={4}
                            color={'#bcd9e1'}
                            lineHeight={1.2}
                            textAlign={{ base: 'center', md: 'start' }}
                            fontSize={useBreakpointValue({
                                base: 'lg',
                            })}
                        >
                            Just remember, you are not alone, in fact, you are
                            in a very commonplace with millions of others. We
                            need to help each other and keep striving to reach
                            our goals
                        </Text>
                    </Box>
                </Stack>
            </Box>
            {/*Welcome*/}
            <Stack
                as={Box}
                textAlign={'center'}
                spacing={{ base: 6 }}
                py={{ base: 20, md: 28 }}
            >
                <Heading
                    textAlign={'center'}
                    mb={4}
                    p={2}
                    fontWeight={700}
                    textTransform={'uppercase'}
                    fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                >
                    <Text
                        as={'span'}
                        position={'relative'}
                        bgGradient="linear(310deg,#09C6F9,#045DE9)"
                        bgClip="text"
                        _after={{
                            content: "''",
                            width: 'full',
                            height: '2%',
                            position: 'absolute',
                            bottom: 1,
                            left: 0,
                            bg: 'linear-gradient(310deg,#09C6F9,#045DE9)',
                        }}
                    >
                        Welcome !
                    </Text>
                </Heading>
                <Text color={'gray.500'}>
                    The COVID-19 pandemic has likely impacted mental health in
                    many different ways. The pandemic has created an environment
                    where many determinants of mental health are impacted.
                </Text>
                <Text color={'gray.500'}>
                    During the COVID-19 pandemic, concerns about mental health
                    and substance use have grown, including concerns about
                    suicidal ideation. In January 2021, 41% of adults reported
                    symptoms of anxiety and/or depressive disorder, a share that
                    has been largely stable since spring 2020. In a survey from
                    June 2020, 13% of adults reported new or increased substance
                    use due to coronavirus-related stress, and 11% of adults
                    reported thoughts of suicide in the past 30 days. Suicide
                    rates have long been on the rise and may worsen due to the
                    pandemic.
                </Text>
            </Stack>
            {/*Importance*/}
            <Box
                bg={'linear-gradient(310deg, #09C6F9, #045DE9)'}
                textAlign={'center'}
                pt={5}
                px={{ base: 2, sm: 12, md: 17 }}
                py={14}
            >
                <Heading
                    py={10}
                    lineHeight={1.1}
                    textAlign={'center'}
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
                        Why is Mental Health So Important ?
                    </Text>
                </Heading>
                <Text color={'#bcd9e1'}>
                    Mental health matters. Taking care of our mental health aids
                    in our resilience and recovery from anything that happens.
                    Anyone can have a bad day, but it doesn’t mean that it’s a
                    bad life. How we respond to it and take care of our mental
                    health are what’s important.
                </Text>
                <SimpleGrid
                    mt={6}
                    columns={{ base: 1, md: 3 }}
                    spacing={{ base: 5 }}
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
                p={{ base: 16, md: 20 }}
                backgroundImage={
                    colorMode === 'light'
                        ? 'url(/assets/Background-Images/blob-light.svg)'
                        : 'url(/assets/Background-Images/blob-dark.svg)'
                }
                backgroundSize={'cover'}
                backgroundPosition={'top'}
            >
                <Heading
                    lineHeight={1.1}
                    textAlign={'center'}
                    fontWeight={600}
                    fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
                >
                    <Text
                        as={'span'}
                        position={'relative'}
                        bgGradient="linear(310deg,#09C6F9,#045DE9)"
                        bgClip="text"
                        _after={{
                            content: "''",
                            width: 'full',
                            height: '2%',
                            position: 'absolute',
                            bottom: 1,
                            left: 0,
                            bg: 'linear-gradient(310deg,#09C6F9,#045DE9)',
                        }}
                    >
                        What we can Offer.
                    </Text>
                </Heading>
                <Text color={'gray.500'}>
                    We Are Trained and Professional Councellsor,who understand
                    the issuse faced by our clients and discuss various/topics
                    to resolve problem.
                </Text>
                <SimpleGrid columns={{ base: 1 }} spacing={{ base: 5, lg: 10 }}>
                    {serviceData.map((data, index) => (
                        <ServiceCard data={data} key={index} />
                    ))}
                </SimpleGrid>
            </Stack>
        </Layout>
    );
};

export default Home;

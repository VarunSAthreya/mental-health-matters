import {
    Box,
    Flex,
    Heading,
    Image,
    SimpleGrid,
    Stack,
    Text,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { AiFillRead } from 'react-icons/ai';
import { FaBrain } from 'react-icons/fa';
import { MdHearing } from 'react-icons/md';
import { CredentialsCard } from '../components/Card/CredentialsCard';
import Layout from '../components/UI/Layout';

const About: NextPage = () => {
    return (
        <Layout title="MHM | About">
            <Flex
                w={'full'}
                h={'80vh'}
                backgroundImage={'url(/assets/Background-Images/about.jpg)'}
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
                        About Us.
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
                spacing={4}
                py={{ base: 16, md: 20 }}
                px={{ base: 12, md: 16 }}
            >
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={'feature image'}
                        src={
                            'https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                        }
                        objectFit={'cover'}
                    />
                </Flex>
                <Stack spacing={4}>
                    <Text
                        textTransform={'uppercase'}
                        color={'#045DE9'}
                        fontWeight={600}
                        fontSize={'sm'}
                        p={2}
                        alignSelf={'flex-start'}
                        rounded={'md'}
                        bg={'#c6dcffe8'}
                    >
                        Our Story
                    </Text>
                    <Heading fontSize={'3xl'}>
                        Who We Are And What We Do
                    </Heading>
                    <Text color={'gray.500'} fontSize={'lg'}>
                        Donec et odio pellentesque diam volutpat. Quis vel eros
                        donec ac odio. Adipiscing elit duis tristique
                        sollicitudin nibh sit. Molestie ac feugiat sed lectus
                        vestibulum mattis ullamcorper velit sed. Arcu vitae
                        elementum curabitur vitae nunc sed velit dignissim.
                        Volutpat diam ut venenatis tellus in.
                    </Text>
                    <Text color={'gray.500'} fontSize={'lg'}>
                        Donec et odio pellentesque diam volutpat. Quis vel eros
                        donec ac odio. Adipiscing elit duis tristique
                        sollicitudin nibh sit. Molestie ac feugiat sed lectus
                        vestibulum mattis ullamcorper velit sed.
                    </Text>
                </Stack>
            </SimpleGrid>
            <Box py={16} bg={'linear-gradient(310deg, #09C6F9, #045DE9)'}>
                <Heading
                    textAlign={'center'}
                    mb={4}
                    p={2}
                    color={'white'}
                    fontWeight={800}
                    textTransform={'uppercase'}
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
                        Credentials.
                    </Text>
                </Heading>
                <Text p={3} color={'bcd9e1'} textAlign={'center'}>
                    Donec et odio pellentesque diam volutpat. Quis vel eros
                    donec ac odio. Adipiscing elit duis tristique sollicitudin
                    nibh sit. Molestie ac feugiat sed lectus vestibulum mattis
                    ullamcorper velit sed
                </Text>
                <SimpleGrid
                    columns={{ base: 1, md: 4 }}
                    spacing={10}
                    py={5}
                    px={8}
                >
                    <CredentialsCard
                        icon={AiFillRead}
                        title="Higher Degree"
                        description="Maecenas nec mi in est maximus fermentum.
                            Suspendisse tempus."
                    />
                    <CredentialsCard
                        icon={FaBrain}
                        title="Methodology"
                        description="Maecenas nec mi in est maximus fermentum.
                        Suspendisse tempus."
                    />
                    <CredentialsCard
                        icon={MdHearing}
                        title="Professionals"
                        description="Maecenas nec mi in est maximus fermentum.
                    Suspendisse tempus."
                    />
                    <CredentialsCard
                        icon={AiFillRead}
                        title="Therapy"
                        description="Maecenas nec mi in est maximus fermentum.
                Suspendisse tempus."
                    />
                </SimpleGrid>
            </Box>
        </Layout>
    );
};

export default About;

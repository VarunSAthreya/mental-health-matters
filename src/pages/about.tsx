import {
    Box,
    Container,
    Flex,
    Heading,
    Icon,
    Image,
    SimpleGrid,
    Stack,
    Text,
    VStack,
    useBreakpointValue,
    Button
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { AiFillRead } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { FaBrain } from 'react-icons/fa';
import { MdHearing } from 'react-icons/md';
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
                    <Stack
                        alignItems={'center'}
                        my={4}
                        backgroundColor={'white'}
                        p={8}
                        borderRadius={8}
                    >
                        <Flex
                            w={16}
                            h={16}
                            align={'center'}
                            justify={'center'}
                            color={'#045DE9'}
                            rounded={'full'}
                            bg={'#c6dcffe8'}
                            mb={1}
                        >
                            <Icon as={AiFillRead} w={10} h={10} />
                        </Flex>
                        <Text fontWeight={700}>Higher degrees</Text>
                        <Text color={'gray.600'} textAlign={'center'}>
                            Maecenas nec mi in est maximus fermentum.
                            Suspendisse tempus.
                        </Text>
                    </Stack>
                    <Stack
                        alignItems={'center'}
                        my={4}
                        backgroundColor={'white'}
                        p={8}
                        borderRadius={8}
                    >
                        <Flex
                            w={16}
                            h={16}
                            align={'center'}
                            justify={'center'}
                            color={'#045DE9'}
                            rounded={'full'}
                            bg={'#c6dcffe8'}
                            mb={1}
                        >
                            <Icon as={FaBrain} w={10} h={10} />
                        </Flex>
                        <Text fontWeight={700}>Methodology</Text>
                        <Text color={'gray.600'} textAlign={'center'}>
                            Maecenas nec mi in est maximus fermentum.
                            Suspendisse tempus.
                        </Text>
                    </Stack>
                    <Stack
                        alignItems={'center'}
                        my={4}
                        backgroundColor={'white'}
                        p={8}
                        borderRadius={8}
                    >
                        <Flex
                            w={16}
                            h={16}
                            align={'center'}
                            justify={'center'}
                            color={'#045DE9'}
                            rounded={'full'}
                            bg={'#c6dcffe8'}
                            mb={1}
                        >
                            <Icon as={BsFillPeopleFill} w={10} h={10} />
                        </Flex>
                        <Text fontWeight={700}>Professionals</Text>
                        <Text color={'gray.600'} textAlign={'center'}>
                            Maecenas nec mi in est maximus fermentum.
                            Suspendisse tempus.
                        </Text>
                    </Stack>
                    <Stack
                        alignItems={'center'}
                        my={4}
                        backgroundColor={'white'}
                        p={8}
                        borderRadius={8}
                    >
                        <Flex
                            w={16}
                            h={16}
                            align={'center'}
                            justify={'center'}
                            color={'#045DE9'}
                            rounded={'full'}
                            bg={'#c6dcffe8'}
                            mb={1}
                        >
                            <Icon as={MdHearing} w={10} h={10} />
                        </Flex>
                        <Text fontWeight={700}>Therapy</Text>
                        <Text color={'gray.600'} textAlign={'center'}>
                            Maecenas nec mi in est maximus fermentum.
                            Suspendisse tempus.
                        </Text>
                    </Stack>
                </SimpleGrid>
            </Box>
        </Layout>
    );
};

export default About;

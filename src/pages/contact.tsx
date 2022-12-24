import {
    Box,
    Center,
    Flex,
    Heading,
    Stack,
    Text,
    useColorMode,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import ContactCard from '../components/Card/ContactCard';
import Layout from '../components/UI/Layout';

const Contact: NextPage = () => {
    const { colorMode } = useColorMode();
    return (
        <Layout title="MHM | Contact">
            <Flex
                w={'full'}
                h={{ base: '70vh', md: '80vh' }}
                backgroundImage={'url(/assets/Background-Images/contact.jpg)'}
                backgroundSize={'cover'}
                backgroundPosition={'top'}
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
                        Contact Us.
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
            <Center
                p={{ base: 6, sm: 8, md: 12 }}
                backgroundImage={
                    colorMode === 'light'
                        ? 'url(/assets/Background-Images/blob-light.svg)'
                        : 'url(/assets/Background-Images/blob-dark.svg)'
                }
                backgroundSize={'cover'}
                backgroundPosition={'top'}
            >
                <ContactCard />
            </Center>
        </Layout>
    );
};

export default Contact;

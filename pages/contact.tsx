import { Box, Center, Container, Heading, Stack, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';
import ContactCard from '../components/Card/ContactCard';
import Layout from '../components/UI/Layout';

const Contact: NextPage = () => {
    return (
        <Layout title="MHM | Contact">
            <Container maxW={'7xl'} p="12">
                <Stack
                    as={Box}
                    rounded={'lg'}
                    spacing={{ base: 2 }}
                    py={{ base: 20, md: 24 }}
                    bg={'#521262'}
                >
                    <Heading
                        p={3}
                        pl={5}
                        fontWeight={600}
                        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'}
                        color="white"
                    >
                        Contact
                    </Heading>
                    <Text p={5} color="white">
                        Our mission to make quality healthcare affordable and
                        accessible for over a billion+ Indians. We believe in
                        empowering our users with the most accurate,
                        comprehensive, and curated information and care,
                        enabling them to make better healthcare decisions Our
                        mission to make quality healthcare affordable and
                        accessible for over a billion+ Indians. We believe in
                        empowering our users with the most accurate,
                        comprehensive, and curated information and care,
                        enabling them to make better healthcare decisions
                    </Text>
                    <Center>
                        <ContactCard />
                    </Center>
                </Stack>
            </Container>
        </Layout>
    );
};

export default Contact;

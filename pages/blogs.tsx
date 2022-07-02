import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';
import { IBlog } from '../@types';
import BlogCard from '../components/Card/BlogCard';
import Layout from '../components/UI/Layout';

const data: IBlog[] = [
    {
        id: 1,
        title: '“Look after your mental health, Australia” – World Mental Health Day',
        description:
            'World Mental Health Day is on 10 October. The campaign this year has a simple message: Look after your mental health, Australia.',
        url: 'https://ontheline.org.au/wp-content/uploads/2021/10/WMHD2-680-x-480.jpg',
        link: 'https://ontheline.org.au/mental-health-blog/world-mental-health-day-2021/',
    },
    {
        id: 2,
        title: 'How I manage my Mental Health during Covid',
        description:
            'The last year has been like no other, and as we observe the anniversary of the first lockdown we need to take a minute and try to understand how Covid has impacted our mental health.Like many others our work has moved online, with most staff working from home, this has seen a blurring of the line between work and home life with some of us juggling work, home schooling, and childcare responsibility.',
        url: 'https://everyonehealth.co.uk/wp-content/uploads/2021/03/mental-health.jpg',
        link: 'https://everyonehealth.co.uk/blog-how-i-manage-my-mental-health-during-covid/',
    },
    {
        id: 3,
        title: 'The Effects a Pandemic Can Have on Your Mental Health',
        description:
            '7 suggestions to help improve your mental health during the COVID-19 pandemic. Limit the news: Sure, you need to know whats going on in the world, but spending',
        url: 'https://sa1s3optim.patientpop.com/assets/images/provider/photos/2197109.jpeg',
        link: 'https://www.mindsetsd.com/blog/the-affects-a-pandemic-can-have-on-your-mental-health',
    },
    {
        id: 4,
        title: 'The Importance Of Mental Health',
        description:
            'Mental health is important. It impacts how we feel, think, and behave each day. Our mental health also contributes to our decision making, problem solving, how we deal with stress, and how we can relate to others in our lives. we have to always care about our own mental health.',
        url: 'https://www.voicesofyouth.org/sites/voy/files/images/2020-06/gettyimages-1044233906.jpg',
        link: 'https://www.voicesofyouth.org/blog/importance-mental-health',
    },
];

const Blogs: NextPage = () => {
    return (
        <Layout title="MHM | Blogs">
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
                        mb={3}
                        fontWeight={600}
                        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'}
                        color="white"
                    >
                        Blogs
                    </Heading>
                    <Text p={3} color="white">
                        Across the world, people use blogs as a platform to
                        share experiences, increase awareness and understanding,
                        and provide comfort and support. And that’s a very good
                        thing.Here Are a few Blogs, We thought we’d pop a list
                        together of the blogs we frequently read, admire and
                        appreciate. We hope you enjoy them as we do.
                    </Text>
                </Stack>
                {data.map((blog, index) => (
                    <Stack key={index} p={5} my={2}>
                        <BlogCard blog={blog} />
                    </Stack>
                ))}
            </Container>
        </Layout>
    );
};

export default Blogs;

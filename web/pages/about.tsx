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
    useBreakpointValue
} from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';
import { AiFillRead } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { FaBrain } from 'react-icons/fa';
import { MdHearing } from 'react-icons/md';
import Layout from '../components/UI/Layout';
import LottieView from "../components/Lotte/LotteView";

const About: NextPage = () => {
    return (
      <Layout title="MHM | About">
        <Container maxW={"7xl"} p="12">
          <Box display={"flex"}>
            <Stack
              as={Box}
              textAlign={"start"}
              w={"50%"}
              spacing={{ base: 8 }}
              my={4}
              pt={{ base: 20}}
              pb={36}
            >
              <Heading
                color="white"
                p={3}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl" }}
                lineHeight={"110%"}
              >
                About Us
              </Heading>
              <Text p={3} color="white">
                Our mission to make quality healthcare affordable and accessible
                for over a billion+ Indians. We believe in empowering our users
                with the most accurate, comprehensive, and curated information
                and care, enabling them to make better healthcare decisions
              </Text>
              <Stack
                direction={"column"}
                spacing={3}
                align={"start"}
                alignSelf={"start"}
                position={"relative"}
              >
                {/* <Button
                                bgGradient="linear(to-l, #0F3443, #34E89E)"
                                width={'150px'}
                                height={'50px'}
                                px={10}
                                _hover={{
                                    bgGradient:
                                        'linear(to-l, #0F3443, #34E89E)',
                                }}
                                _focus={{
                                    outline: 'none',
                                    bgGradient:
                                        'linear(to-l, #0F3443, #34E89E)',
                                }}
                                _active={{
                                    bgGradient:
                                        'linear(to-l, #0F3443, #34E89E)',
                                }}
                                onClick={() => router.push('/learning')}
                                rightIcon={<ArrowForwardIcon />}
                            >
                                Get Started
                            </Button> */}
              </Stack>
            </Stack>
            <Box
              pos={"absolute"}
              zIndex={50}
              width={500}
              height={385}
              top={"5%"}
              left={"58%"}
            >
              <LottieView />
            </Box>
          </Box>

          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={10}
            py={{ base: 20, md: 28 }}
          >
            <Flex>
              <Image
                rounded={"md"}
                alt={"feature image"}
                src={
                  "https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }
                objectFit={"cover"}
              />
            </Flex>
            <Stack spacing={4}>
              <Text
                textTransform={"uppercase"}
                color={"#521262"}
                fontWeight={600}
                fontSize={"sm"}
                p={2}
                alignSelf={"flex-start"}
                rounded={"md"}
              >
                Our Story
              </Text>
              <Heading fontSize={"3xl"}>Who We Are And What We Do</Heading>
              <Text color={"gray.500"} fontSize={"lg"}>
                Donec et odio pellentesque diam volutpat. Quis vel eros donec ac
                odio. Adipiscing elit duis tristique sollicitudin nibh sit.
                Molestie ac feugiat sed lectus vestibulum mattis ullamcorper
                velit sed. Arcu vitae elementum curabitur vitae nunc sed velit
                dignissim. Volutpat diam ut venenatis tellus in.
              </Text>
              <Text color={"gray.500"} fontSize={"lg"}>
                Donec et odio pellentesque diam volutpat. Quis vel eros donec ac
                odio. Adipiscing elit duis tristique sollicitudin nibh sit.
                Molestie ac feugiat sed lectus vestibulum mattis ullamcorper
                velit sed.
              </Text>
            </Stack>
          </SimpleGrid>
          <Box p={4}>
            <Heading textAlign={"center"} mb={4}>
              Credentials
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10} py={5}>
              <Stack alignItems={"center"} my={4}>
                <Flex
                  w={16}
                  h={16}
                  align={"center"}
                  justify={"center"}
                  color={"white"}
                  rounded={"full"}
                  bg={"#521262"}
                  mb={1}
                >
                  <Icon as={AiFillRead} w={10} h={10} />
                </Flex>
                <Text fontWeight={600}>Higher degrees</Text>
                <Text color={"gray.600"} textAlign={"center"}>
                  Maecenas nec mi in est maximus fermentum. Suspendisse tempus.
                </Text>
              </Stack>
              <Stack alignItems={"center"} my={4}>
                <Flex
                  w={16}
                  h={16}
                  align={"center"}
                  justify={"center"}
                  color={"white"}
                  rounded={"full"}
                  bg={"#521262"}
                  mb={1}
                >
                  <Icon as={FaBrain} w={10} h={10} />
                </Flex>
                <Text fontWeight={600}>Methodology</Text>
                <Text color={"gray.600"} textAlign={"center"}>
                  Maecenas nec mi in est maximus fermentum. Suspendisse tempus.
                </Text>
              </Stack>
              <Stack alignItems={"center"} my={4}>
                <Flex
                  w={16}
                  h={16}
                  align={"center"}
                  justify={"center"}
                  color={"white"}
                  rounded={"full"}
                  bg={"#521262"}
                  mb={1}
                >
                  <Icon as={BsFillPeopleFill} w={10} h={10} />
                </Flex>
                <Text fontWeight={600}>Professionals</Text>
                <Text color={"gray.600"} textAlign={"center"}>
                  Maecenas nec mi in est maximus fermentum. Suspendisse tempus.
                </Text>
              </Stack>
              <Stack alignItems={"center"} my={4}>
                <Flex
                  w={16}
                  h={16}
                  align={"center"}
                  justify={"center"}
                  color={"white"}
                  rounded={"full"}
                  bg={"#521262"}
                  mb={1}
                >
                  <Icon as={MdHearing} w={10} h={10} />
                </Flex>
                <Text fontWeight={600}>Therapy</Text>
                <Text color={"gray.600"} textAlign={"center"}>
                  Maecenas nec mi in est maximus fermentum. Suspendisse tempus.
                </Text>
              </Stack>
            </SimpleGrid>
          </Box>
        </Container>
      </Layout>
    );
};

export default About;

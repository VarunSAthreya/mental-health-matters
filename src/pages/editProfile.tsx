import {
    Avatar,
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Flex,
    Grid,
    GridItem,
    Image,
    Heading,
    Stack,
    Text,
    Input,
    InputLeftAddon,
    InputGroup,
    FormControl,
    FormErrorMessage,
    useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import type { ISurvey } from '../../@types';
import SideBar from '../components/Sidebar/Sidebar';
import { trpc } from '../utils/trpc';
import { ChevronRightIcon } from '@chakra-ui/icons';


const EditProfile = () => {
    const router = useRouter();
    const primaryBG = useColorModeValue('#f8f9fa', '#18191A');
    const secondaryBG = useColorModeValue('white', '#242526');

    const { data: userData, isLoading } = trpc.useQuery(['user.allDetails']);
    if (isLoading || userData == undefined || userData == null) return null;

    return (
        <Flex flexDirection={{ base: 'column', lg: 'row' }} bg={primaryBG}>
            <SideBar />
            <Flex
                flexDirection="column"
                pt={{ base: '120px', md: '25px' }}
                marginLeft={{ base: 0, lg: '100px' }}
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
                                Edit Profile
                            </Text>{' '}
                        </Heading>
                        <Breadcrumb
                            mt={3}
                            separator={<ChevronRightIcon color="gray.500" />}
                        >
                            <BreadcrumbItem>
                                <BreadcrumbLink
                                    href="/profile"
                                    color="gray.500"
                                    _hover={{
                                        textDecoration: 'none',
                                        color: '#09C6F9',
                                    }}
                                    _focus={{ outline: 'none' }}
                                >
                                    Profile
                                </BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink
                                    href="/editProfile"
                                    color="gray.500"
                                    _hover={{
                                        textDecoration: 'none',
                                        color: '#09C6F9',
                                    }}
                                    _focus={{ outline: 'none' }}
                                >
                                    Edit Profile
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </Flex>
                </Stack>
                <Grid
            templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }}
            gap="22px"
            mt={8}
        >
            <GridItem colSpan={1}>
                <Box
                    display={'flex'}
                    h={'100%'}
                    flexDirection={'column'}
                    borderRadius={8}
                    justifyContent="center"
                    alignItems={'center'}
                    bg={useColorModeValue('white', '#242526')}
                    p={8}
                >
                    {userData.image ? (
                        <Image
                            fontSize="2rem !important"
                            bg={'linear-gradient(310deg,#FF4331,#D31A50)'}
                            w="150px"
                            h="150px"
                            borderRadius={'100%'}
                            src={userData.image}
                            alt={"User's profile picture"}
                        />
                    ) : (
                        <Avatar
                            color={'white'}
                            fontSize="2rem !important"
                            bg={'linear-gradient(310deg,#FF4331,#D31A50)'}
                            w="150px"
                            h="150px"
                            borderRadius={'100%'}
                        />
                    )}
                    <Flex direction="column" my={{ sm: '14px' }}>
                        <Text
                            fontSize={{ sm: 'lg', lg: '2.3rem' }}
                           
                            fontWeight="bold"
                            ms={{ sm: '8px', md: '0px' }}
                            textAlign="center"
                        >
                            
                        </Text>
                    </Flex>
                </Box>
            </GridItem>
            <GridItem colSpan={{ base: 1, md: 3 }}>
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    p={8}
                    borderRadius={8}
                    bg={useColorModeValue('white', '#242526')}
                >
                    <Box p="12px 5px" mb="12px">
                        <Text
                            bgGradient="linear-gradient(310deg,#FF4331,#D31A50)"
                            bgClip="text"
                            fontSize="2xl"
                            fontWeight="extrabold"
                            textTransform={'uppercase'}
                        >
                            GENERAL INFORMATION
                        </Text>
                        <Text
                            fontSize={{ base: 'md', lg: 'lg' }}
                            color={'gray.500'}
                            mt={3}
                        >
                            This is general information about you.
                        </Text>
                    </Box>
                    <form>
                            {/*General Detail Fields*/}
                            <Grid templateColumns="repeat(2, 1fr)">
                                <GridItem p={4}>
                                    <FormControl
                                        
                                    >
                                        <InputGroup>
                                            <InputLeftAddon>
                                                Name:
                                            </InputLeftAddon>
                                            <Input
                                                type="text"
                                                placeholder="Student Name"
                                                
                                            />
                                        </InputGroup>
                                        <FormErrorMessage>
                                           
                                        </FormErrorMessage>
                                    </FormControl>
                                </GridItem>
                                <GridItem p={4}>
                                    <FormControl
                                       
                                    >
                                        <InputGroup>
                                            <InputLeftAddon>
                                                USN:
                                            </InputLeftAddon>
                                            <Input
                                                type="text"
                                                disabled
                                                placeholder="USN"
                                                
                                            />
                                        </InputGroup>

                                        <FormErrorMessage>
                                            
                                        </FormErrorMessage>
                                    </FormControl>
                                </GridItem>
                                <GridItem p={4} colSpan={2}>
                                    <FormControl
                                        
                                    >
                                        <InputGroup>
                                            <InputLeftAddon>
                                                Email:
                                            </InputLeftAddon>
                                            <Input
                                                type="email"
                                                placeholder="Email ID"
                                                
                                            />
                                        </InputGroup>

                                        <FormErrorMessage>
                                          
                                        </FormErrorMessage>
                                    </FormControl>
                                </GridItem>
                            </Grid>
                        </form>
                </Box>
            </GridItem>
        </Grid>
            </Flex>
        </Flex>
    );
};

export default EditProfile;

import {
    Avatar,
    Box,
    Button,
    Flex,
    Icon,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { FaUserEdit } from 'react-icons/fa';
import UserProfileCard from '../components/Card/UserProfileCard';
import SideBar from '../components/Sidebar/Sidebar';
import { trpc } from '../utils/trpc';

const UserDetails: NextPage = () => {
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
                pt={{ base: '20px', md: '25px' }}
                marginLeft={{ base: 0, md: '100px' }}
                width={'100%'}
                px={4}
            >
                <Box mb="22px" overflowX={{ sm: 'scroll', xl: 'hidden' }}>
                    <Box
                        bg={secondaryBG}
                        display={'flex'}
                        flexDir={{base:'column',md:'row'}}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        borderRadius={8}
                        borderTop={'5px solid #045DE9'}
                    >
                        <Flex p={4} borderRadius={8} pb="1.5rem">
                            <Avatar
                                m={3}
                                size="lg"
                                name={
                                    userData && userData.name
                                        ? userData.name
                                        : undefined
                                }
                                src={
                                    userData && userData.image
                                        ? userData.image
                                        : undefined
                                }
                            />
                            <Box>
                                <Text
                                    bgGradient="linear-gradient(310deg,#09C6F9,#045DE9)"
                                    bgClip="text"
                                    fontSize="4xl"
                                    fontWeight="extrabold"
                                    textTransform={'uppercase'}
                                >
                                    {userData?.name}
                                </Text>
                                <Text
                                    fontSize={{ base: 'md' }}
                                    color={'gray.500'}
                                    mt={'-5px'}
                                >
                                    {userData?.email}
                                </Text>
                            </Box>
                        </Flex>
                        <Flex p={3}>
                            <Box
                                display={'flex'}
                                flexDir={'column'}
                                alignItems={'center'}
                                mx={3}
                                p={4}
                                border={'2px solid #045DE9'}
                                borderRadius={'10px'}
                            >
                                <Text
                                    bgGradient="linear-gradient(310deg,#09C6F9,#045DE9)"
                                    bgClip="text"
                                    fontSize="4xl"
                                    fontWeight="extrabold"
                                    textTransform={'uppercase'}
                                >
                                    {userData?.age}
                                </Text>
                                <Text
                                    fontSize={{ base: 'md' }}
                                    color={'gray.500'}
                                    mt={'-5px'}
                                >
                                    Age
                                </Text>
                            </Box>
                            <Box
                                display={'flex'}
                                flexDir={'column'}
                                alignItems={'center'}
                                p={3}
                                mx={3}
                                border={'2px solid #045DE9'}
                                borderRadius={'10px'}
                            >
                                <Text
                                    bgGradient="linear-gradient(310deg,#09C6F9,#045DE9)"
                                    bgClip="text"
                                    fontSize="4xl"
                                    fontWeight="extrabold"
                                    textTransform={'uppercase'}
                                >
                                    {userData?.gender}
                                </Text>
                                <Text
                                    fontSize={{ base: 'md' }}
                                    color={'gray.500'}
                                    mt={'-5px'}
                                >
                                    Gender
                                </Text>
                            </Box>
                            <Button
                                onClick={() => router.push('/editProfile')}
                                display={'flex'}
                                flexDir={'column'}
                                w={'95px'}
                                h={'109px'}
                                justifyContent={'center'}
                                bg={'linear-gradient(310deg, #09C6F9, #045DE9)'}
                                color={'white'}
                                variant={'solid'}
                                _focus={{ outline: 'none' }}
                                _active={{
                                    bg: 'linear-gradient(310deg, #079bc3, #0349b8)',
                                }}
                                _hover={{
                                    bg: 'linear-gradient(310deg, #079bc3, #0349b8)',
                                }}
                            >
                                <Icon
                                    as={FaUserEdit}
                                    w={10}
                                    h={10}
                                    m={1}
                                    color={'white'}
                                />
                                <Text fontSize={{ base: 'md' }} color={'white'}>
                                    Edit Profile
                                </Text>
                            </Button>
                        </Flex>
                    </Box>
                    <Box borderRadius={8}>
                        <UserProfileCard user={userData} />
                    </Box>
                </Box>
            </Flex>
        </Flex>
    );
};

export default UserDetails;

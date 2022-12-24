import { ChevronRightIcon } from '@chakra-ui/icons';
import {
    Avatar,
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    Grid,
    GridItem,
    Heading,
    Image,
    Input,
    InputGroup,
    InputLeftAddon,
    Select,
    Stack,
    Text,
    useColorModeValue,
    useToast,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import SideBar from '../components/Sidebar/Sidebar';
import { trpc } from '../utils/trpc';

const EditProfile: FC = () => {
    const primaryBG = useColorModeValue('#f8f9fa', '#18191A');
    const secondaryBG = useColorModeValue('white', '#242526');

    const toast = useToast();
    const router = useRouter();

    const utils = trpc.useContext();

    const { data: userData, isLoading } = trpc.useQuery(['user.details']);

    const [age, setAge] = useState<number>(userData?.age ?? 0);
    const [gender, setGender] = useState(userData?.gender ?? '');

    const { mutateAsync: updateUser, isLoading: updLoading } = trpc.useMutation(
        ['user.edit'],
        {
            onError: (err) => {
                console.log(err);
                toast({
                    title: err.message,
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                });
            },
            onSuccess: () => {
                toast({
                    title: 'Updated Successfully!!',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                });
                utils.invalidateQueries(['user.details']);
                router.push('/profile');
            },
        }
    );

    if (isLoading || userData == undefined || userData == null || updLoading)
        return null;

    const onUpdate = () => {
        if (age == 0 || gender == '') {
            toast({
                title: 'Please Enter Age and Gender',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
            return;
        }
        console.log({ age, gender });

        updateUser({ age: Number(age), gender: gender as any });
    };

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
                            bg={secondaryBG}
                            p={8}
                        >
                            {userData.image ? (
                                <Image
                                    fontSize="2rem !important"
                                    bg={
                                        'linear-gradient(310deg,#FF4331,#D31A50)'
                                    }
                                    w={{ base: '100px', sm: '150px' }}
                                    h={{ base: '100px', sm: '150px' }}
                                    borderRadius={'100%'}
                                    src={userData.image}
                                    alt={"User's profile picture"}
                                />
                            ) : (
                                <Avatar
                                    color={'white'}
                                    fontSize="2rem !important"
                                    bg={
                                        'linear-gradient(310deg,#FF4331,#D31A50)'
                                    }
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
                                ></Text>
                            </Flex>
                        </Box>
                    </GridItem>
                    <GridItem colSpan={{ base: 1, md: 3 }}>
                        <Box
                            display={'flex'}
                            flexDirection={'column'}
                            p={8}
                            borderRadius={8}
                            bg={secondaryBG}
                        >
                            <Box p="12px 5px" mb="12px">
                                <Text
                                    bgGradient="linear(310deg,#09C6F9,#045DE9)"
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
                            {/*General Detail Fields*/}
                            <Grid templateColumns="repeat(2, 1fr)">
                                <GridItem p={4} colSpan={2}>
                                    <FormControl>
                                        <InputGroup>
                                            <InputLeftAddon>
                                                Name:
                                            </InputLeftAddon>
                                            <Input
                                                type="text"
                                                placeholder="Student Name"
                                                value={userData.name ?? ''}
                                                disabled
                                            />
                                        </InputGroup>
                                        <FormErrorMessage></FormErrorMessage>
                                    </FormControl>
                                </GridItem>
                                <GridItem p={4} colSpan={{ base: 2, sm: 1 }}>
                                    <FormControl>
                                        <InputGroup>
                                            <InputLeftAddon>
                                                Age:
                                            </InputLeftAddon>
                                            <Input
                                                type="number"
                                                placeholder="Age"
                                                defaultValue={
                                                    userData.age ?? ''
                                                }
                                                required
                                                onChange={(e: any) =>
                                                    setAge(e.target.value)
                                                }
                                            />
                                        </InputGroup>

                                        <FormErrorMessage></FormErrorMessage>
                                    </FormControl>
                                </GridItem>
                                <GridItem p={4} colSpan={{ base: 2, sm: 1 }}>
                                    <FormControl>
                                        <InputGroup>
                                            <InputLeftAddon>
                                                Gender:
                                            </InputLeftAddon>
                                            <Select
                                                placeholder="Select Gender"
                                                onChange={(e: any) =>
                                                    setGender(e.target.value)
                                                }
                                            >
                                                <option value="M">Male</option>
                                                <option value="F">
                                                    Female
                                                </option>
                                                <option value="O">
                                                    Others
                                                </option>
                                            </Select>
                                        </InputGroup>

                                        <FormErrorMessage></FormErrorMessage>
                                    </FormControl>
                                </GridItem>
                            </Grid>

                            <Button
                                onClick={onUpdate}
                                mt={3}
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
                                Update
                            </Button>
                        </Box>
                    </GridItem>
                </Grid>
            </Flex>
        </Flex>
    );
};

export default EditProfile;

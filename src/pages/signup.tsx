import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    InputGroup,
    InputRightElement,
    Spinner,
    Stack,
    Text,
    useColorModeValue,
    useToast,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Layout from '../components/UI/Layout';

const SignUp: NextPage = () => {
    const router = useRouter();
    const toast = useToast();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setConfirmShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [signupData, setSignupData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        firstname: '',
        lastname: '',
        age: '',
        phone: '',
    });

    const handelSubmit = async (e: any) => {
        console.log(e);
    };

    return (
        <Layout title="MHM | Sign Up">
            <Flex minH={'100vh'} align={'center'} justify={'center'} my={10}>
                <Stack
                    spacing={8}
                    mx={'auto'}
                    maxW={'lg'}
                    py={12}
                    px={6}
                    bg={useColorModeValue('white', '#242526')}
                    boxShadow={'lg'}
                    rounded={'lg'}
                >
                    <Stack align={'center'}>
                        <Heading
                            fontSize={'4xl'}
                            textAlign={'center'}
                            bgGradient="linear(310deg,#FF4331,#D31A50)"
                            bgClip="text"
                            fontWeight="bold"
                            textTransform={'uppercase'}
                        >
                            {'Sign Up'}
                        </Heading>
                    </Stack>
                    <Box p={8}>
                        <Stack spacing={4}>
                            <HStack>
                                <Box>
                                    <FormControl id="firstName" isRequired>
                                        <FormLabel>First Name</FormLabel>
                                        <Input
                                            type="text"
                                            onChange={(e) =>
                                                setSignupData({
                                                    ...signupData,
                                                    firstname: e.target.value,
                                                })
                                            }
                                        />
                                    </FormControl>
                                </Box>
                                <Box>
                                    <FormControl id="lastName">
                                        <FormLabel>Last Name</FormLabel>
                                        <Input
                                            type="text"
                                            onChange={(e) =>
                                                setSignupData({
                                                    ...signupData,
                                                    lastname: e.target.value,
                                                })
                                            }
                                        />
                                    </FormControl>
                                </Box>
                            </HStack>
                            <FormControl id="phone" isRequired>
                                <FormLabel>Phone</FormLabel>
                                <Input
                                    type="number"
                                    onChange={(e) =>
                                        setSignupData({
                                            ...signupData,
                                            phone: e.target.value,
                                        })
                                    }
                                />
                            </FormControl>
                            <FormControl id="age" isRequired>
                                <FormLabel>Age</FormLabel>
                                <Input
                                    type="number"
                                    onChange={(e) =>
                                        setSignupData({
                                            ...signupData,
                                            age: e.target.value,
                                        })
                                    }
                                />
                            </FormControl>
                            <FormControl id="email" isRequired>
                                <FormLabel>Email address</FormLabel>
                                <Input
                                    type="email"
                                    onChange={(e) =>
                                        setSignupData({
                                            ...signupData,
                                            email: e.target.value,
                                        })
                                    }
                                />
                            </FormControl>
                            <FormControl id="password" isRequired>
                                <FormLabel>Password</FormLabel>
                                <InputGroup>
                                    <Input
                                        type={
                                            showPassword ? 'text' : 'password'
                                        }
                                        onChange={(e) =>
                                            setSignupData({
                                                ...signupData,
                                                password: e.target.value,
                                            })
                                        }
                                    />
                                    <InputRightElement h={'full'}>
                                        <Button
                                            variant={'ghost'}
                                            onClick={() =>
                                                setShowPassword(
                                                    (showPassword) =>
                                                        !showPassword
                                                )
                                            }
                                        >
                                            {showPassword ? (
                                                <ViewIcon />
                                            ) : (
                                                <ViewOffIcon />
                                            )}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <FormControl id="ConfirmPassword" isRequired>
                                <FormLabel>Confirm Password</FormLabel>
                                <InputGroup>
                                    <Input
                                        type={
                                            showConfirmPassword
                                                ? 'text'
                                                : 'password'
                                        }
                                        onChange={(e) =>
                                            setSignupData({
                                                ...signupData,
                                                confirmPassword: e.target.value,
                                            })
                                        }
                                    />
                                    <InputRightElement h={'full'}>
                                        <Button
                                            variant={'ghost'}
                                            onClick={() =>
                                                setConfirmShowPassword(
                                                    (showConfirmPassword) =>
                                                        !showConfirmPassword
                                                )
                                            }
                                        >
                                            {showConfirmPassword ? (
                                                <ViewIcon />
                                            ) : (
                                                <ViewOffIcon />
                                            )}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <Stack spacing={10} pt={2}>
                                <Button
                                    loadingText="Submitting"
                                    size="lg"
                                    bg={'#FF4331'}
                                    color={'white'}
                                    _hover={{
                                        bg: '#9d271c',
                                    }}
                                    _focus={{
                                        bg: '#9d271c',
                                    }}
                                    _active={{
                                        bg: '#9d271c',
                                    }}
                                    onClick={handelSubmit}
                                    disabled={isLoading}
                                >
                                    {'Sign Up'}
                                    {isLoading && (
                                        <Spinner ml={2} color="white" />
                                    )}
                                </Button>
                            </Stack>
                            <Stack pt={6}>
                                <Text align={'center'}>
                                    Already have an account?{' '}
                                    <Button
                                        color={'#FF4331'}
                                        variant="link"
                                        _focus={{
                                            bg: '#9d271c',
                                        }}
                                        _active={{
                                            bg: '#9d271c',
                                        }}
                                        onClick={() => router.push('/login')}
                                    >
                                        {'Login'}
                                    </Button>
                                </Text>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </Layout>
    );
};

export default SignUp;

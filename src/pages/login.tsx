import {
    Box,
    Button,
    Flex,
    Heading,
    Spinner,
    Stack,
    useColorModeValue,
} from '@chakra-ui/react';
import type { BuiltInProviderType } from 'next-auth/providers';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Layout from '../components/UI/Layout';

const Login = () => {
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);

    const handelSubmit = async (provider: BuiltInProviderType) => {
        setIsLoading(true);
        await signIn(provider);
        setIsLoading(false);
        router.push('/dashboard');
    };

    return (
        <Layout title="MHM | Login">
            <Flex minH={'100vh'} align={'center'} justify={'center'}>
                <Stack
                    spacing={8}
                    mx={'auto'}
                    maxW={'lg'}
                    py={12}
                    px={12}
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
                            {'Login'}
                        </Heading>
                    </Stack>
                    <Box rounded={'lg'} p={8}>
                        <Stack spacing={4}>
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
                                    disabled={isLoading}
                                    onClick={() => handelSubmit('github')}
                                >
                                    {'Login Using Github'}
                                    {isLoading && (
                                        <Spinner ml={2} color="white" />
                                    )}
                                </Button>
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
                                    disabled={isLoading}
                                    onClick={() => handelSubmit('discord')}
                                >
                                    {'Login Using Discord'}
                                    {isLoading && (
                                        <Spinner ml={2} color="white" />
                                    )}
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </Layout>
    );
};

export default Login;

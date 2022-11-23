import {
    Box,
    Button,
    Flex,
    Image,
    Spinner,
    Stack,
    useColorMode,
    useColorModeValue,
} from '@chakra-ui/react';
import type { BuiltInProviderType } from 'next-auth/providers';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';
import Logo from '../components/Logo/Logo';
import Layout from '../components/UI/Layout';

const Login = () => {
    const router = useRouter();
    const { colorMode } = useColorMode();

    const [isLoading, setIsLoading] = useState(false);

    const handelSubmit = async (provider: BuiltInProviderType) => {
        console.log(router.basePath + '/dashboard');

        setIsLoading(true);
        await signIn(provider, {
            callbackUrl: router.basePath + '/dashboard',
        });
        setIsLoading(false);
    };

    return (
        <Layout title="MHM | Login">
            <Flex position="relative" justifyContent={'center'}>
                <Flex
                    h={{ sm: 'initial', md: '75vh', lg: '90vh' }}
                    w={{ base: '100%', md: '50%', lg: '40%' }}
                    mb="30px"
                    pt={{ sm: '100px', md: '0px' }}
                >
                    <Flex
                        direction="column"
                        w="100%"
                        background="transparent"
                        p="32px"
                        mt={{ md: '150px', lg: '100px' }}
                        justifyContent={'center'}
                        color="black"
                        borderRadius={8}
                    >
                        <Flex
                            minH={'100vh'}
                            align={'center'}
                            justify={'center'}
                        >
                            <Stack
                                spacing={4}
                                mx={'auto'}
                                maxW={'lg'}
                                py={12}
                                px={12}
                                bg={useColorModeValue('white', '#242526')}
                                boxShadow={'xl'}
                                rounded={'lg'}
                            >
                                <Logo width={'100%'} />
                                <Box rounded={'lg'} p={8}>
                                    <Stack spacing={10} pt={2}>
                                        <Button
                                            loadingText="Submitting"
                                            size="lg"
                                            bg={'#045DE9'}
                                            color={'white'}
                                            _hover={{
                                                bg: '#0349b8',
                                            }}
                                            _focus={{
                                                bg: '#0349b8',
                                            }}
                                            _active={{
                                                bg: '#0349b8',
                                            }}
                                            disabled={isLoading}
                                            onClick={() =>
                                                handelSubmit('github')
                                            }
                                            rightIcon={<AiFillGithub />}
                                        >
                                            {'Login Using Github'}
                                            {isLoading && (
                                                <Spinner ml={2} color="white" />
                                            )}
                                        </Button>
                                        <Button
                                            loadingText="Submitting"
                                            size="lg"
                                            bg={'#045DE9'}
                                            color={'white'}
                                            _hover={{
                                                bg: '#0349b8',
                                            }}
                                            _focus={{
                                                bg: '#0349b8',
                                            }}
                                            _active={{
                                                bg: '#0349b8',
                                            }}
                                            disabled={isLoading}
                                            onClick={() =>
                                                handelSubmit('discord')
                                            }
                                            rightIcon={<BsDiscord />}
                                        >
                                            {'Login Using Discord'}
                                            {isLoading && (
                                                <Spinner ml={2} color="white" />
                                            )}
                                        </Button>
                                    </Stack>
                                </Box>
                            </Stack>
                        </Flex>
                    </Flex>
                </Flex>
                <Image
                    src={
                        colorMode === 'light'
                            ? '/assets/Background-Images/grid2.svg'
                            : '/assets/Background-Images/grid3.svg'
                    }
                    alt={'bg-image'}
                    pos={'absolute'}
                    w={'100%'}
                    zIndex={-50}
                />
            </Flex>
        </Layout>
    );
};

export default Login;

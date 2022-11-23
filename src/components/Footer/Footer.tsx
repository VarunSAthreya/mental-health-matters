import {
    Box,
    Container,
    Flex,
    Icon,
    Link,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import {
    BsFacebook,
    BsGithub,
    BsInstagram,
    BsLinkedin,
    BsTwitter,
    BsYoutube,
} from 'react-icons/bs';
import { ISocialMedia } from '../../../types';
import Logo from '../Logo/Logo';
import SocialMedia from '../UI/SocialMedia';

const Footer: FunctionComponent = () => {
    const varun: ISocialMedia[] = [
        {
            icon: BsGithub,
            url: 'https://github.com/VarunSAthreya',
            text: 'GitHub',
        },
        {
            icon: BsLinkedin,
            url: 'https://www.linkedin.com/in/varunsathreya/',
            text: 'LinkedIn',
        },
    ];
    const sandeep: ISocialMedia[] = [
        {
            icon: BsGithub,
            url: 'https://github.com/Sandeep-M23',
            text: 'GitHub',
        },
        {
            icon: BsLinkedin,
            url: 'https://www.linkedin.com/in/sandeep-m-4a599a1a4/',
            text: 'LinkedIn',
        },
    ];

    return (
        <Box
            bg={useColorModeValue('gray.50', '#242526')}
            color={useColorModeValue('gray.700', 'gray.200')}
        >
            <Container as={Stack} maxW={'6xl'} py={6}>
                <Box py={6}>
                    <Flex
                        align={'center'}
                        _before={{
                            content: '""',
                            borderBottom: '3px solid',
                            borderColor: '#045DE9',
                            flexGrow: 1,
                            mr: 8,
                        }}
                        _after={{
                            content: '""',
                            borderBottom: '3px solid',
                            borderColor: '#045DE9',
                            flexGrow: 1,
                            ml: 8,
                        }}
                    >
                        <Logo width={'150px'} />
                    </Flex>
                </Box>
                <SimpleGrid columns={{ base: 2, md: 3 }} spacing={8}>
                    <Stack align={'flex-start'} alignItems={'flex-start'}>
                        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
                            Services
                        </Text>
                        <Text>Depression therapy</Text>
                        <Text>Individual therapy</Text>
                        <Text>Couples therapy</Text>
                        <Text>Children therapy</Text>
                    </Stack>
                    <Stack align={'flex-start'} alignItems={'center'}>
                        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
                            Follow Us
                        </Text>
                        <Box display={'flex'}>
                            <Box mr={3}>
                                <Text
                                    fontSize="md"
                                    display="flex"
                                    alignItems="center"
                                    _hover={{
                                        color: '#045DE9',
                                        textDecoration: 'none',
                                    }}
                                >
                                    <Icon
                                        boxSize={5}
                                        m={{ base: 2 }}
                                        as={BsFacebook}
                                    />
                                    <Link
                                        href="https://www.facebook.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                        _hover={{
                                            textDecoration: 'none',
                                        }}
                                        _focus={{ outline: 'none' }}
                                    >
                                        FaceBook
                                    </Link>
                                </Text>
                                <Text
                                    fontSize="md"
                                    display="flex"
                                    alignItems="center"
                                    _hover={{
                                        color: '#045DE9',
                                    }}
                                >
                                    <Icon
                                        boxSize={5}
                                        m={{ base: 2 }}
                                        as={BsInstagram}
                                    />
                                    <Link
                                        href="https://www.instagram.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                        _hover={{
                                            textDecoration: 'none',
                                        }}
                                        _focus={{ outline: 'none' }}
                                    >
                                        Instagram
                                    </Link>
                                </Text>
                            </Box>
                            <Box ml={3}>
                                <Text
                                    fontSize="md"
                                    display="flex"
                                    alignItems="center"
                                    _hover={{
                                        color: '#045DE9',
                                    }}
                                >
                                    <Icon
                                        boxSize={5}
                                        m={{ base: 2 }}
                                        as={BsTwitter}
                                    />
                                    <Link
                                        href="https://twitter.com/?lang=en"
                                        target="_blank"
                                        rel="noreferrer"
                                        _hover={{
                                            textDecoration: 'none',
                                        }}
                                        _focus={{ outline: 'none' }}
                                    >
                                        Twitter
                                    </Link>
                                </Text>
                                <Text
                                    fontSize="md"
                                    display="flex"
                                    alignItems="center"
                                    _hover={{
                                        color: '#045DE9',
                                    }}
                                >
                                    <Icon
                                        boxSize={5}
                                        m={{ base: 2 }}
                                        as={BsYoutube}
                                    />
                                    <Link
                                        href="https://www.youtube.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                        _hover={{
                                            textDecoration: 'none',
                                        }}
                                        _focus={{ outline: 'none' }}
                                    >
                                        Youtube
                                    </Link>
                                </Text>
                            </Box>
                        </Box>
                    </Stack>
                    <Stack align={'flex-start'} alignItems={'flex-end'}>
                        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
                            Designed And Developed By:
                        </Text>
                        <Box display={'flex'}>
                            <Box
                                mr={3}
                                display={'flex'}
                                flexDir={'column'}
                                alignItems={'center'}
                            >
                                <Text fontWeight={'500'} fontSize={'md'} mb={2}>
                                    Varun S Athreya
                                </Text>
                                {varun.map((data, index) => (
                                    <SocialMedia data={data} key={index} />
                                ))}
                            </Box>
                            <Box
                                ml={3}
                                display={'flex'}
                                flexDir={'column'}
                                alignItems={'center'}
                            >
                                <Text fontWeight={'500'} fontSize={'md'} mb={2}>
                                    Sandeep M
                                </Text>
                                {sandeep.map((data, index) => (
                                    <SocialMedia data={data} key={index} />
                                ))}
                            </Box>
                        </Box>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default Footer;

import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Flex,
    HStack,
    IconButton,
    Stack,
    useColorMode,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { FunctionComponent } from 'react';
import Logo from '../Logo/Logo';
import NavLink from './NavLink';

const Links = ['About', 'Blogs', 'TalkToExperts', 'Contact'];

const NavBar: FunctionComponent = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { status } = useSession();
    const bg = useColorModeValue('gray.100', '#242526');

    if (status === 'loading') return null;
    if (status === 'unauthenticated') {
        if (Links.includes('Dashboard'))
            Links.splice(Links.indexOf('Dashboard'), 1);
        if (!Links.includes('Login')) Links.push('Login');
    }

    if (status === 'authenticated') {
        if (Links.includes('Login')) Links.splice(Links.indexOf('Login'), 1);
        if (!Links.includes('Dashboard')) Links.push('Dashboard');
    }

    return (
        <>
            <Box bg={bg} px={4}>
                <Flex
                    h={16}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                >
                    <Flex
                        h={16}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                    >
                        <IconButton
                            size={'md'}
                            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                            aria-label={'Open Menu'}
                            display={{ md: 'none' }}
                            onClick={isOpen ? onClose : onOpen}
                        />
                        <HStack spacing={8} alignItems={'center'}>
                            <Logo />
                        </HStack>
                    </Flex>
                    <HStack spacing={8} alignItems={'center'}>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}
                        >
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </HStack>
                    </HStack>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Button
                                onClick={toggleColorMode}
                                _focus={{ outline: 'none' }}
                            >
                                {colorMode === 'light' ? (
                                    <MoonIcon />
                                ) : (
                                    <SunIcon />
                                )}
                            </Button>
                        </Stack>
                    </Flex>
                </Flex>
                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
};

export default NavBar;

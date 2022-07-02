import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from 'native-base';
import {
    Box,
    Button,
    Flex,
    HStack,
    IconButton,
    Stack,
    useColorMode,
    useColorModeValue,
    useDisclose,
} from 'native-base';
import React, { FunctionComponent } from 'react';
import Logo from '../Logo/Logo';
import NavLink from './NavLink';

const Links = ['About', 'Blogs', 'TalkToExperts', 'Contact'];

const NavBar: FunctionComponent = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclose();
    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
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
                            onPress={isOpen ? onClose : onOpen}
                        />
                        <HStack space={8} alignItems={'center'}>
                            <Logo />
                        </HStack>
                    </Flex>
                    <HStack space={8} alignItems={'center'}>
                        <HStack
                            
                            space={4}
                            display={{ base: 'none', md: 'flex' }}
                        >
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </HStack>
                    </HStack>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} space={7}>
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
                        <Stack  space={4}>
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

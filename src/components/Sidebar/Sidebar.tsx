import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    CloseButton,
    Drawer,
    DrawerContent,
    Flex,
    Icon,
    IconButton,
    Link,
    useColorMode,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { BsPersonCircle } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import { MdDashboard } from 'react-icons/md';
import IconBox from '../Icons/IconBox';
import Logo from '../Logo/Logo';

const routes = [
    { name: 'Dashboard', link: '/dashboard', icon: MdDashboard },
    { name: 'Profile', link: '/profile', icon: BsPersonCircle },
];

const SideBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box minH={{ base: 0, lg: '100vh' }}>
            <SidebarContent
                onClose={() => onClose}
                display={{ base: 'none', md: 'flex' }}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full"
            >
                <DrawerContent>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
            {/* mobilenav */}
            <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
        </Box>
    );
};

const SidebarContent = ({ onClose, ...rest }: any) => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box
            bg={useColorModeValue('white', '#242526')}
            w={{ base: 'full', md: 20 }}
            pos={{ base: 'static', md: 'fixed' }}
            borderRadius={{ base: 0, md: 8 }}
            left={2}
            flexDirection={'column'}
            justifyContent={'space-between'}
            top={6}
            h={{ base: '100%', lg: '95%' }}
            {...rest}
        >
            <Flex h="20" alignItems="center" justifyContent="space-between">
                <Box display={'flex'} alignItems={'center'}>
                    <Logo width={'75px'} />
                </Box>
                <CloseButton
                    display={{ base: 'flex', md: 'none' }}
                    onClick={onClose}
                />
            </Flex>
            <Flex flexDirection={'column'}>
                {routes.map((link) => (
                    <NavItem key={link.name} icon={link.icon} link={link.link}>
                        {link.name}
                    </NavItem>
                ))}
            </Flex>
            <Flex justify={'center'} pos={'relative'} bottom={0}>
                <Button
                    onClick={toggleColorMode}
                    _focus={{ outline: 'none' }}
                    variant="no-hover"
                    my={4}
                >
                    <IconBox
                        bg={colorMode === 'light' ? 'transparent' : 'white'}
                        border={
                            colorMode === 'light'
                                ? '1px solid black'
                                : 'transparent'
                        }
                        h="40px"
                        w="40px"
                        color={'black'}
                    >
                        <Icon
                            fontSize="16"
                            as={colorMode === 'light' ? MoonIcon : SunIcon}
                        />
                    </IconBox>
                </Button>
            </Flex>
        </Box>
    );
};

const NavItem = ({ icon, link, children, ...rest }: any) => {
    const router = useRouter();
    const navItemBg = useColorModeValue('transparent', 'white');
    const navItemBorder = useColorModeValue('1px solid black', 'transparent');

    return (
        <Link
            style={{ textDecoration: 'none' }}
            _focus={{ outline: 'none' }}
            href={link}
        >
            <Flex
                align="center"
                p="2"
                mx="2"
                borderRadius="lg"
                justifyContent={'center'}
                my={2}
                {...rest}
            >
                {icon && (
                    <IconBox
                        bg={
                            router.asPath === link
                                ? 'linear-gradient(310deg,#09C6F9,#045DE9)'
                                : navItemBg
                        }
                        border={
                            router.asPath === link
                                ? 'transparent'
                                : navItemBorder
                        }
                        h="40px"
                        w="40px"
                        color={router.asPath === link ? 'white' : 'black'}
                        _hover={{
                            bg: 'linear-gradient(310deg,#09C6F9,#045DE9)',
                            color: 'white',
                            border: 'none',
                        }}
                        transition="0.1s linear"
                    >
                        <Icon fontSize="16" as={icon} />
                    </IconBox>
                )}
            </Flex>
        </Link>
    );
};

const MobileNav = ({ onOpen, ...rest }: any) => {
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 24 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue('white', '#242526')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent="space-between"
            {...rest}
        >
            <IconButton
                variant="outline"
                onClick={onOpen}
                aria-label="open menu"
                icon={<FiMenu />}
            />

            <Logo width={'150px'} />
        </Flex>
    );
};

export default SideBar;

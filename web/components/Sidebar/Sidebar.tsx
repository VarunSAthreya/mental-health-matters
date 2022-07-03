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
    Text,
    useColorMode,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import {
  BsPersonCircle,
} from "react-icons/bs";
import { FiHome, FiMenu } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";
import IconBox from "../Icons/IconBox";
import Logo from '../Logo/Logo';
import Separator from "../Separator/Separator";

const routes = [
  { name: "Dashboard", link: "/dashboard", icon: MdDashboard },
  { name: "Profile", link: "/profile", icon: BsPersonCircle },
];

const SideBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH={{base:"10vh",lg:"100vh"}}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "flex" }}
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
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
    </Box>
  );
};

const SidebarContent = ({ onClose, ...rest }) => {
    const router = useRouter();

    const { colorMode, toggleColorMode } = useColorMode();
    return (
      <Box
        bg={useColorModeValue("white", "#242526")}
        w={{ base: "full", md: 72 }}
        pos={{ base: "static", md: "fixed" }}
        borderRadius={{ base: 0, md: 8 }}
        left={2}
        flexDirection={"column"}
        top={6}
        h={{ base: "100%", lg: "95%" }}
        {...rest}
      >
        <Flex h="20" alignItems="center" mx="6" justifyContent="space-between">
          <Box pt={"25px"} mb="12px">
            <Text
              fontSize="1.2rem"
              mt="3px"
              bgGradient="linear(to-r, #2980B9, #6DD5FA)"
              bgClip="text"
              fontWeight="bold"
              textTransform={"uppercase"}
              onClick={() => router.push(`/`)}
              cursor={"pointer"}
            >
              MENTAL HEALTH PORTAL
            </Text>
            <Separator></Separator>
          </Box>
          <CloseButton
            display={{ base: "flex", md: "none" }}
            onClick={onClose}
          />
        </Flex>
        <Flex flexDirection={"column"}>
          {routes.map((link) => (
            <NavItem key={link.name} icon={link.icon} link={link.link}>
              {link.name}
            </NavItem>
          ))}
        </Flex>
        <Flex justify={"center"} pos={"relative"} bottom={0}>
          <Button
            onClick={toggleColorMode}
            _focus={{ outline: "none" }}
            variant="no-hover"
            rightIcon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          >
            {colorMode === "light" ? (
              <Text mr={4}>DARK MODE</Text>
            ) : (
              <Text mr={4}>LIGHT MODE</Text>
            )}
          </Button>
        </Flex>
      </Box>
    );
};

const NavItem = ({ icon, link, children, ...rest }) => {
    const router = useRouter();
    const defaultColor = useColorModeValue('white', '#242526');
    const textColor = useColorModeValue('#242526', 'white');
    // console.log(router.asPath);
    // console.log({ link });

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
                role="group"
                cursor="pointer"
                bg={
                    router.asPath === link
                        ? 'linear-gradient( 310deg, #2980B9 0%, #6DD5FA 100%)'
                        : defaultColor
                }
                my={2}
                _hover={{
                    bg: 'linear-gradient( 310deg, #2980B9 0%, #6DD5FA 100%)',
                    color: 'white',
                }}
                {...rest}
            >
                {icon && (
                    <IconBox
                        bg={
                            router.asPath === link
                                ? 'white'
                                : 'linear-gradient( 310deg, #2980B9 0%, #6DD5FA 100%)'
                        }
                        h="40px"
                        w="40px"
                        color={router.asPath === link ? 'black' : 'white'}
                        me="12px"
                        _groupHover={{
                            bg: 'white',
                        }}
                        transition="0.2s linear"
                    >
                        <Icon
                            fontSize="16"
                            _groupHover={{
                                color: 'black',
                            }}
                            as={icon}
                        />
                    </IconBox>
                )}
                <Text
                    color={router.asPath === link ? 'white' : textColor}
                    my="auto"
                    fontSize="sm"
                    _groupHover={{
                        color: 'white',
                    }}
                >
                    {children}
                </Text>
            </Flex>
        </Link>
    );
};

const MobileNav = ({ onOpen, ...rest }) => {
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

            <Logo/>
        </Flex>
    );
};

export default SideBar;
import { Link, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const NavLink = ({ children }: { children: string }) => {
    const router = useRouter();
    const linkColor = useColorModeValue('black', 'white');
    return (
        <Link
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('#09C6F9', 'white'),
                color: useColorModeValue('white', '#09C6F9'),
            }}
            _focus={{ outline: 'none' }}
            bg={
                router.asPath === `/${children.toLowerCase()}`
                    ? '#09C6F9'
                    : 'transparent'
            }
            color={
                router.asPath === `/${children.toLowerCase()}`
                    ? 'white'
                    : linkColor
            }
            href={children.toString().toLowerCase()}
        >
            {children}
        </Link>
    );
};

export default NavLink;

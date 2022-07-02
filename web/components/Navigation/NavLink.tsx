import { Link, useColorModeValue } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { useRouter } from 'next/router';

const NavLink: FunctionComponent = ({ children }: { children: string }) => {
    const router = useRouter();
    return (
        <Link
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('#521262', 'white'),
                color: useColorModeValue('white', '#521262'),
            }}
            _focus={{ outline: 'none' }}
            bg={
                router.asPath === `/${children.toLowerCase()}`
                    ? '#521262'
                    : 'transparent'
            }
            color={
                router.asPath === `/${children.toLowerCase()}`
                    ? 'white'
                    : useColorModeValue('black', 'white')
            }
            href={children.toString().toLowerCase()}
        >
            {children}
        </Link>
    );
};

export default NavLink;

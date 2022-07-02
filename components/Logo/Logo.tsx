import { Box, Image, Link } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

const Logo: FunctionComponent = () => {
    return (
        <Box>
            <Link href="/" _focus={{ outline: 'none' }}>
                <Image
                    src="/assets/images/logo.png"
                    alt="Logo"
                    maxW={'150px'}
                    h={'auto'}
                />
            </Link>
        </Box>
    );
};

export default Logo;

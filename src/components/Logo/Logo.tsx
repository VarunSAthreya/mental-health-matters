import { Box, Image, Link } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

type Props = {
    width?: string;
};

const Logo: FunctionComponent<Props> = (props) => {
    const { width } = props;
    return (
        <Box>
            <Link href="/" _focus={{ outline: 'none' }}>
                <Image
                    src="/assets/images/logo.png"
                    alt="Logo"
                    maxW={width}
                    h={'auto'}
                    _focus={{ outline: 'none' }}
                />
            </Link>
        </Box>
    );
};

export default Logo;

import { Icon, Link, Text } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { ISocialMedia } from '../../@types';

type Props = {
    data: ISocialMedia;
};

const SocialMedia: FunctionComponent<Props> = ({ data }: Props) => {
    const { icon, url, text } = data;
    return (
        <Text
            fontSize="md"
            display="flex"
            alignItems="center"
            _hover={{
                color: '#521262',
                textDecoration: 'none',
            }}
        >
            <Icon boxSize={5} m={{ base: 2 }} as={icon} />
            <Link
                href={url}
                target="_blank"
                rel="noreferrer"
                _hover={{
                    textDecoration: 'none',
                }}
                _focus={{ outline: 'none' }}
            >
                {text}
            </Link>
        </Text>
    );
};

export default SocialMedia;

import { Flex, Icon, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';
import type { IconType } from 'react-icons';

type Props = {
    icon: IconType;
    title: string;
    description: string;
};

export const CredentialsCard: FC<Props> = ({ icon, title, description }) => {
    return (
        <Stack
            alignItems={'center'}
            my={4}
            backgroundColor={'white'}
            p={8}
            borderRadius={8}
        >
            <Flex
                w={16}
                h={16}
                align={'center'}
                justify={'center'}
                color={'#045DE9'}
                rounded={'full'}
                bg={'#c6dcffe8'}
                mb={1}
            >
                <Icon as={icon} w={10} h={10} />
            </Flex>
            <Text color={'gray.700'} fontWeight={700}>
                {title}
            </Text>
            <Text color={'gray.600'} textAlign={'center'}>
                {description}
            </Text>
        </Stack>
    );
};

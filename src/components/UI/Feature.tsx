import { Flex, Icon, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';
import type { IFeature } from '../../../types';

type Props = {
    data: IFeature;
};

const Feature: FC<Props> = ({ data }: Props) => {
    const { icon, text, iconBg, color } = data;

    return (
        <Stack direction={'row'} align={'center'}>
            <Flex
                w={10}
                h={10}
                align={'center'}
                justify={'center'}
                rounded={'full'}
                bg={iconBg}
            >
                <Icon as={icon} boxSize={8} m={{ base: 2 }} color={color} />
            </Flex>
            <Text fontWeight={600} color={'gray.500'}>
                {text}
            </Text>
        </Stack>
    );
};

export default Feature;

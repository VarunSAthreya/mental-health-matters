import { Flex, Icon, Stack, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import { IFeature } from '../../@types';

type Props = {
    data: IFeature;
};

const Feature: NextPage<Props> = ({ data }: Props) => {
    const { icon, text, iconBg, color } = data;

    return (
        <Stack direction={'row'} align={'center'}>
            <Flex
                w={8}
                h={8}
                align={'center'}
                justify={'center'}
                rounded={'full'}
                bg={iconBg}
            >
                <Icon as={icon} boxSize={8} m={{ base: 2 }} color={color} />
            </Flex>
            <Text fontWeight={600}>{text}</Text>
        </Stack>
    );
};

export default Feature;

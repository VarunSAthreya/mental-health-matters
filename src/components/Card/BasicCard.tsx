import {
    Box,
    Center,
    Flex,
    Heading,
    Icon,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { IBasicCard } from '../../../types';

type Props = {
    data: IBasicCard;
};

const BasicCard: FunctionComponent<Props> = ({ data }: Props) => {
    const { icon, description, title } = data;

    return (
        <Center py={6}>
            <Box
                maxW={'320px'}
                w={'full'}
                display={'flex'}
                flexDir={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                bg={useColorModeValue('white', '#242526')}
                boxShadow={'2xl'}
                rounded={'lg'}
                p={6}
                textAlign={'center'}
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
                <Heading fontSize={'2xl'}>{title}</Heading>
                <Text color={'gray.500'} my={4}>
                    {description}
                </Text>
            </Box>
        </Center>
    );
};

export default BasicCard;

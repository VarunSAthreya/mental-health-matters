import {
    Box,
    Center,
    Heading,
    Image,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { IService } from '../../@types';

type Props = {
    data: IService;
};

const ServiceCard: FunctionComponent<Props> = ({ data }: Props) => {
    const { imageUrl, title, description } = data;

    return (
        <Center py={3}>
            <Box
                p={6}
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'lg'}
            >
                <Image
                    rounded={'lg'}
                    height={230}
                    width={282}
                    objectFit={'cover'}
                    src={imageUrl}
                />
                <Stack my={6}>
                    <Heading fontSize={'2xl'}>{title}</Heading>
                    <Text color={'gray.500'} my={4}>
                        {description}
                    </Text>
                </Stack>
            </Box>
        </Center>
    );
};

export default ServiceCard;

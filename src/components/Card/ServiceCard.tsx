import { Box, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { IService } from "../../@types";

type Props = {
    data: IService;
};

const ServiceCard: FunctionComponent<Props> = ({ data }: Props) => {
    const { imageUrl, title, description, direction } = data;

    return (
        <Box
            p={6}
            display={'flex'}
            // flexDir={{ base: "column", md: direction }}
            w={'full'}
            alignItems={'center'}
            bg={useColorModeValue('white', '#242526')}
            boxShadow={'2xl'}
            rounded={'lg'}
        >
            <Image
                rounded={'lg'}
                height={180}
                width={252}
                objectFit={'cover'}
                src={imageUrl}
                alt="Service Images"
            />
            <Box
                my={6}
                display="flex"
                flexDirection={'column'}
                justifyContent="space-around"
            >
                <Heading
                    lineHeight={1.1}
                    textAlign={'center'}
                    fontWeight={600}
                    fontSize={{ base: '3xl', md: '4xl' }}
                >
                    {title}
                </Heading>
                <Text color={'gray.500'} my={4}>
                    {description}
                </Text>
            </Box>
        </Box>
    );
};

export default ServiceCard;

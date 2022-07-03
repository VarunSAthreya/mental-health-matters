import {
    Box,
    Center,
    Heading,
    Icon,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import { IBasicCard } from "../../@types";

type Props = {
    data: IBasicCard;
};

const BasicCard: FunctionComponent<Props> = ({ data }: Props) => {
    const { icon, description, title } = data;

    return (
        <Center py={6}>
            <Box
                maxW={"320px"}
                w={"full"}
                bg={useColorModeValue("white", "#242526")}
                boxShadow={"2xl"}
                rounded={"lg"}
                p={6}
                textAlign={"center"}
            >
                <Icon as={icon} boxSize={12} m={{ base: 2 }} color="#FF4331" />
                <Heading fontSize={"2xl"}>{title}</Heading>
                <Text color={"gray.500"} my={4}>
                    {description}
                </Text>
            </Box>
        </Center>
    );
};

export default BasicCard;

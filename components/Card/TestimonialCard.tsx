import {
    Avatar,
    Box,
    Flex,
    Heading,
    Stack,
    Text,
    useColorModeValue,
} from "native-base";
import React, { FunctionComponent } from "react";
import { ITestimonial } from "../../@types";

type Props = {
    data: ITestimonial;
};

const TestimonialCard: FunctionComponent<Props> = ({ data }: Props) => {
    const { heading, designation, imageUrl, review, name } = data;

    return (
        <Box>
            <Stack
                bg={useColorModeValue("white", "gray.900")}
                shadow={"lg"}
                p={8}
                rounded={"xl"}
                alignSelf={"center"}
                position={"relative"}
            >
                <Heading fontSize={"xl"}>{heading}</Heading>
                <Text
                    textAlign={"center"}
                    color={useColorModeValue("gray.600", "gray.400")}
                    fontSize={"sm"}
                >
                    {review}
                </Text>
            </Stack>
            <Flex align={"center"} mt={8} direction={"column"}>
                <Avatar source={{ uri: imageUrl }} mb={2} />
                <Stack space={-1} alignSelf={"center"}>
                    <Text fontWeight={600}>{name}</Text>
                    <Text
                        fontSize={"sm"}
                        color={useColorModeValue("gray.600", "gray.400")}
                    >
                        {designation}
                    </Text>
                </Stack>
            </Flex>
        </Box>
    );
};

export default TestimonialCard;

import {
    Box,
    Center,
    Heading,
    Image,
    Stack,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import { IService } from "../../@types";

type Props = {
    data: IService;
};

const ServiceCard: FunctionComponent<Props> = ({ data }: Props) => {
    const { imageUrl, title, description, direction } = data;

    return (
      <Box
        p={6}
        display={"flex"}
        flexDir={direction}
        w={"full"}
        alignItems={"center"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
      >
        <Image
          rounded={"lg"}
          height={230}
          width={282}
          objectFit={"cover"}
          src={imageUrl}
          alt="Service Images"
        />
        <Box
          my={6}
          display="flex"
          flexDirection={"column"}
          justifyContent="space-around"
        >
          <Heading fontSize={"4xl"}>{title}</Heading>
          <Text color={"gray.500"} my={8}>
            {description}
          </Text>
        </Box>
      </Box>
    );
};

export default ServiceCard;

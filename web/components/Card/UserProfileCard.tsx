import {
  Avatar,
  Box,
  Button,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { FC } from "react";
import Separator from "../Separator/Separator";

type Props = {
  User: {
    USN?: string;
    year?: number;
    name?: string;
    email?: string;
    branch?: Branch;
    section?: Section;
    CGPA?: number;
    backlogs?: number;
    tenth?: number;
    twelth?: number;
  };
};

const UserProfileCard: FC<Props> = () => {
  const router = useRouter();

  return (
    <Box
      bg={useColorModeValue("white", "#242526")}
      mb={4}
      borderRadius={8}
      display={"flex"}
      flexDirection={"column"}
    >
      <Box display={"flex"} flexDirection={"row"}>
        <Flex
          align="center"
          mb={{ sm: "10px", md: "0px" }}
          direction={{ sm: "column" }}
          justify={"center"}
          p="5px"
          textAlign={{ sm: "center", md: "start" }}
        >
          <Avatar
            me={{ md: "22px" }}
            name={'Bindu'}
            color={"white"}
            bg={"linear-gradient( 310deg, #7928CA 0%, #FF0080 100%)"}
            w="70px"
            h="70px"
            borderRadius="15px"
          />
          <Flex direction="column" maxWidth="100%" my={{ sm: "14px" }}>
            <Text
              fontSize={{ sm: "lg", lg: "2.3rem" }}
              color={useColorModeValue("black", "white")}
              fontWeight="bold"
              ms={{ sm: "8px", md: "0px" }}
            >
             Rahul
            </Text>
          </Flex>
        </Flex>
        <Box>
        <Flex
            align="center"
            justifyContent="space-between"
            mb="12px"
            borderRadius={8}
            bg={"#f8f9fa"}
            p={3}
          >
            <Text
              fontSize="md"
              color={"gray.500"}
              me="10px"
              fontWeight={"semibold"}
            >
              CGPA
            </Text>
            <Text fontSize="md" color="black" fontWeight={"semibold"}>
              100
            </Text>
          </Flex>
          <Flex
            align="center"
            justifyContent="space-between"
            mb="12px"
            borderRadius={8}
            bg={"#f8f9fa"}
            p={3}
          >
            <Text
              fontSize="md"
              color={"gray.500"}
              me="10px"
              fontWeight={"semibold"}
            >
              10TH MARK&apos;S PERCENTAGE
            </Text>
            <Text fontSize="md" color="black" fontWeight={"semibold"}>
              100
            </Text>
          </Flex>
          <Flex
            align="center"
            justifyContent="space-between"
            mb="12px"
            borderRadius={8}
            bg={"#f8f9fa"}
            p={3}
          >
            <Text
              fontSize="md"
              color={"gray.500"}
              me="10px"
              fontWeight={"semibold"}
            >
              12TH MARK&apos;S PERCENTAGE
            </Text>
            <Text fontSize="md" color="black" fontWeight={"semibold"}>
              100
            </Text>
          </Flex>
          <Flex
            align="center"
            justifyContent="space-between"
            mb="12px"
            borderRadius={8}
            bg={"#f8f9fa"}
            p={3}
          >
            <Text
              fontSize="md"
              color={"gray.500"}
              me="10px"
              fontWeight={"semibold"}
            >
              BACKLOGS
            </Text>
            <Text fontSize="md" color="black" fontWeight={"semibold"}>
              100
            </Text>
          </Flex>
        </Box>

      </Box>
    </Box>
  );
};

export default UserProfileCard;

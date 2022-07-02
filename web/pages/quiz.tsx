import React from "react";
import {
  Box,
  Flex,
  Grid,
  SimpleGrid,
  Stack,
  Heading,
  Text,
  Center,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  BsBuilding,
  BsFillPersonLinesFill,
  BsPeople,
  BsPersonPlus,
} from "react-icons/bs";
import SideBar from "../components/Sidebar/Sidebar";
import StatsCard from "../components/Card/StatsCard";

const Quiz = () => {
  const primaryBG = useColorModeValue("#f8f9fa", "#18191A");
  const secondaryBG = useColorModeValue("white", "#242526");
  const textHeight = useBreakpointValue({ base: "20%", md: "30%" });

  return (
    <Flex flexDirection={"row"} bg={primaryBG}>
      <SideBar />
      <Flex
        flexDirection="column"
        pt={{ base: "120px", md: "25px" }}
        marginLeft={"295px"}
        width={"100%"}
        p={4}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          bg={secondaryBG}
          borderRadius={8}
        >
          <Flex p={6} flexDir={"column"} justifyContent={"flex-start"}>
            <Heading fontSize={{ base: "3xl" }}>
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: textHeight,
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  zIndex: -1,
                }}
              >
                WELCOME TO
              </Text>
              <br />{" "}
              <Text
                as={"span"}
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontSize="4xl"
                fontWeight="extrabold"
                textTransform={"uppercase"}
              >
                Placement Portal
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"} mt={3}>
              Here You get all the details about the upcoming company&apos;s
              visting our college and all there package details.
            </Text>
          </Flex>
        </Stack>
        <Grid templateColumns={{ sm: "1fr" }} gap="22px" mt={8}>
          <Box
            p="16px"
            my={{ sm: "24px", xl: "0px" }}
            bg={secondaryBG}
            borderRadius={8}
          >
            <Box p="12px 5px" mb="12px">
              <Text
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontSize="2xl"
                fontWeight="extrabold"
                textTransform={"uppercase"}
              >
                Quiz
              </Text>
            </Box>
            <Box bg="red" px="5px" borderRadius={5}>
              <Center>
                <Text fontSize="xl" mt={"4"}>
                  No Upcoming Companies
                </Text>
              </Center>
              <Center>
                <Text fontSize="xl" mt={"4"}>
                  No Upcoming Companies
                </Text>
              </Center>
              <Center>
                <Text fontSize="xl" mt={"4"}>
                  No Upcoming Companies
                </Text>
              </Center>
            </Box>
          </Box>
        </Grid>
      </Flex>
    </Flex>
  );
};

export default Quiz;

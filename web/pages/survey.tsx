import React, { useState } from "react";
import {
  Box,
  Flex,
  Grid,
  SimpleGrid,
  Stack,
  Heading,
  Text,
  Center,
  Select,
  useColorModeValue,
  Button,
  useBreakpointValue,
  useToast,
} from "@chakra-ui/react";
import SideBar from "../components/Sidebar/Sidebar";
import { ISurvey } from "../@types";
import { Spinner } from "native-base";
import { addSurvey } from "../function";
import { useAuth } from "../hooks/auth";
import { useRouter } from "next/router";

const Survey = () => {
  const primaryBG = useColorModeValue("#f8f9fa", "#18191A");
  const secondaryBG = useColorModeValue("white", "#242526");
  const textHeight = useBreakpointValue({ base: "20%", md: "30%" });
  const questions: ISurvey[] = [
    {
      question: "Overall how would you rate your physical health?",
      options: [
        "Excellent",
        "Somewhat Good",
        "Average",
        "Somewhat Poor",
        "Poor",
        "Not Sure",
      ],
    },
    {
      question: "Overall how would you rate your mental health?",
      options: [
        "Excellent",
        "Somewhat Good",
        "Average",
        "Somewhat Poor",
        "Poor",
        "Not Sure",
      ],
    },
    {
      question:
        "During the past 4 weeks, have you had any problems with your work or daily life due to your physical health?",
      options: ["Yes", "No", "Not Sure"],
    },
    {
      question:
        "During the past 4 weeks, have you had any problems with your work or daily life due to any emotional problems, such as feeling depressed, sad or anxious? ",
      options: ["Yes", "No", "Not Sure"],
    },
    {
      question:
        "During the past 4 weeks, how often has your mental health affected your ability to get work done?",
      options: ["Very Often", "Somewhat Often", "Not Often", "Not At All"],
    },
    {
      question:
        "Have you felt particularly low or down for more than 2 weeks in a row?",
      options: ["Very Often", "Somewhat Often", "Not Often", "Not At All"],
    },
    {
      question:
        "During the past two weeks, how often has your mental health affected your relationships?",
      options: ["Very Often", "Somewhat Often", "Not Often", "Not At All"],
    },
    {
      question: "Have you noticed any change in your diet habits?",
      options: [
        "Yes, I eat too much",
        "Yes, I dont't very much",
        "Not Much",
        "No Change",
      ],
    },
    {
      question: "When was the last time you were really happy?",
      options: [
        "Few days ago",
        "Few weeks ago",
        "Few moth ago",
        "Few years ago",
        "I dont't know",
      ],
    },
    {
      question: "How often do you feel positive about your life?",
      options: [
        "Never",
        "Once in a while",
        "Almost half of the time",
        "Most of the time",
        "Always",
      ],
    },
    {
      question: "What is your relationship status?",
      options: ["Single", "Married", "Divorced", "Windowed", "Separated"],
    },
  ];

  let answers: { question: string; answer: string }[] = [];
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
  const toast = useToast();
  const router = useRouter();

  const handleSubmit = async () => {
    console.log("HEY");

    try {
      setIsLoading(true);
      console.log(answers);
      await addSurvey({ answers, userId: user.uid });
      toast({
        title: "Success",
        description: "Survey submitted successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Flex flexDirection={{ base: "column", lg: "row" }} bg={primaryBG}>
      <SideBar />
      <Flex
        flexDirection="column"
        pt={{ base: "120px", md: "25px" }}
        marginLeft={{ base: 0, lg: "295px" }}
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
                bgGradient="linear(310deg,#FF4331,#D31A50)"
                bgClip="text"
                fontSize="4xl"
                fontWeight="extrabold"
                textTransform={"uppercase"}
              >
                SURVEY PANEL
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"} mt={3}>
              This Survey is conducted in order to understand your metal health
              status. So we can treat you better!
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
                bgGradient="linear(310deg,#FF4331,#D31A50)"
                bgClip="text"
                fontSize="2xl"
                fontWeight="extrabold"
                textTransform={"uppercase"}
              >
                Survey
              </Text>
            </Box>
            <Box px="5px" my={4} borderRadius={5}>
              {questions.map((question) => (
                <React.Fragment key={question.question}>
                  <Box my={8} borderRadius={"5px"}>
                    <Text
                      fontSize={{ base: "lg", md: "xl" }}
                      px={2}
                      bg={"white"}
                      color="black"
                      borderTopRightRadius={"5px"}
                      borderTopLeftRadius={"5px"}
                    >
                      {question.question}
                    </Text>
                    <Select
                      borderTopLeftRadius={0}
                      borderTopRightRadius={0}
                      placeholder="Select an option"
                      variant="filled"
                      _focus={{outline:"none"}}
                      mr={2}
                      onChange={(e) =>
                        (answers = [
                          ...answers,
                          {
                            question: question.question,
                            answer: e.target.value,
                          },
                        ])
                      }
                    >
                      {question.options.map((option) => (
                        <option key={option} value={option} style={{backgroundColor:"white",color:"black"}}>
                          {option}
                        </option>
                      ))}
                    </Select>
                  </Box>
                </React.Fragment>
              ))}
            </Box>
            <Button disabled={isLoading} onClick={handleSubmit}>
              Submit Answers {isLoading && <Spinner ml={2} color="white" />}
            </Button>
          </Box>
        </Grid>
      </Flex>
    </Flex>
  );
};

export default Survey;

/* eslint-disable react/no-children-prop */
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    VStack,
    WrapItem,
} from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';

const ContactCard: FunctionComponent = () => {
    return (
        <Box p={4}>
            <WrapItem>
                <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                        <VStack
                            spacing={5}
                            width={{ lg: '3xl', md: 'xl', sm: 'xl' }}
                        >
                            <FormControl id="name">
                                <FormLabel>Your Name</FormLabel>
                                <InputGroup borderColor="#E0E1E7">
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<BsPerson color="gray.800" />}
                                    />
                                    <Input type="text" size="lg" />
                                </InputGroup>
                            </FormControl>
                            <FormControl id="name">
                                <FormLabel>Mail</FormLabel>
                                <InputGroup borderColor="#E0E1E7">
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={
                                            <MdOutlineEmail color="gray.800" />
                                        }
                                    />
                                    <Input type="text" size="lg" />
                                </InputGroup>
                            </FormControl>
                            <FormControl id="name">
                                <FormLabel>Message</FormLabel>
                                <Textarea
                                    borderColor="gray.300"
                                    _hover={{
                                        borderRadius: 'gray.300',
                                    }}
                                    placeholder="message"
                                />
                            </FormControl>
                            <FormControl id="name" float="right">
                                <Button
                                    variant="solid"
                                    bg="#521262"
                                    color="white"
                                    _hover={{}}
                                >
                                    Send Message
                                </Button>
                            </FormControl>
                        </VStack>
                    </Box>
                </Box>
            </WrapItem>
        </Box>
    );
};

export default ContactCard;

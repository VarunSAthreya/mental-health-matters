/* eslint-disable react/no-children-prop */
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Spinner,
    Textarea,
    useToast,
    VStack,
    WrapItem,
} from '@chakra-ui/react';
import { FunctionComponent, useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';

const ContactCard: FunctionComponent = () => {
    const toast = useToast();

    const [data, setData] = useState({
        name: '',
        email: '',
        message: '',
        createdAt: new Date().toISOString(),
    });
    const [isLoading, setIsLoading] = useState(false);

    const handelSubmit = async (e: any) => {
        e.preventDefault();
        if ((data.name === '', data.email === '', data.message === '')) {
            toast({
                title: 'Please fill all the fields',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
            return;
        }

        try {
            setIsLoading(true);
            console.log(data);
            // await addDoc(collection(db, "contact"), data);
            toast({
                title: 'Message sent successfully',
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
            setData({
                name: '',
                email: '',
                message: '',
                createdAt: new Date().toISOString(),
            });
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };

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
                                    <Input
                                        type="text"
                                        value={data.name}
                                        size="lg"
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                name: e.target.value,
                                            })
                                        }
                                    />
                                </InputGroup>
                            </FormControl>
                            <FormControl id="email">
                                <FormLabel>Mail</FormLabel>
                                <InputGroup borderColor="#E0E1E7">
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={
                                            <MdOutlineEmail color="gray.800" />
                                        }
                                    />
                                    <Input
                                        type="text"
                                        size="lg"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                email: e.target.value,
                                            })
                                        }
                                    />
                                </InputGroup>
                            </FormControl>
                            <FormControl id="message">
                                <FormLabel>Message</FormLabel>
                                <Textarea
                                    borderColor="gray.300"
                                    _hover={{
                                        borderRadius: 'gray.300',
                                    }}
                                    value={data.message}
                                    placeholder="message"
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            message: e.target.value,
                                        })
                                    }
                                />
                            </FormControl>
                            <FormControl id="name" float="right">
                                <Button
                                    variant="solid"
                                    bg="#FF4331"
                                    color="white"
                                    _hover={{}}
                                    disabled={isLoading}
                                    onClick={handelSubmit}
                                >
                                    Send Message{' '}
                                    {isLoading && (
                                        <Spinner ml={2} color="white" />
                                    )}
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

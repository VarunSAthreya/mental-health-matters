/* eslint-disable react/no-children-prop */
import {
    Box,
    Button,
    FormControl,
    Flex,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Heading,
    Text,
    Spinner,
    Textarea,
    useToast,
    VStack,
    WrapItem,
    Icon,
    Grid,
    Stack,
    GridItem,
    useColorModeValue
} from '@chakra-ui/react';
import { FunctionComponent, useState } from 'react';
import { AiFillRead } from 'react-icons/ai';
import { MdEmail, MdPhone } from "react-icons/md";
import {HiLocationMarker} from 'react-icons/hi';
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
        <Box display={'flex'} alignItems={'center'}>
            <Box
            position={'relative'}
            left={'90px'}
            w={'350px'}
                h={'60vh'}
                bg={'linear-gradient(310deg, #09C6F9, #045DE9)'}
                display={'flex'}
                justifyContent={'center'}
                borderRadius={8}
                backgroundPosition={'top'}
            >
                <Grid templateColumns="repeat(2, 1fr)" gap={4} py={5} px={8}>
                    <GridItem colSpan={2}>
                        <Stack
                            alignItems={'center'}
                            backgroundColor={'white'}
                            p={4}
                            spacing={0}
                            borderRadius={8}
                        >
                            <Flex
                                w={10}
                                h={10}
                                align={'center'}
                                justify={'center'}
                                color={'#045DE9'}
                                rounded={'full'}
                                bg={'#c6dcffe8'}
                                mb={1}
                            >
                                <Icon as={HiLocationMarker} w={6} h={6} />
                            </Flex>
                            <Text fontWeight={600} color={useColorModeValue('#E9EFF2', '#0D120E')}>Our Main Office</Text>
                            <Text color={'gray.500'} textAlign={'center'}>
                                2231 Sycamore Lake Road
                            </Text>
                        </Stack>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Stack
                            alignItems={'center'}
                            backgroundColor={'white'}
                            p={4}
                            borderRadius={8}
                            spacing={0}
                        >
                            <Flex
                                w={10}
                                h={10}
                                align={'center'}
                                justify={'center'}
                                color={'#045DE9'}
                                rounded={'full'}
                                bg={'#c6dcffe8'}
                                mb={1}
                            >
                                <Icon as={MdPhone} w={6} h={6} />
                            </Flex>
                            <Text fontWeight={600} color={useColorModeValue('#E9EFF2', '#0D120E')}>Phone Number</Text>
                            <Text color={'gray.500'} textAlign={'center'}>
                                +91 80 8861 1802
                            </Text>
                        </Stack>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Stack
                            alignItems={'center'}
                            backgroundColor={'white'}
                            p={4}
                            borderRadius={8}
                            spacing={0}
                        >
                            <Flex
                                w={10}
                                h={10}
                                align={'center'}
                                justify={'center'}
                                color={'#045DE9'}
                                rounded={'full'}
                                bg={'#c6dcffe8'}
                                mb={1}
                            >
                                <Icon as={MdEmail} w={6} h={6} />
                            </Flex>
                            <Text fontWeight={600} color={useColorModeValue('#E9EFF2', '#0D120E')}>Email</Text>
                            <Text color={'gray.500'} textAlign={'center'}>
                                HmH@gmail.com
                            </Text>
                        </Stack>
                    </GridItem>
                </Grid>
            </Box>
            <WrapItem>
                <Box bg="white" borderRadius={8}>
                    <Box m={8} color="#0B0E3F" width={'80%'}>
                        <VStack
                            spacing={5}
                            width={{ lg: '2xl', md: 'xl', sm: 'xl' }}
                        >
                            <Box>
                                <Heading
                                    textAlign={'center'}
                                    mb={4}
                                    p={2}
                                    color={'white'}
                                    fontWeight={800}
                                    textTransform={'uppercase'}
                                >
                                    <Text
                                        as={'span'}
                                        position={'relative'}
                                        bgGradient="linear(310deg,#09C6F9,#045DE9)"
                                        bgClip="text"
                                        _after={{
                                            content: "''",
                                            width: 'full',
                                            height: '2%',
                                            position: 'absolute',
                                            bottom: 1,
                                            left: 0,
                                            bg: 'linear-gradient(310deg,#09C6F9,#045DE9)',
                                        }}
                                    >
                                        Leave a Message.
                                    </Text>
                                </Heading>
                            </Box>
                            <FormControl id="name" width={'70%'}>
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
                            <FormControl id="email"  width={'70%'}>
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
                            <FormControl id="message"  width={'70%'}>
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
                            <FormControl id="name" display={'flex'} justifyContent={'center'}>
                                <Button
                                    bg={
                                        'linear-gradient(310deg, #09C6F9, #045DE9)'
                                    }
                                    color={'white'}
                                    variant={'solid'}
                                    _focus={{ outline: 'none' }}
                                    _active={{
                                        bg: 'linear-gradient(310deg, #079bc3, #0349b8)',
                                    }}
                                    _hover={{
                                        bg: 'linear-gradient(310deg, #079bc3, #0349b8)',
                                    }}
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

/* eslint-disable react-hooks/rules-of-hooks */
import {
    Box,
    Button,
    Heading,
    Image,
    Link,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { FC } from 'react';
import type { IBlog } from '../../../types';

type Props = {
    blog: IBlog;
};

const BlogCard: FC<Props> = ({ blog }: Props) => {
    const color = useColorModeValue('gray.700', 'gray.200');

    if (blog.id % 2 === 0) {
        return (
            <Box
                marginTop={{ base: '1', sm: '5' }}
                display="flex"
                flexDirection={{ base: 'column', sm: 'row' }}
                justifyContent="space-between"
            >
                <Box
                    display="flex"
                    flex="1"
                    marginRight="3"
                    position="relative"
                    alignItems="center"
                >
                    <Box
                        width={{ base: '100%', sm: '85%' }}
                        zIndex="2"
                        marginLeft={{ base: '0', sm: '5%' }}
                        marginTop="5%"
                    >
                        <Image
                            borderRadius="lg"
                            src={blog.url}
                            alt="some good alt text"
                            objectFit="contain"
                        />
                    </Box>
                </Box>
                <Box
                    display="flex"
                    flex="1"
                    flexDirection="column"
                    justifyContent="space-evenly"
                    marginTop={{ base: '3', sm: '0' }}
                >
                    <Heading marginTop="1">
                        <Link
                            textDecoration="none"
                            _hover={{ textDecoration: 'none' }}
                        >
                            {blog.title}
                        </Link>
                    </Heading>
                    <Text as="p" marginTop="2" color={color} fontSize="lg">
                        {blog.description}
                    </Text>
                    <a
                        href={blog.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button bgColor={'#FF4331'}>Read More</Button>
                    </a>
                </Box>
            </Box>
        );
    } else {
        return (
            <Box
                marginTop={{ base: '1', sm: '5' }}
                display="flex"
                flexDirection={{ base: 'column', sm: 'row' }}
                justifyContent="space-between"
            >
                <Box
                    display="flex"
                    flex="1"
                    flexDirection="column"
                    justifyContent="space-evenly"
                    marginTop={{ base: '3', sm: '0' }}
                >
                    <Heading marginTop="1">
                        <Link
                            textDecoration="none"
                            _hover={{ textDecoration: 'none' }}
                        >
                            {blog.title}
                        </Link>
                    </Heading>
                    <Text as="p" marginTop="2" color={color} fontSize="lg">
                        {blog.description}
                    </Text>
                    <a
                        href={blog.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button colorScheme={'#FF4331'} variant={'outline'}>
                            Read More
                        </Button>
                    </a>
                </Box>
                <Box
                    display="flex"
                    flex="1"
                    marginRight="3"
                    position="relative"
                    alignItems="center"
                >
                    <Box
                        width={{ base: '100%', sm: '85%' }}
                        zIndex="2"
                        marginLeft={{ base: '0', sm: '5%' }}
                        marginTop="5%"
                    >
                        <Image
                            borderRadius="lg"
                            src={blog.url}
                            alt="some good alt text"
                            objectFit="contain"
                        />
                    </Box>
                </Box>
            </Box>
        );
    }
};

export default BlogCard;

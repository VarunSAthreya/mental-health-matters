import { Center, Spinner, useColorModeValue } from "@chakra-ui/react";
import { FC } from "react";

const Loader: FC = () => {
    return (
        <Center h="100vh">
            <Spinner
                thickness="10px"
                emptyColor={"#079bc3"}
                color="#00aaff00"
                h={24}
                w={24}
            />
        </Center>
    );
};

export default Loader;

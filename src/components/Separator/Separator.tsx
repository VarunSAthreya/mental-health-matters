import { Flex } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

type Props = {
    children?: ReactNode;
};

const Separator: FC<Props> = (props) => {
    const { children, ...rest } = props;
    return (
        <Flex
            h="4px"
            w="100%"
            bg="linear-gradient(310deg,#FF4331,#D31A50)"
            {...rest}
        >
            {children}
        </Flex>
    );
};

export default Separator;

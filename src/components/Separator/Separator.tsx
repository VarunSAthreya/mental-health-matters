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
            bg="linear-gradient(310deg,#09C6F9,#045DE9)"
            {...rest}
        >
            {children}
        </Flex>
    );
};

export default Separator;

import { Box, Image, Link } from "native-base";
import React, { FunctionComponent } from "react";

const Logo: FunctionComponent = () => {
    return (
        <Box>
            {/* <Link href="/" _focus={{ outline: 'none' }}> */}
            <Link href="/">
                <Image
                    src="/assets/images/logo.png"
                    alt="Logo"
                    maxW={"150px"}
                    h={"auto"}
                />
            </Link>
        </Box>
    );
};

export default Logo;

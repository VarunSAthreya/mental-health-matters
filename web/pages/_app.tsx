import { NativeBaseProvider } from "native-base";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from '../styles/theme';
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <NativeBaseProvider>
                <Component {...pageProps} />
            </NativeBaseProvider>
        </ChakraProvider>
    );
}

export default MyApp;

import { extendTheme, NativeBaseProvider, theme as nbTheme } from "native-base";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
    const theme = extendTheme({
        colors: {
            primary: nbTheme.colors.violet,
        },
    });

    return (
        <ChakraProvider>
            <NativeBaseProvider theme={theme} isSSR>
                <Component {...pageProps} />
            </NativeBaseProvider>
        </ChakraProvider>
    );
}

export default MyApp;

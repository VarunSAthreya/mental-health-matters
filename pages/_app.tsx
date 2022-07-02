import { extendTheme, NativeBaseProvider, theme as nbTheme } from "native-base";
import type { AppProps } from "next/app";
import React from "react";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    const theme = extendTheme({
        colors: {
            primary: nbTheme.colors.violet,
        },
    });

    return (
        <NativeBaseProvider theme={theme} isSSR>
            <Component {...pageProps} />
        </NativeBaseProvider>
    );
}

export default MyApp;

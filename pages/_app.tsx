import { extendTheme, NativeBaseProvider, theme as nbTheme } from "native-base";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import React from "react";
import ProtectedRoute from "../components/ProtectedRoute";
import { AuthContextProvider } from "../hooks/auth";

const noAuthRequired = ["/", "/login", "/signup"];

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    const theme = extendTheme({
        colors: {
            primary: nbTheme.colors.violet,
        },
    });

    const router = useRouter();

    return (
        <NativeBaseProvider theme={theme} isSSR>
            <AuthContextProvider>
                {noAuthRequired.includes(router.pathname) ? (
                    <Component {...pageProps} />
                ) : (
                    <ProtectedRoute>
                        <Component {...pageProps} />
                    </ProtectedRoute>
                )}
            </AuthContextProvider>
        </NativeBaseProvider>
    );
}

export default MyApp;

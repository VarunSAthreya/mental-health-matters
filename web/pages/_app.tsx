import { extendTheme, NativeBaseProvider } from "native-base";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import React from "react";
import { useRouter } from "next/router";
import ProtectedRoute from "../components/ProtectedRoute";
import { AuthContextProvider } from "../hooks/auth";

const noAuthRequired = [
    "/",
    "/login",
    "/signup",
    "/about",
    "/blogs",
    "/contact",
    "/talktoexperts",
];

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    return (
      <ChakraProvider theme={theme}>
        <NativeBaseProvider>
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
      </ChakraProvider>
    );
}

export default MyApp;

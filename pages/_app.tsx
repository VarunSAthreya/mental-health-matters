import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import ProtectedRoute from "../components/ProtectedRoute";
import "../css/global.css";
import { AuthContextProvider } from "../hooks/auth";
import theme from "../styles/theme";

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
        <>
            <Head>
                <title>Mental Health Matters</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
                <meta
                    name="description"
                    content="Mental Health Matters is a mental health platform that helps you connect with people who are experiencing mental health issues."
                />
                <meta name="robots" content="all" />
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <ChakraProvider theme={theme}>
                <AuthContextProvider>
                    {noAuthRequired.includes(router.pathname) ? (
                        <Component {...pageProps} />
                    ) : (
                        <ProtectedRoute>
                            <Component {...pageProps} />
                        </ProtectedRoute>
                    )}
                </AuthContextProvider>
            </ChakraProvider>
        </>
    );
}

export default MyApp;

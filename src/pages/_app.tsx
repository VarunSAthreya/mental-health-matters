// src/pages/_app.tsx
import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
import type { AppType } from 'next/dist/shared/lib/utils';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ProtectedRoute from '../components/ProtectedRoute';
import '../styles/globals.css';
import theme from '../styles/theme';
import { trpc } from '../utils/trpc';

const noAuthRequired = [
    '/',
    '/login',
    '/signup',
    '/about',
    '/blogs',
    '/contact',
    '/talktoexperts',
];

const MyApp: AppType = ({ Component, pageProps }) => {
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

            <SessionProvider session={pageProps.session}>
                <ChakraProvider theme={theme}>
                    {/* <AuthContextProvider> */}
                    {noAuthRequired.includes(router.pathname) ? (
                        <Component {...pageProps} />
                    ) : (
                        <ProtectedRoute>
                            <Component {...pageProps} />
                        </ProtectedRoute>
                    )}
                    {/* </AuthContextProvider> */}
                </ChakraProvider>
            </SessionProvider>
        </>
    );
};

export default trpc.withTRPC(MyApp);

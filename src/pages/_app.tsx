// src/pages/_app.tsx
import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
import type { AppType } from 'next/dist/shared/lib/utils';
import Head from 'next/head';
import AuthWrapper from '../components/Auth/AuthWrapper';
import '../styles/globals.css';
import theme from '../styles/theme';
import { trpc } from '../utils/trpc';

const MyApp: AppType = ({ Component, pageProps }) => {
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
                    <AuthWrapper>
                        <Component {...pageProps} />
                    </AuthWrapper>
                </ChakraProvider>
            </SessionProvider>
        </>
    );
};

export default trpc.withTRPC(MyApp);

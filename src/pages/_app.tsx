// src/pages/_app.tsx
import { ChakraProvider } from '@chakra-ui/react';
import { withTRPC } from '@trpc/next';
import { SessionProvider } from 'next-auth/react';
import type { AppType } from 'next/dist/shared/lib/utils';
import Head from 'next/head';
import superjson from 'superjson';
import AuthWrapper from '../components/Auth/AuthWrapper';
import type { AppRouter } from '../server/router';
import '../styles/globals.css';
import theme from '../styles/theme';

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

const getBaseUrl = () => {
    if (typeof window !== 'undefined') {
        return '';
    }
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url

    return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export default withTRPC<AppRouter>({
    config({ ctx }) {
        /**
         * If you want to use SSR, you need to use the server's full URL
         * @link https://trpc.io/docs/ssr
         */
        const url = `${getBaseUrl()}/api/trpc`;

        return {
            url,
            transformer: superjson,
            /**
             * @link https://react-query.tanstack.com/reference/QueryClient
             */
            // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
        };
    },
    /**
     * @link https://trpc.io/docs/ssr
     */
    ssr: false,
})(MyApp);

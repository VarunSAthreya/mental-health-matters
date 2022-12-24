// src/pages/_app.tsx
import { ChakraProvider } from '@chakra-ui/react';
import { httpBatchLink } from '@trpc/client/links/httpBatchLink';
import { loggerLink } from '@trpc/client/links/loggerLink';
import { withTRPC } from '@trpc/next';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import superjson from 'superjson';
import AuthWrapper from '../components/Auth/AuthWrapper';
import type { AppRouter } from '../server/router';
import '../styles/globals.css';
import theme from '../styles/theme';

const MyApp = ({
    Component,
    pageProps,
}: AppProps<{
    session: Session;
}>) => {
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

const getBaseUrl = (): string => {
    if (typeof window !== 'undefined') {
        return '';
    }
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url

    return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export default withTRPC<AppRouter>({
    config({ ctx }) {
        const links = [
            loggerLink(),
            httpBatchLink({
                maxBatchSize: 10,
                url: `${getBaseUrl()}/api/trpc`,
            }),
        ];

        return {
            queryClientConfig: {
                defaultOptions: {
                    queries: {
                        staleTime: 60,
                    },
                },
            },
            headers() {
                if (ctx?.req) {
                    return {
                        ...ctx.req.headers,
                        'x-ssr': '1',
                    };
                }
                return {};
            },
            links,
            transformer: superjson,
        };
    },
    ssr: false,
})(MyApp);

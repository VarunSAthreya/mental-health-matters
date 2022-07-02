import { ChakraProvider } from '@chakra-ui/react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import '../css/global.css';

const App: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
    return (
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    );
};

export default App;

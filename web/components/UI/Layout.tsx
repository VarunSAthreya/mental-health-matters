import Head from 'next/head';
import React, { FunctionComponent, ReactNode } from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../Navigation/NavBar';

type Props = {
    children: ReactNode | ReactNode[];
    title: string;
};

const Layout: FunctionComponent<Props> = ({ children, title }: Props) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>
            <NavBar />
            {children}
            <Footer />
        </>
    );
};

export default Layout;

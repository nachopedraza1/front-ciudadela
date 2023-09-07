import { FC, ReactNode } from 'react';
import Head from "next/head";

import { Footer, Navbar } from '@/components/ui';

interface Props {
    title?: string,
    description?: string,
    children: ReactNode;
}

export const MainLayout: FC<Props> = ({ title, description, children }) => {

    return (
        <>
            <Head>
                <title>{title || 'Inicio | Rick and Morty'}</title>
                <meta name="og:title" content={title} />
                <meta name="description" content={description || 'Rick and Morty en ciudadela.eu'} />
                <meta name="og:description" content={description || 'Rick and Morty en ciudadela.eu'} />
                <meta name="og:image" content="/favicon.png" />
            </Head>


            <Navbar />

            <main>
                {children}
            </main>

            <Footer />
        </>
    )
}

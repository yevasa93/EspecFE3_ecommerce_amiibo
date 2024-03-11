import Head from "next/head";
import React from "react";

interface LayoutProps {
    title: string;
    description: string;
    keywords?: string;
    children: React.ReactNode;
}

export default function LayoutLogin({children, title, description, keywords}: LayoutProps){
    return(
        <>
        <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <meta name="keywords" content={keywords}/>
                <meta name="viewport" content="width-device-width, initial-scale=1.0"/>
                <link rel="shortcut icon" href="/next.svg" type="image/x-icon"/>
            </Head>
            <main className="flex items-center justify-center h-screen">
                {children}
            </main>
        </>            
    )
}
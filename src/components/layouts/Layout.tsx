import Head from "next/head";
import React from "react";
import Navbar from "../common/navbar/Navbar";

interface LayautProps {
    title: string;
    description: string;
    keywords?: string;
    children: React.ReactNode;
}

export default function Layout({children, title, description, keywords}: LayautProps){
    return(
        <>
        <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <meta name="keywords" content={keywords}/>
                <meta name="viewport" content="width-device-width, initial-scale=1.0"/>
                <link rel="shortcut icon" href="/next.svg" type="image/x-icon"/>
            </Head>
            <Navbar/>
            <main>
                {children}
            </main>
        </>            
    )
}